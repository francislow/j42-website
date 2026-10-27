// GitHub Pages serves these physical entries for direct visits and refreshes.
// Page content lives in src/pages; each entry loads the same React application.
const fs = require("node:fs");
const path = require("node:path");
const metadata = require("../src/pages/metadata.json");

const buildDirectory = path.resolve(__dirname, "../build");
const template = fs.readFileSync(path.join(buildDirectory, "index.html"), "utf8");
const escapeAttribute = (value) => value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

for (const [slug, page] of Object.entries(metadata)) {
  const title = escapeAttribute(page.title);
  const description = escapeAttribute(page.description);
  const url = `https://play.thejourney42.com/${slug}/`;
  const html = template
    .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
    .replace(/(<meta name="description" content=")[^"]*("\s*\/?\s*>)/, `$1${description}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*("\s*\/?\s*>)/, `$1${title}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*("\s*\/?\s*>)/, `$1${description}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*("\s*\/?\s*>)/, `$1${url}$2`)
    .replace("</head>", '<meta name="robots" content="noindex,follow" /></head>');
  fs.mkdirSync(path.join(buildDirectory, slug), { recursive: true });
  fs.writeFileSync(path.join(buildDirectory, slug, "index.html"), html);
  console.log(`Created /${slug}/index.html`);
}
