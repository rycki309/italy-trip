# Rycki + Dennis — Italy 2026

Preview-baseline rebuild for the Italy trip PWA.

## Design baseline
This build intentionally follows the approved 15-screen preview structure:
Home · Rome · Florence · Work Stay · Packing · More · Italian Phrases · Property Map & Photos · Nearby Essentials · Transportation Phrases · Navigate · Currency Converter · Bookings & Tickets · Offline Access · Emergency Info.

## Data / privacy
- Reuses the existing `italy2026-v2-user` localStorage key so existing device progress can carry forward.
- Private confirmation numbers are not included in the public source.
- Core trip data and phrase data are bundled for offline use.
- Apple Maps is deliberately opened only when the user taps Navigate/search actions.

## Deploy
Upload the contents of this ZIP to the GitHub Pages `main` branch root, replacing the matching files. Wait for Pages deployment to finish, then open the website in Safari first before checking the installed Home Screen app.
