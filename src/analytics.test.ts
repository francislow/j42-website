import type * as Analytics from "./analytics";

const originalLocation = window.location;
const originalEnvironment = process.env.NODE_ENV;
let analytics: typeof Analytics;
let reload: jest.Mock;

beforeEach(() => {
  jest.resetModules();
  localStorage.clear();
  document.head.innerHTML = "";
  document.cookie = "_ga=; Max-Age=0; Path=/";
  delete window.gtag;
  delete window.dataLayer;
  reload = jest.fn();
  Object.defineProperty(window, "location", {
    configurable: true,
    value: { hostname: "play.thejourney42.com", reload },
  });
  Object.assign(process.env, { NODE_ENV: "production" });
  analytics = require("./analytics");
});

afterAll(() => {
  Object.defineProperty(window, "location", {
    configurable: true,
    value: originalLocation,
  });
  Object.assign(process.env, { NODE_ENV: originalEnvironment });
});

function commands() {
  return (window.dataLayer || []).map((entry) =>
    Array.from(entry as ArrayLike<unknown>),
  );
}

test("production loads exactly one tag automatically, with advertising disabled", () => {
  analytics.startAnalytics();
  analytics.startAnalytics();
  expect(document.querySelectorAll("#j42-google-tag")).toHaveLength(1);
  expect(commands()[0]).toEqual(["consent", "default", {
    ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied",
  }]);
  expect(commands().filter((command) => command[0] === "config")).toHaveLength(1);
  expect(commands().some((command) => command[0] === "consent" && command[1] === "update")).toBe(false);
});

test("store events include the store and button placement", () => {
  analytics.startAnalytics();
  for (const placement of ["hero", "download", "demo"] as const) {
    for (const store of ["app_store", "google_play"] as const) {
      analytics.trackStoreClick(store, placement);
      expect(commands().slice(-1)[0]).toEqual([
        "event",
        "store_click",
        {
          store,
          placement,
          send_to: analytics.MEASUREMENT_ID,
          transport_type: "beacon",
        },
      ]);
    }
  }
});

test("existing analytics rejections remain respected without showing a banner", () => {
  localStorage.setItem("j42-analytics-consent-v1", "rejected");
  analytics.startAnalytics();
  analytics.trackStoreClick("app_store", "hero");
  expect(document.querySelector("#j42-google-tag")).toBeNull();
  expect(window.dataLayer).toBeUndefined();
});

test("store clicks before initialization do not send events", () => {
  analytics.trackStoreClick("google_play", "download");
  expect(window.dataLayer).toBeUndefined();
});

test("development and preview hosts never send data", () => {
  Object.assign(process.env, { NODE_ENV: "development" });
  analytics.startAnalytics();
  expect(window.dataLayer).toBeUndefined();
  Object.assign(process.env, { NODE_ENV: "production" });
  Object.defineProperty(window, "location", {
    configurable: true,
    value: { hostname: "localhost", reload },
  });
  analytics.startAnalytics();
  analytics.trackStoreClick("app_store", "demo");
  expect(window.dataLayer).toBeUndefined();
});
