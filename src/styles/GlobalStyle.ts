import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --blue: #6DA5F4;
    --blue-dark: #1257B8;
    --blue-deep: #093066;
    --blue-pale: #eef5ff;
    --yellow: #FFDA10;
    --yellow-pale: #FFF6C5;
    --ink: #10223c;
    --muted: #60708a;
    --white: #ffffff;
  }

  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
  }
  body {
    margin: 0;
    color: var(--ink);
    background: #fff;
    font-family: "Raleway", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  button, a { font: inherit; }
  a { color: inherit; }
  ::selection { background: var(--yellow); color: var(--blue-deep); }
`;

export default GlobalStyle;
