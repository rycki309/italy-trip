/* Final approved preview behavior layer. Keeps italy2026-v2-user local storage intact. */
(function(){
  const oldDashboard=dashboard;
  dashboard=function(){
    let days=Math.max(0,Math.ceil((new Date('2026-10-28T12:00')-new Date(today()+'T12:00'))/86400000));
    let ta=taskAll(),td=count(user.tasks,'t-',ta.length),pa=packAll(),pd=count(user.packing,'p-',pa.length);
    plansContent.innerHTML=`<div class="hero"><h1>Italy 🇮🇹</h1><p>Rycki + Dennis · Oct 28 – Nov 7, 2026</p></div>
    <div class="stats"><div class="stat"><b>${pd}/${pa.length}</b><small>Packed</small></div><div class="stat"><b>${days}</b><small>Days to go</small></div><div class="stat"><b>${td}/${ta.length}</b><small>Prep completed</small></div></div>
    <div class="card pink"><div class="pad"><div class="title">🔥 Before Italy <span class="right" onclick="showScreen('lists')">See all ›</span></div>${ta.map((x,i)=>({x,i})).filter(z=>!user.tasks['t-'+z.i]).slice(0,3).map(z=>taskRow(z.x,z.i)).join('')}<small style="color:#a94f67">${ta.length-td} things left</small></div></div>
    <div class="tiles"><div class="tile" onclick="showScreen('lists')">🧳 <b>Packing</b><small>${pd} of ${pa.length} packed</small><div class="progress"><i style="width:${pa.length?pd/pa.length*100:0}%"></i></div></div><div class="tile" onclick="openBookings()">🎟️ <b>Bookings</b><small>Tickets & reservations</small></div></div>
    <div class="card"><div class="pad"><div class="title">🗺️ Your Trip</div>${ITALY_TRIP_ITINERARY.map(d=>`<div class="preview"><i class="dot"></i><b>${new Date(d.date+'T12:00').toLocaleDateString('en-US',{month:'short',day:'numeric'})}</b><span>${esc(d.city)} — ${esc(d.title)}</span></div>`).join('')}<button class="btn blue full" onclick="previewTrip=true;selectedDate='2026-10-28';renderPlans()">Preview any day →</button></div></div>`;
  };
  document.querySelectorAll('.tabs button').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.tabs button').forEach(x=>x.removeAttribute('aria-current'));b.setAttribute('aria-current','page')}));
  renderPlans();
})();
