# Play Store release checklist — Gold Price Mauritius

## 1. You already have the signed AAB

The zip you downloaded from PWABuilder (the one with the working APK) also contains:
- `app-release-bundle.aab` — this is the file you upload to Play Console.
- `signing.keystore` (or similar name) — the key used to sign it.
- A text file with the keystore password, key alias, and key password (auto-generated).

**Critical — do this before anything else:** copy those three items (the `.aab`, the `.keystore` file, and the credentials text file) somewhere permanent and backed up (e.g. a folder in this project, a password manager, or cloud storage). If you ever lose the keystore, you will **not be able to publish updates to this app ever again** under the same listing — Google requires every update to be signed with the same key as the first upload. This is the single most common Play Store mistake, so don't skip it.

If you don't see a keystore file in that zip, let me know before you upload anything — we'll regenerate the package with an explicit "create new key" option and make sure it's saved this time.

## 2. Privacy policy — done

I've added `privacy.html` to the app (deployed automatically alongside everything else). Once you push, it'll be live at:
```
https://sameersarah.github.io/gold-mauritius-app/privacy.html
```
Play Console requires this URL in your store listing (App content → Privacy policy). It states plainly that the app collects no personal data — accurate, since it only calls two public read-only price APIs and stores your preferences locally on-device.

## 3. Play Console setup (your account, your login)

1. **Register** (one-time, $25 USD, paid by you): [play.google.com/console/signup](https://play.google.com/console/signup)
2. **Create app** → name "Gold MU" or "Gold Price Mauritius" → category: Finance (or Tools) → Free.
3. **App content section** (required before any release):
   - **Privacy policy**: paste the URL above.
   - **Data safety**: answer "No" to collecting/sharing user data — this app doesn't.
   - **Content rating questionnaire**: answer honestly; a price-display utility app will land in "Everyone."
   - **Target audience**: general/adult audience is fine — not designed for children.
   - **Ads**: declare "No, my app does not contain ads."
   - **Government apps / financial features**: you may be asked if the app provides financial advice — answer no, it's informational/reference pricing only (matches the in-app disclaimer already shown: "AI-generated research, not financial advice").
4. **App access**: since there's no login, declare "All functionality is available without special access."

## 4. Internal testing track (recommended before public release)

1. In Play Console: **Testing → Internal testing** → Create new release.
2. Upload `app-release-bundle.aab`.
3. Add release notes (e.g. "Initial release — live gold price forecast for Mauritius").
4. Add testers: add your own email (and anyone else you want testing) under the testers list — you'll get a shareable opt-in link.
5. Roll out, then install via that link on a test device to confirm it behaves the same as the sideloaded APK.
6. Once you're satisfied, promote the same release to Production (or run it through Closed/Open testing tracks first if you want a wider beta).

## 5. Before submitting to production

- Add at least 2 screenshots of the app (phone size) — I can help generate these from the live app if you want.
- Feature graphic (1024×500) and app icon (512×512, already have a version of this — I can resize the existing icon if needed).
- Short description (≤80 chars) and full description (≤4000 chars) — I can draft these.
- Re-read the [Play policy on financial apps and misleading claims](https://play.google.com/about/developer-content-policy/) — since this app shows price *estimates* with a disclaimer, keep that disclaimer visible (it already is, in the footer) and avoid language that implies guaranteed accuracy or investment advice.

---
Say the word if you want me to draft the store listing copy (short/full description, screenshot captions) — that's something I can do right now without needing your Play Console login.
