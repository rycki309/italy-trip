# Italy app update · October 20, 2026

Upload **all the files inside this ZIP** to the root of the existing GitHub repository, replacing matching files. Do not upload the ZIP itself or a containing folder. No private ticket PDFs, flight screenshots, or hotel documents are bundled.

## What changed
- Pastel navigation icon backgrounds and previously approved photo/header fixes.
- More → Travel Documents: encrypted PDF/image storage in IndexedDB, custom categories, view/move/delete, device-local offline use.
- More → Airport & Transfer Guides: built-in readable instructions and official airport website shortcuts. The external airport maps are NOT stored offline unless manually downloaded and added to Travel Documents.
- Updated service worker version to refresh offline code without touching the private vault.

## Critical limitations and testing
- **Documents do not sync** across devices. Add them separately to iPhone and Android.
- The document passphrase is separate from the Google Sheets vault session. Use a consistent passphrase if desired; do not forget it. No recovery exists.
- Files are encrypted before IndexedDB storage; file names, categories and dates are not encrypted.
- Upload the real tickets, flight and hotel screenshots **in the private wallet on each device**, never into GitHub.
- Open each file once, then test in airplane mode. On some iOS versions a PDF may download instead of opening in a new tab.
- Airport maps and routes may change; live maps require internet. No official terminal map PDFs are prepackaged.
- Existing user progress and vault are not intentionally cleared. Do not clear Safari website data or uninstall before making backups.
- Verify GitHub Pages deployment and iPhone/Android behavior before relying on it.

- More → Offline Access now includes a real cache/document/vault presence checker; always do a physical airplane-mode test as well.
- GFS Didot is selected when available on the device; fallback is offline serif. The font itself is not bundled.
