# The Pynchon Atlas — Build v4

All 78 expanded narratives are included. Structural Reading and Why This Chapter Matters are suppressed. The callout design is reserved for future unlabeled chapter quotations. The Characters section contains short profiles only in the chapter of first appearance.

# The Pynchon Atlas — Mason & Dixon

A responsive, static-first reader prototype.

## Run locally

From this folder:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Features

- 78-chapter browser organized by the novel's three parts
- Full-text search across chapter metadata and available structured content
- Part filters
- Bookmarks
- Recently viewed chapters
- Private per-chapter notes stored in browser localStorage
- Light and dark modes
- Previous/next navigation
- Installable web-app manifest and offline service worker

## Content status

The complete 78-chapter architecture and searchable metadata are loaded. A representative set of chapters includes longer structured entries; the remaining chapters use concise structured summaries and are ready for progressive replacement with the full expanded corpus.


Author credit: Pépé d’Escaubitte.

## Expanded narrative corpus
This build contains distinct, chapter-specific Overview and Expanded Narrative content for all 78 chapters. The search index includes both fields.
