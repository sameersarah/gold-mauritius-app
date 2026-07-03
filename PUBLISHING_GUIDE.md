# Gold Price Mauritius — What I built, and what's left for you

## What's ready right now (free, no account needed)

`gold-mauritius-app/index.html` is a self-contained mobile web app (PWA). Right now, on your phone:

1. Copy the `gold-mauritius-app` folder onto your phone, or host it (see below), and open `index.html` in Chrome on Android.
2. Tap the Chrome menu → **Add to Home screen**.
3. It installs with an icon, opens full-screen (no browser bar), and works offline using cached fallback numbers. Every time you open it, it fetches live gold price + USD/MUR rate itself.

This already satisfies "an app on my phone" for **$0** — no Play Store needed.

## Why it isn't in the Play Store yet — the honest version

Google Play publishing requires three things I can't do on your behalf, by design (account creation, payments, and identity verification are things I never do for you):

1. **A Google Play Developer account** — one-time **$25 USD fee**, paid by you with your own card. Not free, not recurring. (I know you asked for free — this fee is Google's, not optional for Play Store distribution.)
2. **Public hosting for the app** — Play Store apps built this way (called a "Trusted Web Activity") need the web app live at a real HTTPS URL. It isn't currently hosted anywhere public.
3. **You clicking "Publish"** — the actual submission has to happen in your Google account.

## Quick test APK (do this first — 5-10 minutes, all free)

You don't need the $25 Play Console fee just to test the app as an APK on your phone. Do this:

1. **Create a free GitHub account** (skip if you have one): [github.com/signup](https://github.com/signup)
2. **Create a new repository** — name it e.g. `gold-mauritius-app`, keep it Public.
3. **Upload the files** — on the repo page, click "Add file" → "Upload files", then drag in everything from your `gold-mauritius-app` folder (`index.html`, `manifest.json`, `sw.js`, and the `icons` folder). Commit.
4. **Turn on GitHub Pages** — go to repo Settings → Pages → under "Build and deployment", set Source to "Deploy from a branch", Branch: `main` / `(root)`, Save. Wait ~1 minute.
5. **Grab your URL** — it'll be `https://<your-username>.github.io/gold-mauritius-app/`. Open it to confirm the app loads.
6. **Go to [pwabuilder.com](https://www.pwabuilder.com)**, paste that URL, click "Start". Once it scores the app, click **Package for Stores → Android**, keep the default options, and click **Generate**.
7. **Download the zip** it gives you. Inside is a `.apk` file (for testing/sideloading — install directly) and a `.aab` file (for Play Store submission later).
8. **Install on your phone**: transfer the `.apk` to your Android phone (email it to yourself, Google Drive, USB), tap it, allow "install from unknown sources" if prompted, and open it. That's your test app.

This whole thing costs nothing — the $25 is only needed later, for Step 3 below, when/if you want it live on the Play Store.

## The path to actually publish it (all free except Google's $25)

**