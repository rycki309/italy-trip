/* Italy 2026 restaurant guidance. Reservation links live in Bookings only. */
const RESTAURANT_GUIDE={
 'bere':{level:'walkin',label:'🟢 Walk-in planned',date:'Oct 28',note:'Casual arrival-day stop; no advance booking planned. Seating may vary.',site:'https://www.trapizzino.it/en/trapizzino/trapizzino-roma-piazza-risorgimento/'},
 'mache':{level:'walkin',label:'🟢 Walk-in only',date:'Oct 29 (optional)',note:'No reservations. Small pub; seating is not guaranteed.',site:'https://www.football-pub.com/'},
 'open-baladin':{level:'reserve',label:'🔴 NEEDS RESERVATION',date:'Oct 30 · target 6–6:30 PM · 2 people',note:'Reserve a comfortable seated dinner for two. Not yet booked.',site:'https://pubs.baladin.it/en/restaurant-craft-beer-hamburger/via-degli-specchi-6-roma/',reserve:'https://www.sevenrooms.com/explore/openbaladinroma/reservations/create/search/'},
 'rione':{level:'reserve',label:'🔴 NEEDS RESERVATION',date:'Oct 31 · target ~7 PM · 2 people',note:'Reserve a table for two. Not yet booked.',site:'https://www.rionefirenze.com/',reserve:'https://www.rionefirenze.com/'},
 'archea':{level:'optional',label:'🟡 Casual stop · booking unconfirmed',date:'Nov 1 (optional)',note:'No confirmed online booking process. Check directly if a seat is essential.',site:'https://www.archeapub.com/'},
 'chianti-brew':{level:'optional',label:'🟡 Reserve if choosing it for dinner',date:'Flexible backup',note:'Not a fixed itinerary booking.',site:'https://chiantibrewfighters.it/pub-firenze-birra-artigianale/'},
 'alibi':{level:'optional',label:'⚪ Booking policy unverified',date:'Flexible backup',note:'Do not assume a reservation is available.'}
};
function restaurantLink(label,url){return url?`<a class="btn gray" style="text-decoration:none;display:flex;align-items:center;justify-content:center" href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(label)} ↗</a>`:''}
function restaurantSaved(id){return !!(user.restaurantReservations&&user.restaurantReservations[id])}
function restaurantToggle(id){user.restaurantReservations ||= {};user.restaurantReservations[id]=!user.restaurantReservations[id];save()}
function restaurantCard(id){const p=place(id),r=RESTAURANT_GUIDE[id];if(!r||!p)return '';return `<section class="booking-card"><h3>${esc(p.name)}</h3><div class="status">${r.label}</div><span class="date">🗓️ ${esc(r.date)}</span><p>${esc(r.note)}</p><div class="actions">${restaurantLink('🌐 Website',r.site)}${r.reserve?restaurantLink('📅 Reserve Table',r.reserve):''}</div>${r.level==='reserve'?`<label class="booking-confirm"><input type="checkbox" ${restaurantSaved(id)?'checked':''} onchange="restaurantToggle('${id}')"><span>Reservation confirmed — mark only after you actually reserve.</span></label>`:''}</section>`}
const baseBookings=openBookings;
openBookings=function(){
 const a=[...ITALY_TRIP_LISTS.bookingStatuses,...user.customBookings];
 modal(`<button class="close" onclick="closeModal()">×</button><h2>🎟️ Bookings</h2><p class="muted">Activities, tickets and dinner reservations. External booking links need internet.</p>${a.map(x=>`<div class="row"><span class="grow"><b>${esc(x.name)}</b><small>${esc(x.date||'')} · ${esc(x.label||'🟡 Added')}</small></span></div>`).join('')}<h2 style="margin-top:20px">🍽️ Dinner & Restaurant Reservations</h2>${['open-baladin','rione','bere','mache','archea','chianti-brew','alibi'].map(restaurantCard).join('')}<button class="add" onclick="addForm('booking')">＋ Add Booking</button>`)
};
/* Food & Beer remains discovery/reference only; links and reservation controls stay in Bookings. */
