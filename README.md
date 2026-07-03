# Gold Price Mauritius

An installable mobile web app (PWA) that shows a live gold price forecast converted to Mauritian Rupees, calibrated against local retail rates.

## Features

- Live XAU/USD spot price + USD/MUR exchange rate, fetched client-side on every open
- Calibrated Mauritius retail estimate (local premium over raw spot conversion — import duty, refining, dealer margin), adjustable with a slider and saved on-device
- 24K, 22K, and 18K per-gram pricing
- Support/resistance levels and a daily market-bias summary (bullish/neutral/bearish)
- Installable via "Add to Home screen" on Android/iOS Chrome — works offline with cached fallback data
- Market commentary + fallback prices refreshed automatically once a day by a scheduled research task

## Live demo

Once deployed via GitHub Pages: `https://<your-username>.github.io/gold-mauritius-app/`

## Local development

No build step — it's a static site. Just open `index.html` in a browser, or serve the folder with any static file server:

```bash
python3 -m http.server 8080
```

## Deploying

Push to `main` — the included GitHub Actions workflow (`.github/workflows/pages.yml`) auto-deploys to GitHub Pages on every push. One-time setup: in the repo Settings → Pages, set **Source** to **GitHub Actions**.

See `PUBLISHING_GUIDE.md` for the full walkthrough, including how to generate a downloadable/sideloadable Android APK via [PWABuilder](https://www.pwabuilder.com) and — eventually — publish to the Google Play Store.

## Disclaimer

AI-generated research. Not financial advice.
