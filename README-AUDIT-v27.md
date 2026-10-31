# v27 audit notes — 31 October 2026

Audited v26 app source across all 42 package files (roughly 2,449 lines of text/code) for JavaScript parsing, local HTML references, service worker precache entries, date/itinerary place references, and duplicate activity IDs.

## Fixes
- Assigned new v27-specific activity identifiers to all 20 Florence Nov 1 stops to prevent stale old Nov 1 checklist completion marks being applied to different activities.
- Reworded Nov 2 early flight activity to emphasize packing the night before and checking confirmed taxi and departure time.
- Increased service worker cache name and index asset query versions to prompt installation of new JS and itinerary data.

## Checks passed
- ZIP integrity and source JS syntax.
- All local HTML script/style/image references exist.
- All service-worker listed local core/media assets exist.
- Every itinerary place ID resolves to a place entry.
- All itinerary activity IDs are unique.
- Nov 1 has 20 timed entries.
- Dennis guide still present in app source, with Florence, Paris, Detroit, Cleveland, customs, phrases and offline checklist.

## Not verified
- Browser test via localhost was blocked by runtime administrator; no iPhone or live GitHub test.
- Current airline flights, taxi booking, gates and boarding passes not externally confirmed.
- True offline function and private vault unlocking require testing on the actual installed app.
- The public app intentionally does not embed Dennis's private booking reference.

IMPORTANT: Upload whole v27 package, not v26, and retain device storage. Connect, refresh, then use Airplane Mode to check guide and map. Existing past itinerary checkmarks may need manual review.
