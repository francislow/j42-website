export const MEASUREMENT_ID = "G-LTTYK12J3N";
type Gtag = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
  }
}

let started = false;

function previouslyRejectedAnalytics() {
  try {
    return localStorage.getItem("j42-analytics-consent-v1") === "rejected";
  } catch {
    return false;
  }
}

function productionSite() {
  return (
    process.env.NODE_ENV === "production" &&
    window.location.hostname === "play.thejourney42.com"
  );
}

export function startAnalytics() {
  if (!productionSite() || previouslyRejectedAnalytics() || started) return;
  started = true;
  (window as unknown as Record<string, unknown>)[
    `ga-disable-${MEASUREMENT_ID}`
  ] = false;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer!.push(arguments);
  };
  const gtag = window.gtag;
  gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  gtag("js", new Date());
  gtag("config", MEASUREMENT_ID, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
    cookie_domain: "play.thejourney42.com",
    cookie_expires: 60 * 60 * 24 * 180,
  });
  const script = document.createElement("script");
  script.id = "j42-google-tag";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  document.head.appendChild(script);
}

export function trackStoreClick(
  store: "app_store" | "google_play",
  placement: "hero" | "download" | "demo",
) {
  if (!productionSite() || previouslyRejectedAnalytics() || !started) return;
  window.gtag?.("event", "store_click", {
    store,
    placement,
    send_to: MEASUREMENT_ID,
    transport_type: "beacon",
  });
}
