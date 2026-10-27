(() => {
  'use strict';

  const KEY = 'italy2026-v2-user';
  const APP_VERSION = '2026-10-20-travel-wallet-v11';
  const DEFAULT_USER = {
    activities:{}, tasks:{}, packing:{}, customTasks:[], customPacking:[], customBookings:[],
    shopping:[], favorites:{}, remembered:[], easyDay:false, exchangeRate:1.17,
    privateInfo:{}, offlineChecks:{}, phraseFavorites:{}, appSettings:{textSize:'normal'}
  };

  const WORK = {
    name:'Agriturismo Nerbona',
    address:"Località Nerbona, 53031 Colle di Val d'Elsa SI, Italy",
    email:'info@nerbona.com', phone:'+390577971066', whatsapp:'+393489038897',
    checkin:'4 PM', checkout:'10 AM', quiet:'2–4 PM and 10 PM–8 AM',
    wifi:['Nerbona Guest','La Casina wifi'],
    official:'https://sites.google.com/view/nerbona-informations-english/home-page?pli=1&authuser=0'
  };

  const WORK_SCHEDULE = [
    ['Mon · Nov 2','Kick-off meetings · dinner cooked at the house · game night'],
    ['Tue · Nov 3','Team meetings · dinner out'],
    ['Wed · Nov 4','Team meetings · catered dinner at the house'],
    ['Thu · Nov 5','Field Trip Day · olive mill and/or vineyard · dinner out'],
    ['Fri · Nov 6','Off day & travel day'],
    ['Sat · Nov 7','Checkout at 10 AM · Rycki flies home']
  ];

  const ESSENTIALS = [
    ['Groceries','🛒','Bar Quartaria',2.5,'Small café and basic groceries','Bar Quartaria, Colle di Val d’Elsa, Italy'],
    ['Groceries','🥬','Le Primizie',5,'Fruit and vegetables','Le Primizie, Casole d’Elsa, Italy'],
    ['Groceries','🛒','Consorzio Agrario di Siena',5,'Small supermarket','Consorzio Agrario di Siena, Casole d’Elsa, Italy'],
    ['Groceries','🛒','Alimentari Sandra',9.5,'Local food shop','Alimentari Sandra, Colle di Val d’Elsa, Italy'],
    ['Groceries','🛒','Conad',9.5,'Supermarket','Via Masson angolo Via Livini SNC, 53034 Colle di Val d’Elsa SI, Italy'],
    ['Groceries','🛒','Eurospin',10,'Supermarket','Eurospin, Colle di Val d’Elsa, Italy'],
    ['Groceries','🛒','Famila Market',10,'Supermarket','Via dei Mille 46, 53034 Colle di Val d’Elsa SI, Italy'],
    ['Groceries','🛒','Coop',10.5,'Supermarket','Coop, Colle di Val d’Elsa, Italy'],
    ['Groceries','🛒','Coop San Gimignano',16,'Supermarket','Coop, San Gimignano, Italy'],
    ['Pharmacies','💊','Farmacia Mazzei Casagli',5,'Casole d’Elsa','Via Roma 48, 53031 Casole d’Elsa SI, Italy'],
    ['Pharmacies','💊','Farmacia Casagli',8,'Colle Alta','Via del Campana 12, 53034 Colle di Val d’Elsa SI, Italy'],
    ['Pharmacies','💊','Farmacia Comunale 1',10,'Via Don Giovanni Minzoni 69 · Colle di Val d’Elsa','Farmacia Comunale 1, Via Don Giovanni Minzoni 69, Colle di Val d’Elsa, Italy'],
    ['Pharmacies','💊','Farmacia Comunale 2',10,'Via Masson 28 · Colle di Val d’Elsa','Farmacia Comunale 2, Via Masson 28, Colle di Val d’Elsa, Italy'],
    ['Pharmacies','💊','Farmacia Pacini Sas',10,'Colle di Val d’Elsa','Piazza Arnolfo di Cambio 15, 53034 Colle di Val d’Elsa SI, Italy'],
    ['Pharmacies','💊','Farmacia Sariolo',12,'Name as listed in guest guide · exact match unverified','Farmacia Sariolo, Colle di Val d’Elsa, Italy'],
    ['Pharmacies','💊','Farmacia Belvedere',15,'Listed in Nerbona guide','Strada Provinciale Colligiana 5, 53034 Colle di Val d’Elsa SI, Italy'],
    ['Restaurants','🍽️','Ristorante La Speranza',null,'Casual grilled meats · Colle di Val d’Elsa','Ristorante La Speranza, Colle di Val d’Elsa, Italy'],
    ['Restaurants','🍕','Pizzeria Il Porrina',5.5,'Casole d’Elsa','Pizzeria Il Porrina, Casole d’Elsa, Italy'],
    ['Restaurants','🍕','Pizzeria Le Stagioni',4.5,'Casole d’Elsa','Pizzeria Le Stagioni, Casole d’Elsa, Italy'],
    ['Restaurants','🍽️','Ristorante Il Castelletto',7.5,'Colle di Val d’Elsa','Ristorante Il Castelletto, Colle di Val d’Elsa, Italy'],
    ['Restaurants','🍽️','Osteria Caffè Casolani',5.5,'Casole d’Elsa','Osteria Caffè Casolani, Casole d’Elsa, Italy'],
    ['Restaurants','🍕','Ristorante Pizzeria Le Grazie',6.5,'Colle di Val d’Elsa','Ristorante Pizzeria Le Grazie, Colle di Val d’Elsa, Italy'],
    ['Restaurants','🍽️','Trattoria Bel Mi Colle',8.5,'Colle di Val d’Elsa','Via Giuseppe Garibaldi 56, 53034 Colle di Val d’Elsa SI, Italy'],
    ['Restaurants','🍽️','Ristorante Pizzeria I Tre Archi',14.5,'Colle di Val d’Elsa','Ristorante Pizzeria I Tre Archi, Colle di Val d’Elsa, Italy'],
    ['Restaurants','🍽️','Fattoria Il Pino',11.5,'Poggibonsi · reservation only, per property guide','Fattoria Il Pino, Poggibonsi, Italy'],
    ['Restaurants','🍽️','Ristorante L’Antica Trattoria',9.5,'Colle di Val d’Elsa','L’Antica Trattoria, Colle di Val d’Elsa, Italy'],
    ['Restaurants','🍽️','L’Oste di Borgo',null,'Colle di Val d’Elsa','L’Oste di Borgo, Colle di Val d’Elsa, Italy'],
    ['Restaurants','🍽️','Il Frantoio',null,'Colle di Val d’Elsa','Il Frantoio, Colle di Val d’Elsa, Italy'],
    ['Restaurants','🍽️','Bis Osteria',8,'Colle Alta','Via XX Settembre 50, 53034 Colle di Val d’Elsa SI, Italy'],
    ['Restaurants','🍽️','Ristorante Arnolfo',8,'Fine dining · confirm current booking details','Viale della Rimembranza 24, 53034 Colle di Val d’Elsa SI, Italy'],
    ['Post Offices','📮','Poste Italiane · Casole d’Elsa',5.5,'Post office · Casole d’Elsa','Ufficio Postale, Casole d’Elsa, Italy'],
    ['Post Offices','📮','Poste Italiane · Colle di Val d’Elsa',9,'Post office · approx. 8–10.5 km in guide','Ufficio Postale, Colle di Val d’Elsa, Italy'],
    ['ATMs','🏧','Monte dei Paschi di Siena',5.5,'Casole d’Elsa','Monte dei Paschi di Siena, Casole d’Elsa, Italy'],
    ['ATMs','🏧','Intesa Sanpaolo',9,'Colle di Val d’Elsa','Intesa Sanpaolo, Colle di Val d’Elsa, Italy'],
    ['ATMs','🏧','BPER Banca',9.5,'Colle di Val d’Elsa','BPER Banca, Colle di Val d’Elsa, Italy']
  ].map(([type,icon,name,km,note,address])=>({type,icon,name,km,distance:km===null?'Distance not listed':`${km} km (${(km*0.621371).toFixed(1)} mi)`,note,address,verifiedAddress: /(?:\bVia\b|\bViale\b|\bPiazza\b|\bStrada Provinciale\b)/.test(address)}));

  const RESTROOMS = [
    {city:'Rome',area:'Vatican / Prati',name:'Public restroom — Vatican / Prati area',address:'Piazza della Città Leonina, Roma RM, Italy',note:'Useful around Vatican/Prati. Check posted hours and fee on arrival.'},
    {city:'Rome',area:'Colosseum',name:'Colosseum-area restroom',address:'Piazza del Colosseo, Roma RM, Italy',note:'Use attraction facilities when available; café backup nearby.'},
    {city:'Rome',area:'Historic center',name:'Piazza Navona-area restroom',address:'Via Giuseppe Zanardelli, Roma RM, Italy',note:'Useful on the Navona → Pantheon route. Verify posted hours.'},
    {city:'Rome',area:'Spanish Steps',name:'Spanish Steps-area restroom',address:'Piazza di Spagna, Roma RM, Italy',note:'Useful near the Spanish Steps. Verify posted hours.'},
    {city:'Rome',area:'Trastevere',name:'Trastevere restroom backup',address:'Piazza di Santa Maria in Trastevere, Roma RM, Italy',note:'Restaurant/café facilities are the easiest backup while seated.'},
    {city:'Rome',area:'Station',name:'Roma Termini restrooms',address:'Piazza dei Cinquecento, Roma RM, Italy',note:'Station restroom option for train day.'},
    {city:'Florence',area:'SMN',name:'Public Toilet — Santa Maria Novella',address:'Piazza di Santa Maria Novella 18, 50123 Firenze FI, Italy',note:'Official city facility. Verify hours/fee before relying on it.'},
    {city:'Florence',area:'Central Florence',name:'Central Florence restroom backup',address:'Via della Stufa, 50123 Firenze FI, Italy',note:'Public restroom option in the center; verify posted hours/fee.'},
    {city:'Florence',area:'Boboli',name:'Boboli / Pitti restroom option',address:"Piazza de' Pitti 1, 50125 Firenze FI, Italy",note:'Use attraction facilities when open.'},
    {city:'Florence',area:'Piazzale Michelangelo',name:'Piazzale Michelangelo restroom backup',address:'Piazzale Michelangelo, 50125 Firenze FI, Italy',note:'Use nearby café/venue facilities as needed.'}
  ];

  const RESTAURANT_BOOKINGS = [
    {name:'Open Baladin Roma',date:'Oct 30 · ~6:00–6:30 PM',status:'need',label:'Reserve for 2',place:'open-baladin',site:'https://pubs.baladin.it/en/restaurant-craft-beer-hamburger/via-degli-specchi-6-roma/',reserve:'https://www.sevenrooms.com/explore/openbaladinroma/reservations/create/search/'},
    {name:'Rione Brewpub Firenze',date:'Oct 31 · ~7:00 PM',status:'need',label:'Reserve for 2',place:'rione',site:'https://www.rionefirenze.com/'},
    {name:'Be.Re. + Trapizzino',date:'Oct 28 · easy arrival night',status:'booked',label:'Walk-in planned',place:'bere'},
    {name:'Ma Che Siete Venuti A Fà',date:'Oct 29 · optional',status:'booked',label:'Walk-in only',place:'mache'},
    {name:'Archea Brewery',date:'Florence backup',status:'problem',label:'Casual stop / booking unconfirmed',place:'archea'},
    {name:'Chianti Brew Fighters',date:'Florence backup',status:'problem',label:'Reserve if chosen for dinner',place:'chianti-brew'},
    {name:'Alibi Craft Beer & Kitchen',date:'Florence backup',status:'problem',label:'Booking policy unverified',place:'alibi'}
  ];

  const EXTRA_PHRASES = [
    ['Restaurant','Posso vedere il menù?','POHS-soh veh-DEH-reh eel meh-NOO','Can I see the menu?'],
    ['Restaurant','Avete birre locali?','ah-VEH-teh BEER-reh loh-KAH-lee','Do you have local beers?'],
    ['Restaurant','Una birra chiara, per favore','OO-nah BEER-rah KYAH-rah pehr fah-VOH-reh','A pale/light beer, please'],
    ['Restaurant','Una birra scura, per favore','OO-nah BEER-rah SKOO-rah pehr fah-VOH-reh','A dark beer, please'],
    ['Restaurant','È vegetariano?','eh veh-jeh-tah-RYAH-noh','Is it vegetarian?'],
    ['Restaurant','È senza glutine?','eh SEN-tsah GLOO-tee-neh','Is it gluten-free?'],
    ['Directions','Posso usare il bagno?','POHS-soh oo-ZAH-reh eel BAHN-yoh','Can I use the bathroom?'],
    ['Taxi','A questo indirizzo, per favore','ah KWEH-stoh een-dee-REET-tsoh pehr fah-VOH-reh','To this address, please'],
    ['Taxi','Aspetti qui, per favore','ah-SPET-tee kwee pehr fah-VOH-reh','Please wait here'],
    ['Taxi','Può andare più piano?','pwoh ahn-DAH-reh pyoo PEE-ah-noh','Can you go slower?'],
    ['Train','È questo il treno per Firenze?','eh KWEH-stoh eel TREH-noh pehr fee-REN-tseh','Is this the train to Florence?'],
    ['Train','Dove possiamo mettere i bagagli?','DOH-veh poh-SYAH-moh MET-teh-reh ee bah-GAH-lyee','Where can we put our luggage?'],
    ['Hotel','Vorremmo fare il check-in','vohr-REM-moh FAH-reh eel check-in','We would like to check in'],
    ['Hotel','Può chiamarci un taxi?','pwoh kyah-MAR-chee oon TAK-see','Can you call us a taxi?'],
    ['Help','Chiamate un’ambulanza, per favore','kyah-MAH-teh oon am-boo-LAHN-tsah pehr fah-VOH-reh','Please call an ambulance'],
    ['Help','Dov’è l’ospedale più vicino?','doh-VEH loh-speh-DAH-leh pyoo vee-CHEE-noh','Where is the nearest hospital?'],
    ['Help','Ho bisogno della polizia','oh bee-ZOHN-yoh DEL-lah poh-lee-TSEE-ah','I need the police'],
    ['Work','Dov’è la reception?','doh-VEH lah reh-SEP-shon','Where is reception?'],
    ['Work','Dov’è la lavatrice?','doh-VEH lah lah-vah-TREE-cheh','Where is the washing machine?'],
    ['Work','A che ora ci incontriamo?','ah keh OH-rah chee een-kon-TRYAH-moh','What time are we meeting?'],
    ['Sightseeing','Abbiamo i biglietti per il Colosseo','ahb-BYAH-moh ee bee-LYEHT-tee pehr eel koh-loh-SEH-oh','We have tickets for the Colosseum'],
    ['Sightseeing','Dov’è l’ingresso per il Colosseo?','doh-VEH leen-GREHS-soh pehr eel koh-loh-SEH-oh','Where is the Colosseum entrance?'],
    ['Sightseeing','Abbiamo i biglietti per il Pantheon','ahb-BYAH-moh ee bee-LYEHT-tee pehr eel PAN-teh-on','We have tickets for the Pantheon'],
    ['Sightseeing','Dov’è l’ingresso?','doh-VEH leen-GREHS-soh','Where is the entrance?'],
    ['Sightseeing','A che ora chiude?','ah keh OH-rah KYOO-deh','What time does it close?'],
    ['Train','Andiamo a Firenze Santa Maria Novella','ahn-DYAH-moh ah fee-REN-tseh SAHN-tah mah-REE-ah noh-VEHL-lah','We are going to Firenze Santa Maria Novella'],
    ['Train','Il nostro treno parte alle undici e cinquanta','eel NOH-stroh TREH-noh PAR-teh AHL-leh OON-dee-chee eh cheen-KWAHN-tah','Our train leaves at 11:50'],
    ['Taxi','Ci porti al nostro hotel, per favore','chee POR-tee al NOH-stroh oh-TEHL pehr fah-VOH-reh','Please take us to our hotel'],
    ['Taxi','Ci porti a Via Candia quarantuno, per favore','chee POR-tee ah VEE-ah KAHN-dee-ah kwah-RAHN-too-noh pehr fah-VOH-reh','Please take us to Via Candia 41'],
    ['Taxi','Ci porti a Via de’ Tornabuoni otto, per favore','chee POR-tee ah VEE-ah deh tor-nah-BWOH-nee OHT-toh pehr fah-VOH-reh','Please take us to Via de’ Tornabuoni 8'],
    ['Work','Siamo ospiti ad Agriturismo Nerbona','SYAH-moh OH-spee-tee ad ah-gree-too-REEZ-moh nehr-BOH-nah','We are guests at Agriturismo Nerbona'],
    ['Work','Può indicarmi il parcheggio degli ospiti?','pwoh een-dee-KAR-mee eel par-KEHJ-joh deh-lyee OH-spee-tee','Can you show me the guest parking?'],
    ['Work','Dove possiamo lasciare i rifiuti?','DOH-veh poh-SYAH-moh lah-SHAH-reh ee ree-FYOO-tee','Where can we leave the rubbish?'],
    ['Help','Dov’è la farmacia più vicina?','doh-VEH lah far-mah-CHEE-ah pyoo vee-CHEE-nah','Where is the nearest pharmacy?'],
    ['Help','Mio marito ha avuto un intervento recente','MEE-oh mah-REE-toh ah ah-VOO-toh oon een-tehr-VEHN-toh reh-CHEHN-teh','My husband had a recent surgery']
  ];

  EXTRA_PHRASES.forEach(([category,italian,say,english]) => {
    if (!ITALY_TRIP_ITALIAN.some(p => p.italian === italian)) ITALY_TRIP_ITALIAN.push({category,italian,say,english});
  });

  const PREP_EXTRAS = [
    {when:'1–2 days before',who:'Both',category:'Phone',task:'Free up phone storage',note:'Make room for photos and videos; confirm cloud/photo backup if used.'},
    {when:'1–2 days before',who:'Rycki',category:'Work',task:'Turn on work auto-reply',note:'Set before leaving for the personal portion of the trip.'},
    {when:'1–2 days before',who:'Both',category:'Home',task:'Print cat-care instructions',note:'Leave an easy-to-find paper copy for the cat sitter.'},
    {when:'1–2 days before',who:'Both',category:'Home',task:'Mow lawn',note:'Weather permitting.'}
  ];
  PREP_EXTRAS.forEach(x => { if(!ITALY_TRIP_LISTS.preTrip.some(y => y.task === x.task)) ITALY_TRIP_LISTS.preTrip.push(x); });

  const PACK_EXTRAS = [
    {who:'Dennis',category:'Health',item:'Saline nasal spray',qty:'1',where:'Personal item',note:'Bring only if recommended/approved by his surgeon.'},
    {who:'Dennis',category:'Health',item:'Nasal ointment',qty:'1',where:'Personal item',note:'Bring only if recommended/approved by his surgeon.'},
    {who:'Dennis',category:'Health',item:'Afrin / oxymetazoline',qty:'1',where:'Personal item',note:'Bring/use only if his surgeon specifically recommends it.'},
    {who:'Rycki',category:'Work Extension',item:'Laundry detergent pods / sheets',qty:'1–2',where:'Suitcase',note:'Nerbona washing machines are free; detergent is not provided.'}
  ];
  PACK_EXTRAS.forEach(x => { if(!ITALY_TRIP_LISTS.packing.some(y => y.item === x.item)) ITALY_TRIP_LISTS.packing.push(x); });

  const app = document.getElementById('app');
  const toastEl = document.getElementById('toast');
  let user = loadUser();
  let route = {name:'home', parent:'home', params:{}};
  let historyStack = [];
  let packingFilter = 'All';
  let phraseFilter = 'All';
  let phraseQuery = '';
  let itinerarySelected = {};
  let showHiddenPhrases = false;
  let essentialFilter = 'Groceries';
  let bookingFilter = 'All';
  let currencyBase = 'EUR';
  let lastPosition = null;

  function loadUser(){
    try { return Object.assign(structuredClone(DEFAULT_USER), JSON.parse(localStorage.getItem(KEY) || '{}')); }
    catch { return structuredClone(DEFAULT_USER); }
  }
  function saveUser(){ localStorage.setItem(KEY, JSON.stringify(user)); }
  function esc(v){ return String(v ?? '').replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m])); }
  function place(id){ return ITALY_TRIP_PLACES.find(p => p.id === id); }
  function day(date){ return ITALY_TRIP_ITINERARY.find(d => d.date === date); }
  function allPacking(){ return [...ITALY_TRIP_LISTS.packing, ...(user.customPacking || [])]; }
  function allTasks(){ return [...ITALY_TRIP_LISTS.preTrip, ...(user.customTasks || [])]; }
  function checkedCount(obj,prefix,n){ let c=0; for(let i=0;i<n;i++) if(obj[prefix+i]) c++; return c; }
  function daysToGo(){ const trip = new Date('2026-10-28T12:00:00'); const now = new Date(); return Math.max(0,Math.ceil((trip - now)/86400000)); }
  function appleMapsUrl(address){ return `https://maps.apple.com/?daddr=${encodeURIComponent(address)}`; }
  function copy(text){ navigator.clipboard?.writeText(text); toast('Copied ✓'); }
  function toast(text){ toastEl.textContent=text; toastEl.classList.add('show'); setTimeout(()=>toastEl.classList.remove('show'),1400); }
  function openExternal(url){ window.location.href = url; }

  function go(name, params={}, parent){
    historyStack.push(route);
    route = {name,params,parent:parent || route.parent || name};
    render();
    window.scrollTo(0,0);
  }
  function goTop(name){ historyStack=[]; route={name,parent:name,params:{}}; render(); window.scrollTo(0,0); }
  function back(){ route = historyStack.pop() || {name:route.parent,parent:route.parent,params:{}}; render(); window.scrollTo(0,0); }
  window.go = go; window.goTop = goTop; window.back = back; window.copyText = copy; window.openExternal = openExternal;

  function bottomNav(active){
    // One consistent outline SVG style, without colored icon tiles.
    const svg=(body)=>`<svg viewBox="0 0 32 32" width="24" height="24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${body}</svg>`;
    const tabs=[
      ['home',svg('<path d="M4 15 16 5l12 10"/><path d="M7 13v14h18V13M13 27v-9h6v9"/>'),'Home'],
      ['rome',svg('<path d="M3 27V14C3 7 9 4 16 4s13 3 13 10v13H3Z"/><path d="M3 13h26M3 20h26"/><path d="M7 13V9m6 4V6m6 7V6m6 7V9"/><path d="M7 20v-4a2 2 0 0 1 4 0v4m3 0v-4a2 2 0 0 1 4 0v4m3 0v-4a2 2 0 0 1 4 0v4M7 27v-4a2 2 0 0 1 4 0v4m3 0v-4a2 2 0 0 1 4 0v4m3 0v-4a2 2 0 0 1 4 0v4"/>'),'Rome'],
      ['florence',svg('<path d="M3 28h26M7 28V15h18v13M11 15V9h10v6M16 9V3M10 9c0-5 12-5 12 0M13 28v-8h6v8M4 15h24"/>'),'Florence'],
      ['work',svg('<rect x="4" y="11" width="24" height="17" rx="3"/><path d="M11 11V8a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v3M4 18c7 5 17 5 24 0M14 20h4"/>'),'Work'],
      ['more',svg('<circle cx="7" cy="16" r="1.4"/><circle cx="16" cy="16" r="1.4"/><circle cx="25" cy="16" r="1.4"/>'),'More']
    ];
    return `<nav class="bottom-nav" aria-label="Main navigation">${tabs.map(([id,ico,label])=>`<button class="${active===id?'active':''}" aria-label="${label}" ${active===id?'aria-current="page"':''} onclick="goTop('${id}')"><span class="nav-ico">${ico}</span><span>${label}</span></button>`).join('')}</nav>`;
  }

  function topbar(title, right=''){
    return `<div class="topbar"><button class="back" onclick="back()">‹</button><div class="top-title">${esc(title)}</div>${right?`<button class="top-action">${right}</button>`:'<span style="width:22px"></span>'}</div>`;
  }

  function hero(src,title,dates,parent,cls=''){
    return `<div class="hero ${cls}"><img src="${src}" alt=""><button class="hero-back" onclick="goTop('home')">‹</button><div class="hero-copy"><h1>${esc(title)}</h1><p>${esc(dates)}</p></div></div>`;
  }

  function iconTile(color,icon){ return `<span class="tile-ico ${color}">${icon}</span>`; }
  function menuRow(icon,color,title,sub,onclick){
    return `<button class="menu-row" onclick="${onclick}">${iconTile(color,icon)}<span class="menu-copy"><b>${esc(title)}</b><small>${esc(sub)}</small></span><span class="chev">›</span></button>`;
  }

  function homeScreen(){
    const tasks=allTasks(), pack=allPacking();
    const td=checkedCount(user.tasks,'t-',tasks.length), pd=checkedCount(user.packing,'p-',pack.length);
    const prepPct=Math.round((td/Math.max(1,tasks.length))*100), packPct=Math.round((pd/Math.max(1,pack.length))*100);
    return `<section class="screen">
      <div class="hero home"><img src="italy-collage.jpg" alt="Real photographs of Tuscany, Rome, and Florence"><div class="hero-copy"><h1>Italy 2026</h1><p>October 28 – November 7</p></div></div>
      <div class="home-card">
        <div class="countdown-line"><span class="countdown-icon" aria-hidden="true">✈</span><span>${daysToGo()} days to go</span></div>
        <div class="progress-pair">
          <div class="ring-stat"><div class="ring" style="--p:${prepPct}"><span>${td}/${tasks.length}</span></div><small>Prep completed</small></div>
          <div class="ring-stat"><div class="ring" style="--p:${packPct}"><span>${pd}/${pack.length}</span></div><small>Packed</small></div>
        </div>
        <div class="update-note">Your progress saves on this device</div>
      </div>
      <div class="stack">
        <button class="nav-card coral" onclick="go('overview',{},'home')"><span class="icon">🗓️</span><span class="copy">Trip Overview<small>Oct 28 → Nov 7 at a glance</small></span></button>
        <button class="nav-card aqua" onclick="go('navigate',{},'home')"><span class="icon">🗺️</span><span class="copy">Navigate<small>Street map, destinations and train information</small></span></button>
        <button class="nav-card violet" onclick="go('bookings',{},'home')"><span class="icon">🎟️</span><span class="copy">Bookings & Tickets<small>Flights, hotels, train and reservations</small></span></button>
        <button class="nav-card green" onclick="goTop('work')"><span class="icon">🏡</span><span class="copy">Work Stay (Nerbona)<small>Nov 2–7 · house, schedule, essentials</small></span></button>
        <button class="nav-card yellow" onclick="go('packing',{},'more')"><span class="icon">🧳</span><span class="copy">Packing<small>${pd} of ${pack.length} packed</small></span></button>
        <button class="nav-card lav" onclick="goTop('more')"><span class="icon">•••</span><span class="copy">More<small>Before Italy, bookings, offline, money</small></span></button>
      </div>
      ${bottomNav('home')}
    </section>`;
  }

  function cityScreen(city){
    const isRome=city==='Rome';
    const dates=isRome?'Oct 28 – Oct 31':'Oct 31 – Nov 2';
    const img=isRome?'rome-photo.jpg':'florence-photo.jpg';
    const parent=isRome?'rome':'florence';
    return `<section class="screen">
      ${hero(img,city,dates,parent,isRome?'rome':'florence')}
      <div class="list-card">
        ${menuRow('🗓️','blue','Daily Itinerary','Your plan by day',`go('itinerary',{city:'${city}'},'${parent}')`)}
        ${menuRow('🎟️','red','Attractions & Tickets','Booking info & details',`go('bookings',{city:'${city}'},'${parent}')`)}
        ${menuRow('🍴','orange','Restaurants','Reservations & ideas',`go('food',{city:'${city}'},'${parent}')`)}
        ${menuRow('💬','green','Italian Phrases',`Common phrases for ${city}`,`go('italian',{city:'${city}'},'${parent}')`)}
        ${menuRow('📍','cyan','Near Me','Restrooms, pharmacies & more',`go('nearby',{city:'${city}'},'${parent}')`)}
        ${menuRow('🗺️','green','Maps & Navigate','Offline places, where I am, drivers',`go('navigate',{city:'${city}'},'${parent}')`)}
      </div>
      ${bottomNav(parent)}
    </section>`;
  }

  function workScreen(){
    return `<section class="screen">
      <div class="hero compact work"><img src="work-group-photo.jpg" alt="Group photo from a previous work trip"><button class="hero-back" onclick="goTop('home')">‹</button><div class="hero-copy"><h1>Work, but make it Italy 🇮🇹</h1><p>Nerbona · November 2–7</p></div></div>
      <div class="list-card">
        ${menuRow('🏡','green','Nerbona Overview','Address, contact, key info',`go('workOverview',{},'work')`)}
        ${menuRow('🖼️','blue','Property Map & Photos','Buildings, parking, laundry',`go('propertyPhotos',{},'work')`)}
        ${menuRow('📄','red','House Rules','Important information',`go('houseRules',{},'work')`)}
        ${menuRow('⚙️','blue','During Your Stay','Wi‑Fi, laundry, BBQ, etc.',`go('duringStay',{},'work')`)}
        ${menuRow('💬','green','Italian Phrases','Work + property phrases',`go('italian',{category:'Work'},'work')`)}
        ${menuRow('🛒','green','Nearby Essentials','Groceries, pharmacies, ATMs',`go('essentials',{},'work')`)}
        ${menuRow('🚙','blue','Transportation','Taxis, drivers, car rentals',`go('transport',{},'work')`)}
        ${menuRow('🆘','red','Emergency Info','112 and local contacts',`go('emergency',{},'work')`)}
      </div>
      ${bottomNav('work')}
    </section>`;
  }

  function documentsScreen(){
    return `<section class="screen">${topbar('🔐 Travel Documents')}<div class="content"><div class="wallet-intro"><h2>My Travel Wallet</h2><p>Private, encrypted files on this device · available offline after setup.</p></div><div id="travel-docs-root"><p>Loading encrypted documents…</p></div></div>${bottomNav('more')}</section>`;
  }
  const AIRPORTS=[
    ['CLE','Cleveland Hopkins','https://www.clevelandairport.com/'],
    ['JFK','New York JFK','https://www.jfkairport.com/'],
    ['FCO','Rome Fiumicino','https://www.adr.it/fiumicino'],
    ['FLR','Florence Peretola','https://www.aeroporto.firenze.it/'],
    ['AMS','Amsterdam Schiphol','https://www.schiphol.nl/en/'],
    ['ATL','Atlanta Hartsfield-Jackson','https://www.atl.com/'],
    ['DTW','Detroit Metro','https://www.metroairport.com/']
  ];
  function travelGuidesScreen(){
    const hotel=place('rome-hotel'),florence=place('florence-hotel');
    const transfers=[
      ['✈️','FCO → Rome hotel','After passport control and baggage claim, follow official taxi or booked-transfer signs. Show the driver your Rome hotel address.',hotel?.address],
      ['🚆','Rome hotel → Roma Termini','October 31 · aim to arrive early for the 11:50 Italo train. Check the station departure board for the platform.', 'Roma Termini, Piazza dei Cinquecento, Roma'],
      ['🚕','Firenze S.M.N. → Florence hotel','October 31 · arrive 13:31. Use the official taxi stand or walk only if convenient with luggage.',florence?.address],
      ['🌿','Florence → Nerbona','November 2 · use the confirmed group transfer if provided; do not assume a pickup point until confirmed.',WORK.address]
    ];
    return `<section class="screen">${topbar('🗺 Airport & Transfer Guides')}<div class="content"><div class="wallet-intro"><h2>Easy Travel Days</h2><p>These transfer instructions are available offline. Official airport websites require internet.</p></div><h3>Airport information</h3>${AIRPORTS.map(([code,name,url])=>`<div class="info-row"><div class="emoji">✈️</div><div class="copy"><b>${code} · ${name}</b><small>Gate assignments and routes may change. Check the airline app on travel day.</small><div class="action-row"><button class="pill-btn gray" onclick="openExternal('${url}')">Official airport website ↗</button></div></div></div>`).join('')}<h3>Transfers · show the driver</h3>${transfers.map(([icon,title,desc,address])=>`<div class="info-row"><div class="emoji">${icon}</div><div class="copy"><b>${esc(title)}</b><small>${esc(desc)}</small>${address?`<small><b>${esc(address)}</b></small><div class="action-row"><button class="pill-btn gray" onclick="copyText('${js(address)}')">Copy address</button><button class="pill-btn" onclick="showDriverAddress('${js(title)}','${js(address)}')">Show driver</button></div>`:''}</div></div>`).join('')}</div>${bottomNav('more')}</section>`;
  }
  const MENU_ITEMS = [
    ['Cacio e pepe','Pasta with Pecorino Romano cheese and black pepper','Rome · dairy, wheat'],
    ['Carbonara','Pasta with egg, Pecorino, guanciale (cured pork cheek) and pepper','Rome · pork, egg, dairy, wheat'],
    ['Amatriciana','Tomato pasta with guanciale (pork) and Pecorino','Rome · pork, dairy, wheat'],
    ['Gricia','Pasta with guanciale and Pecorino; no tomato','Rome · pork, dairy, wheat'],
    ['Saltimbocca alla romana','Veal with prosciutto and sage, often cooked with wine','Rome · veal, pork'],
    ['Supplì','Fried rice croquette, usually with tomato sauce and mozzarella','Rome · dairy; breading may contain wheat'],
    ['Carciofi alla romana','Artichokes braised with herbs and olive oil','Rome · vegetables'],
    ['Carciofi alla giudia','Crispy deep-fried artichokes','Rome · fried vegetables'],
    ['Trippa alla romana','Tripe (animal stomach lining) cooked in tomato sauce','Rome · offal'],
    ['Coda alla vaccinara','Slow-braised oxtail in tomato sauce','Rome · beef'],
    ['Bistecca alla Fiorentina','Very thick Tuscan T-bone steak, typically served rare','Florence · beef; often sold by weight'],
    ['Pappardelle al cinghiale','Wide ribbon pasta with wild boar meat ragù','Tuscany · wild boar, wheat'],
    ['Ribollita','Hearty Tuscan soup with beans, vegetables and bread','Tuscany · wheat; ask about stock'],
    ['Pappa al pomodoro','Thick tomato, bread and basil soup','Tuscany · wheat'],
    ['Pici all’aglione','Thick hand-rolled pasta with garlicky tomato sauce','Tuscany · wheat'],
    ['Lampredotto','Florentine sandwich made with cow stomach','Florence · offal, wheat'],
    ['Crostini toscani','Toasted bread topped with a savory chicken-liver spread','Tuscany · liver, wheat'],
    ['Tagliere','Sharing board of cured meats, cheeses, or both','Often pork and dairy'],
    ['Bruschetta','Toasted bread, commonly topped with tomato, garlic and olive oil','Wheat'],
    ['Gnocchi al ragù','Soft potato dumplings with meat sauce','Often wheat, egg; ask about meat'],
    ['Lasagne al forno','Baked layers of pasta, meat sauce and béchamel','Wheat, dairy; often beef/pork'],
    ['Melanzane alla parmigiana','Baked eggplant with tomato sauce and cheese','Dairy'],
    ['Fritto misto','Assorted fried foods; may include seafood','Ask what is included'],
    ['Polpo','Octopus','Seafood'],['Gamberi','Shrimp or prawns','Shellfish'],
    ['Vongole','Clams','Shellfish'],['Cozze','Mussels','Shellfish'],
    ['Acciughe','Anchovies','Fish'],['Baccalà','Salt cod','Fish'],
    ['Funghi porcini','Porcini mushrooms','Mushrooms'],['Tartufo','Truffle','May be a supplement'],
    ['Stracciatella','Creamy cheese; also a name for some soups or gelato flavors','Ask which meaning'],
    ['Burrata','Soft mozzarella-like cheese with creamy center','Dairy'],
    ['Guanciale','Cured pork cheek','Pork'],['Pancetta','Italian cured pork belly','Pork'],
    ['Prosciutto crudo','Dry-cured ham, served uncooked','Pork'],
    ['Salsiccia','Sausage, often pork','Ask which meat'],
    ['Cinghiale','Wild boar','Meat'],['Vitello','Veal','Meat'],
    ['Manzo','Beef','Meat'],['Agnello','Lamb','Meat'],
    ['Contorni','Side dishes, often ordered separately','Menu section'],
    ['Antipasti','Starters or appetizers','Menu section'],
    ['Primi','First courses, usually pasta, risotto or soup','Menu section'],
    ['Secondi','Main courses, typically meat or fish','Menu section'],
    ['Dolci','Desserts','Menu section'],
    ['Coperto','Per-person cover charge, often for table setting/bread','Check menu for amount'],
    ['Servizio','Service charge, if listed','Check whether included'],
    ['All’etto / per etto','Price per 100 grams; total depends on weight','Common for steak or fish'],
    ['Al forno','Baked in the oven','Cooking method'],
    ['Alla griglia','Grilled','Cooking method'],
    ['Fritto / fritta','Fried','Cooking method'],
    ['Crudo / cruda','Raw or uncooked','Cooking method'],
    ['Piccante','Spicy','Flavor'],['Senza','Without','Useful term'],
    ['Tiramisù','Coffee-soaked layered dessert with mascarpone','Dairy, egg, wheat; coffee'],
    ['Panna cotta','Set cream dessert, often with fruit sauce','Dairy; often gelatin'],
    ['Cantucci','Crunchy almond biscuits','Wheat, nuts, egg'],
    ['Gelato','Italian-style ice cream','Often dairy; check flavors']
  ];
  function menuDecoderScreen(){
    return `<section class="screen">${topbar('🍝 Italian Menu Decoder')}<div class="content"><div class="wallet-intro"><h2>What am I ordering?</h2><p>Search Italian dishes, ingredients and menu words. This built-in guide works offline.</p></div><input class="searchbox" id="menu-decode-search" type="search" placeholder="Try carbonara, steak, pork, tripe…" oninput="filterMenuDecoder(this.value)" aria-label="Search Italian menu terms"><div class="tip">Translations are general descriptions, not guarantees about a restaurant's recipe or allergens. Ask staff if you have an allergy.</div><div id="menu-decode-results"></div><h3>Helpful at the table</h3><div class="info-row"><div class="copy"><b>Che cosa contiene?</b><small>What does it contain?</small><b>Contiene frutta a guscio?</b><small>Does it contain tree nuts?</small><b>Sono allergica a…</b><small>I'm allergic to… (female speaker)</small><b>Avete un menù in inglese?</b><small>Do you have an English menu?</small></div></div><div class="tip">For a whole printed menu, use your phone's Translate camera. Download Italian for offline translation ahead of time if supported; the built-in dictionary needs no connection.</div></div>${bottomNav('more')}</section>`;
  }
  function filterMenuDecoder(q=''){
    const root=document.getElementById('menu-decode-results');if(!root)return;
    const term=q.trim().toLocaleLowerCase();
    const matches=MENU_ITEMS.filter(([it,en,note])=>[it,en,note].join(' ').toLocaleLowerCase().includes(term));
    root.innerHTML=matches.length?matches.map(([it,en,note])=>`<div class="info-row"><div class="emoji">🍽️</div><div class="copy"><b>${esc(it)}</b><small>${esc(en)}</small><small style="color:#866080">${esc(note)}</small></div></div>`).join(''):'<div class="empty">Not in the offline dictionary. Ask your server or use a translator.</div>';
  }
  window.filterMenuDecoder=filterMenuDecoder;
  function moreScreen(){
    return `<section class="screen more-hub">
      ${topbar('More')}
      <div class="list-card more-list">
        ${menuRow('▣','blue','Before Italy','To-do list, documents, prep',`go('tasks',{},'more')`)}
        ${menuRow('🛒','red','Trip Shopping','Souvenirs, gifts, ideas',`go('shopping',{},'more')`)}
        ${menuRow('🔐','blue','Travel Documents','Encrypted offline files & custom folders',`go('documents',{},'more')`)}
        ${menuRow('🍝','red','Italian Menu Decoder','Search dishes, ingredients & menu terms offline',`go('menuDecoder',{},'more')`)}
        ${menuRow('🗺','cyan','Airport & Transfer Guides','Offline airport and transfer instructions',`go('travelGuides',{},'more')`)}
        ${menuRow('🎟','red','Bookings & Tickets','Flights, hotels, tours, reservations',`go('bookings',{},'more')`)}
        ${menuRow('⬡','cyan','Offline Access','Download maps & info',`go('offline',{},'more')`)}
        ${menuRow('✈','blue','Navigate','Get directions, where I am, drivers',`go('navigate',{},'more')`)}
        ${menuRow('$','green','Currency Converter','EUR ⇄ USD and quick amounts',`go('money',{},'more')`)}
        ${menuRow('⚙','gray','Settings','App preferences',`go('settings',{},'more')`)}
      </div>
      ${bottomNav('more')}
    </section>`;
  }


  function appSearchScreen(q){
    const query=(q||'').trim().toLowerCase();
    const placeHits=query?ITALY_TRIP_PLACES.filter(p=>`${p.name} ${p.address} ${p.note||''}`.toLowerCase().includes(query)).slice(0,8):[];
    const phraseHits=query?ITALY_TRIP_ITALIAN.filter(p=>`${p.italian} ${p.english} ${p.category}`.toLowerCase().includes(query)).slice(0,10):[];
    const taskHits=query?allTasks().map((x,i)=>({x,i})).filter(({x})=>`${x.task} ${x.category||''}`.toLowerCase().includes(query)).slice(0,8):[];
    const tools=[['Currency Converter','money'],['Emergency Info','emergency'],['Offline Access','offline'],['Packing','packing'],['Before Italy','tasks'],['Bookings & Tickets','bookings'],['Navigate','navigate'],['Work Stay','work']].filter(x=>x[0].toLowerCase().includes(query));
    return `<section class="screen">${topbar('Search Italy App')}<div class="phrase-search"><input class="searchbox" value="${esc(q||'')}" placeholder="bathroom, train, Pantheon, doctor…" onkeydown="if(event.key==='Enter')runAppSearch(this.value)"></div><div class="content">${!query?'<div class="empty">Search places, phrases, prep items and tools.</div>':''}${placeHits.length?'<h3 style="font-family:Georgia,serif">Places</h3>'+placeHits.map(p=>`<div class="info-row"><div class="emoji">📍</div><div class="copy"><b>${esc(p.name)}</b><small>${esc(p.address)}</small><small class="nav-distance" data-to="${p.id}" data-from="${i>0?planned[i-1].id:''}">${i>0?'Calculating distance…':'First stop'}</small><div class="action-row"><button class="pill-btn" onclick="showPlace('${p.id}')">Details</button></div></div></div>`).join(''):''}${phraseHits.length?'<h3 style="font-family:Georgia,serif">Italian</h3>'+phraseHits.map(p=>phraseRow(p)).join(''):''}${taskHits.length?'<h3 style="font-family:Georgia,serif">Before Italy</h3>'+taskHits.map(({x,i})=>`<label class="check-row"><input type="checkbox" ${user.tasks['t-'+i]?'checked':''} onchange="toggleTask(${i},this.checked)"><span>${esc(x.task)}</span></label>`).join(''):''}${tools.length?'<h3 style="font-family:Georgia,serif">Tools</h3>'+tools.map(([label,dest])=>`<button class="nav-card" onclick="go('${dest}',{},'more')"><span class="icon">›</span><span class="copy">${label}</span></button>`).join(''):''}${query && !placeHits.length&&!phraseHits.length&&!taskHits.length&&!tools.length?'<div class="empty">No built-in result. Try Navigate for a deliberate Apple Maps search.</div>':''}</div>${bottomNav('more')}</section>`;
  }
  window.runAppSearch=q=>{historyStack.push(route);route={name:'search',params:{q},parent:'more'};render();window.scrollTo(0,0);};

  function overviewScreen(){
    const items=[
      ['Oct 28','✈️ Arrive Rome · easy Prati night'],['Oct 29','🏛️ Colosseum · Trastevere'],['Oct 30','⛲ Navona · Pantheon · Trevi · Open Baladin'],
      ['Oct 31','🚆 Rome → Florence · Rione Brewpub'],['Nov 1','🖼️ Accademia · Boboli · Piazzale Michelangelo'],['Nov 2','✈️ Dennis home · Rycki → Nerbona'],
      ['Nov 2–7','💼 Tuscany work stay'],['Nov 7','✈️ Rycki flies home']
    ];
    return `<section class="screen">${topbar('Trip Overview')}<div class="content"><button class="nav-card blue" onclick="go('arrival',{},'home')"><span class="icon">🛬</span><span class="copy">Arrival Day Helper<small>FCO → hotel → rest → easy Prati night</small></span></button><button class="nav-card green" style="margin-top:8px" onclick="go('trainDay',{},'home')"><span class="icon">🚆</span><span class="copy">Rome → Florence Train Day<small>Hotel → Termini → Firenze SMN → Hotel Milu</small></span></button>${items.map(([d,t])=>`<div class="info-row"><div class="emoji">${t.slice(0,2)}</div><div class="copy"><b>${d}</b><small>${esc(t.slice(3))}</small></div></div>`).join('')}</div>${bottomNav('home')}</section>`;
  }

  function arrivalScreen(){
    const hotel=place('rome-hotel');
    return `<section class="screen">${topbar('Arrival Day Helper')}<div class="content"><div class="info-row"><div class="emoji">✈️</div><div class="copy"><b>1 · Arrive at FCO</b><small>Immigration/bags, then take the easiest transfer to the hotel. Keep the day intentionally light.</small></div></div><div class="info-row"><div class="emoji">🚕</div><div class="copy"><b>2 · Get to the Rome hotel</b><small>${esc(hotel.address)}</small><div class="action-row"><button class="pill-btn" onclick="openExternal('${js(appleMapsUrl(hotel.address))}')">Navigate</button><button class="pill-btn gray" onclick="showDriver('rome-hotel')">Show Driver</button></div></div></div><div class="info-row"><div class="emoji">🛏️</div><div class="copy"><b>3 · Check in + real rest</b><small>Hydrate, unpack essentials, shower, and let Dennis recover from the travel day.</small></div></div><div class="info-row"><div class="emoji">🍺</div><div class="copy"><b>4 · Only if you both feel okay</b><small>Short Prati wander + Be.Re./Trapizzino. Early night is absolutely fine.</small><div class="action-row"><button class="pill-btn" onclick="showPlace('bere')">Be.Re. details</button></div></div></div><div class="tip"><b>Recovery rule:</b> Arrival day is not a sightseeing day. The win is getting settled without overdoing it.</div></div>${bottomNav('home')}</section>`;
  }

  function trainDayScreen(){
    return `<section class="screen">${topbar('Rome → Florence Train Day')}<div class="content"><div class="info-row"><div class="emoji">🏨</div><div class="copy"><b>Morning · Rome hotel</b><small>Pack, checkout, keep train tickets/passports easy to reach.</small></div></div><div class="info-row"><div class="emoji">🚕</div><div class="copy"><b>Taxi to Roma Termini</b><small>Preferred with luggage. Give yourselves a comfortable station buffer.</small><div class="action-row"><button class="pill-btn" onclick="showPlace('termini')">Termini details</button></div></div></div><div class="info-row"><div class="emoji">🚆</div><div class="copy"><b>11:50 · Roma Termini → Firenze S.M.N.</b><small>Booked · arrive about 1:31 PM. Check the departure board for the platform (binario).</small></div></div><div class="info-row"><div class="emoji">🧳</div><div class="copy"><b>Florence arrival</b><small>Taxi to Hotel Milu and decompress. Check-in is 3 PM.</small><div class="action-row"><button class="pill-btn" onclick="showPlace('florence-hotel')">Hotel details</button></div></div></div><button class="nav-card green" onclick="go('italian',{category:'Train'},'home')"><span class="icon">💬</span><span class="copy">Train Italian<small>Platform, luggage, delays, Florence train</small></span></button></div>${bottomNav('home')}</section>`;
  }

  function itineraryScreen(city){
    const days=ITALY_TRIP_ITINERARY.filter(d=>d.city===city || (city==='Rome' && d.date==='2026-10-31'));
    // One shared Oct 31 itinerary record: Rome shows checkout and train departure,
    // Florence shows the full travel day. Activity completion keys remain shared.
    const viewDay=d=>(city==='Rome' && d.date==='2026-10-31')
      ? {...d,title:'Rome checkout → Florence train',activities:d.activities.filter(a=>a.period==='morning')}
      : d;
    if(!days.length) return `<section class="screen">${topbar('Itinerary')}<div class="empty">No days available.</div></section>`;
    const selected=viewDay(days.find(d=>d.date===itinerarySelected[city])||days[0]);
    const activityHtml=selected.activities.map((a,i)=>{
      const globalKey=selected.date+'-'+i, state=user.activities[globalKey]||'pending';
      const rest=a.easy==='protect-rest';
      const suggestion=user.easyDay?(rest?'🟢 PROTECT THIS BREAK':a.easy==='taxi'?'🔵 TAXI / TRANSIT RECOMMENDED':a.easy==='skip-first'?'🟠 OPTIONAL':a.type==='optional'?'🟡 OPTIONAL · SHORTEN IF TIRED':'🟢 KEEP · PRIORITY'):'';
      const klass=user.easyDay?(a.easy==='skip-first'?'rest-optional':rest?'rest-protect':a.easy==='taxi'?'rest-transit':'rest-keep'):'';
      const previous=selected.activities.slice(0,i).reverse().find(x=>x.place);
      return `<div class="rest-activity ${klass}"><label class="check-row"><input type="checkbox" ${state==='done'?'checked':''} onchange="setActivity('${globalKey}',this.checked)"><span><b>${esc(a.time?`${a.time} · ${a.title}`:a.title)}</b><div class="meta">${esc(a.period||'Flexible')}${a.type==='optional'?' · OPTIONAL':''}</div>${suggestion?`<div class="rest-advice">${suggestion}</div>`:''}${a.note?`<div class="meta">${esc(a.note)}</div>`:''}${a.place?`<button type="button" class="pill-btn gray" onclick="event.preventDefault();showActivityPlace('${a.place}','${previous?.place||''}')">Details · distance from previous stop</button>`:''}</span></label></div>`;
    }).join('');
    return `<section class="screen">${topbar(`${city} Itinerary`)}<div class="content"><div class="day-picker">${days.map(d=>`<button class="${selected.date===d.date?'active':''}" onclick="selectItineraryDay('${city}','${d.date}')">${formatDay(d.date)}</button>`).join('')}</div><div class="info-row"><div class="emoji">🌿</div><div class="copy"><b>Rest Mode</b><small>Color-code priorities, optional stops, rest breaks and taxi/transit alternatives. Nothing disappears.</small></div><button class="pill-btn ${user.easyDay?'green':'gray'}" onclick="toggleEasyDay()">${user.easyDay?'ON':'OFF'}</button></div><div class="packing-group"><div class="packing-head"><span>🗓️</span>${formatDay(selected.date)}<small>${esc(selected.title)}</small></div>${activityHtml}</div><div class="tip">Times are flexible except booked transport or timed tickets. Switch days above anytime.</div></div>${bottomNav(city==='Rome'?'rome':'florence')}</section>`;
  }
  const routeCoordCache = new Map();
  async function routeCoords(p){
    if(!p) return null;
    if(routeCoordCache.has(p.id))return routeCoordCache.get(p.id);
    const key='italy-map-'+p.id;
    let coords=null;
    try{coords=JSON.parse(sessionStorage.getItem(key)||'null');}catch(e){}
    if(!coords){
      const r=await fetch('https://nominatim.openstreetmap.org/search?format=json&limit=1&q='+encodeURIComponent(p.address));
      if(!r.ok)throw new Error('Geocoding unavailable');
      const data=await r.json();if(!data.length)throw new Error('Location unavailable');
      coords=[Number(data[0].lat),Number(data[0].lon)];
      sessionStorage.setItem(key,JSON.stringify(coords));
    }
    routeCoordCache.set(p.id,coords);return coords;
  }
  async function walkingRouteDistance(from,to){
    if(!from||!to)return null;
    const [a,b]=await Promise.all([routeCoords(from),routeCoords(to)]);
    const url=`https://router.project-osrm.org/route/v1/foot/${a[1]},${a[0]};${b[1]},${b[0]}?overview=false`;
    // OSRM public demo is primarily a driving router; don't label its routes walking.
    // Instead use a geodesic estimate, explicitly identified as straight-line distance.
    const rad=x=>x*Math.PI/180;
    const dLat=rad(b[0]-a[0]),dLon=rad(b[1]-a[1]);
    const h=Math.sin(dLat/2)**2+Math.cos(rad(a[0]))*Math.cos(rad(b[0]))*Math.sin(dLon/2)**2;
    return 6371*2*Math.atan2(Math.sqrt(h),Math.sqrt(1-h));
  }
  function distanceLabel(km){return `${km.toFixed(2)} km (${(km*0.621371).toFixed(2)} mi) straight-line · walking route may be longer`;}
  window.showActivityPlace=async(id,previousId)=>{
    showPlace(id);
    const p=place(id),prev=place(previousId);
    const sheet=document.querySelector('.sheet, .bottom-sheet, [role="dialog"]');
    if(!sheet||!p)return;
    const extra=document.createElement('div');extra.className='tip';sheet.appendChild(extra);
    if(!prev){extra.textContent='First mapped stop today · no previous stop distance.';return;}
    extra.textContent=`From ${prev.name}: calculating distance…`;
    try{const km=await walkingRouteDistance(prev,p);extra.textContent=`From ${prev.name}: ${distanceLabel(km)}. Tap Navigate for street-level directions.`;}
    catch(e){extra.textContent=`From ${prev.name}: distance unavailable offline. Open Apple Maps for the walking route.`;}
  };
  window.selectItineraryDay=(city,date)=>{itinerarySelected[city]=date;render();};
  window.setActivity=(key,done)=>{user.activities[key]=done?'done':'pending';saveUser();render();};

  function packingScreen(){
    const all=allPacking();
    const filters=['All','Personal','Work Stay','Dennis'];
    const filtered=all.map((x,i)=>({x,i})).filter(({x})=>{
      if(packingFilter==='All') return true;
      if(packingFilter==='Dennis') return x.who==='Dennis';
      if(packingFilter==='Work Stay') return x.category==='Work Extension' || x.use==='Work' || x.who==='Rycki' && /work/i.test(x.note||'');
      if(packingFilter==='Personal') return x.category!=='Work Extension' && x.who!=='Dennis';
      return true;
    });
    const done=filtered.filter(z=>user.packing['p-'+z.i]).length;
    const groups=[...new Set(filtered.map(z=>z.x.category))];
    return `<section class="screen">${topbar('🧳 Packing')}
      <div class="segment">${filters.map(f=>`<button class="${packingFilter===f?'active':''}" onclick="setPackFilter('${f}')">${f}</button>`).join('')}</div>
      <div class="content"><div class="progress-line"><span>${done} / ${filtered.length} packed</span><small>${Math.round(done/Math.max(1,filtered.length)*100)}%</small></div><div class="bar"><i style="width:${done/Math.max(1,filtered.length)*100}%"></i></div>
      ${groups.map(g=>{const rows=filtered.filter(z=>z.x.category===g); const gd=rows.filter(z=>user.packing['p-'+z.i]).length; return `<div class="packing-group"><div class="packing-head"><span>${packingEmoji(g)}</span>${esc(g)}<small>${gd} / ${rows.length} ›</small></div>${rows.map(({x,i})=>`<label class="check-row"><input type="checkbox" ${user.packing['p-'+i]?'checked':''} onchange="togglePacking(${i},this.checked)"><span><b>${esc(x.item)}</b>${x.note?`<div class="meta">${esc(x.note)}</div>`:''}</span></label>`).join('')}<button class="add-row" onclick="addPacking('${esc(g)}')">＋ Add Item</button></div>`}).join('')}</div>
      ${bottomNav('more')}</section>`;
  }
  function packingEmoji(g){ const m={'Documents':'🪪','Money':'💳','Electronics':'📱','Work Extension':'💼','Clothes':'👕','Shared':'🧳','Toiletries':'🧴','Health':'💊','Travel Day':'✈️'}; return m[g]||'🧳'; }
  window.setPackFilter=f=>{packingFilter=f;render();};
  window.togglePacking=(i,v)=>{user.packing['p-'+i]=v;saveUser();render();};

  function tasksScreen(){
    const a=allTasks(); const done=checkedCount(user.tasks,'t-',a.length);
    return `<section class="screen">${topbar('Before Italy')}<div class="content"><div class="progress-line"><span>${done} / ${a.length} prep completed</span><small>${Math.round(done/Math.max(1,a.length)*100)}%</small></div><div class="bar"><i style="width:${done/Math.max(1,a.length)*100}%"></i></div>${a.map((x,i)=>`<label class="check-row"><input type="checkbox" ${user.tasks['t-'+i]?'checked':''} onchange="toggleTask(${i},this.checked)"><span><b>${esc(x.task)}</b><div class="meta">${esc(x.when||x.timing||'')} · ${esc(x.who||'')}</div>${x.note?`<div class="meta">${esc(x.note)}</div>`:''}</span></label>`).join('')}<button class="add-row" onclick="addTask()">＋ Add Item</button></div>${bottomNav('more')}</section>`;
  }
  window.toggleTask=(i,v)=>{user.tasks['t-'+i]=v;saveUser();render();};

  function privateInline(key, fallback='🔒 Unlock to view') {
    const value=window.ItalyVault?.get(key);
    return value ? `<span class="private-value">${esc(value)}</span> <button class="pill-btn gray" onclick="copyText(window.ItalyVault.get('${key}'))">Copy</button>` : `<button class="pill-btn" onclick="ItalyVault.open()">${fallback}</button>`;
  }
  function bookingPrivate(kind,name){
    const items=window.ItalyVault?.all()||{};
    if(!Object.keys(items).length)return '';
    const terms=[kind,name].join(' ').toLowerCase().split(/\s+/).filter(x=>x.length>3);
    const found=Object.entries(items).filter(([k])=>terms.some(t=>k.toLowerCase().includes(t)) && /confirm|booking|reservation|reference|ticket|pnr/i.test(k));
    return found.map(([k,v])=>`<small>🔐 ${esc(k)}: <span class="private-value">${esc(v)}</span></small>`).join('');
  }
  function bookingsScreen(city){
    const tabs=['All','Flights','Hotels','Trains','Tours','Restaurants'];
    const base=[
      {kind:'Flights',icon:'✈️',name:'Flight to Rome',date:'Oct 28, 2026',sub:'Booked · private confirmation stays device-only',status:'booked'},
      {kind:'Hotels',icon:'🏨',name:'Rome Hotel',date:'Oct 28–31',sub:ITALY_TRIP_CORE.hotels.rome.name,status:'booked',place:'rome-hotel'},
      {kind:'Trains',icon:'🚆',name:'Rome → Florence',date:'Oct 31 · 11:50 AM',sub:'Roma Termini → Firenze SMN · booked',status:'booked',place:'termini'},
      {kind:'Hotels',icon:'🏨',name:'Florence Hotel',date:'Oct 31–Nov 2',sub:ITALY_TRIP_CORE.hotels.florence.name,status:'booked',place:'florence-hotel'},
      {kind:'Tours',icon:'🏛️',name:'Colosseum + Arena',date:'Oct 29 · aim ~10 AM',sub:'Need to book · official Full Experience + Arena preferred',status:'need',place:'colosseum'},
      {kind:'Tours',icon:'🏛️',name:'Pantheon',date:'Oct 30 · ~11:15 AM',sub:'Attempted / payment problem · retry',status:'problem',place:'pantheon'},
      {kind:'Tours',icon:'🖼️',name:'Accademia Gallery',date:'Nov 1',sub:'Verify first-Sunday / holiday rules before trip',status:'problem',place:'accademia'},
      {kind:'Tours',icon:'🌳',name:'Boboli Gardens',date:'Nov 1 · optional but wanted',sub:'Skip only if Dennis is not up to it',status:'problem',place:'boboli'},
      {kind:'Flights',icon:'✈️',name:'Dennis Flight Home',date:'Nov 2',sub:'Florence Airport',status:'booked'},
      {kind:'Flights',icon:'✈️',name:'Rycki Flight Home',date:'Nov 7',sub:'Florence Airport',status:'booked'}
    ];
    RESTAURANT_BOOKINGS.forEach(r=>base.push({kind:'Restaurants',icon:'🍴',name:r.name,date:r.date,sub:r.label,status:r.status,place:r.place,site:r.site}));
    const filtered=base.filter(x=>(bookingFilter==='All'||x.kind===bookingFilter) && (!city || !x.place || place(x.place)?.city===city || x.kind==='Flights' || x.kind==='Hotels'));
    return `<section class="screen">${topbar('Bookings & Tickets')}<div class="booking-tabs">${tabs.map(t=>`<button class="${bookingFilter===t?'active':''}" onclick="setBookingFilter('${t}')">${t}</button>`).join('')}</div><div class="content"><h3 style="font-family:Georgia,serif;margin:4px 0 10px">Upcoming Bookings</h3>${filtered.map(x=>`<div class="booking-row"><div class="iconbox">${x.icon}</div><div class="copy"><b>${esc(x.name)}</b><small>${esc(x.date)}</small><small><span class="status-dot ${x.status==='booked'?'green':x.status==='need'?'red':''}"></span>${esc(x.sub)}</small>${bookingPrivate(x.kind,x.name)}${x.site||x.reserve?`<div class="action-row">${x.reserve?`<button class="pill-btn" onclick="openExternal('${js(x.reserve)}')">Reserve Table</button>`:''}${x.site?`<button class="pill-btn gray" onclick="openExternal('${js(x.site)}')">Website</button>`:''}</div>`:''}</div>${x.place?`<button class="pill-btn" onclick="showPlace('${x.place}')">Details</button>`:''}</div>`).join('')}</div>${bottomNav(route.parent==='rome'?'rome':route.parent==='florence'?'florence':route.parent==='home'?'home':'more')}</section>`;
  }
  window.setBookingFilter=t=>{bookingFilter=t;render();};

  function foodScreen(city){
    const items=ITALY_TRIP_PLACES.filter(p=>['food','beer'].includes(p.type) && (!city || p.city===city));
    return `<section class="screen">${topbar(city?`${city} Food & Beer`:'Food & Beer')}<div class="content">${items.map(p=>`<div class="info-row"><div class="emoji">${p.type==='beer'?'🍺':'🍴'}</div><div class="copy"><b>${esc(p.name)}</b><small>${esc(p.note||p.address)}</small><div class="action-row"><button class="pill-btn" onclick="showPlace('${p.id}')">Details</button><button class="pill-btn" onclick="openExternal('${js(appleMapsUrl(p.address))}')">Navigate</button></div></div></div>`).join('')}</div>${bottomNav(city==='Rome'?'rome':city==='Florence'?'florence':'more')}</section>`;
  }

  function italianScreen(params={}){
    if(params.category && params.category!==phraseFilter) phraseFilter=params.category;
    const city=params.city;
    const cats=['All','Favorites','Basics','Dining','Taxi','Shopping','Hotel','Train','Directions','Emergency','Work Italian','Other'];
    const q=phraseQuery.trim().toLocaleLowerCase();
    const hiddenCount=ITALY_TRIP_ITALIAN.filter(p=>!!(user.hiddenPhrases||{})[p.italian]).length;
    const phrases=ITALY_TRIP_ITALIAN.filter(p=>{
      const searchable=[p.italian,p.english,p.say,p.phonetic,p.category].filter(Boolean).join(' ').toLocaleLowerCase();
      if(q && !searchable.includes(q)) return false;
      const cat=p.category;
      const matchesCat=phraseFilter==='All'||
        (phraseFilter==='Favorites' && !!user.phraseFavorites[p.italian])||
        (phraseFilter==='Dining' && cat==='Restaurant')||
        (phraseFilter==='Emergency' && cat==='Help')||
        (phraseFilter==='Work Italian' && cat==='Work')||
        (phraseFilter==='Other' && ['Language','Time'].includes(cat))||
        cat===phraseFilter;
      if(!matchesCat) return false;
      if(city==='Rome' && cat==='Work') return false;
      const hidden=!!(user.hiddenPhrases||{})[p.italian];
      return !hidden || !!q || showHiddenPhrases;
    });
    return `<section class="screen">${topbar('Italian Phrases')}
      <div class="phrase-search"><input id="italian-phrase-search" class="searchbox" type="search" aria-label="Search Italian and English phrases" placeholder="Search Italian or English…" value="${esc(phraseQuery)}" oninput="setPhraseQuery(this.value)"></div>
      <div class="segment phrase-categories" aria-label="Phrase categories">${cats.map(c=>`<button class="${phraseFilter===c?'active':''}" onclick="setPhraseFilter('${c}')">${c}</button>`).join('')}</div>
      <div class="content"><div class="phrase-toolbar"><span>${phrases.length} phrases${hiddenCount?` · ${hiddenCount} hidden`:''}</span><button class="pill-btn gray" onclick="toggleHiddenPhrases()">${showHiddenPhrases?'Hide known':'Show hidden'} (${hiddenCount})</button></div>
      ${phrases.map(p=>phraseRow(p)).join('')||'<div class="empty">No matching phrases. Try another category or search term.</div>'}</div>
      ${bottomNav(route.parent==='rome'?'rome':route.parent==='florence'?'florence':route.parent==='work'?'work':'more')}</section>`;
  }
  function phraseRow(p){
    const fav=!!user.phraseFavorites[p.italian];
    const hidden=!!(user.hiddenPhrases||{})[p.italian];
    const args=[p.italian,p.say||p.phonetic||'',p.english].map(JSON.stringify).join(',');
    return `<div class="phrase-row ${hidden?'phrase-known':''}"><div><b>${esc(p.italian)}</b><div class="pron">${esc(p.say||p.phonetic||'')}</div><div class="english">${esc(p.english)}</div></div><div class="actions"><button class="mini-icon" aria-label="Show ${esc(p.italian)} in large text" title="Show Them" onclick='showPhrase(${args})'>👀</button><button class="mini-icon" aria-label="${fav?'Remove favorite':'Favorite'} ${esc(p.italian)}" title="Favorite" onclick='favoritePhrase(${JSON.stringify(p.italian)})'>${fav?'★':'☆'}</button><button class="mini-icon" aria-label="${hidden?'Unhide':'Hide'} ${esc(p.italian)}" title="${hidden?'Unhide':'Hide'}" onclick='hidePhrase(${JSON.stringify(p.italian)})'>${hidden?'＋':'−'}</button></div></div>`;
  }
  window.toggleHiddenPhrases=()=>{showHiddenPhrases=!showHiddenPhrases;render();};
  window.hidePhrase=k=>{user.hiddenPhrases ||= {};user.hiddenPhrases[k]=!user.hiddenPhrases[k];saveUser();render();};
  window.setPhraseFilter=c=>{phraseFilter=c;render();};
  window.setPhraseQuery=q=>{
    phraseQuery=q;
    const input=document.getElementById('italian-phrase-search');
    const pos=input?.selectionStart;
    render();
    const next=document.getElementById('italian-phrase-search');
    if(next){next.focus({preventScroll:true});try{next.setSelectionRange(pos,pos)}catch(e){}}
  };
  window.favoritePhrase=k=>{user.phraseFavorites[k]=!user.phraseFavorites[k];saveUser();render();};
  window.showPhrase=(italian,pron,english)=>showSheet(`<div class="show-screen"><div class="small-note">SHOW THEM</div><div class="italian">${esc(italian)}</div><div class="pron">${esc(pron)}</div><div class="english">${esc(english)}</div></div>`);

  function nearbyScreen(city){
    const rs=RESTROOMS.filter(x=>x.city===city);
    return `<section class="screen">${topbar(`${city} Near Me`)}<div class="content"><h3 style="font-family:Georgia,serif">🚻 Restrooms</h3>${rs.map(r=>infoPlace('🚻',r.name,`${r.area} · ${r.note}`,r.address)).join('')}<h3 style="font-family:Georgia,serif;margin-top:18px">Quick Searches</h3>${['Pharmacy','Grocery','ATM','Medical'].map(q=>`<button class="nav-card" onclick="confirmMapSearch('${q}')"><span class="icon">${q==='Pharmacy'?'💊':q==='Grocery'?'🛒':q==='ATM'?'🏧':'🩺'}</span><span class="copy">${q}<small>Deliberately open Apple Maps search</small></span></button>`).join('')}</div>${bottomNav(city==='Rome'?'rome':'florence')}</section>`;
  }

  let propertyPhotoTab='Overview';
  const propertyPhotoTabs=['Overview','Nerbona','La Casina','Parking'];
  const propertyPhotos=[
    {src:'nerbona-official-layout.jpg',title:'Original official property map',detail:'Official building reference with Italian annotations.',tabs:['Nerbona']},
    {src:'nerbona-hero.jpg',title:'Nerbona grounds',detail:'Existing property photo from the earlier build.',tabs:['Overview','Nerbona']},
    {src:'nerbona-hero-clean3.jpg',title:'Pool and grounds',detail:'Existing aerial view of the grounds. Pool closed in November.',tabs:['Overview','Nerbona']},
    {src:'nerbona-detail-reception.jpg',title:'Reception building',detail:'Official aerial close-up showing reception and apartments.',tabs:['Overview','Nerbona']},
    {src:'nerbona-detail-villa.jpg',title:'Villa L’Aia',detail:'Official aerial close-up of Villa L’Aia.',tabs:['Overview','Nerbona']},
    {src:'nerbona-detail-courtyard.jpg',title:'Central buildings',detail:'Official aerial close-up of the central buildings.',tabs:['Overview','Nerbona']},
    {src:'nerbona-official-orientation.jpg',title:'Property access areas',detail:'Nerbona’s own annotated map of the grounds.',tabs:['Parking']}
  ];
  window.selectPropertyPhotoTab=tab=>{if(!propertyPhotoTabs.includes(tab))return;propertyPhotoTab=tab;render();};
  window.openPropertyPhoto=i=>{const p=propertyPhotos[i];if(!p)return;showSheet(`<div class="sheet-head"><h2>${esc(p.title)}</h2></div><div class="property-map-zoom"><img src="${p.src}" alt="${esc(p.title)}"></div><p class="small-note">${esc(p.detail)}</p>`);};
  const propertyPins=[
    {n:1,name:'Reception',x:25,y:25},
    {n:2,name:'Tavern',x:58,y:21},
    {n:3,name:'Rostra 1 & 2',x:76,y:22},
    {n:4,name:'Main apartments',x:26,y:48},
    {n:5,name:'Pool · closed Nov',x:88,y:32},
    {n:6,name:'Villa L’Aia',x:83,y:79}
  ];
  function propertyMapVisual(){return `<div class="property-visual"><img src="nerbona-official-layout.jpg" alt="Official Nerbona aerial with numbered English building markers">${propertyPins.map(p=>`<span class="property-pin" style="left:${p.x}%;top:${p.y}%" title="${esc(p.name)}">${p.n}</span>`).join('')}<button class="property-map-open" onclick="openPropertyMap()">⤢ Enlarge map</button></div>`;}
  window.openPropertyMap=()=>showSheet(`<div class="sheet-head"><h2>Nerbona · Building Map</h2></div><p class="small-note">Numbered English markers on Nerbona’s real aerial. Tap a number in the key below to identify the building. The original yellow markings remain part of the source photograph.</p><div class="property-map-zoom"><div class="property-visual"> <img src="nerbona-official-layout.jpg" alt="Official Nerbona aerial">${propertyPins.map(p=>`<span class="property-pin" style="left:${p.x}%;top:${p.y}%">${p.n}</span>`).join('')}</div></div><div class="property-key">${propertyPins.map(p=>`<div><b>${p.n}</b><span>${esc(p.name)}</span></div>`).join('')}</div><p class="small-note">La Casina and guest parking are not identified on this official aerial. Ask reception for exact locations.</p>`);
  let propertyExpanded='reception';
  window.togglePropertyOrientation=id=>{propertyExpanded=propertyExpanded===id?'':id;render();};
  function propertyOrientationItem(id,emoji,title,detail){
    return `<div class="orientation-item"><button class="orientation-toggle" aria-expanded="${propertyExpanded===id}" onclick="togglePropertyOrientation('${id}')"><span>${emoji} ${title}</span><span>${propertyExpanded===id?'⌃':'⌄'}</span></button>${propertyExpanded===id?`<div class="orientation-detail">${detail}</div>`:''}</div>`;
  }
  function propertyPhotosScreen(){
    const shown=propertyPhotos.map((p,i)=>({...p,index:i})).filter(p=>p.tabs.includes(propertyPhotoTab));
    const tabNotes={
      'Nerbona':'Use Nerbona’s original annotated property aerial above to identify the named buildings. Tap to enlarge.',
      'La Casina':'La Casina is the second structure. It has separate guest parking and one free washing machine in the unlocked storage room. The supplied aerial does not identify its exact building position.',
      'Parking':'At the main Nerbona property, guest parking is across the lawn behind the swimming pool. Parking is free and unguarded; keep valuables with you.'
    };
    const overviewItems=[
      ['reception','📍','Reception','Find reception using Nerbona’s original annotated aerial. Office hours are posted at the reception window. Ask staff to confirm your apartment location.'],
      ['main','🏡','Main building','The original property map identifies the buildings by name. Tap to enlarge it; the orientation notes below explain the English terms.'],
      ['casina','🏠','La Casina','This is Nerbona’s second structure, with separate parking and laundry. Its precise location is not established by the supplied aerial.'],
      ['parking','🚗','Guest parking','Main-property guest parking is beyond the lawn behind the pool. Spaces in front of apartments are for luggage loading only; no loading or unloading from 10 PM to 8 AM.'],
      ['laundry','🧺','Laundry','At the main building, two free machines are behind the door marked “SPOGLIATOIO.” At La Casina, one free machine is in the unlocked storage room. Detergent is not provided.']
    ];
    return `<section class="screen">${topbar('Property Map & Photos')}<div class="segment property-tabs">${propertyPhotoTabs.map(t=>`<button class="${t===propertyPhotoTab?'active':''}" onclick="selectPropertyPhotoTab('${t}')">${t}</button>`).join('')}</div>
      ${propertyPhotoTab==='Overview'||propertyPhotoTab==='Nerbona'?`<div class="property-feature"><div class="property-feature-caption">Nerbona · Building overview</div>${propertyMapVisual()}<div class="property-key">${propertyPins.map(p=>`<div><b>${p.n}</b><span>${esc(p.name)}</span></div>`).join('')}</div></div>`:''}
      ${propertyPhotoTab==='La Casina'?`<div class="content"><div class="tip"><b>La Casina</b> is a separate structure. The available official map does not pinpoint its position, so it is intentionally not marked on the aerial. Reception can show you where it is.</div></div>`:''}
      ${shown.length?`<div class="property-gallery-sot">${shown.map((p,j)=>`<button class="property-tile" onclick="openPropertyPhoto(${p.index})" aria-label="View ${esc(p.title)}"><img src="${p.src}" alt="${esc(p.title)}"><span>${esc(p.title)}</span></button>`).join('')}</div>`:''}
      <div class="content property-info">
      ${propertyPhotoTab==='Overview'||propertyPhotoTab==='Nerbona'?`<details class="property-guide"><summary>🇬🇧 Building name guide</summary><p>Reception · Taverna (Tavern) · Granaio (Granary) · Trinciatoio (Threshing room) · Mangiatoia (Barn area) · Forno 1 & 2 (Ovens) · Villa L’Aia · Rostra 1 & 2.</p><small>Only locations supported by the official aerial are pinned. La Casina and parking are not shown as exact points.</small></details>`:''}
      ${propertyPhotoTab==='Overview'?`<div class="orientation-heading"><b>📍 Finding your way around</b><small>Tap a location for useful details</small></div><div class="orientation-list">${overviewItems.map(x=>propertyOrientationItem(...x)).join('')}</div>`:`<div class="tip">${tabNotes[propertyPhotoTab]}</div>`}
      ${propertyPhotoTab==='Nerbona'?propertyOrientationItem('laundry','🧺','Main building laundry','Two free machines are through the door marked “SPOGLIATOIO.” Bring detergent. The pool is closed during your November stay.'):''}
      ${propertyPhotoTab==='La Casina'?propertyOrientationItem('casina','🧺','La Casina laundry and parking','The free machine is in an unlocked storage room. Parking is separate from the main structure; apartment-front spaces are for unloading only.'):''}
      ${propertyPhotoTab==='Parking'?propertyOrientationItem('parking','🚗','Parking restrictions','Do not load or unload in front of apartments between 10 PM and 8 AM. Parking is free, unguarded and not for leaving valuables.'):''}
      <div class="info-row"><div class="emoji">📍</div><div class="copy"><b>Directions to Agriturismo Nerbona</b><small>${esc(WORK.address)}</small><div class="action-row"><button class="pill-btn" onclick="openExternal('${js(appleMapsUrl(WORK.address))}')">Apple Maps</button><button class="pill-btn gray" onclick="showWorkPlace()">Show Driver</button></div></div></div>
      <p class="small-note">Official Nerbona photos and the previous app’s property images are used here. The main map uses English high-contrast labels, with the original Italian map also available; La Casina and guest parking are not individually identified on that map. Confirm locations with reception.</p></div>${bottomNav('work')}</section>`;
  }
  let essentialsQuery='';
  let essentialsSort='distance';
  window.setEssentialsQuery=q=>{essentialsQuery=q;render();};
  window.setEssentialsSort=t=>{essentialsSort=t;render();};
  function essentialsScreen(){
    const tabs=['Groceries','Pharmacies','Restaurants','ATMs','Post Offices'];
    const rows=ESSENTIALS.filter(x=>x.type===essentialFilter&&(!essentialsQuery||`${x.name} ${x.note}`.toLowerCase().includes(essentialsQuery.toLowerCase()))).sort((a,b)=>essentialsSort==='distance'?(a.km??999)-(b.km??999):a.name.localeCompare(b.name));
    const intro=essentialFilter==='Groceries'?'Pick up basic supplies at a small shop or make a full supermarket run.':essentialFilter==='Pharmacies'?'Pharmacy names from the property guide. If urgent, use Emergency Info instead.':essentialFilter==='Restaurants'?'Places suggested in the property guide. Check hours and reserve ahead when appropriate.':essentialFilter==='ATMs'?'ATMs listed by Nerbona. Bank machines may have fees.':'Postal services in Casole d’Elsa and Colle di Val d’Elsa.';
    return `<section class="screen">${topbar('Nearby Essentials')}
      <div class="segment work-subtabs essentials-tabs">${tabs.map(t=>`<button class="${essentialFilter===t?'active':''}" onclick="setEssentialFilter('${t}')">${t}</button>`).join('')}</div>
      <div class="content essentials-content">
        <div class="essentials-intro"><div class="essentials-intro-title">📍 ${esc(essentialFilter)}</div><p>${intro}</p><small>Approximate distances from Nerbona's guest guide, not live routes. Maps and opening hours require internet.</small></div>
        <div class="essentials-search-row"><input aria-label="Search nearby places" class="essentials-search" placeholder="Search ${esc(essentialFilter.toLowerCase())}…" value="${esc(essentialsQuery)}" oninput="window.essentialsQueryDraft=this.value" onkeydown="if(event.key==='Enter')setEssentialsQuery(this.value)"><button class="pill-btn" onclick="setEssentialsQuery(document.querySelector('.essentials-search').value)">Search</button>${essentialsQuery?`<button class="pill-btn gray" onclick="setEssentialsQuery('')">Clear</button>`:''}</div>
        <div class="essentials-sort"><span>${rows.length} ${rows.length===1?'place':'places'}</span><button class="${essentialsSort==='distance'?'selected':''}" onclick="setEssentialsSort('distance')">Nearest first</button><button class="${essentialsSort==='name'?'selected':''}" onclick="setEssentialsSort('name')">A–Z</button></div>
        ${rows.length?rows.map(x=>`<div class="essentials-place"><div class="essentials-place-top"><span class="essentials-place-icon">${x.icon}</span><div class="essentials-place-copy"><b>${esc(x.name)}</b><small>${esc(x.note)}</small></div></div><div class="essentials-address">${x.verifiedAddress?`<b>Street address</b><span>${esc(x.address)}</span>`:`<b>Street address not independently confirmed</b><span>Guest-guide listing only. Search Maps and confirm the correct location before traveling.</span>`}</div><div class="essentials-distance">📍 ${esc(x.distance)}</div><div class="action-row"><button class="pill-btn" onclick="openExternal('${js(appleMapsUrl(x.address))}')">🗺️ ${x.verifiedAddress?'Directions':'Search in Maps'}</button>${x.verifiedAddress?`<button class="pill-btn gray" onclick="copyText('${js(x.address)}')">Copy address</button>`:''}</div></div>`).join(''):`<div class="work-note">No matching places. Try another search or clear the filter.</div>`}
        <div class="work-note"><b>💡 Before you go:</b> These are guest-guide suggestions, not guaranteed open businesses. Street-address entries are displayed when located; unconfirmed entries use a business-name search, never a fabricated address. Confirm the location and opening hours before leaving. For urgent medical help, <button class="inline-work-link" onclick="go('emergency',{},'work')">open Emergency Info →</button></div>
      </div>${bottomNav('work')}</section>`;
  }
  window.setEssentialFilter=t=>{essentialFilter=t;render();};
  let workTransportTab='Drivers';
  window.setWorkTransportTab=t=>{workTransportTab=t;render();};
  function transportScreen(){
    const tabs=['Drivers','Rental','Address','Phrases'];
    const card=(icon,name,detail,phone,address,site)=>`<div class="transport-card"><div class="transport-card-head"><span>${icon}</span><div><b>${esc(name)}</b><small>${esc(detail)}</small></div></div>${address?`<div class="transport-card-address"><b>Address / pickup location</b><span>${esc(address)}</span></div>`:''}<div class="action-row">${phone?`<a class="pill-btn" href="tel:${phone.replace(/[^+0-9]/g,'')}">📞 Call ${esc(phone)}</a><button class="pill-btn gray" onclick="copyText('${js(phone)}')">Copy number</button>`:''}${site?`<button class="pill-btn gray" onclick="openExternal('${js(site)}')">Website ↗</button>`:''}${address?`<button class="pill-btn gray" onclick="openExternal('${js(appleMapsUrl(address))}')">Apple Maps</button>`:''}</div></div>`;
    const phrases=ITALY_TRIP_ITALIAN.filter(p=>['Taxi','Train','Work'].includes(p.category)).slice(0,16);
    let body='';
    if(workTransportTab==='Drivers')body=`<div class="transport-highlight"><small>YOUR NOV 7 AIRPORT TRANSFER</small><h3>🚗 Planned pickup · 8:15 AM</h3><p>Agriturismo Nerbona → Florence Airport (FLR). This is a planning target, <b>not a confirmed booking</b>. Your first flight departs at 1:05 PM. Confirm pickup, fare and travel time with the driver in advance.</p><div class="action-row"><button class="pill-btn" onclick="go('workTravelDay',{},'work')">Flight & checkout details →</button><button class="pill-btn gray" onclick="showWorkPlace()">Show pickup address</button></div></div><div class="work-note">Nerbona's guide recommends <b>booking NCC/private drivers in advance</b>. The guide lists additional driver names without reliably verified direct numbers; rather than offering misleading map searches for people's names, these are practical providers with independently located contact details.</div>
      ${card('🚕','Taxi Valdelsa · Gianni Caciagli','Local taxi and advance transfers · Colle/Valdelsa area','+39 339 449 7423','Via Montenero 15/2, 53036 Poggibonsi SI, Italy','https://www.taxivaldelsa.it/en/home-2/index.html')}
      ${card('🚕','Taxi Colle','Colle di Val d’Elsa taxi / private transfers','+39 335 571 8753','Terminal Bus, Via Romano Bilenchi 79, 53034 Colle di Val d’Elsa SI, Italy',null)}
      ${card('🚕','Co.Ta.S. · Siena Radio Taxi','24-hour dispatch number · Siena-based; confirm rural pickup','+39 0577 49222','Viale Europa 21, 53100 Siena SI, Italy','https://www.taxisiena.it/en/contatti/')}
      ${card('🚙','Shuttle Chianti','Pre-booked NCC private transfers · request a quote','+39 392 924 8553','Strada del Cerro 7/A, 50028 Tavarnelle Val di Pesa FI, Italy',null)}
      <div class="work-note"><b>Booking checklist:</b> confirm Nerbona pickup point, Florence Airport (FLR), Nov 7 at 8:15 AM (or earlier if advised), number of passengers and bags, total quoted fare, payment method, and driver contact. The taxi dispatch services are not confirmed to have vehicles at Nerbona.</div>`;
    else if(workTransportTab==='Rental')body=`<div class="work-note">For countryside travel, arrange a car before the day you need it. Check license requirements, insurance, deposits, automatic vs. manual transmission and pickup hours.</div>
      ${card('🚗','ABC Noleggio / ABC Rent','Local car, van and minibus rental','+39 0577 924542','Via Ferdinando Livini 4A, 53034 Colle di Val d’Elsa SI, Italy',null)}
      ${card('🚗','Royal Rent & Cars','Car and van rental in Colle di Val d’Elsa','+39 366 692 9743','Località Ponte dell’Armi, 53034 Colle di Val d’Elsa SI, Italy',null)}
      ${card('🚲','Nerbona mountain bikes','Guest guide: €5 half-day / €10 full-day; €50 refundable deposit or card guarantee. Ask reception to reconfirm.',null,null,null)}
      <div class="work-note">Rental providers above are local listings, not reservations. Bike prices are from the Nerbona guest guide and may change.</div>`;
    else if(workTransportTab==='Address')body=`<div class="work-address"><div class="work-address-label">SHOW YOUR DRIVER</div><h2>Agriturismo Nerbona</h2><p>${esc(WORK.address)}</p><div class="action-row"><button class="pill-btn" onclick="showWorkPlace()">🇮🇹 Show Driver</button><button class="pill-btn gray" onclick="copyText('${js(WORK.address)}')">Copy Address</button><button class="pill-btn" onclick="openExternal('${js(appleMapsUrl(WORK.address))}')">Apple Maps</button></div></div><div class="transport-card"><b>✈️ Florence Airport (FLR)</b><div class="transport-card-address"><span>Via del Termine 11, 50127 Firenze FI, Italy</span></div><div class="action-row"><button class="pill-btn" onclick="openExternal('${js(appleMapsUrl('Florence Airport, Via del Termine 11, 50127 Firenze FI, Italy'))}')">Airport directions</button><button class="pill-btn gray" onclick="copyText('Florence Airport (FLR), Via del Termine 11, 50127 Firenze FI, Italy')">Copy destination</button></div></div><div class="work-note">Ask the driver to confirm the precise Nerbona pickup spot and how long the journey will take. Navigation requires internet unless you've saved the route in Apple Maps.</div>`;
    else body=`<div class="work-note">Tap a phrase for Italian, pronunciation and English.</div>${phrases.map(p=>phraseRow(p)).join('')}`;
    return `<section class="screen">${topbar('Transportation')}<div class="segment work-subtabs">${tabs.map(t=>`<button class="${workTransportTab===t?'active':''}" onclick="setWorkTransportTab('${t}')">${t}</button>`).join('')}</div><div class="content transport-content">${body}</div>${bottomNav('work')}</section>`;
  }

  function navigateScreen(city){
    const planned=city ? ITALY_TRIP_PLACES.filter(p=>p.city===city && ['sight','area','hotel','station','airport'].includes(p.type)).slice(0,8) : [place('colosseum'),place('navona'),place('rome-hotel'),place('florence-hotel')].filter(Boolean);
    const bbox=city==='Rome'?'12.456,41.883,12.517,41.916':city==='Florence'?'11.234,43.759,11.275,43.789':'11.22,43.75,11.29,43.80';
    return `<section class="screen">${topbar('Navigate')}<div class="phrase-search"><input class="searchbox" placeholder="Search destinations" onkeydown="if(event.key==='Enter')searchPlaces(this.value)"></div><div class="segment"><button class="${!city?'active':''}" onclick="go('navigate',{},'home')">Home</button><button onclick="showWorkPlace()">Nerbona</button><button class="${city==='Rome'?'active':''}" onclick="go('navigate',{city:'Rome'},'rome')">Rome</button><button class="${city==='Florence'?'active':''}" onclick="go('navigate',{city:'Florence'},'florence')">Florence</button></div><div id="numbered-map" class="street-map" data-city="${esc(city||'Florence')}"><iframe title="Street map of ${esc(city||'Florence')}" loading="lazy" src="https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik"></iframe></div><div class="small-note" style="padding:0 16px">Street map requires internet. For directions, use Apple Maps from a destination below.</div><div class="tip" style="margin:10px 16px">🚆 <b>Booked:</b> Roma Termini → Firenze S.M.N. · Oct 31 · 11:50–approximately 13:31. <div class="action-row"><button class="pill-btn" onclick="openExternal('https://www.trenitalia.com/en.html')">Trenitalia routes & times ↗</button><button class="pill-btn gray" onclick="openExternal('https://www.italotreno.com/en')">Italo routes & times ↗</button></div><small>Live timetables need internet. Recheck schedules, service changes and platforms before travel.</small></div><div class="content">${planned.map((p,i)=>`<div class="info-row"><div class="copy"><b>${esc(p.name)}</b><small>${esc(p.address)}</small><small class="nav-distance" data-to="${p.id}" data-from="${i>0?planned[i-1].id:''}">${i>0?'Calculating distance…':'First stop'}</small><div class="action-row"><button class="pill-btn" onclick="showPlace('${p.id}')">Details</button><button class="pill-btn" onclick="openExternal('${js(appleMapsUrl(p.address))}')">Apple Maps</button><button class="pill-btn gray" onclick="showDriver('${p.id}')">Show Driver</button></div></div></div>`).join('')}</div><div class="where-card"><div class="loc">●</div><div class="copy"><b>Where Am I?</b><small>${lastPosition?`${lastPosition.lat.toFixed(5)}, ${lastPosition.lng.toFixed(5)}`:'Tap to get your current location'}</small></div><button class="go-btn" onclick="whereAmI()">➤</button></div>${bottomNav(route.parent==='home'?'home':city==='Rome'?'rome':city==='Florence'?'florence':'more')}</section>`;
  }

  async function fillNavigationDistances(){
    for(const el of document.querySelectorAll('.nav-distance[data-from]')){
      const from=place(el.dataset.from),to=place(el.dataset.to);
      if(!from||!to)continue;
      if(from.city!==to.city){el.textContent='Different city · use Apple Maps for route';continue;}
      try{const km=await walkingRouteDistance(from,to);if(el.isConnected)el.textContent='From previous list stop: '+distanceLabel(km);}
      catch(e){if(el.isConnected)el.textContent='Distance unavailable offline';}
    }
  }
  const navDistanceObserver=new MutationObserver(()=>{
    if(document.querySelector('.nav-distance:not([data-started])')){
      document.querySelectorAll('.nav-distance').forEach(e=>e.dataset.started='1');
      fillNavigationDistances();
    }
  });
  navDistanceObserver.observe(document.body,{childList:true,subtree:true});
  function moneyScreen(){
    const r=Number(user.exchangeRate)||1.17;
    return `<section class="screen">${topbar('Currency Converter')}<div class="currency-card"><div class="currency-input"><div><div class="flag">🇪🇺</div><div class="currency-label">EUR<br>Euro (€)</div></div><input id="eurInput" inputmode="decimal" value="100" oninput="convertCurrency('EUR')"></div></div><button class="swap" onclick="swapCurrency()">⇄</button><div class="currency-card"><div class="currency-input"><div><div class="flag">🇺🇸</div><div class="currency-label">USD<br>US Dollar ($)</div></div><input id="usdInput" inputmode="decimal" value="${(100*r).toFixed(2)}" oninput="convertCurrency('USD')"></div></div><div class="content"><div class="small-note" style="text-align:center;margin-bottom:12px">1 EUR = <input id="rateInput" style="width:68px;border:0;border-bottom:1px solid #aaa;background:transparent;text-align:center" value="${r}" onchange="saveRate(this.value)"> USD · saved for offline use</div><h3 style="font-family:Georgia,serif">Quick Amounts</h3><div class="quick-amounts">${[5,10,20,50,100,200,500].map(v=>`<button onclick="quickAmount(${v})">€${v}</button>`).join('')}</div></div><div class="tip"><b>Tip:</b> In Italy, choose <b>EUR</b> at card terminals instead of USD. Chase Sapphire Preferred and Capital One are your go-to travel cards.</div>${bottomNav('more')}</section>`;
  }
  window.convertCurrency=base=>{const r=Number(user.exchangeRate)||1.17, e=document.getElementById('eurInput'),u=document.getElementById('usdInput'); if(!e||!u)return; if(base==='EUR')u.value=((Number(e.value)||0)*r).toFixed(2); else e.value=((Number(u.value)||0)/r).toFixed(2);};
  window.quickAmount=v=>{const e=document.getElementById('eurInput'); if(e){e.value=v;convertCurrency('EUR');}};
  window.saveRate=v=>{const n=Number(v);if(n>0){user.exchangeRate=n;saveUser();convertCurrency('EUR');toast('Rate saved ✓');}};
  window.swapCurrency=()=>toast('Enter either EUR or USD — both update each other');

  let offlineTab='maps';
  window.setOfflineTab=(tab)=>{offlineTab=tab;render();};
  window.openOfflineMaps=(place)=>{
    const q=encodeURIComponent(place);
    // Web-based Apple Maps destination; never claims an offline download has completed.
    openExternal('https://maps.apple.com/?q='+q);
  };
  window.checkItalyOffline=async()=>{
    const el=document.getElementById('italy-offline-results');if(!el)return;el.textContent='Checking saved app resources…';
    const required=['index.html','preview-app.js','preview.css','travel-documents.js','trip-core.js','rome-photo.jpg','florence-photo.jpg','work-group-photo.jpg'];
    const found=[];for(const file of required){let ok=false;try{const cachesList=await caches.keys();for(const name of cachesList){if(!name.startsWith('italy-2026-'))continue;const cache=await caches.open(name);if(await cache.match('./'+file)){ok=true;break;}}}catch(e){}found.push([file,ok]);}
    const vault=!!localStorage.getItem('italy2026-encrypted-vault-v1');let docs='unavailable';try{const count=await window.TravelDocs.counts();docs=count+' encrypted document(s) stored';}catch(e){}
    el.innerHTML=found.map(([name,ok])=>`<div>${ok?'✅':'⚠️'} ${esc(name)}</div>`).join('')+`<div>${vault?'✅':'⚠️'} Encrypted private vault copy ${vault?'present':'not found on this device'}</div><div>📁 ${esc(docs)}</div><p>Cached resources and stored files do not guarantee the documents decrypt correctly. Open your tickets in airplane mode to finish testing. Apple/Google offline map downloads cannot be checked here.</p>`;
  };
  function offlineScreen(){
    const tabs=[['maps','Maps'],['phrases','Phrases'],['itineraries','Itineraries'],['tickets','Tickets']];
    const maps=[['Rome','Rome, Italy','Download the Rome area in Apple Maps before departure'],['Florence','Florence, Italy','Download central Florence and surrounding streets'],['Nerbona / Tuscany',WORK.address,'Download the Nerbona, Colle di Val d’Elsa and San Gimignano area']];
    const item=(icon,title,subtitle,action,label='Open')=>`<div class="info-row"><div class="emoji">${icon}</div><div class="copy"><b>${esc(title)}</b><small>${esc(subtitle)}</small><div class="action-row"><button class="pill-btn" onclick="${action}">${label} →</button></div></div></div>`;
    let body='';
    if(offlineTab==='maps'){
      body=`<div class="tip"><b>Apple Maps downloads are managed on your iPhone.</b> Open Maps, tap your profile photo, then Offline Maps → Download New Map. This app cannot verify whether a region has been downloaded. Street maps and live routes may require internet.</div>`+
        maps.map(([name,address,desc])=>item('🗺️',name,desc,`openOfflineMaps('${js(address)}')`,'View area')).join('');
    }else if(offlineTab==='phrases'){
      body=`<div class="tip">Italian phrases are included in the app for offline use once the app is cached. Your favorites and hidden phrases are saved on this device.</div>`+
        item('💬','All Italian phrases','Search English or Italian, including hidden phrases',`go('italian',{},'offline')`,'Browse phrases');
    }else if(offlineTab==='itineraries'){
      body=`<div class="tip">Saved itineraries and Rest Mode use built-in trip information and your device-local preferences. Live maps and routing still require connectivity.</div>`+
        item('🏛️','Rome itinerary','Select any day and review the schedule',`go('itinerary',{city:'Rome'},'offline')`,'View Rome')+
        item('🌸','Florence itinerary','Select any day; use Rest Mode to prioritize breaks',`go('itinerary',{city:'Florence'},'offline')`,'View Florence')+
        item('🏡','Work Stay','Nerbona information and work schedule',`go('work',{},'offline')`,'View Work');
    }else{
      body=`<div class="tip">Booking notes are built into the app. Tickets and PDFs are only available offline if you have saved them on your phone (for example in Files). The app cannot verify external downloads.</div>`+
        item('🎟️','Bookings & Tickets','Flights, hotels, train, attractions and restaurant statuses',`go('bookings',{},'offline')`,'View bookings')+
        item('🔐','Encrypted Travel Documents','Open saved tickets and confirmations on this device',`go('documents',{},'more')`,'Open wallet');
    }
    return `<section class="screen">${topbar('Offline Access')}<div class="segment offline-tabs" role="tablist">${tabs.map(([id,label])=>`<button role="tab" aria-selected="${offlineTab===id}" class="${offlineTab===id?'active':''}" onclick="setOfflineTab('${id}')">${label}</button>`).join('')}</div><div class="content"><div class="td-panel"><b>📱 Offline Readiness</b><p class="td-muted">Check this device’s saved app files, photos, private vault and document count.</p><button class="pill-btn" onclick="checkItalyOffline()">Run offline check</button><div id="italy-offline-results" class="td-muted" style="margin-top:10px"></div></div><h3 style="font-family:Georgia,serif">${tabs.find(t=>t[0]===offlineTab)[1]} · Offline Access</h3>${body}<div class="small-note" style="padding:14px 0">Offline-ready app content is different from downloaded Apple Maps and saved PDFs. Test essential resources in airplane mode before departure.</div></div>${bottomNav('more')}</section>`;
  }

  function emergencyScreen(){
    const ps=ITALY_TRIP_ITALIAN.filter(p=>p.category==='Help').slice(0,8);
    return `<section class="screen">${topbar('Emergency Info')}<div class="content">
      <div class="work-emergency-hero"><small>EMERGENCY · ITALY / EUROPE</small><strong>112</strong><p>Ambulance · Police · Fire</p><a href="tel:112">📞 Call 112</a></div>
      <div class="work-note"><b>🚨 If someone is in immediate danger:</b> Call 112 first. Say your location and what happened. Follow the operator’s instructions. Do not delay calling while looking for a different number.</div>
      <h3 class="work-section-title">📍 Your location · show to responders</h3>
      <div class="work-emergency-address"><b>Agriturismo Nerbona</b><p>${esc(WORK.address)}</p><div class="action-row"><button class="pill-btn" onclick="copyText('${js(WORK.address)}')">Copy address</button><button class="pill-btn gray" onclick="showWorkPlace()">Show full screen</button><button class="pill-btn gray" onclick="openExternal('${js(appleMapsUrl(WORK.address))}')">Apple Maps</button></div></div>
      <div class="info-row"><div class="emoji">🗣️</div><div class="copy"><b>Tell the dispatcher</b><small>“Ho bisogno di aiuto. Sono all’Agriturismo Nerbona, vicino a Colle di Val d’Elsa.”<br>“I need help. I’m at Agriturismo Nerbona, near Colle di Val d’Elsa.”</small><div class="action-row"><button class="pill-btn gray" onclick="copyText('Ho bisogno di aiuto. Sono all’Agriturismo Nerbona, vicino a Colle di Val d’Elsa.')">Copy Italian</button></div></div></div>
      <h3 class="work-section-title">Medical & local assistance</h3>
      <div class="info-row"><div class="emoji">🩺</div><div class="copy"><b>116117 · Non-emergency medical assistance</b><small>Italian out-of-hours medical help where the service operates. Availability and languages vary. If you cannot reach the service or the situation is urgent, use 112.</small><div class="action-row"><a class="pill-btn" href="tel:116117">Call 116117</a><button class="pill-btn gray" onclick="copyText('116117')">Copy number</button></div></div></div>
      <div class="info-row"><div class="emoji">🏥</div><div class="copy"><b>Ospedale Alta Val d’Elsa · Campostaggia</b><small>Hospital in Poggibonsi. Nerbona’s guide lists it at approximately 14 km (8.7 mi); this is not a verified driving route or an emergency transport recommendation.</small><div class="action-row"><button class="pill-btn" onclick="openExternal('${js(appleMapsUrl('Ospedale Alta Val d’Elsa Campostaggia, Località Campostaggia, Poggibonsi, Siena, Italy'))}')">Directions</button><button class="pill-btn gray" onclick="copyText('Ospedale Alta Val d’Elsa Campostaggia, Località Campostaggia, Poggibonsi, Siena, Italy')">Copy location</button></div></div></div>
      <div class="info-row"><div class="emoji">👮</div><div class="copy"><b>Carabinieri · Casole d’Elsa</b><small>Local police station listed in the guest guide. Call 112 for emergencies.</small><div class="action-row"><button class="pill-btn gray" onclick="openExternal('${js(appleMapsUrl('Carabinieri Casole d’Elsa Siena Italy'))}')">Find station</button></div></div></div>
      <h3 class="work-section-title">🏡 Property contacts</h3>
      <div class="info-row"><div class="emoji">☎️</div><div class="copy"><b>Reception · Elena & Cristina</b><small>Office: +39 0577 971066 · office hours are posted at reception.</small><div class="action-row"><a class="pill-btn" href="tel:+390577971066">Call office</a><button class="pill-btn gray" onclick="copyText('+390577971066')">Copy number</button></div></div></div>
      <div class="info-row"><div class="emoji">💬</div><div class="copy"><b>WhatsApp · property issues (messages only)</b><small>+39 348 903 8897 · include your apartment name, the problem, and your location. Not a substitute for 112.</small><div class="action-row"><a class="pill-btn" href="https://wa.me/393489038897" target="_blank" rel="noopener">Open WhatsApp</a><button class="pill-btn gray" onclick="copyText('+393489038897')">Copy number</button></div></div></div>
      <div class="work-note"><b>If reception is unreachable:</b> Nerbona’s guest guide says the housekeeper lives at apartment <b>FRANTOIO</b>, to the right of reception near the gate, upstairs. For emergencies call 112 first.</div>
      <h3 class="work-section-title">🗣️ Emergency Italian phrases</h3>${ps.map(p=>`<button class="em-phrase work-em-phrase-btn" onclick="showPhrase('${js(p.italian)}','${js(p.say||'')}','${js(p.english)}')"><b>✚ ${esc(p.italian)}</b><small>${esc(p.english)}</small></button>`).join('')}
      <div class="work-note"><b>Offline reminder:</b> These numbers and instructions are stored in the app. Phone calls need cellular service; WhatsApp and live maps need a connection. Save your accommodation address before traveling.</div>
      </div>${bottomNav(route.parent==='work'?'work':'more')}</section>`;
  }

  function workOverviewScreen(){
    return `<section class="screen">${topbar('Nerbona Overview')}<div class="photo-hero"><img src="nerbona-aerial.jpg"><div class="caption">Agriturismo Nerbona · Tuscany</div></div><div class="content"><div class="info-row"><div class="emoji">📍</div><div class="copy"><b>${WORK.name}</b><small>${WORK.address}</small><div class="action-row"><button class="pill-btn" onclick="openExternal('${js(appleMapsUrl(WORK.address))}')">Navigate</button><button class="pill-btn gray" onclick="copyText('${js(WORK.address)}')">Copy</button><button class="pill-btn gray" onclick="showDriverAddress('${js(WORK.name)}','${js(WORK.address)}')">Show Driver</button></div></div></div><div class="info-row"><div class="emoji">🕓</div><div class="copy"><b>Check-in / Checkout</b><small>Check-in from ${WORK.checkin} · checkout by ${WORK.checkout}</small></div></div><div class="info-row"><div class="emoji">☎️</div><div class="copy"><b>Property contacts</b><small>${WORK.email}<br>Office ${WORK.phone}<br>WhatsApp messages ${WORK.whatsapp}</small></div></div><div class="info-row"><div class="emoji">🤫</div><div class="copy"><b>Quiet hours</b><small>${WORK.quiet}</small></div></div><h3 style="font-family:Georgia,serif">Compact Work Schedule</h3>${WORK_SCHEDULE.map(([d,s])=>`<div class="info-row"><div class="emoji">📅</div><div class="copy"><b>${esc(d)}</b><small>${esc(s)}</small></div></div>`).join('')}<button class="nav-card blue" onclick="go('workTravelDay',{},'work')"><span class="icon">✈️</span><span class="copy">Nov 7 · Travel Home<small>Checkout steps, transfer, flight reminders</small></span></button></div>${bottomNav('work')}</section>`;
  }

  function workTravelDayScreen(){
    const flights=[
      ['1','Florence (FLR) → Amsterdam (AMS)','DL 9525 · operated by KLM Cityhopper','Sat Nov 7 · 1:05 PM → 3:15 PM','Layover in Amsterdam: 1 hr 55 min'],
      ['2','Amsterdam (AMS) → Atlanta (ATL)','DL 9374 · operated by KLM','Sat Nov 7 · 5:10 PM → 8:40 PM','Layover in Atlanta: 2 hr 30 min · US arrival, immigration/customs and possible baggage recheck'],
      ['3','Atlanta (ATL) → Cleveland (CLE)','DL 1320 · operated by Delta','Sat Nov 7 · 11:10 PM → Sun Nov 8 · 12:57 AM','You arrive home Sunday, November 8']
    ];
    return `<section class="screen">${topbar('Nov 7 · Travel Home')}<div class="content">
      <div class="work-depart-hero"><small>SATURDAY · NOVEMBER 7</small><b>🚗 Leave Nerbona by 8:15 AM</b><p>Suggested pickup time, <strong>not a confirmed transfer booking</strong>. Target Florence Airport around 9:45–10:00 AM for your 1:05 PM departure. Confirm driving time and pickup with the driver; leave earlier if advised.</p></div>
      <div class="work-section-title">Morning timeline</div>
      <div class="info-row"><div class="emoji">🕖</div><div class="copy"><b>7:00–7:45 AM · Final packing & checkout</b><small>Check for chargers, passport, wallet and medication. Take rubbish to bins, tidy kitchen, switch off appliances, and return key to reception or arrange early key drop.</small></div></div>
      <div class="info-row"><div class="emoji">🚗</div><div class="copy"><b>8:15 AM · Planned driver pickup</b><small>Nerbona → Florence Airport (FLR). Allow approximately 1 hr 30–1 hr 45 for planning, <b>not a verified live travel estimate</b>. Confirm the actual route and transfer.</small><div class="action-row"><button class="pill-btn" onclick="openExternal('${js(appleMapsUrl('Florence Airport, Via del Termine 11, Florence, Italy'))}')">Airport in Apple Maps</button></div></div></div>
      <div class="info-row"><div class="emoji">🛄</div><div class="copy"><b>9:45–10:00 AM · Airport target</b><small>Check in / drop bag, clear security and locate the gate. Verify airline check-in cutoffs and terminal instructions.</small></div></div>
      <h3 class="work-section-title">Your booked flights</h3>
      <div class="work-note">Times below come from your Delta ticket receipt and are local to each airport. Flight schedules can change. Check the Fly Delta app the day before and again before departure.</div>
      ${flights.map(([n,route,flight,time,note])=>`<div class="work-flight"><span class="work-flight-no">${n}</span><div><b>${route}</b><small>${flight}</small><strong>${time}</strong><p>${note}</p></div></div>`).join('')}
      <div class="work-note"><b>🇺🇸 Atlanta connection:</b> This is your first arrival in the United States. Plan for immigration/customs and follow the airport’s instructions about checked bags and security before your Cleveland flight. Your 2 hr 30 min connection is scheduled, not guaranteed.</div>
      <div class="info-row"><div class="emoji">📱</div><div class="copy"><b>Friday, Nov 6 · Before bed</b><small>Check in for your flight, verify flight times, confirm driver pickup, save boarding passes, charge devices and set alarms.</small></div></div>
      <div class="action-row"><button class="pill-btn" onclick="go('bookings',{},'more')">✈️ Bookings & Tickets</button><button class="pill-btn gray" onclick="showWorkPlace()">🏡 Show Nerbona Address</button></div>
      </div>${bottomNav('work')}</section>`;
  }

  function houseRulesScreen(){
    const rules=[
      ['🕓','Arrival & departure','Check-in is from 4:00 PM. Checkout is by 10:00 AM.'],
      ['🤫','Quiet hours','Please keep noise down from 2:00–4:00 PM and 10:00 PM–8:00 AM.'],
      ['🚗','Driving on the property','Drive no faster than 5 km/h (about 3 mph) on the property.'],
      ['🅿️','Parking','Parking is free but unguarded. Keep valuables with you. Use the designated guest parking area.'],
      ['🧳','Loading and unloading','The space near the apartments is for loading and unloading only—not regular parking. Do not load or unload between 10:00 PM and 8:00 AM.'],
      ['👥','Shared spaces','Respect other guests, shared spaces, and the property’s posted guidance.'],
      ['🔥','Outdoor cooking','Ask reception for instructions before using shared outdoor cooking areas.']
    ];
    const checkout=[
      ['🧳','Collect belongings','Check cupboards, bathroom, chargers and bedside tables.'],
      ['🗑️','Take out rubbish','Sort waste and take it to the designated containers.'],
      ['🍽️','Leave the kitchen tidy','Clean used dishes and leave the kitchen in good condition.'],
      ['💡','Turn everything off','Turn off lights, stove, oven and heating.'],
      ['🔑','Return the key','Leave your key at reception. Ask staff about arrangements if leaving before reception opens.']
    ];
    return `<section class="screen house-rules-screen">
      ${topbar('House Rules')}
      <div class="content">
        <div class="rules-intro"><span class="rules-intro-icon">🏡</span><div><b>Welcome to Nerbona</b><small>Simple property guidelines for Nov 2–7</small></div></div>
        <div class="rules-important"><span>🤫</span><div><b>Keep these hours in mind</b><p>Quiet time: <strong>2–4 PM</strong> and <strong>10 PM–8 AM</strong>.<br>Vehicle loading/unloading: <strong>8 AM–10 PM only</strong>.</p></div></div>
        <h3 class="rules-heading">During your stay</h3>
        <div class="rules-list">${rules.map(([icon,title,detail])=>`<div class="rules-item"><div class="rules-emoji">${icon}</div><div><b>${title}</b><p>${detail}</p></div></div>`).join('')}</div>
        <h3 class="rules-heading">Saturday, November 7 · Checkout</h3>
        <p class="rules-subtitle">Checkout is by <strong>10:00 AM</strong>. Tap each step as you finish it.</p>
        <div class="rules-checklist">${checkout.map(([icon,title,detail],i)=>`<label class="rules-check"><input type="checkbox" data-rule-check="${i}" onchange="saveHouseRuleChecks()"><span class="rules-check-icon">${icon}</span><span><b>${title}</b><small>${detail}</small></span></label>`).join('')}</div>
        <button class="rules-travel-button" onclick="go('workTravelDay',{},'work')">✈️ November 7 · Travel Home <span>›</span></button>
        <p class="rules-footnote">Based on Nerbona’s official guest instructions. For exceptions or questions, ask reception. The €100 deposit mentioned in general guest rules is not confirmed as applicable to your work booking.</p>
      </div>${bottomNav('work')}
    </section>`;
  }
  window.saveHouseRuleChecks=function(){
    try{localStorage.setItem('italy-house-rules-checks',JSON.stringify([...document.querySelectorAll('[data-rule-check]')].map(el=>el.checked)));}catch(e){}
  };
  function restoreHouseRuleChecks(){
    try{const vals=JSON.parse(localStorage.getItem('italy-house-rules-checks')||'[]');document.querySelectorAll('[data-rule-check]').forEach((el,i)=>{el.checked=!!vals[i]});}catch(e){}
  }

  let duringTab='Basics';
  window.setDuringTab=t=>{duringTab=t;render();};
  function duringStayScreen(){
    const sections={
      Facilities:[
        ['🧺','Main Nerbona laundry','Two free washing machines behind the door marked SPOGLIATOIO. Always accessible. Bring your own detergent.'],
        ['🧺','La Casina laundry','One free washing machine in the open storage room. Bring detergent; ask staff if a machine door is stuck.'],
        ['🅿️','Parking','Main guest parking is across the lawn behind the pool. Free, unguarded; do not leave valuables. La Casina has separate parking.'],
        ['🏊','Pool closed in November','The guest guide lists a seasonal opening of April 25–September 25. No swimming during your Nov 2–7 stay.'],
        ['🚲','Mountain bikes','Ask reception about rental prices and availability.']
      ],
      Recycling:[
        ['📄','Paper & cardboard','Keep clean paper and cardboard separate.'],
        ['🥫','Plastic & cans','Use the multi-material recycling category.'],
        ['🍾','Glass','Use the glass container.'],
        ['🍎','Organic','Food waste goes into organic waste.'],
        ['🗑️','General waste','Use general waste for non-recyclables.'],
        ['🚮','Checkout','Take sorted rubbish to designated bins; La Casina bins are in its parking area.']
      ]
    };
    let body='';
    if(duringTab==='Basics'){
      body=`<div class="work-note"><b>☎️ Elena & Cristina</b> are the property hosts. Office hours are posted at reception. For after-hours property problems, send your apartment name and problem description by WhatsApp.</div>
      <div class="info-row"><div class="emoji">📱</div><div class="copy"><b>WhatsApp · messages only</b><small>+39 348 903 8897</small><div class="action-row"><a class="pill-btn" href="https://wa.me/393489038897" target="_blank" rel="noopener">Open WhatsApp</a><button class="pill-btn gray" onclick="copyText('+393489038897')">Copy number</button></div></div></div>
      <div class="info-row"><div class="emoji">☎️</div><div class="copy"><b>Reception office telephone</b><small>+39 0577 971066</small><div class="action-row"><a class="pill-btn" href="tel:+390577971066">Call office</a><button class="pill-btn gray" onclick="copyText('+390577971066')">Copy number</button></div></div></div>
      <div class="info-row"><div class="emoji">✉️</div><div class="copy"><b>Email</b><small>info@nerbona.com</small><div class="action-row"><a class="pill-btn" href="mailto:info@nerbona.com">Email Nerbona</a></div></div></div>
      <h3 class="work-section-title">📶 Wi-Fi details</h3>
      <div class="work-wifi-card"><b>Main Nerbona building</b><small>Network</small><div class="work-value">Nerbona Guest <button onclick="copyText('Nerbona Guest')">Copy</button></div><small>Password</small><div class="work-value">${privateInline('nerbona_main_password')}</div></div>
      <div class="work-wifi-card"><b>La Casina building</b><small>Network</small><div class="work-value">La Casina wifi <button onclick="copyText('La Casina wifi')">Copy</button></div><small>Password</small><div class="work-value">${privateInline('nerbona_casina_password')}</div></div>
      <div class="work-note">🔐 Passwords appear here only after you unlock your encrypted private copy. The public app does not include them.</div>
      <div class="info-row"><div class="emoji">🏡</div><div class="copy"><b>If reception cannot be reached</b><small>For a serious property issue, the housekeeper lives in apartment FRANTOIO, to the right of reception near the gate, up the stairs. For a medical or safety emergency call 112.</small></div></div>
      <div class="info-row"><div class="emoji">🤫</div><div class="copy"><b>Quiet hours</b><small>2–4 PM and 10 PM–8 AM.</small></div></div>`;
    }else body=`<div class="work-note">${duringTab==='Facilities'?'🧺 Facilities and practical information for your November stay.':'♻️ Follow the property’s posted bin labels if they differ from this summary.'}</div>${sections[duringTab].map(([i,t,d])=>`<div class="info-row"><div class="emoji">${i}</div><div class="copy"><b>${t}</b><small>${d}</small></div></div>`).join('')}`;
    return `<section class="screen">${topbar('During Your Stay')}<div class="segment work-subtabs">${['Basics','Facilities','Recycling'].map(t=>`<button class="${duringTab===t?'active':''}" onclick="setDuringTab('${t}')">${t}</button>`).join('')}</div><div class="content">${body}<div class="action-row"><button class="pill-btn" onclick="go('houseRules',{},'work')">📋 House Rules</button><button class="pill-btn gray" onclick="go('emergency',{},'work')">🆘 Emergency Info</button></div></div>${bottomNav('work')}</section>`;
  }

  function settingsScreen(){
    return `<section class="screen">${topbar('Settings')}<div class="content"><div class="info-row"><div class="emoji">💗</div><div class="copy"><b>Rest Mode</b><small>Highlights rest/taxi/skip-first suggestions without removing plans.</small></div><button class="pill-btn ${user.easyDay?'green':'gray'}" onclick="toggleEasyDay()">${user.easyDay?'ON':'OFF'}</button></div><div class="info-row"><div class="emoji">🔒</div><div class="copy"><b><a href="#" onclick="ItalyVault.open();return false">Unlock / Sync Private Details</a></b><small>Google sign-in and encrypted offline copy.</small></div></div><div class="info-row"><div class="emoji">🔒</div><div class="copy"><b>Private notes stay on this device</b><small>Do not place flight confirmation numbers or private reservation codes in the public GitHub files.</small></div></div><div class="info-row"><div class="emoji">📱</div><div class="copy"><b>App version</b><small>${APP_VERSION}</small></div></div><button class="nav-card" onclick="confirmReset()"><span class="icon">♻️</span><span class="copy">Reset local progress<small>Protected by confirmation</small></span></button></div>${bottomNav('more')}</section>`;
  }
  window.toggleEasyDay=()=>{user.easyDay=!user.easyDay;saveUser();render();};

  function shoppingScreen(){
    const rows=user.shopping||[];
    return `<section class="screen">${topbar('Trip Shopping')}<div class="content">${rows.length?rows.map((x,i)=>`<label class="check-row"><input type="checkbox" ${x.done?'checked':''} onchange="toggleShopping(${i},this.checked)"><span>${esc(x.text)}</span></label>`).join(''):'<div class="empty">Nothing added yet.</div>'}<button class="add-row" onclick="addShopping()">＋ Add Item</button></div>${bottomNav('more')}</section>`;
  }
  window.toggleShopping=(i,v)=>{user.shopping[i].done=v;saveUser();};

  function showPlace(id){
    const p=place(id); if(!p)return;
    const isHotel=p.type==='hotel';
    const photo=isHotel?(p.city==='Rome'?'rome-hero.jpg':'florence-hero.jpg'):'';
    const hotelInfo=isHotel?(p.city==='Rome'?ITALY_TRIP_CORE.hotels.rome:ITALY_TRIP_CORE.hotels.florence):null;
    showSheet(`${isHotel?`<div class="photo-hero" style="margin:0 0 12px"><img src="${photo}" style="height:150px"><div class="caption">${esc(p.city)} lodging</div></div>`:''}<div class="sheet-head"><h2>${esc(p.name)}</h2></div><p>${esc(p.address)}</p>${hotelInfo?`<p class="small-note">${esc(hotelInfo.dates||'')} · ${esc(hotelInfo.note||'')}</p>`:''}${p.note?`<p class="small-note">${esc(p.note)}</p>`:''}<div class="action-row"><button class="pill-btn" onclick="openExternal('${js(appleMapsUrl(p.address))}')">🧭 Navigate</button><button class="pill-btn gray" onclick="copyText('${js(p.address)}')">📋 Copy Address</button><button class="pill-btn gray" onclick="showDriver('${p.id}')">🚕 Show Driver</button></div>`);
  }
  window.showPlace=showPlace;
  window.showDriver=id=>{const p=place(id);if(p)showDriverAddress(p.name,p.address);};
  window.showDriverAddress=(name,address)=>showSheet(`<div class="show-screen"><div class="small-note">MOSTRA ALL'AUTISTA · SHOW DRIVER</div><div class="italian">A questo indirizzo, per favore.</div><div class="pron">ah KWEH-stoh een-dee-REET-tsoh pehr fah-VOH-reh</div><div class="english">To this address, please.</div><div class="show-address">${esc(address)}</div><div class="small-note" style="margin-top:10px">${esc(name)}</div></div>`);
  window.showWorkPlace=()=>showDriverAddress(WORK.name,WORK.address);

  function infoPlace(icon,title,sub,address){return `<div class="info-row"><div class="emoji">${icon}</div><div class="copy"><b>${esc(title)}</b><small>${esc(sub)}</small><div class="action-row"><button class="pill-btn" onclick="openExternal('${js(appleMapsUrl(address))}')">Navigate</button><button class="pill-btn gray" onclick="copyText('${js(address)}')">Copy</button></div></div></div>`;}
  window.confirmMapSearch=q=>showSheet(`<div class="sheet-head"><h2>Search Apple Maps?</h2></div><p>Search for <b>${esc(q)}</b> near you.</p><button class="nav-card blue" onclick="openExternal('${js('https://maps.apple.com/?q='+encodeURIComponent(q))}')"><span class="icon">🗺️</span><span class="copy">Open Apple Maps<small>This deliberately leaves the app</small></span></button>`);

  function showSheet(html){
    const mask=document.createElement('div');mask.className='modal-mask';mask.innerHTML=`<div class="sheet"><div class="sheet-grabber"></div><div style="display:flex;justify-content:flex-end"><button class="xbtn" onclick="this.closest('.modal-mask').remove()">×</button></div>${html}</div>`;mask.addEventListener('click',e=>{if(e.target===mask)mask.remove()});document.body.appendChild(mask);
  }

  function addTask(){ showInputSheet('Add Before Italy item','Task',value=>{user.customTasks.push({when:'Added by you',who:'Both',category:'Custom',task:value});saveUser();render();}); }
  function addPacking(cat){ showInputSheet(`Add to ${cat}`,'Item',value=>{user.customPacking.push({who:'Custom',category:cat,item:value,qty:''});saveUser();render();}); }
  function addShopping(){ showInputSheet('Add Trip Shopping item','Item',value=>{user.shopping.push({text:value,done:false});saveUser();render();}); }
  window.addTask=addTask; window.addPacking=addPacking; window.addShopping=addShopping;
  function showInputSheet(title,label,cb){
    showSheet(`<div class="sheet-head"><h2>${esc(title)}</h2></div><input id="sheetInput" class="searchbox" placeholder="${esc(label)}"><button class="nav-card blue" style="margin-top:10px" onclick="saveSheetInput()"><span class="icon">✓</span><span class="copy">Save</span></button>`);
    window._sheetCb=cb;
  }
  window.saveSheetInput=()=>{const el=document.getElementById('sheetInput');const v=el?.value.trim();if(!v)return;window._sheetCb?.(v);document.querySelector('.modal-mask')?.remove();};

  window.confirmReset=()=>showSheet(`<div class="sheet-head"><h2>Reset local progress?</h2></div><p>This clears checkmarks, custom items, favorites and saved preferences on this device.</p><button class="nav-card coral" onclick="doReset()"><span class="icon">⚠️</span><span class="copy">Yes, reset everything</span></button>`);
  window.doReset=()=>{localStorage.removeItem(KEY);user=loadUser();document.querySelector('.modal-mask')?.remove();render();toast('Local progress reset');};

  function formatDay(date){ return new Date(date+'T12:00:00').toLocaleDateString('en-US',{weekday:'short',month:'short',day:'numeric'}); }
  function js(s){ return String(s).replace(/\\/g,'\\\\').replace(/'/g,"\\'").replace(/\n/g,' '); }

  function render(){
    let html='';
    switch(route.name){
      case 'home': html=homeScreen(); break;
      case 'rome': html=cityScreen('Rome'); break;
      case 'florence': html=cityScreen('Florence'); break;
      case 'work': html=workScreen(); break;
      case 'more': html=moreScreen(); break;
      case 'overview': html=overviewScreen(); break;
      case 'search': html=appSearchScreen(route.params.q); break;
      case 'itinerary': html=itineraryScreen(route.params.city); break;
      case 'arrival': html=arrivalScreen(); break;
      case 'trainDay': html=trainDayScreen(); break;
      case 'packing': html=packingScreen(); break;
      case 'tasks': html=tasksScreen(); break;
      case 'bookings': html=bookingsScreen(route.params.city); break;
      case 'food': html=foodScreen(route.params.city); break;
      case 'italian': html=italianScreen(route.params); break;
      case 'nearby': html=nearbyScreen(route.params.city); break;
      case 'propertyPhotos': html=propertyPhotosScreen(); break;
      case 'workTravelDay': html=workTravelDayScreen(); break;
      case 'essentials': html=essentialsScreen(); break;
      case 'transport': html=transportScreen(); break;
      case 'navigate': html=navigateScreen(route.params.city); break;
      case 'money': html=moneyScreen(); break;
      case 'offline': html=offlineScreen(); break;
      case 'documents': html=documentsScreen(); break;
      case 'travelGuides': html=travelGuidesScreen(); break;
      case 'menuDecoder': html=menuDecoderScreen(); break;
      case 'emergency': html=emergencyScreen(); break;
      case 'workOverview': html=workOverviewScreen(); break;
      case 'houseRules': html=houseRulesScreen(); break;
      case 'duringStay': html=duringStayScreen(); break;
      case 'settings': html=settingsScreen(); break;
      case 'shopping': html=shoppingScreen(); break;
      default: html=homeScreen();
    }
    app.innerHTML=html;
    if(route.name==='menuDecoder') filterMenuDecoder('');
    if(route.name==='documents') window.TravelDocs?.mount(document.getElementById('travel-docs-root'));
    if(document.querySelector('.house-rules-screen'))restoreHouseRuleChecks();
  }

  if('serviceWorker' in navigator){ window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{})); }
  window.addEventListener('italy-vault-change',()=>render());
  render();
})();
