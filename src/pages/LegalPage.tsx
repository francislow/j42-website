import React, { useEffect } from "react";
import styled from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import metadata from "./metadata.json";

const TopBar = styled.div`
  background: var(--blue);
  padding: 24px 0;
  > nav {
    width: min(1160px, calc(100% - 40px));
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }
  a {
    text-decoration: none;
  }
  .brand {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    color: var(--blue-deep);
    font-size: 21px;
    font-weight: 900;
    letter-spacing: -0.5px;
  }
  img {
    width: 42px;
    height: 42px;
    filter: drop-shadow(2px 3px 0 rgba(9, 48, 102, 0.75));
  }
  .home {
    padding: 11px 18px;
    color: var(--blue-deep);
    background: var(--yellow);
    border: 2px solid var(--blue-deep);
    border-radius: 999px;
    box-shadow: 3px 3px 0 var(--blue-deep);
    font-size: 14px;
    font-weight: 800;
  }
  a:focus-visible {
    outline: 3px solid var(--blue-deep);
    outline-offset: 5px;
  }
  @media (max-width: 420px) {
    .brand {
      font-size: 17px;
      gap: 6px;
    }
    .home {
      padding: 10px 12px;
      font-size: 12px;
    }
  }
`;

const Content = styled.main`
  width: min(1000px, calc(100% - 40px));
  margin: 0 auto;
  padding: 44px 0 24px;
  overflow-wrap: anywhere;
  font-size: 16px;
  line-height: 1.85;

  > header {
    padding: clamp(24px, 5vw, 52px);
    background: var(--blue-pale);
    border: 2px solid var(--blue-deep);
    border-radius: 28px;
    box-shadow: 7px 7px 0 var(--yellow);
  }
  h1,
  h2,
  h3 {
    color: var(--blue-deep);
    line-height: 1.2;
  }
  h1 {
    max-width: 760px;
    margin: 0 0 22px;
    font-size: clamp(34px, 6vw, 62px);
    font-weight: 900;
    letter-spacing: -2px;
  }
  .meta {
    display: inline-block;
    margin: 0 0 16px;
    padding: 6px 14px;
    background: var(--yellow-pale);
    border-radius: 999px;
    color: var(--blue-deep);
    font-size: 13px;
    line-height: 1.6;
  }
  header > p:last-child {
    margin-bottom: 0;
    padding-top: 20px;
    border-top: 1px solid #cedef4;
  }
  a {
    color: var(--blue-dark);
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 3px;
  }
  a:hover {
    text-decoration-thickness: 2px;
  }
  a:focus-visible {
    outline: 3px solid var(--blue-dark);
    outline-offset: 4px;
    border-radius: 3px;
  }
  > nav {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin: 36px 0 12px;
  }
  nav a {
    padding: 10px 18px;
    border: 2px solid #dbe6f5;
    border-radius: 999px;
    color: var(--blue-deep);
    font-size: 14px;
    font-weight: 800;
    text-decoration: none;
  }
  nav a:hover {
    background: var(--blue-pale);
    border-color: var(--blue-deep);
  }
  nav a[aria-current="page"] {
    background: var(--yellow);
    border-color: var(--blue-deep);
    box-shadow: 3px 3px 0 var(--blue-deep);
  }
  > hr {
    margin: 28px 0 0;
  }
  section {
    max-width: 760px;
    margin: 0 auto;
    padding: 36px 0;
    border-bottom: 1px solid #dbe6f5;
    scroll-margin-top: 24px;
  }
  h2 {
    margin: 0 0 22px;
    font-size: clamp(24px, 3vw, 30px);
    font-weight: 900;
    letter-spacing: -0.7px;
  }
  h3 {
    margin: 30px 0 14px;
    font-size: 19px;
    font-weight: 800;
    scroll-margin-top: 24px;
  }
  p {
    margin: 0 0 18px;
  }
  p:last-child,
  ul:last-child,
  ol:last-child {
    margin-bottom: 0;
  }
  strong {
    font-weight: 800;
  }
  ol,
  ul {
    padding-left: 24px;
    margin: 18px 0;
  }
  li {
    padding-left: 4px;
    margin-bottom: 12px;
  }
  li::marker {
    color: var(--blue-dark);
    font-weight: 800;
  }
  footer {
    max-width: 760px;
    margin: 0 auto;
    padding: 30px 0;
    color: var(--muted);
    font-size: 12px;
  }
  footer hr {
    display: none;
  }
  hr {
    border: 0;
    height: 1px;
    background: #dbe6f5;
  }
  @media (max-width: 600px) {
    width: calc(100% - 32px);
    padding-top: 24px;
    > header {
      border-radius: 22px;
      box-shadow: 5px 5px 0 var(--yellow);
    }
    h1 {
      letter-spacing: -1.2px;
    }
    > nav {
      gap: 10px;
      margin-top: 28px;
    }
    nav a {
      padding: 9px 12px;
      font-size: 12px;
    }
    section {
      padding: 28px 4px;
    }
  }
`;

export function LegalNavigation() {
  return (
    <nav aria-label="Legal pages">
      {(["terms-of-service", "privacy-policy", "my-data"] as const).map(
        (slug) => (
          <a
            key={slug}
            href={`/${slug}/`}
            aria-current={
              window.location.pathname.replace(/\/$/, "") === `/${slug}`
                ? "page"
                : undefined
            }
          >
            {metadata[slug].title.replace("J42 – ", "")}
          </a>
        ),
      )}
    </nav>
  );
}

export default function LegalPage({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const slug = window.location.pathname.replace(
      /^\/|\/$/g,
      "",
    ) as keyof typeof metadata;
    const page = metadata[slug];
    if (!page) return;
    document.title = page.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", page.description);
    // Production entries include this tag; also apply it during local development.
    let robots = document.querySelector('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement("meta");
      robots.setAttribute("name", "robots");
      document.head.appendChild(robots);
    }
    robots.setAttribute("content", "noindex,follow");
  }, []);

  return (
    <>
      <GlobalStyle />
      <TopBar>
        <nav aria-label="Main navigation">
          <a className="brand" href="/">
            <img src="/j42-website-icon-192.png" alt="" />
            Journey 42
          </a>
          <a className="home" href="/">
            Back to home ↗
          </a>
        </nav>
      </TopBar>
      <Content id="main-content">{children}</Content>
    </>
  );
}
