# Private Italy Vault — connected configuration

The OAuth Web Client ID and Google spreadsheet ID are prefilled (neither is a secret). The private Sheet is read through Google Sheets API only after a Google OAuth token is granted.

Tab: 🔐 App Private Data
Columns: A Category, B Key, C Label, D Private Value, E Notes

Fill values in the Google Sheet before syncing. Example: A2 Wi-Fi; B2 nerbona_main_password; C2 Nerbona main Wi-Fi password; D2 [enter password privately]. Do not commit passwords into GitHub.

Upload the contents of italy-2026 to the same GitHub Pages directory as index.html. Open https://rycki309.github.io/italy-trip/private.html and verify sign-in, sync, lock, offline unlock. Never publish private data in the repository.

CAUTION: this build has not been browser-tested; don't assume it works offline until verified on iPhone. Google OAuth in Testing mode may require reauthorization after 7 days.
