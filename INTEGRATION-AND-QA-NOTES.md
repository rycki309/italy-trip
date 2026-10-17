# Italy 2026 — Integrated App Handoff

## Status
The latest approved Work Stay package already included the main app sections. This integrated package preserves its screens and data, with a refreshed service-worker cache version.

## Included
Home, Rome, Florence, Work Stay, More, Packing, Italian Phrases, Navigate, itinerary, bookings, Nerbona pages, Nov 7 travel, and other in-app utilities.

## Verified
- All 8 JavaScript files pass Node syntax checks.
- All 29 named navigation routes are implemented in the app's render switch.
- All 16 static resources listed in the service worker are present.
- All script references in index.html exist.
- Manifest and app icon are present.

## Limitations / outstanding
- Browser navigation, layout, and service-worker runtime tests could not run: the Chromium sandbox blocks local and localhost navigation.
- Do not claim an actual iPhone install, online hosting, or offline behavior has been tested.
- Nearby Essentials still distinguishes nine address listings from other unverified guest-guide locations. Do not imply all 35 addresses were verified.
- The Nov 7 8:15 AM pickup is a suggested target, not a confirmed booking.
- The app contains property Wi-Fi credentials. KEEP THIS PACKAGE PRIVATE. Publishing this ZIP to a public repo or hosting it publicly would expose the credentials.
- To install as a PWA on iPhone, it must be hosted on a secure HTTPS origin; opening index.html from a ZIP or local file does not provide a full PWA installation/offline test.
- Saved progress uses localStorage; switching domains or devices does not automatically transfer it.

## Source
Italy-Work-Stay-Final-Handoff-Private.zip, itself based on the approved main-app WIP screens.

## Next QA before travel
1. Host securely on a private HTTPS site or a site with suitable access control.
2. On iPhone Safari, visit the hosted app, Add to Home Screen.
3. Test all five bottom tabs and Work subpages.
4. Test Packing and checklist persistence after closing/reopening.
5. Load all pages online, then test in Airplane Mode with Wi-Fi off.
6. Check that directions, phone, and WhatsApp actions behave as expected.
7. Confirm the airport pickup directly with the driver.
