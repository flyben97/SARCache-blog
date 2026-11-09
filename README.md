# SARCache research blog

**[Read the blog](https://flyben97.github.io/SARCache-blog/)** · [Paper](public/downloads/sarcache-paper.pdf) · [Supplement](public/downloads/sarcache-arxiv-supplement.pdf)

An interactive research article for **SARCache: Controlling Forecast Age in Diffusion Transformers**. The page includes prediction-policy explanations, audited speedup–fidelity measurements, image comparisons, and downloadable research materials.

## Develop

Requires Node.js 22.13 or later.

```bash
npm ci
npm run dev
```

## Build and deploy

```bash
npm run build
npm run preview
```

The build prerenders the article as static HTML and hydrates the interactive components in the browser. GitHub Actions deploys `dist/` to GitHub Pages on pushes to `main`. No server, database, account, or model inference is required to view the blog.

- `src/App.tsx`: article and interactive components
- `src/style.css`: responsive design
- `src/results.json`: all 25 audited operating points, including the original speedup column
- `public/media/`: manuscript figures and extracted comparison panels
- `public/downloads/`: manuscript, signed supplementary material, and CSV
- `CONTENT_SOURCES.json`: content provenance

The implementation repository is **coming soon**. The supplement uses a standard article layout and the manuscript author list. The manuscript is not presented as an accepted conference paper.
