Italy App v24 — Booking Access and Document Viewer (2026-10-27)

Changes from v23:
- Travel Documents: decrypt saved PDFs/photos into an in-app viewer with Close and Save/Share fallback, without changing IndexedDB schema, stored encrypted payloads, or passphrase derivation.
- Bookings: show unlocked private Sheet entries related to flights/hotels/confirmations in a dedicated searchable-by-eye panel, with Copy controls. Private values remain encrypted in the existing vault and are not bundled in public files.
- Flight guidance: actual confirmed Nov 7 Rycki legs and connection steps; outbound and Dennis return explicitly marked incomplete pending verification of private tickets. Gates/terminals are not invented.
- Tour updates: Pantheon Oct 29 at 12 PM; Colosseum Oct 30 at 11 AM, meet 10:40 AM. Original Colosseum voucher valid according to operator.
- Search and itinerary labels reflect new tour times. Existing activity IDs and all packing/progress definitions preserved.

SAFETY: Do not delete/reinstall the Home Screen app or clear Safari data. The update does not modify the private vault, IndexedDB document store, or progress migration. Make a separate secure copy of essential tickets before updating. Safari and standalone iPhone Home Screen app may have separate local storage.

TEST LIMITATION: Automated Chromium navigation to local HTTP is blocked by this environment. Source validation and package integrity checks do not establish real-device success. Test the in-app document viewer and unlocked confirmations on the actual iPhone before relying on them offline.
