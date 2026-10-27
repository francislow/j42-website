How to deploy to production

1. `npm run build` in master
2. Switch branch to `gh_pages`
3. Copy all content in /build folder into root
4. git push

The standalone pages live in `src/pages/` and are selected by their URL in
`src/App.tsx`: `/my-data/`, `/privacy-policy/`, and `/terms-of-service/`.
Their shared layout and navigation are in `LegalPage.tsx`.

`npm run build` also runs `scripts/build-page-entries.cjs` to create a physical
`index.html` for each page in the build output. Keep this postbuild step when
deploying to GitHub Pages so direct links and refreshes work. Each entry loads
the React app using the root asset URLs configured by `homepage` in package.json.

Edit page content in `src/pages/`; the original sibling folders are not build
inputs. Page titles and descriptions are defined in `src/pages/metadata.json`.
