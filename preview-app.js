(() => {
  'use strict';

  const KEY = 'italy2026-v2-user';
  const APP_VERSION = '2026-11-01-dennis-compact-v46';
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






    {city:'Florence',area:'SMN',name:'Public Toilet — Santa Maria Novella',address:'Piazza di Santa Maria Novella 18, 50123 Firenze FI, Italy',note:'Official city facility. Verify hours/fee before relying on it.'},
    {city:'Florence',area:'Central Florence',name:'Central Florence restroom backup',address:'Via della Stufa, 50123 Firenze FI, Italy',note:'Public restroom option in the center; verify posted hours/fee.'},
    {city:'Florence',area:'Boboli',name:'Boboli / Pitti restroom option',address:"Piazza de' Pitti 1, 50125 Firenze FI, Italy",note:'Use attraction facilities when open.'},
    {city:'Florence',area:'Piazzale Michelangelo',name:'Piazzale Michelangelo restroom backup',address:'Piazzale Michelangelo, 50125 Firenze FI, Italy',note:'Use nearby café/venue facilities as needed.'}
  ];

  const RESTAURANT_BOOKINGS = [
    {name:'Rione Brewpub Firenze',date:'Oct 31 · optional',status:'optional',label:'Not reserved',place:'rione',site:'https://www.rionefirenze.com/'},
    {name:'Archea Brewery',date:'Florence backup',status:'optional',label:'Booking unconfirmed',place:'archea'},
    {name:'Chianti Brew Fighters',date:'Florence backup',status:'optional',label:'Booking unconfirmed',place:'chianti-brew'},
    {name:'Alibi Craft Beer & Kitchen',date:'Florence backup',status:'optional',label:'Booking unconfirmed',place:'alibi'}
  ];  const EXTRA_PHRASES = [
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
    ['Sightseeing','Dov’è l’ingresso?','doh-VEH leen-GREHS-soh','Where is the entrance?'],
    ['Sightseeing','A che ora chiude?','ah keh OH-rah KYOO-deh','What time does it close?'],
    ['Train','Andiamo a Firenze Santa Maria Novella','ahn-DYAH-moh ah fee-REN-tseh SAHN-tah mah-REE-ah noh-VEHL-lah','We are going to Firenze Santa Maria Novella'],
    ['Train','Il nostro treno parte alle undici e cinquanta','eel NOH-stroh TREH-noh PAR-teh AHL-leh OON-dee-chee eh cheen-KWAHN-tah','Our train leaves at 11:50'],
    ['Taxi','Ci porti al nostro hotel, per favore','chee POR-tee al NOH-stroh oh-TEHL pehr fah-VOH-reh','Please take us to our hotel'],
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
    {id:'task-extra-phone-storage',when:'1–2 days before',who:'Both',category:'Phone',task:'Free up phone storage',note:'Make room for photos and videos; confirm cloud/photo backup if used.'},
    {id:'task-extra-work-autoreply',when:'1–2 days before',who:'Rycki',category:'Work',task:'Turn on work auto-reply',note:'Set before leaving for the personal portion of the trip.'},
    {id:'task-extra-cat-care',when:'1–2 days before',who:'Both',category:'Home',task:'Print cat-care instructions',note:'Leave an easy-to-find paper copy for the cat sitter.'},
    {id:'task-extra-mow-lawn',when:'1–2 days before',who:'Both',category:'Home',task:'Mow lawn',note:'Weather permitting.'}
  ];
  PREP_EXTRAS.forEach(x => { if(!ITALY_TRIP_LISTS.preTrip.some(y => y.task === x.task)) ITALY_TRIP_LISTS.preTrip.push(x); });

  const PACK_EXTRAS = [
    {id:'pack-extra-saline',who:'Dennis',category:'Health',item:'Saline nasal spray',qty:'1',where:'Personal item',note:'Bring only if recommended/approved by his surgeon.'},
    {id:'pack-extra-ointment',who:'Dennis',category:'Health',item:'Nasal ointment',qty:'1',where:'Personal item',note:'Bring only if recommended/approved by his surgeon.'},
    {id:'pack-extra-afrin',who:'Dennis',category:'Health',item:'Afrin / oxymetazoline',qty:'1',where:'Personal item',note:'Bring/use only if his surgeon specifically recommends it.'},
    {id:'pack-extra-laundry',who:'Rycki',category:'Work Extension',item:'Laundry detergent pods / sheets',qty:'1–2',where:'Suitcase',note:'Nerbona washing machines are free; detergent is not provided.'}
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

  // v21: immutable item IDs, separate from display text and list position.
  // Keep all legacy maps and records for possible later recovery.
  const PROGRESS_BACKUP_KEY = 'italy2026-progress-pre-v19-backup';
  const V21_BACKUP_KEY = 'italy2026-progress-pre-v21-backup';
  function stableId(kind, value){
    const str=kind+'|'+String(value||'').normalize('NFKC').trim().toLowerCase();
    let h=2166136261; for(let i=0;i<str.length;i++){h^=str.charCodeAt(i);h=Math.imul(h,16777619);}
    return kind+'-'+(h>>>0).toString(36);
  }
  function oldTaskId(x){return stableId('task',x.task);}
  function oldPackId(x){return stableId('pack',x.item+'|'+x.who);}
  function taskId(x){return x.id;}
  function packId(x){return x.id;}
  function activityId(date,a){return a.id;}
  function newCustomId(kind){
    if(globalThis.crypto?.randomUUID)return kind+'-custom-'+crypto.randomUUID();
    const bytes=new Uint8Array(16);crypto.getRandomValues(bytes);
    return kind+'-custom-'+Array.from(bytes,x=>x.toString(16).padStart(2,'0')).join('');
  }
  function preserveProgressBackup(){
    try{
      if(!localStorage.getItem(V21_BACKUP_KEY))localStorage.setItem(V21_BACKUP_KEY,localStorage.getItem(KEY)||'{}');
      return true;
    }catch(e){return false;}
  }
  function migrateProgress(){
    if(user.progressV21)return;
    if(!preserveProgressBackup())return; // Never change saved state without a backup.
    user.tasksStable ||= {};user.packingStable ||= {};user.activitiesStable ||= {};
    user.customTasks ||= [];user.customPacking ||= [];
    // Each custom row gets a unique persistent ID, including identical names.
    for(const x of user.customTasks)if(!x.id)x.id=newCustomId('task');
    for(const x of user.customPacking)if(!x.id)x.id=newCustomId('pack');
    // Copy v19/v20 content-hash checkmarks without deleting original keys.
    for(const x of allTasks()){
      const previous=oldTaskId(x);
      if(allTasks().filter(y=>oldTaskId(y)===previous).length!==1)continue; // Ambiguous duplicate: retain legacy record only.
      if(user.tasksStable[previous]===true && !Object.hasOwn(user.tasksStable,taskId(x)))user.tasksStable[taskId(x)]=true;
    }
    for(const x of allPacking()){
      const previous=oldPackId(x);
      if(allPacking().filter(y=>oldPackId(y)===previous).length!==1)continue; // Ambiguous duplicate: retain legacy record only.
      if(user.packingStable[previous]===true && !Object.hasOwn(user.packingStable,packId(x)))user.packingStable[packId(x)]=true;
    }
    // Legacy positional records: migrate only known exact matches, never guess.
    for(const [index,label] of Object.entries(LEGACY_TASK_IDENTITIES)){
      const i=Number(index), x=allTasks()[i];
      if(x && x.task===label && user.tasks?.['t-'+i]===true && !Object.hasOwn(user.tasksStable,taskId(x)))user.tasksStable[taskId(x)]=true;
    }
    for(const [index,label] of Object.entries(LEGACY_PACK_IDENTITIES)){
      const i=Number(index), x=allPacking()[i];
      if(x && x.item+'|'+x.who===label && user.packing?.['p-'+i]===true && !Object.hasOwn(user.packingStable,packId(x)))user.packingStable[packId(x)]=true;
    }
    for(const d of ITALY_TRIP_ITINERARY)for(const [i,a] of d.activities.entries()){
      const previous=stableId('activity',d.date+'|'+(a.ticket||a.place||'')+'|'+a.title);
      if(user.activitiesStable[previous]==='done' && !Object.hasOwn(user.activitiesStable,a.id))user.activitiesStable[a.id]='done';
      const legacy=d.date+'-'+i;
      if(user.activities?.[legacy]==='done' && LEGACY_ACTIVITY_IDENTITIES[legacy]===a.title && !Object.hasOwn(user.activitiesStable,a.id))user.activitiesStable[a.id]='done';
    }
    user.progressV21=true;
    try{saveUser();}catch(e){user.progressV21=false;}
  }
  const LEGACY_TASK_IDENTITIES = {"0": "Verify passports + reservation names", "1": "Confirm Nov 2–7 work offsite logistics", "2": "Plan FCO airport → Rome hotel transfer", "3": "Confirm Nov 2 Florence → work offsite transfer"};
  const LEGACY_PACK_IDENTITIES = {"0": "Passports|Both", "1": "Photo IDs|Both", "2": "Passport copies/photos|Both", "3": "Flights, hotels + train saved offline|Both", "4": "Attraction tickets / QR codes|Both", "5": "Work address, schedule + contacts|Rycki", "6": "No-foreign-transaction-fee cards|Both", "7": "Debit / ATM card|Both", "8": "Euro cash|Both", "9": "Phones|Both", "10": "Phone charging cables|Both", "11": "Italy Type C/F/L adapters|Both", "12": "Multi-port USB / USB-C charger|Both", "13": "Power banks|Both", "14": "Earbuds / headphones|Both", "15": "Watch + charger|Both", "16": "AirTags / luggage trackers|Both", "17": "Work laptop|Rycki", "18": "Laptop charger|Rycki", "19": "Mouse|Rycki", "20": "Headset / headphones|Rycki", "21": "Security key / MFA token|Rycki", "22": "Laptop sleeve|Rycki", "23": "Notebook + pen|Rycki", "24": "Underwear|Rycki", "25": "Socks|Rycki", "26": "Bras|Rycki", "27": "Sleepwear|Rycki", "28": "Casual tops|Rycki", "29": "Layering tanks / tees|Rycki", "30": "Nicer top|Rycki", "31": "Jeans|Rycki", "32": "Comfortable non-jean bottom|Rycki", "33": "Sweaters / cardigans|Rycki", "34": "Blazer|Rycki", "35": "Primary walking sneakers|Rycki", "36": "Second walking / casual shoes|Rycki", "37": "Zip crossbody|Rycki", "38": "Sunglasses|Rycki", "39": "Scarf|Rycki", "40": "Underwear|Dennis", "41": "Socks|Dennis", "42": "Casual tees / henleys / polos|Dennis", "43": "Nicer shirts|Dennis", "44": "Jeans / chinos|Dennis", "45": "Sweater / quarter-zip|Dennis", "46": "Rain-capable jacket|Dennis", "47": "Sleepwear|Dennis", "48": "Walking shoes|Dennis", "49": "Second casual / nicer shoes|Dennis", "50": "Compact umbrella|Both", "51": "Packing cubes|Both", "52": "Zip bags|Both", "53": "Luggage tags|Both", "54": "Foldable tote|Both", "55": "Toothbrushes + toothpaste|Both", "56": "Deodorant|Both", "57": "Shampoo / conditioner / body wash|Both", "58": "Skincare|Rycki", "59": "Makeup + remover|Rycki", "60": "Hairbrush + hair products|Rycki", "61": "Glasses + case|Rycki", "62": "Lip balm|Both", "63": "Tissues|Both", "64": "Hand sanitizer|Both", "65": "Sunscreen|Both", "66": "Prescription medications|Both", "67": "Pain reliever|Both", "68": "Antacid / stomach medicine|Both", "69": "Anti-diarrheal|Both", "70": "Motion-sickness medicine|Both", "71": "Allergy medicine|Both", "72": "Bandages|Both", "73": "Blister patches / moleskin|Both", "74": "Compression socks|Both", "75": "Eye masks|Both", "76": "Earplugs|Both", "77": "Plane snacks|Both", "78": "Reusable water bottles|Both", "79": "Laundry detergent sheets|Rycki", "80": "Laundry bag|Rycki", "81": "Stain pen / wipes|Rycki", "82": "Work-appropriate outfits through Nov 7|Rycki", "83": "Saline nasal spray|Dennis", "84": "Nasal ointment|Dennis", "85": "Afrin / oxymetazoline|Dennis", "86": "Laundry detergent pods / sheets|Rycki"};
  const LEGACY_ACTIVITY_IDENTITIES = {"2026-10-28-0": "Arrive in Rome + get to hotel", "2026-10-28-1": "Hotel rest", "2026-10-28-2": "Short Prati wander", "2026-10-28-3": "Be.Re. + Trapizzino", "2026-10-28-4": "Early night", "2026-10-31-0": "Checkout + get to Roma Termini", "2026-10-31-1": "Train to Florence", "2026-10-31-2": "Taxi to Hotel Milu + decompress", "2026-10-31-3": "Duomo exterior", "2026-10-31-4": "Piazza della Signoria", "2026-10-31-5": "Ponte Vecchio", "2026-10-31-6": "Oltrarno / Santo Spirito wander", "2026-10-31-7": "Rione Brewpub — dinner + beer", "2026-11-02-0": "Breakfast + pack", "2026-11-02-1": "Dennis → Florence Airport", "2026-11-02-2": "Rycki → work retreat near Colle di Val d’Elsa"};

  migrateProgress();
  function daysToGo(){ const trip = new Date('2026-10-28T12:00:00'); const now = new Date(); return Math.max(0,Math.ceil((trip - now)/86400000)); }
  function appleMapsUrl(address){ return `https://maps.apple.com/?daddr=${encodeURIComponent(address)}`; }
  function copy(text){ navigator.clipboard?.writeText(text); toast('Copied ✓'); }
  function toast(text){ toastEl.textContent=text; toastEl.classList.add('show'); setTimeout(()=>toastEl.classList.remove('show'),1400); }
  function openExternal(url){ window.location.href = url; }

  function go(name, params={}, parent){
    historyStack.push(route);
    route = {name,params,parent:parent || route.parent || name};
    render();
    if((name==='dennisHome'||name==='rome') && params.stage){
      const target=document.getElementById('dennis-selected-instructions');
      if(target) target.scrollIntoView({block:'start',behavior:'instant'});
      else window.scrollTo(0,0);
    } else window.scrollTo(0,0);
  }
  function goTop(name){ historyStack=[]; route={name,parent:name,params:{}}; render(); window.scrollTo(0,0); }
  function back(){ route = historyStack.pop() || {name:route.parent,parent:route.parent,params:{}}; render(); window.scrollTo(0,0); }
  window.go = go; window.goTop = goTop; window.back = back; window.copyText = copy; window.openExternal = openExternal;

  function bottomNav(active){
    // One consistent outline SVG style, without colored icon tiles.
    const svg=(body)=>`<svg viewBox="0 0 32 32" width="24" height="24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${body}</svg>`;
    const tabs=[
      ['home',svg('<path d="M4 15 16 5l12 10"/><path d="M7 13v14h18V13M13 27v-9h6v9"/>'),'Home'],
      ['rome',svg('<path d="M3 18l11 2 11-13 3 1-7 15-7 3-4-5-7-1z"/><path d="M13 20l-3-11 3-1 6 8"/>'),'Dennis'],
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

  function quickAccess(){
    const links=[['🔎','Search everything','search'],['✈️','Flight walkthrough','travelGuides'],['📄','Travel Documents','documents'],['🏨','Hotels & addresses','bookings'],['🚆','Train tickets','trainDay'],['🎟️','Tours & meeting points','bookings'],['🆘','Emergency help','emergency'],['📋','Packing & prep','packing']];
    return `<div class="quick-access"><h2>Find it fast</h2><p>Tap a shortcut or search the whole trip.</p><button class="quick-search" onclick="go('search',{},'home')">🔎 Search flights, Dennis, Wi-Fi, tickets, places…</button><div class="quick-grid">${links.slice(1).map(([icon,label,dest])=>`<button onclick="go('${dest}',{},'home')"><span>${icon}</span><b>${label}</b></button>`).join('')}</div></div>`;
  }

  function homeScreen(){
    const tasks=allTasks(), pack=allPacking();
    const td=tasks.filter(x=>user.tasksStable?.[taskId(x)]).length, pd=pack.filter(x=>user.packingStable?.[packId(x)]).length;
    const prepPct=Math.round((td/Math.max(1,tasks.length))*100), packPct=Math.round((pd/Math.max(1,pack.length))*100);
    return `<section class="screen">
      <div class="hero home"><img src="italy-collage.jpg" alt="Photographs of Italy and Tuscany"><div class="hero-copy"><h1>Italy 2026</h1><p>October 28 – November 7</p></div></div>
      <div class="home-card">
        <div class="countdown-line"><span class="countdown-icon" aria-hidden="true">✈</span><span>${daysToGo()} days to go</span></div>
        <div class="progress-pair">
          <div class="ring-stat"><div class="ring" style="--p:${prepPct}"><span>${td}/${tasks.length}</span></div><small>Prep completed</small></div>
          <div class="ring-stat"><div class="ring" style="--p:${packPct}"><span>${pd}/${pack.length}</span></div><small>Packed</small></div>
        </div>
        <div class="update-note">Your progress saves on this device</div>
      </div>
      <div class="stack"><button class="nav-card coral" onclick="go('dennisHome',{},'home')"><span class="icon">✈️</span><span class="copy">Dennis Goes Home<small>Nov 2 · what to do next, airports, customs & help · offline</small></span></button></div>
      ${quickAccess()}
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
    if(city==='Rome')return dennisHomeScreen();
    const isRome=city==='Rome';
    const dates=isRome?'Oct 28 – Oct 31':'Oct 31 – Nov 2';
    const img='florence-photo.jpg';
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
    
    ['FLR','Florence Peretola','https://www.aeroporto.firenze.it/'],
    ['AMS','Amsterdam Schiphol','https://www.schiphol.nl/en/'],
    ['ATL','Atlanta Hartsfield-Jackson','https://www.atl.com/'],
    ['DTW','Detroit Metro','https://www.metroairport.com/']
  ];
  function beginnerFlightGuide(){
    const stages=[
      ['24 hours before','Open the airline app and check in. Confirm passenger name, flight numbers, baggage rules, connection times and any schedule changes. Save boarding passes to your phone and take screenshots as a backup.'],
      ['Before leaving','Keep passports, phones, medication and chargers in your carry-on. For international flights, aim to reach the airport about 3 hours before departure unless the airline advises otherwise.'],
      ['At the departure airport','Find the airline check-in or bag-drop signs. If you have checked luggage, verify its final destination with the agent. Follow Departures → Security; have your boarding pass and passport accessible.'],
      ['After security','Look up your flight number on airport monitors and the airline app. Find the terminal and gate; they may change. Go to the gate before boarding begins, not merely before takeoff.'],
      ['Boarding','Listen for your boarding group or zone. Scan your boarding pass, show your passport if requested, find your row and seat, and stow bags as instructed.'],
      ['International connections','Follow Connections/Transfer signs, not Baggage Claim unless directed. Passport control may occur at the first Schengen airport when entering Europe or the last Schengen airport when leaving. Security screening may be repeated; follow local signs.'],
      ['First airport in the United States','Expect U.S. passport/immigration inspection, customs, and potentially collecting and rechecking your checked bag before another security screening. Follow the airline and airport instructions.'],
      ['If something changes','A gate, terminal, boarding time, or flight can change. Airline app and airport monitors take priority over this offline guide. If a connection is at risk, speak to the airline transfer desk immediately.']
    ];
    return `<div class="td-panel"><h3>✈️ First-time flyer: what to do next</h3><p>Times below are airport-local. Gates and terminals are <b>not confirmed</b> in this offline app; check the airline app and airport screens.</p>${stages.map(([name,body],i)=>`<details class="flight-step" ${i===0?'open':''}><summary>${i+1}. ${esc(name)}</summary><p>${esc(body)}</p></details>`).join('')}<div class="action-row"><button class="pill-btn" onclick="go('workTravelDay',{},'work')">Rycki · Nov 7 flight legs</button><button class="pill-btn gray" onclick="go('bookings',{},'more')">Rycki & Dennis · bookings</button><button class="pill-btn gray" onclick="go('documents',{},'more')">Boarding passes & PDFs</button></div></div>`;
  }
  function routeSpecificFlightGuide(){
    const steps=[
      ['Dennis · return · Nov 2','At Florence (FLR), check in and verify the flight numbers, connection airport, checked-bag destination and gate using his airline booking. At a European connection, follow Transfer signs; Schengen exit passport control may occur at the last Schengen airport. At the first U.S. airport, expect immigration, customs, possible bag recheck and another security screening before the Cleveland flight. The verified screenshot shows DL8565 FLR–CDG, DL0229 CDG–DTW, and DL4954 DTW–CLE; recheck all gates and times on travel day.'],
      ['Rycki · Nov 7 · Florence to Amsterdam','FLR → AMS · DL 9525, operated by KLM Cityhopper · departs 1:05 PM, arrives 3:15 PM (local times). Check in with the operating airline, drop checked luggage if needed, pass security, and confirm your gate on screens. Amsterdam is your connection to a non-Schengen flight.'],
      ['Rycki · Nov 7 · Amsterdam connection','Scheduled connection: 1 hr 55 min. Follow Transfer / Connecting Flights signs to DL 9374 (operated by KLM). Expect Schengen exit passport control on the way to the U.S.-bound departure area; additional checks depend on the airport. Verify your gate immediately. Flight departs 5:10 PM local time.'],
      ['Rycki · Nov 7 · Atlanta connection','Arrive ATL 8:40 PM local time on DL 9374. Scheduled connection: 2 hr 30 min. Follow U.S. immigration and customs instructions; ask whether checked bags must be collected and rechecked, then follow signs for connecting flights and security. DL 1320 to Cleveland is scheduled for 11:10 PM local time.'],
      ['Rycki · Nov 8 · Cleveland arrival','DL 1320 is scheduled to arrive at CLE at 12:57 AM Sunday, Nov 8. Follow baggage claim signs, confirm the carousel, and arrange your ride. Arrival and gate times can change.']
    ];
    return `<div class="td-panel"><h3>🧭 Your actual travel days · step by step</h3><p>All times are local to each airport. Live gates and terminals must be checked in the airline app. Missing booking details are explicitly marked unverified.</p>${steps.map(([title,body])=>`<details class="flight-step"><summary>${esc(title)}</summary><p>${esc(body)}</p></details>`).join('')}<div class="action-row"><button class="pill-btn" onclick="go('bookings',{},'more')">Find private confirmations</button><button class="pill-btn gray" onclick="go('documents',{},'more')">Open boarding passes</button><button class="pill-btn gray" onclick="go('workTravelDay',{},'work')">Nov 7 flight details</button></div></div>`;
  }
  function travelGuidesScreen(){
    const florence=place('florence-hotel');
    const transfers=[
      ['🚕','Firenze S.M.N. → Florence hotel','October 31 · arrive 13:31. Use the official taxi stand or walk only if convenient with luggage.',florence?.address],
      ['🌿','Florence → Nerbona','November 2 · use the confirmed group transfer if provided; do not assume a pickup point until confirmed.',WORK.address]
    ];
    return `<section class="screen">${topbar('🗺 Airport & Transfer Guides')}<div class="content"><div class="wallet-intro"><h2>Easy Travel Days</h2><p>These transfer instructions are available offline. Official airport websites require internet.</p></div>${routeSpecificFlightGuide()}${beginnerFlightGuide()}<h3>Airport information</h3>${AIRPORTS.map(([code,name,url])=>`<div class="info-row"><div class="emoji">✈️</div><div class="copy"><b>${code} · ${name}</b><small>Gate assignments and routes may change. Check the airline app on travel day.</small><div class="action-row"><button class="pill-btn gray" onclick="openExternal('${url}')">Official airport website ↗</button></div></div></div>`).join('')}<h3>Transfers · show the driver</h3>${transfers.map(([icon,title,desc,address])=>`<div class="info-row"><div class="emoji">${icon}</div><div class="copy"><b>${esc(title)}</b><small>${esc(desc)}</small>${address?`<small><b>${esc(address)}</b></small><div class="action-row"><button class="pill-btn gray" onclick="copyText('${js(address)}')">Copy address</button><button class="pill-btn" onclick="showDriverAddress('${js(title)}','${js(address)}')">Show driver</button></div>`:''}</div></div>`).join('')}</div>${bottomNav('more')}</section>`;
  }
  const MENU_ITEMS = [
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
        ${menuRow('✈️','blue','Dennis Goes Home','Four airports, customs, declarations, phrases · offline',`go('dennisHome',{},'more')`)}
        ${menuRow('🔎','blue','Search Everything','Find flights, Dennis, hotels, Wi-Fi, tickets and more',`go('search',{},'more')`)}
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


  function searchEntries(){
    const entries=[];
    const add=(icon,title,detail,terms,dest,params={})=>entries.push({icon,title,detail,terms:`${title} ${detail} ${terms}`.toLowerCase(),dest,params});
    add('✈️','Dennis — flights & confirmation','Departure and return bookings; private confirmation in unlocked travel details','dennis delta confirmation number flight reservation pnr ticket', 'bookings');
    add('✈️','Rycki — flights & confirmation','Flight bookings and private details','rycki flight delta confirmation number ticket', 'bookings');
    add('🔐','Travel Documents','Open saved encrypted tickets, PDFs and receipts','pdf passport voucher flight hotel confirmation dennis rycki document wallet', 'documents');
    add('🚆','Rome → Florence train','October 31 · 11:50 AM · Roma Termini → Firenze SMN','italo 8914 coach seat train ticket booking departure arrival', 'trainDay');
    add('🏨','Florence hotel','Oct 31–Nov 2 · Via de’ Tornabuoni 8','florence hotel address milu accommodation check in', 'bookings');
    add('📍','Nerbona address & contacts','Work stay · Nov 2–7','work house host telephone phone contact property', 'workOverview');
    add('📶','Wi-Fi and house instructions','Network details, laundry, property information','wifi internet password laundry nerbona house rules', 'duringStay');
    add('🚗','Airport and transfer guides','Departure, arrival and ground transportation','airport driver transfer taxi flight check in travel home', 'travelGuides');
    add('🗓️','Daily itinerary','Florence day-by-day plans','today tomorrow schedule activities itinerary time', 'overview');
    add('🧳','Packing list','Your checked and unchecked items','suitcase packing luggage clothes', 'packing');
    add('📋','Before Italy checklist','Preparation tasks and saved progress','tasks preparation todo', 'tasks');
    add('🆘','Emergency contacts','Emergency number and assistance','police hospital doctor medical pharmacy help emergency', 'emergency');
    add('💶','Currency converter','EUR ↔ USD','euro money exchange cash', 'money');
    add('🍝','Italian menu decoder','Food translations and ingredients','restaurant food translate menu allergy', 'menuDecoder');
    add('🗺️','Maps and directions','Destinations and navigation','maps location navigate driving walking', 'navigate');
    ITALY_TRIP_ITINERARY.forEach(day=>day.activities.forEach(a=>add('🗓️',a.title,`${day.date} · ${day.city}${a.time?' · '+a.time:''}`,`${a.note||''} ${a.place||''} ${day.title}`, 'itinerary',{city:day.city})));
    ITALY_TRIP_PLACES.forEach(p=>add('📍',p.name,p.address||'',`${p.city||''} ${p.note||''}`, 'place',{id:p.id}));
    return entries;
  }
  function appSearchScreen(q){
    const query=(q||'').trim().toLocaleLowerCase();
    const words=query.split(/\s+/).filter(Boolean);
    const matches=words.length?searchEntries().filter(x=>words.every(w=>x.terms.includes(w))).slice(0,45):[];
    const phrases=words.length?ITALY_TRIP_ITALIAN.filter(p=>words.every(w=>`${p.italian} ${p.english} ${p.category}`.toLocaleLowerCase().includes(w))).slice(0,6):[];
    const tasks=words.length?allTasks().filter(x=>words.every(w=>`${x.task} ${x.category||''}`.toLocaleLowerCase().includes(w))).slice(0,6):[];
    const suggestions=['Dennis','confirmation','train','hotel','Paris','Wi-Fi','airport','tickets'];
    return `<section class="screen">${topbar('Search everything')}<div class="content"><form class="global-search-form" onsubmit="event.preventDefault();runAppSearch(document.getElementById('global-search').value)"><input id="global-search" class="searchbox" type="search" value="${esc(q||'')}" placeholder="Search anything about your trip…" aria-label="Search trip information"><button type="submit" class="pill-btn">Search</button></form>${!words.length?`<p>Popular searches</p><div class="search-suggestions">${suggestions.map(w=>`<button onclick="runAppSearch('${js(w)}')">${esc(w)}</button>`).join('')}</div>`:''}${matches.length?`<h3>Trip information (${matches.length})</h3>${matches.map(x=>`<button class="search-result" onclick="${x.dest==='place'?`showPlace('${js(x.params.id)}')`:`go('${x.dest}',${JSON.stringify(x.params).replace(/"/g,'&quot;')},'more')`}"><span>${x.icon}</span><span><b>${esc(x.title)}</b><small>${esc(x.detail)}</small></span><span>›</span></button>`).join('')}`:''}${tasks.length?`<h3>Preparation tasks</h3>${tasks.map(x=>`<button class="search-result" onclick="go('tasks',{},'more')"><span>☑️</span><span><b>${esc(x.task)}</b><small>Open checklist</small></span><span>›</span></button>`).join('')}`:''}${phrases.length?`<h3>Italian phrases</h3>${phrases.map(x=>phraseRow(x)).join('')}`:''}${words.length&&!matches.length&&!tasks.length&&!phrases.length?'<p>No matching trip information. Try a shorter word or another name.</p>':''}<div class="tip">🔒 Private confirmation numbers and document contents are not indexed here. Search opens the relevant bookings or encrypted Travel Documents, so private information stays on your device.</div></div>${bottomNav('more')}</section>`;
  }
  window.runAppSearch=q=>{historyStack.push(route);route={name:'search',params:{q},parent:'more'};render();window.scrollTo(0,0);};

  function overviewScreen(){
    const items=[
      
      ['Nov 1','🌸 Florence Day 2 · David, Boboli, sunset'],['Nov 2','✈️ Dennis home · Rycki → Nerbona'],
      ['Nov 2–7','💼 Tuscany work stay'],['Nov 7','✈️ Rycki flies home']
    ];
    return `<section class="screen">${topbar('Trip Overview')}<div class="content"><button class="nav-card blue" onclick="go('rome',{},'rome')"><span class="icon">🛬</span><span class="copy">Dennis Goes Home<small>Flights, airport maps and assistance</small></span></button><button class="nav-card green" style="margin-top:8px" onclick="go('trainDay',{},'home')"><span class="icon">🚆</span><span class="copy">Rome → Florence Train Day<small>Hotel → Termini → Firenze SMN → Hotel Milu</small></span></button>${items.map(([d,t])=>`<div class="info-row"><div class="emoji">${t.slice(0,2)}</div><div class="copy"><b>${d}</b><small>${esc(t.slice(3))}</small></div></div>`).join('')}</div>${bottomNav('home')}</section>`;
  }

  function arrivalScreen(){
    return dennisHomeScreen();
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
      const globalKey=selected.date+'-'+i, state=user.activitiesStable[activityId(selected.date,a)]||'pending';
      const rest=a.easy==='protect-rest';
      const suggestion=user.easyDay?(rest?'🟢 PROTECT THIS BREAK':a.easy==='taxi'?'🔵 TAXI / TRANSIT RECOMMENDED':a.easy==='skip-first'?'🟠 OPTIONAL':a.type==='optional'?'🟡 OPTIONAL · SHORTEN IF TIRED':'🟢 KEEP · PRIORITY'):'';
      const klass=user.easyDay?(a.easy==='skip-first'?'rest-optional':rest?'rest-protect':a.easy==='taxi'?'rest-transit':'rest-keep'):'';
      const previous=selected.activities.slice(0,i).reverse().find(x=>x.place);
      return `<div class="rest-activity ${klass}"><label class="check-row"><input type="checkbox" ${state==='done'?'checked':''} onchange="setActivity('${activityId(selected.date,a)}',this.checked)"><span><b>${esc(a.time?`${a.time} · ${a.title}`:a.title)}</b><div class="meta">${esc(a.period||'Flexible')}${a.type==='optional'?' · OPTIONAL':''}</div>${suggestion?`<div class="rest-advice">${suggestion}</div>`:''}${a.note?`<div class="meta">${esc(a.note)}</div>`:''}${a.place?`<button type="button" class="pill-btn gray" onclick="event.preventDefault();showActivityPlace('${a.place}','${previous?.place||''}')">Details · distance from previous stop</button>`:''}</span></label></div>`;
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
  window.setActivity=(key,done)=>{user.activitiesStable[key]=done?'done':'pending';saveUser();render();};

  function legacyPackingRecovery(){
    const legacy=user.packing||{};
    const matched=allPacking().filter((x,i)=>legacy['p-'+i]===true && LEGACY_PACK_IDENTITIES[i]===x.item+'|'+x.who && user.packingStable?.[packId(x)]!==true);
    const total=Object.values(legacy).filter(v=>v===true).length;
    if(!total)return '';
    return `<div class="td-panel"><b>🛟 Earlier packing progress found: ${total} checked records</b><p>These are older saved checkmarks. ${matched.length} can be matched to today's items by both original position and item name. Nothing will change without your approval. If you previously had 91/91, some records may belong to a different list version.</p><button class="pill-btn gray" onclick="exportProgressBackup()">Export backup first</button> ${matched.length?`<button class="pill-btn" onclick="recoverLegacyPacking()">Restore ${matched.length} matched items</button>`:''}</div>`;
  }
  window.recoverLegacyPacking=()=>{
    if(!confirm('Restore only older packing records whose position AND item name match? Existing checks will not be removed.'))return;
    if(!preserveProgressBackup()){toast('Backup could not be saved; no changes made');return;}
    const snapshot=JSON.stringify(user);
    const key='italy2026-progress-pre-v23-recovery';
    try{if(!localStorage.getItem(key))localStorage.setItem(key,snapshot);}catch(e){toast('Storage unavailable; no changes made');return;}
    let count=0;
    allPacking().forEach((x,i)=>{if(user.packing?.['p-'+i]===true && LEGACY_PACK_IDENTITIES[i]===x.item+'|'+x.who && user.packingStable?.[packId(x)]!==true){user.packingStable[packId(x)]=true;count++;}});
    try{saveUser();toast(`${count} matched items restored`);render();}catch(e){user=JSON.parse(snapshot);toast('Could not save recovery; original data preserved');}
  };
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
    const done=filtered.filter(z=>user.packingStable[packId(z.x)]).length;
    const groups=[...new Set(filtered.map(z=>z.x.category))];
    return `<section class="screen">${topbar('🧳 Packing')}
      <div class="segment">${filters.map(f=>`<button class="${packingFilter===f?'active':''}" onclick="setPackFilter('${f}')">${f}</button>`).join('')}</div>
      <div class="content"><div class="progress-line"><span>${done} / ${filtered.length} packed</span><small>${Math.round(done/Math.max(1,filtered.length)*100)}%</small></div><div class="bar"><i style="width:${done/Math.max(1,filtered.length)*100}%"></i></div>
      ${legacyPackingRecovery()}
      ${groups.map(g=>{const rows=filtered.filter(z=>z.x.category===g); const gd=rows.filter(z=>user.packingStable[packId(z.x)]).length; return `<div class="packing-group"><div class="packing-head"><span>${packingEmoji(g)}</span>${esc(g)}<small>${gd} / ${rows.length} ›</small></div>${rows.map(({x,i})=>`<label class="check-row"><input type="checkbox" ${user.packingStable[packId(x)]?'checked':''} onchange="togglePacking(${all.indexOf(x)},this.checked)"><span><b>${esc(x.item)}</b>${x.note?`<div class="meta">${esc(x.note)}</div>`:''}</span></label>`).join('')}<button class="add-row" onclick="addPacking('${esc(g)}')">＋ Add Item</button></div>`}).join('')}</div>
      ${bottomNav('more')}</section>`;
  }
  function packingEmoji(g){ const m={'Documents':'🪪','Money':'💳','Electronics':'📱','Work Extension':'💼','Clothes':'👕','Shared':'🧳','Toiletries':'🧴','Health':'💊','Travel Day':'✈️'}; return m[g]||'🧳'; }
  window.setPackFilter=f=>{packingFilter=f;render();};
  window.togglePacking=(i,v)=>{const x=allPacking()[i];if(!x)return;user.packingStable[packId(x)]=v;saveUser();render();};

  function tasksScreen(){
    const a=allTasks(); const done=a.filter(x=>user.tasksStable[taskId(x)]).length;
    return `<section class="screen">${topbar('Before Italy')}<div class="content"><div class="progress-line"><span>${done} / ${a.length} prep completed</span><small>${Math.round(done/Math.max(1,a.length)*100)}%</small></div><div class="bar"><i style="width:${done/Math.max(1,a.length)*100}%"></i></div>${a.map((x,i)=>`<label class="check-row"><input type="checkbox" ${user.tasksStable[taskId(x)]?'checked':''} onchange="toggleTask(${i},this.checked)"><span><b>${esc(x.task)}</b><div class="meta">${esc(x.when||x.timing||'')} · ${esc(x.who||'')}</div>${x.note?`<div class="meta">${esc(x.note)}</div>`:''}</span></label>`).join('')}<button class="add-row" onclick="addTask()">＋ Add Item</button></div>${bottomNav('more')}</section>`;
  }
  window.toggleTask=(i,v)=>{const x=allTasks()[i];if(!x)return;user.tasksStable[taskId(x)]=v;saveUser();render();};

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
  function privateBookingQuickAccess(){
    const entries=Object.entries(window.ItalyVault?.all()||{});
    const matches=entries.filter(([k,v])=>/flight|airline|delta|dennis|rycki|hotel|rome|florence|milu|suri|little.heaven|confirmation|booking|pnr|reference/i.test(k) && String(v).trim());
    const unique=[];const seen=new Set();
    for(const [k,v] of matches){const token=k.toLowerCase().replace(/[^a-z0-9]/g,'')+'|'+String(v);if(!seen.has(token)){seen.add(token);unique.push([k,v]);}}
    return `<div class="td-panel"><h3>🔑 Find your confirmation numbers</h3><p>Unlocked private flight and hotel information appears here. These values are never added to the public website.</p>${window.ItalyVault?.isUnlocked()?unique.length?unique.map(([k,v],i)=>`<div class="info-row"><div class="copy"><b>${esc(k)}</b><small class="private-value">${esc(v)}</small></div><button class="pill-btn gray" onclick="copyPrivateBooking(${i})">Copy</button></div>`).join(''):'<p>No matching flight or hotel fields were found in the private Sheet. Open Travel Documents to check your saved confirmations, or review the private Sheet field names.</p>':'<button class="pill-btn" onclick="ItalyVault.open()">🔒 Unlock private booking details</button>'}<div class="action-row"><button class="pill-btn gray" onclick="go('documents',{},'more')">📄 Open saved confirmations</button><button class="pill-btn gray" onclick="go('travelGuides',{},'more')">✈️ Airport walkthrough</button></div></div>`;
  }
  window.copyPrivateBooking=i=>{const entries=Object.entries(window.ItalyVault?.all()||{});const matches=entries.filter(([k,v])=>/flight|airline|delta|dennis|rycki|hotel|rome|florence|milu|suri|little.heaven|confirmation|booking|pnr|reference/i.test(k) && String(v).trim());const unique=[];const seen=new Set();for(const [k,v] of matches){const token=k.toLowerCase().replace(/[^a-z0-9]/g,'')+'|'+String(v);if(!seen.has(token)){seen.add(token);unique.push([k,v]);}}if(unique[i])copyText(String(unique[i][1]));};
  function bookingsScreen(city){
    const tabs=['All','Flights','Hotels','Trains','Tours','Restaurants'];
    const base=[
      
      
      {kind:'Trains',icon:'🚆',name:'Rome → Florence',date:'Oct 31 · 11:50 AM',sub:'Roma Termini → Firenze SMN · booked',status:'booked',place:'termini'},
      {kind:'Hotels',icon:'🏨',name:'Florence Hotel',date:'Oct 31–Nov 2',sub:ITALY_TRIP_CORE.hotels.florence.name,status:'booked',place:'florence-hotel'},
      {kind:'Tours',icon:'🌳',name:'Boboli Gardens (optional)',date:'Nov 1 · no reservation',sub:'Only if you both want a garden walk; not booked',status:'optional',place:'boboli'},
      {kind:'Flights',icon:'✈️',name:'Dennis Flight Home',date:'Nov 2',sub:'Florence Airport',status:'booked'},
      {kind:'Flights',icon:'✈️',name:'Rycki Flight Home',date:'Nov 7',sub:'Florence Airport',status:'booked'}
    ];
    RESTAURANT_BOOKINGS.forEach(r=>base.push({kind:'Restaurants',icon:'🍴',name:r.name,date:r.date,sub:r.label,status:r.status,place:r.place,site:r.site}));
    const filtered=base.filter(x=>(bookingFilter==='All'||x.kind===bookingFilter) && (!city || !x.place || place(x.place)?.city===city || x.kind==='Flights' || x.kind==='Hotels'));
    return `<section class="screen">${topbar('Bookings & Tickets')}<div class="booking-tabs">${tabs.map(t=>`<button class="${bookingFilter===t?'active':''}" onclick="setBookingFilter('${t}')">${t}</button>`).join('')}</div><div class="content"><button class="pill-btn" onclick="go('travelGuides',{},'more')">✈️ Airport step-by-step guide</button><button class="pill-btn gray" onclick="go('documents',{},'more')">📄 Travel Documents</button>${privateBookingQuickAccess()}<h3 style="font-family:Georgia,serif;margin:4px 0 10px">Upcoming Bookings</h3>${filtered.map(x=>`<div class="booking-row"><div class="iconbox">${x.icon}</div><div class="copy"><b>${esc(x.name)}</b><small>${esc(x.date)}</small><small><span class="status-dot ${x.status==='booked'?'green':x.status==='need'?'red':''}"></span>${esc(x.sub)}</small>${bookingPrivate(x.kind,x.name)}${x.site||x.reserve?`<div class="action-row">${x.reserve?`<button class="pill-btn" onclick="openExternal('${js(x.reserve)}')">Reserve Table</button>`:''}${x.site?`<button class="pill-btn gray" onclick="openExternal('${js(x.site)}')">Website</button>`:''}</div>`:''}</div>${x.place?`<button class="pill-btn" onclick="showPlace('${x.place}')">Details</button>`:''}</div>`).join('')}</div>${bottomNav(route.parent==='rome'?'rome':route.parent==='florence'?'florence':route.parent==='home'?'home':'more')}</section>`;
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
    const planned=city ? ITALY_TRIP_PLACES.filter(p=>p.city===city && ['sight','area','hotel','station','airport'].includes(p.type)).slice(0,8) : [place('florence-hotel'),place('flr')].filter(Boolean);
    const bbox=city==='Rome'?'12.456,41.883,12.517,41.916':city==='Florence'?'11.234,43.759,11.275,43.789':'11.22,43.75,11.29,43.80';
    return `<section class="screen">${topbar('Navigate')}<div class="phrase-search"><input class="searchbox" placeholder="Search destinations" onkeydown="if(event.key==='Enter')searchPlaces(this.value)"></div><div class="segment"><button class="${!city?'active':''}" onclick="go('navigate',{},'home')">Home</button><button onclick="showWorkPlace()">Nerbona</button><button class="${city==='Florence'?'active':''}" onclick="go('navigate',{city:'Florence'},'florence')">Florence</button></div><div id="numbered-map" class="street-map" data-city="${esc(city||'Florence')}"><iframe title="Street map of ${esc(city||'Florence')}" loading="lazy" src="https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik"></iframe></div><div class="small-note" style="padding:0 16px">Street map requires internet. For directions, use Apple Maps from a destination below.</div><div class="tip" style="margin:10px 16px">🚆 <b>Booked:</b> Roma Termini → Firenze S.M.N. · Oct 31 · 11:50–approximately 13:31. <div class="action-row"><button class="pill-btn" onclick="openExternal('https://www.trenitalia.com/en.html')">Trenitalia routes & times ↗</button><button class="pill-btn gray" onclick="openExternal('https://www.italotreno.com/en')">Italo routes & times ↗</button></div><small>Live timetables need internet. Recheck schedules, service changes and platforms before travel.</small></div><div class="content">${planned.map((p,i)=>`<div class="info-row"><div class="copy"><b>${esc(p.name)}</b><small>${esc(p.address)}</small><small class="nav-distance" data-to="${p.id}" data-from="${i>0?planned[i-1].id:''}">${i>0?'Calculating distance…':'First stop'}</small><div class="action-row"><button class="pill-btn" onclick="showPlace('${p.id}')">Details</button><button class="pill-btn" onclick="openExternal('${js(appleMapsUrl(p.address))}')">Apple Maps</button><button class="pill-btn gray" onclick="showDriver('${p.id}')">Show Driver</button></div></div></div>`).join('')}</div><div class="where-card"><div class="loc">●</div><div class="copy"><b>Where Am I?</b><small>${lastPosition?`${lastPosition.lat.toFixed(5)}, ${lastPosition.lng.toFixed(5)}`:'Tap to get your current location'}</small></div><button class="go-btn" onclick="whereAmI()">➤</button></div>${bottomNav(route.parent==='home'?'home':city==='Rome'?'rome':city==='Florence'?'florence':'more')}</section>`;
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
    const required=['index.html','preview-app.js','preview.css','travel-documents.js','trip-core.js','florence-photo.jpg','work-group-photo.jpg'];
    const found=[];for(const file of required){let ok=false;try{const cachesList=await caches.keys();for(const name of cachesList){if(!name.startsWith('italy-2026-'))continue;const cache=await caches.open(name);if(await cache.match('./'+file)){ok=true;break;}}}catch(e){}found.push([file,ok]);}
    const vault=!!localStorage.getItem('italy2026-encrypted-vault-v1');let docs='unavailable';try{const count=await window.TravelDocs.counts();docs=count+' encrypted document(s) stored';}catch(e){}
    el.innerHTML=found.map(([name,ok])=>`<div>${ok?'✅':'⚠️'} ${esc(name)}</div>`).join('')+`<div>${vault?'✅':'⚠️'} Encrypted private vault copy ${vault?'present':'not found on this device'}</div><div>📁 ${esc(docs)}</div><p>Cached resources and stored files do not guarantee the documents decrypt correctly. Open your tickets in airplane mode to finish testing. Apple/Google offline map downloads cannot be checked here.</p>`;
  };
  function offlineScreen(){
    const tabs=[['maps','Maps'],['phrases','Phrases'],['itineraries','Itineraries'],['tickets','Tickets']];
    const maps=[['Florence','Florence, Italy','Download central Florence and surrounding streets'],['Nerbona / Tuscany',WORK.address,'Download the Nerbona, Colle di Val d’Elsa and San Gimignano area']];
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

  window.exportProgressBackup=()=>{
    const keys=['italy2026-progress-pre-v23-recovery',V21_BACKUP_KEY,'italy2026-progress-pre-v20-backup',PROGRESS_BACKUP_KEY,KEY];
    const out={exportedAt:new Date().toISOString(),appVersion:APP_VERSION,progress:{},backups:{}};
    for(const k of keys){
      const raw=localStorage.getItem(k);if(!raw)continue;
      try{
        const data=JSON.parse(raw);
        const safe={};
        for(const field of ['activities','tasks','packing','activitiesStable','tasksStable','packingStable','progressV19','progressV21'])if(Object.hasOwn(data,field))safe[field]=data[field];
        if(k===KEY){out.progress=safe;out.customTasks=(data.customTasks||[]).map(x=>({id:x.id,task:x.task}));out.customPacking=(data.customPacking||[]).map(x=>({id:x.id,item:x.item,who:x.who}));}
        else out.backups[k]=safe;
      }catch(e){out.backups[k]={error:'Could not read backup'};}
    }
    const blob=new Blob([JSON.stringify(out,null,2)],{type:'application/json'});
    const url=URL.createObjectURL(blob),link=document.createElement('a');
    link.href=url;link.download='italy-checklist-progress-backup.json';document.body.appendChild(link);link.click();link.remove();
    setTimeout(()=>URL.revokeObjectURL(url),3000);
  };
  function settingsScreen(){
    return `<section class="screen">${topbar('Settings')}<div class="content"><div class="info-row"><div class="emoji">💗</div><div class="copy"><b>Rest Mode</b><small>Highlights rest/taxi/skip-first suggestions without removing plans.</small></div><button class="pill-btn ${user.easyDay?'green':'gray'}" onclick="toggleEasyDay()">${user.easyDay?'ON':'OFF'}</button></div><div class="info-row"><div class="emoji">🔒</div><div class="copy"><b><a href="#" onclick="ItalyVault.open();return false">Unlock / Sync Private Details</a></b><small>Google sign-in and encrypted offline copy.</small></div></div><div class="info-row"><div class="emoji">🔒</div><div class="copy"><b>Private notes stay on this device</b><small>Do not place flight confirmation numbers or private reservation codes in the public GitHub files.</small></div></div><div class="info-row"><div class="emoji">📱</div><div class="copy"><b>App version</b><small>${APP_VERSION}</small></div></div><div class="info-row"><div class="emoji">💾</div><div class="copy"><b>Export checklist recovery file</b><small>Downloads checklist history only, not your private documents or vault.</small></div><button class="pill-btn" onclick="exportProgressBackup()">Export</button></div><div class="tip">Original checklist records and backups are retained. Some older checkmarks cannot be assigned confidently.</div></div>${bottomNav('more')}</section>`;
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
    const photo=isHotel?'florence-hero.jpg':'';
    const hotelInfo=isHotel?ITALY_TRIP_CORE.hotels.florence:null;
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

  function addTask(){ showInputSheet('Add Before Italy item','Task',value=>{user.customTasks.push({id:newCustomId('task'),when:'Added by you',who:'Both',category:'Custom',task:value});saveUser();render();}); }
  function addPacking(cat){ showInputSheet(`Add to ${cat}`,'Item',value=>{user.customPacking.push({id:newCustomId('pack'),who:'Custom',category:cat,item:value,qty:''});saveUser();render();}); }
  function addShopping(){ showInputSheet('Add Trip Shopping item','Item',value=>{user.shopping.push({text:value,done:false});saveUser();render();}); }
  window.addTask=addTask; window.addPacking=addPacking; window.addShopping=addShopping;
  function showInputSheet(title,label,cb){
    showSheet(`<div class="sheet-head"><h2>${esc(title)}</h2></div><input id="sheetInput" class="searchbox" placeholder="${esc(label)}"><button class="nav-card blue" style="margin-top:10px" onclick="saveSheetInput()"><span class="icon">✓</span><span class="copy">Save</span></button>`);
    window._sheetCb=cb;
  }
  window.saveSheetInput=()=>{const el=document.getElementById('sheetInput');const v=el?.value.trim();if(!v)return;window._sheetCb?.(v);document.querySelector('.modal-mask')?.remove();};

  window.confirmReset=()=>showSheet(`<div class="sheet-head"><h2>Reset local progress?</h2></div><p>This clears checkmarks, custom items, favorites and saved preferences on this device.</p><button class="nav-card coral" onclick="doReset()"><span class="icon">⚠️</span><span class="copy">Yes, reset everything</span></button>`);
  window.doReset=()=>{document.querySelector('.modal-mask')?.remove();toast('Reset disabled to protect your travel progress');};

  function formatDay(date){ return new Date(date+'T12:00:00').toLocaleDateString('en-US',{weekday:'short',month:'short',day:'numeric'}); }

  // Dennis's extended offline airport guide. No PNR, passport or personal identifiers in public source.
  const DENNIS_STAGES = [
    {id:'prep',icon:'🚕',title:'1 · Hotel → Florence airport',sub:'Night before · taxi · departure',steps:[
      ['The night before: verify the flights','In the Delta or operating airline app, check Florence (FLR) departure time, Paris (CDG) connection, Detroit (DTW) flight, Cleveland (CLE) flight, and operating carriers. Screenshot all legs. Check in online if possible. Obtain boarding passes or be ready to get printed ones. Latest Delta screenshot: November 2 departure 6:50 AM, Air France-operated DL8565. Recheck for schedule changes and obtain boarding passes.'],
      ['Book a taxi with the hotel','Ask Hotel Milù reception tonight for a licensed taxi. Hotel: Via de’ Tornabuoni 8, 50123 Firenze. Destination: Aeroporto di Firenze-Peretola (FLR), Departures / Partenze. Confirm the pickup meeting point, total fare/payment and time. Historic-center traffic restrictions may affect pickup location.'],
      ['Decide when to leave','Florence airport recommends arriving at least 2 hours before departure; follow the operating airline’s deadline if earlier. For an early international connection, build extra buffer for luggage, check-in and traffic. Confirm departure time FIRST, then work backward. Do not assume the taxi pickup time from this guide.'],
      ['Pack tonight, not in the morning','Passport, phone, airline booking, boarding passes, wallet, medications, glasses, charging cable, power bank and customs receipts should be accessible. Power banks and spare lithium batteries belong in carry-on, not checked baggage. Keep valuables and necessities in your personal item.'],
      ['Check luggage before leaving','Keep liquids over permitted security limits in checked baggage, subject to airline rules. Protect breakables and bottles, stay within checked-bag allowance, weigh the suitcase and attach a contact tag. Keep purchases/food grouped so they are easy to declare if asked.'],
      ['Leaving hotel','Check room for passport, phone, wallet, charger, outlet adapters and documents. Tell reception you are checking out. Confirm the driver knows FLR Departures. Once in the taxi, verify the destination; keep seat belt fastened.'],
      ['At the airport curb','Get out at Partenze / Departures. Take all your luggage. If no signs are clear, show the Florence Airport phrase card below to a worker.']
    ]},
    {id:'flr',icon:'🛫',title:'2 · Florence (FLR)',sub:'Check-in → bag drop → security → gate',steps:[
      ['Find Departures / Partenze','Enter the airport and follow Partenze / Departures. Look at the flight information displays for the FLR → Paris flight number, departure time and operating airline; this flight is operated by AIR FRANCE (DL8565). Look for Air France check-in or the counter assigned on the FLR flight screens, NOT an assumed Delta counter.'],
      ['Find check-in / bag drop','If checking a suitcase, find the operating airline’s check-in or bag-drop counter on the monitor. Have passport and reservation ready. If no mobile boarding pass was issued, ask for printed boarding passes for all available legs.'],
      ['Confirm the bag destination','Watch the agent print the baggage tag. Ask whether it is tagged CLE (Cleveland). Keep the detachable baggage claim receipt; photograph it. Ask directly what to do with the bag at DTW and whether any special through-baggage handling applies.'],
      ['Verify each boarding pass','Read passenger name, flight number, date, airport, scheduled boarding time and gate if assigned. If a later boarding pass cannot be issued, ask which airline transfer desk can print it at the connection.'],
      ['Move to security','Follow Controlli di sicurezza / Security. Be ready to show your boarding pass. Follow local instructions for liquids, electronics, shoes and jackets; rules can vary by checkpoint. Empty pockets. Do not pack knives or other prohibited cabin items.'],
      ['After screening','Collect passport, phone, laptop and all trays before walking away. Find Partenze / Departures flight screens and identify Paris by flight number. A gate can change even after the pass is issued.'],
      ['Go to the gate early','Locate the gate and stay within hearing distance. Check boarding group and passport. Follow staff if they ask to inspect travel documents again. Board when your group is called.'],
      ['If there is a problem','Missing passport/boarding pass: stop at airline desk before security. Flight canceled: speak with the operating airline immediately for rebooking on the entire itinerary. Do not buy another ticket until they tell you what is possible.']
    ]},
    {id:'cdg',icon:'🇫🇷',title:'3 · Paris (CDG) connection',sub:'Yellow connection signs · passport exit',steps:[
      ['Before landing','Check the next flight number and destination DTW on your saved itinerary. Have passport and boarding pass accessible. Stay seated until instructed to exit.'],
      ['Follow the RIGHT signs','After exiting the aircraft, follow YELLOW Correspondances / Flight Connections signs. Do NOT follow Sortie / Exit or Bagages / Baggage Claim unless staff explicitly directs you.'],
      ['Read the departure screens','Current screenshot shows Delta DL0229, 10:30 AM, Terminal 2E Gate K52 (K gates). Find DL0229 on the live departures monitor and verify its current terminal/area/gate. Gates are live information: never rely on a saved gate number. Follow the airport’s yellow connection route for that gate.'],
      ['Allow for transfer procedures','Depending on arrival/departure gates, follow signage for shuttle/trains, security screening and border control. Florence → Paris is intra-Schengen; Paris → Detroit exits the Schengen area, so expect passport exit control at CDG. Current screenshot: Arrive Terminal 2F at 8:45 AM, depart Terminal 2E K52 at 10:30 AM on Delta-operated DL0229. Gate can change.'],
      ['At passport control','Join the lane staff direct you to for your passport. Present passport and boarding pass. The officer may ask about destination; say you are flying to Detroit and connecting to Cleveland. Do not take pictures at passport control.'],
      ['Baggage in Paris','If your luggage was checked through and the airline told you to transfer airside, normally you do not reclaim it here. If your bag tag is not through-checked or you have separate tickets, confirm with airline staff instead.'],
      ['Find the Detroit gate','Check monitors again after border/security procedures. Walk to the gate promptly; large CDG transfers can take time. Confirm destination and flight number on the gate screen before waiting.'],
      ['If the gate changes / connection is tight','Show the French “I need urgent connection help” card to an employee. Airline staff can advise and may rebook if the inbound flight makes the connection impossible. Do not leave the secure transfer area without instructions.']
    ]},
    {id:'dtw',icon:'🛂',title:'4 · Detroit (DTW) · U.S. entry',sub:'Passport → declarations → baggage → onward flight',steps:[
      ['Step 1: follow International Arrivals','At Detroit, follow International Arrivals / U.S. Customs and Border Protection / Passport Control. Do not go straight to the next gate. Keep passport and connecting boarding pass handy.'],
      ['Step 2: passport inspection','Follow signs for U.S. citizens and directions from staff. Present passport; answer questions truthfully. Example only if true: “I’m a U.S. citizen returning from vacation in Italy. I’m connecting to Cleveland.” An officer may ask trip length and what you bought.'],
      ['Step 3: make the declaration','Declare all food and agricultural items, including packaged candy, and accurately report gifts, merchandise, and alcohol brought from abroad. You may be asked verbally or through an approved paper/electronic process; use whatever officers request. Keep item values/receipts handy.'],
      ['Step 4: baggage instructions MATTER','Ordinarily international arrivals collect checked luggage after passport inspection and before customs, even when tags show CLE. However some specific routes use approved baggage screening exceptions. Look at DTW instructions and ASK staff whether to collect the suitcase. Do not leave it behind just because its tag says CLE.'],
      ['Step 5: customs / agriculture inspection','With any required suitcase, proceed where the customs officer directs. Declare items honestly, including items that may be restricted. Officers may inspect baggage and may take prohibited agricultural items. Do not conceal items or argue that airport duty-free purchases are exempt from declaration.'],
      ['Step 6: recheck if instructed','If you reclaimed the bag, follow Connecting Flights / Baggage Recheck after customs and give it to the designated airline belt/counter. Keep the baggage-tag receipt and confirm it continues to CLE. If staff says recheck is unnecessary, follow their instructions.'],
      ['Step 7: security again','Follow Connecting Flights / TSA Security as directed. Normally U.S. connecting passengers re-enter security after customs. Follow TSA instructions; do not assume European security rules apply.'],
      ['Step 8: find Cleveland flight','Find DL4954 (operated by ENDEAVOR AIR / DELTA CONNECTION), scheduled 5:40 PM, currently DTW McNamara gate C11, on the live departures screens. Use flight number rather than destination alone where possible. Go to the gate, confirm the gate display, and watch for changes.'],
      ['Step 9: if delayed or missing the flight','If immigration/customs/baggage delays threaten your CLE flight, show airline staff your complete itinerary and ask for the next confirmed connection. Do not exit the airport until you understand the new flight and baggage plan.']
    ]},
    {id:'cle',icon:'🏠',title:'5 · Cleveland (CLE)',sub:'Baggage claim · pickup · home',steps:[
      ['After landing','Follow Baggage Claim / Ground Transportation. Normally there is no second U.S. immigration or customs process in Cleveland because you entered at Detroit.'],
      ['Find baggage carousel','Look at baggage monitors for your DTW → CLE flight. Collect checked luggage if the airline transferred it to CLE. Match the bag tag/name.'],
      ['If the suitcase is missing','Before leaving the airport, go to the operating airline’s baggage services desk with your bag-tag receipt and itinerary. File a baggage report and get the file/reference number and delivery contact.'],
      ['Meet your pickup','Contact your ride. Confirm the current pickup level/zone shown by the airport signs and the person collecting you, then head home.'],
      ['If your phone has no data','Use airport Wi-Fi if available or ask information/baggage staff for help contacting your pickup. Keep emergency contact numbers saved outside the app as well.']
    ]}
  ];
  const DENNIS_DECLARATIONS=[
    ['Food, candy, chocolate, packaged snacks','Declare food and agricultural products even if sealed, gifted or bought at the airport. Keep packages and receipts. CBP/USDA decides what can enter.'],
    ['Wine, Moscato, liquor','Declare alcohol and quantities. Airline checked-bag limits, TSA carry-on limits, U.S. and Ohio import laws can apply; duty-free purchases still count.'],
    ['Gifts, clothing and souvenirs','State what you bought or received abroad and approximate total value in U.S. dollars. Keep receipts; CBP determines the applicable personal exemption or duty.'],
    ['Fruit, meat, plants, seeds, cheese','Declare all agricultural items; some are prohibited or restricted. If uncertain, declare and ask. Do not attempt to conceal them.'],
    ['Cash / monetary instruments','If traveling with MORE than $10,000 in combined currency and reportable monetary instruments, a separate FinCEN report is generally required. Ask CBP if applicable.'],
    ['Medication','Carry essential medication in labeled packaging when possible; be prepared to answer questions and follow import restrictions.'],
    ['If officer asks for a form','Use the declaration process the officer or signage directs: it may be verbal, paper, kiosk, or an eligible app. Do not assume a form is always required or never required.'],
    ['Truthful sample answer','“I bought some packaged sweets and gifts in Italy, and I have receipts. I also have [quantity] bottles of wine.” Say ONLY the items and amounts you actually have.']
  ];
  const DENNIS_CARDS=[
  {
    "group": "Florence · Italian",
    "label": "Please take me to Florence airport",
    "native": "Per favore, mi porti all’aeroporto di Firenze, alla zona partenze.",
    "english": "Please take me to Florence Airport, departures."
  },
  {
    "group": "Florence · Italian",
    "label": "Where is my taxi?",
    "native": "Ho prenotato un taxi. Dove devo aspettarlo?",
    "english": "I booked a taxi. Where should I wait?"
  },
  {
    "group": "Florence · Italian",
    "label": "Please call me a taxi",
    "native": "Può chiamarmi un taxi ufficiale per l’aeroporto, per favore?",
    "english": "Could you call a licensed taxi to the airport?"
  },
  {
    "group": "Florence · Italian",
    "label": "I have a very early flight",
    "native": "Il mio volo parte molto presto. A che ora devo lasciare l’hotel?",
    "english": "My flight leaves very early. When should I leave the hotel?"
  },
  {
    "group": "Florence · Italian",
    "label": "Can I pay by card?",
    "native": "Posso pagare con carta di credito?",
    "english": "Can I pay by credit card?"
  },
  {
    "group": "Florence · Italian",
    "label": "How much will the taxi cost?",
    "native": "Quanto costa la corsa fino all’aeroporto?",
    "english": "How much is the ride to the airport?"
  },
  {
    "group": "Florence · Italian",
    "label": "I am flying to Paris",
    "native": "Ho un volo per Parigi e poi proseguo per Detroit e Cleveland.",
    "english": "I am flying to Paris, then Detroit and Cleveland."
  },
  {
    "group": "Florence · Italian",
    "label": "Where is the check-in desk?",
    "native": "Dov’è il banco del check-in per il mio volo per Parigi?",
    "english": "Where is check-in for my Paris flight?"
  },
  {
    "group": "Florence · Italian",
    "label": "I need all boarding passes",
    "native": "Può stampare tutte le carte d’imbarco disponibili per il mio viaggio fino a Cleveland?",
    "english": "Can you print all available boarding passes to Cleveland?"
  },
  {
    "group": "Florence · Italian",
    "label": "Check my checked bag",
    "native": "Può confermare la destinazione finale del mio bagaglio registrato?",
    "english": "Can you confirm the final destination on my checked-bag tag?"
  },
  {
    "group": "Florence · Italian",
    "label": "What about bags in Detroit?",
    "native": "Devo ritirare e registrare di nuovo il bagaglio a Detroit?",
    "english": "Will I need to collect and recheck my bag in Detroit?"
  },
  {
    "group": "Florence · Italian",
    "label": "My boarding pass is missing",
    "native": "Non riesco ad accedere alla mia carta d’imbarco. Può aiutarmi a stamparla?",
    "english": "I cannot access my boarding pass. Please help me print it."
  },
  {
    "group": "Florence · Italian",
    "label": "Where is security?",
    "native": "Dove si trovano i controlli di sicurezza?",
    "english": "Where is security screening?"
  },
  {
    "group": "Florence · Italian",
    "label": "Where is my departure gate?",
    "native": "Non trovo il mio gate. Può indicarmi la strada?",
    "english": "I cannot find my gate. Can you show me?"
  },
  {
    "group": "Florence · Italian",
    "label": "Is this the correct line?",
    "native": "È questa la fila giusta per il mio volo?",
    "english": "Is this the correct line for my flight?"
  },
  {
    "group": "Florence · Italian",
    "label": "Can you help me immediately?",
    "native": "Sono in difficoltà e viaggio da solo. Può aiutarmi, per favore?",
    "english": "I need assistance and am traveling alone. Could you help me?"
  },
  {
    "group": "Florence · Italian",
    "label": "I might miss my flight",
    "native": "Rischio di perdere il volo. Può aiutarmi subito a trovare il banco della compagnia aerea?",
    "english": "I may miss my flight. Please help me find my airline desk now."
  },
  {
    "group": "Florence · Italian",
    "label": "My flight has been canceled",
    "native": "Il mio volo è stato cancellato. Dove posso farmi riprenotare?",
    "english": "My flight was canceled. Where can I get rebooked?"
  },
  {
    "group": "Florence · Italian",
    "label": "My suitcase is missing",
    "native": "Non trovo la mia valigia. Dove si trova l’ufficio bagagli smarriti?",
    "english": "I cannot find my suitcase. Where is baggage services?"
  },
  {
    "group": "Florence · Italian",
    "label": "My phone does not work",
    "native": "Il mio telefono non funziona e non ho accesso a Internet. Può aiutarmi?",
    "english": "My phone is not working and I have no internet. Can you help?"
  },
  {
    "group": "Florence · Italian",
    "label": "I lost my passport",
    "native": "Ho perso il passaporto. Mi può aiutare a contattare la polizia aeroportuale?",
    "english": "I lost my passport. Please help me contact airport police."
  },
  {
    "group": "Florence · Italian",
    "label": "I need medical assistance",
    "native": "Ho bisogno di assistenza medica, per favore.",
    "english": "I need medical assistance, please."
  },
  {
    "group": "Florence · Italian",
    "label": "Please speak slowly",
    "native": "Non parlo bene italiano. Può parlare lentamente o scrivere le istruzioni?",
    "english": "I do not speak Italian well. Please speak slowly or write instructions."
  },
  {
    "group": "Paris · French",
    "label": "I have a connection to Detroit",
    "native": "Je suis en correspondance pour Détroit, puis Cleveland. Où dois-je aller ?",
    "english": "I am connecting to Detroit, then Cleveland. Where should I go?"
  },
  {
    "group": "Paris · French",
    "label": "Where are flight connections?",
    "native": "Où se trouve le parcours des correspondances ?",
    "english": "Where is the flight connections route?"
  },
  {
    "group": "Paris · French",
    "label": "I must stay in transit",
    "native": "Je suis en transit. Je ne veux pas sortir de l’aéroport. Quel chemin dois-je suivre ?",
    "english": "I am connecting and do not want to exit the airport. Which way?"
  },
  {
    "group": "Paris · French",
    "label": "Where is passport control?",
    "native": "Où se trouve le contrôle des passeports pour les vols vers les États-Unis ?",
    "english": "Where is passport control for U.S. flights?"
  },
  {
    "group": "Paris · French",
    "label": "Where is security screening?",
    "native": "Dois-je passer un contrôle de sécurité ? Où dois-je aller ?",
    "english": "Do I need security screening, and where is it?"
  },
  {
    "group": "Paris · French",
    "label": "Find my terminal",
    "native": "Quel est le terminal de mon vol pour Détroit ?",
    "english": "Which terminal is my flight to Detroit in?"
  },
  {
    "group": "Paris · French",
    "label": "Find my boarding gate",
    "native": "Je ne trouve pas ma porte d’embarquement. Pouvez-vous me montrer le chemin ?",
    "english": "I cannot find my boarding gate. Please show me the way."
  },
  {
    "group": "Paris · French",
    "label": "Is this the right shuttle?",
    "native": "Cette navette va-t-elle au terminal de mon vol pour Détroit ?",
    "english": "Does this shuttle go to my Detroit departure terminal?"
  },
  {
    "group": "Paris · French",
    "label": "Is this the correct line?",
    "native": "Est-ce la bonne file pour mon vol vers Détroit ?",
    "english": "Is this the right line for my Detroit flight?"
  },
  {
    "group": "Paris · French",
    "label": "Is my flight on time?",
    "native": "Mon vol pour Détroit est-il à l’heure ? À quelle porte dois-je aller ?",
    "english": "Is my Detroit flight on time? Which gate?"
  },
  {
    "group": "Paris · French",
    "label": "My connection is very tight",
    "native": "Ma correspondance est très courte. Je risque de manquer mon vol. Aidez-moi, s’il vous plaît.",
    "english": "My connection is tight. I may miss the flight. Please help."
  },
  {
    "group": "Paris · French",
    "label": "I missed my connection",
    "native": "J’ai manqué ma correspondance. Où se trouve le comptoir de transfert de ma compagnie aérienne ?",
    "english": "I missed my connection. Where is my airline transfer desk?"
  },
  {
    "group": "Paris · French",
    "label": "My flight is canceled",
    "native": "Mon vol a été annulé. Pouvez-vous m’aider à obtenir un autre vol vers Cleveland ?",
    "english": "My flight is canceled. Can you help rebook me to Cleveland?"
  },
  {
    "group": "Paris · French",
    "label": "Please confirm my entire itinerary",
    "native": "Pouvez-vous confirmer tous mes vols jusqu’à Cleveland et m’indiquer les nouvelles portes ?",
    "english": "Can you confirm all flights to Cleveland and the new gates?"
  },
  {
    "group": "Paris · French",
    "label": "What happens to my checked bag?",
    "native": "Où se trouve mon bagage enregistré ? Suivra-t-il mon nouvel itinéraire ?",
    "english": "Where is my checked luggage? Will it follow my new itinerary?"
  },
  {
    "group": "Paris · French",
    "label": "I need a boarding pass",
    "native": "Je n’ai pas ma carte d’embarquement. Pouvez-vous l’imprimer ?",
    "english": "I do not have my boarding pass. Can you print it?"
  },
  {
    "group": "Paris · French",
    "label": "I need step-by-step help",
    "native": "Je voyage seul et je suis perdu. Pouvez-vous m’indiquer exactement où aller ?",
    "english": "I am traveling alone and lost. Please tell me exactly where to go."
  },
  {
    "group": "Paris · French",
    "label": "Please speak English or slowly",
    "native": "Je ne parle pas français. Parlez-vous anglais ? Sinon, pouvez-vous parler lentement ?",
    "english": "I do not speak French. Do you speak English, or can you speak slowly?"
  },
  {
    "group": "Paris · French",
    "label": "I cannot use my phone",
    "native": "Mon téléphone ne fonctionne pas et je n’ai pas Internet. Pouvez-vous m’aider ?",
    "english": "My phone does not work and I have no internet. Please help."
  },
  {
    "group": "Paris · French",
    "label": "I lost my passport",
    "native": "J’ai perdu mon passeport. Pouvez-vous m’aider à contacter la police de l’aéroport ?",
    "english": "I lost my passport. Please help me contact airport police."
  },
  {
    "group": "Paris · French",
    "label": "I need medical help",
    "native": "J’ai besoin d’une assistance médicale immédiate, s’il vous plaît.",
    "english": "I need immediate medical help, please."
  },
  {
    "group": "Paris · French",
    "label": "Where is a restroom?",
    "native": "Où sont les toilettes les plus proches ?",
    "english": "Where is the nearest restroom?"
  }
];
  // v44: supplemental airport-specific phrases. Offline-first data, no remote request.
  DENNIS_CARDS.push(
    {"group": "Florence · Italian", "label": "Where is Air France check-in?", "native": "Dove si trova il banco check-in di Air France per il volo per Parigi?", "english": "Where is Air France check-in for the flight to Paris?"},
    {"group": "Florence · Italian", "label": "Is this the line for my flight?", "native": "È questa la fila giusta per il volo Air France per Parigi delle 6:50?", "english": "Is this the correct line for the 6:50 Air France flight to Paris?"},
    {"group": "Florence · Italian", "label": "Check bag to Cleveland", "native": "Il mio itinerario prosegue da Parigi a Detroit e Cleveland. Può controllare fino a dove viene registrato il mio bagaglio?", "english": "I connect through Paris and Detroit to Cleveland. Please confirm my bag’s checked destination."},
    {"group": "Florence · Italian", "label": "Where will I collect my bag?", "native": "Devo ritirare il bagaglio a Parigi oppure a Detroit? Può verificare l’etichetta?", "english": "Do I collect my luggage in Paris or Detroit? Please verify the bag tag."},
    {"group": "Florence · Italian", "label": "I need all boarding passes", "native": "Può verificare i miei tre voli e dirmi come ottenere tutte le carte d’imbarco?", "english": "Please check all three flights and tell me how to get all boarding passes."},
    {"group": "Florence · Italian", "label": "Where is security?", "native": "Dove si trova il controllo di sicurezza per le partenze?", "english": "Where is departure security?"},
    {"group": "Florence · Italian", "label": "Where is my gate?", "native": "Qual è il gate del mio volo per Parigi? È cambiato?", "english": "What is my gate for Paris? Has it changed?"},
    {"group": "Florence · Italian", "label": "My flight has a delay", "native": "Il mio volo per Parigi è in ritardo. Riuscirò a prendere la coincidenza per Detroit?", "english": "My flight to Paris is delayed. Will I make my Detroit connection?"},
    {"group": "Florence · Italian", "label": "I need a written route", "native": "Può scrivermi il numero del gate e le indicazioni, per favore?", "english": "Please write down my gate and directions."},
    {"group": "Florence · Italian", "label": "My bag is missing", "native": "Il mio bagaglio non è arrivato. Dove posso fare la denuncia?", "english": "My checked bag is missing. Where do I report it?"},
    {"group": "Paris · French", "label": "Flight DL0229 to Detroit", "native": "Je cherche le vol Delta DL0229 pour Détroit, prévu à 10 h 30. Est-ce toujours au terminal 2E, porte K52 ?", "english": "I am looking for Delta DL0229 to Detroit at 10:30. Is it still at Terminal 2E, gate K52?"},
    {"group": "Paris · French", "label": "From 2F to K gates", "native": "Je viens d’arriver au terminal 2F de Florence. Pouvez-vous m’indiquer la correspondance vers le terminal 2E, portes K ?", "english": "I arrived at Terminal 2F from Florence. Please direct me to Terminal 2E K gates."},
    {"group": "Paris · French", "label": "I have only 1h45", "native": "Ma correspondance prévue n’est que d’une heure quarante-cinq. Quel est le chemin le plus direct vers ma porte ?", "english": "My scheduled connection is only 1 hour 45 minutes. What is the most direct route to my gate?"},
    {"group": "Paris · French", "label": "Is there a priority transfer?", "native": "Mon vol de correspondance part bientôt. Suis-je admissible à une assistance pour correspondance courte ?", "english": "My connecting flight leaves soon. Am I eligible for short-connection assistance?"},
    {"group": "Paris · French", "label": "Passport exit control", "native": "Où dois-je passer le contrôle de sortie des passeports pour le vol vers Détroit ?", "english": "Where is Schengen exit passport control for my Detroit flight?"},
    {"group": "Paris · French", "label": "Did my gate change?", "native": "La porte du vol DL0229 a-t-elle changé ? Pouvez-vous vérifier sur votre écran ?", "english": "Did gate for DL0229 change? Can you check your screen?"},
    {"group": "Paris · French", "label": "Please write down gate", "native": "Pouvez-vous écrire le terminal, la porte et le chemin à suivre, s’il vous plaît ?", "english": "Please write down the terminal, gate and route."},
    {"group": "Paris · French", "label": "I might miss boarding", "native": "Il reste très peu de temps avant la fin de l’embarquement. Pouvez-vous m’aider immédiatement ?", "english": "There is very little time before boarding closes. Please help immediately."},
    {"group": "Paris · French", "label": "My inbound flight was late", "native": "Mon vol Air France en provenance de Florence était en retard. J’ai besoin d’aide pour ma correspondance Delta vers Détroit.", "english": "My Air France flight from Florence was late. I need help with my Delta connection to Detroit."},
    {"group": "Paris · French", "label": "Please rebook through Cleveland", "native": "Si je manque le vol, pouvez-vous me replacer sur un itinéraire confirmé jusqu’à Cleveland et vérifier mon bagage ?", "english": "If I miss the flight, please rebook me all the way to Cleveland and check my bag."},
    {"group": "Paris · French", "label": "Is this an airside transfer?", "native": "Dois-je rester dans la zone de correspondance sans récupérer mes bagages ?", "english": "Should I remain in the secure transfer area without reclaiming my luggage?"},
    {"group": "Paris · French", "label": "Where is Delta help?", "native": "Où se trouve le comptoir de correspondance Delta ou le personnel qui peut m’aider pour le vol DL0229 ?", "english": "Where is the Delta transfer desk or staff who can help with DL0229?"},
    {"group": "Paris · French", "label": "I need wheelchair or mobility help", "native": "J’ai besoin d’aide pour me déplacer rapidement jusqu’à ma porte. Où puis-je demander une assistance ?", "english": "I need help getting to my gate. Where can I request assistance?"}
  );
  function dennisDone(){try{return JSON.parse(localStorage.getItem('italy2026-dennis-v25-checks')||'{}')}catch(e){return {}}}
  window.dennisToggle=(k,checked)=>{const x=dennisDone();x[k]=checked;localStorage.setItem('italy2026-dennis-v25-checks',JSON.stringify(x));render()};
  window.dennisReset=()=>{if(confirm('Reset Dennis’s travel progress?')){localStorage.removeItem('italy2026-dennis-v25-checks');render()}};
  function dennisChecklist(stage){const done=dennisDone();return stage.steps.map(([heading,body],i)=>{const key=stage.id+'-'+i;return `<div class="dennis-task"><label><input type="checkbox" ${done[key]?'checked':''} onchange="dennisToggle('${key}',this.checked)"><b>${esc(heading)}</b></label><p>${esc(body)}</p></div>`}).join('')}
  window.dennisSavePhraseSheet=()=>{
    const quote=x=>'"'+String(x??'').replace(/"/g,'""')+'"';
    const rows=[['Language / area','When to use','Show to staff','English translation'],...DENNIS_CARDS.map(x=>[x.group,x.label,x.native,x.english])];
    const csv='\ufeff'+rows.map(row=>row.map(quote).join(',')).join('\r\n');
    const blob=new Blob([csv],{type:'text/csv;charset=utf-8'});
    const url=URL.createObjectURL(blob);const a=document.createElement('a');
    a.href=url;a.download='Dennis-Airport-Phrase-Sheet-OFFLINE.csv';
    document.body.appendChild(a);a.click();a.remove();
    setTimeout(()=>URL.revokeObjectURL(url),3000);
  };
  window.dennisCopyCard=i=>{const x=DENNIS_CARDS[i];if(x)copyText(x.native)};
  window.dennisShowCard=i=>{const x=DENNIS_CARDS[i];if(!x)return;const modal=document.createElement('div');modal.className='dennis-card-overlay';modal.id='dennis-card-overlay';modal.innerHTML=`<div class="dennis-card-popup" role="dialog" aria-modal="true"><button class="dennis-card-close" onclick="document.getElementById('dennis-card-overlay').remove()">✕ Close</button><p class="dennis-card-group">${esc(x.group)}</p><h2>${esc(x.label)}</h2><div class="dennis-native">${esc(x.native)}</div><p>${esc(x.english)}</p><button class="pill-btn" onclick="dennisCopyCard(${i})">Copy text</button></div>`;modal.addEventListener('click',e=>{if(e.target===modal)modal.remove()});document.body.appendChild(modal)};
  const DENNIS_MAPS = {"flr": {"title": "FLORENCE (FLR)", "local": "airport-flr-offline.svg", "url": "https://www.toscana-aeroporti.com/console/sites/default/files/2025-06/20250424-Firenze_ENG_2025.pdf"}, "cdg": {"title": "PARIS (CDG)", "local": "airport-cdg-offline.svg", "url": "https://www.parisaeroport.fr/docs/default-source/passager-fichiers/plans/terminal_2f-2g.pdf?sfvrsn=58ddf1bd_6"}, "dtw": {"title": "DETROIT (DTW)", "local": "airport-dtw-offline.svg", "url": "https://metroairport.com/at-dtw/maps"}, "cle": {"title": "CLEVELAND (CLE)", "local": "airport-cle-offline.svg", "url": "https://www.clevelandairport.com/sites/default/files/cle_digital_map_vertical_1_8_2024%20%281%29.pdf"}};
  window.dennisShowMap=k=>{const m=DENNIS_MAPS[k];if(!m)return;const modal=document.createElement('div');modal.className='dennis-map-overlay';modal.innerHTML=`<div class="dennis-map-window" role="dialog" aria-modal="true"><button class="pill-btn" onclick="this.closest('.dennis-map-overlay').remove()">✕ Close map</button><p><b>${esc(m.title)}</b> · English start-to-finish route guide (not a floor plan)</p><div class="dennis-map-scroll"><img alt="${esc(m.title)} route guide" src="${m.local}"/></div><p>Follow live airport signs and monitors for actual gates.</p></div>`;modal.addEventListener('click',e=>{if(e.target===modal)modal.remove()});document.body.appendChild(modal)};

  const CDG_PLAYBOOK = [
    ['BEFORE THE FLORENCE FLIGHT','Current itinerary: Air France-operated DL8565, FLR 6:50 AM → CDG 8:45 AM, arriving Terminal 2F. Next is Delta-operated DL0229 at 10:30 AM from Terminal 2E K52 (as last shown). At Florence airline check-in, ask for boarding passes for FLR → CDG, CDG → DTW and DTW → CLE. Photograph the baggage tag and confirm whether the bag is tagged all the way to CLE. Confirm the operating airlines and actual Paris layover. If the second boarding pass cannot be issued, ask where the Air France connection desk at CDG can print it.'],
    ['BEFORE DESCENT INTO PARIS','Open the Paris → Detroit boarding pass. Write down its flight number, departure time and boarding time. Use airplane Wi-Fi or ask a flight attendant whether the Detroit gate is known; treat any answer as provisional. Keep passport in your own accessible pocket, not overhead luggage.'],
    ['AS SOON AS YOU STEP OFF THE PLANE','If you see Air France transfer staff holding signs or announcing short connections, tell them you are flying to Detroit. Otherwise follow YELLOW “Correspondances / Flight Connections” signs. Do not follow “Sortie / Exit,” “Bagages / Baggage claim,” trains to Paris, taxis or ordinary public transit. If brought to the terminal on a bus, follow the connection signs after the bus drops you off.'],
    ['FIND THE CORRECT DETROIT GATE','At last check, DL0229 to Detroit is 10:30 AM from 2E K52. This IS NOT guaranteed: check the newest live display. At the FIRST connections monitor or Air France kiosk, find your CDG → DTW flight number. Record the full gate (letter and numbers, e.g. K/L/M with numbers if assigned). Terminal 2E gates K, L, and M are DIFFERENT boarding areas. Do not blindly follow 2E without choosing the exact boarding area. If the gate is not yet posted, ask the staffed transfer desk or check another live screen frequently.'],
    ['TAKE THE ROUTE SHOWN FOR YOUR GATE','CURRENT TARGET 2F → 2E K52. Stay in the airside connecting-passenger route. For a common 2F → 2E connection: follow yellow signs toward 2E and the indicated K, L, or M gates. K can involve a walking transfer; L or M may require an airside shuttle/train/bus. Routes and closures change. Use yellow signs and airport staff over any saved map. Never board the public CDGVAL/RER or exit security to find a gate unless staff specifically instructs you.'],
    ['PASSPORT EXIT CONTROL','Florence → Paris is within Schengen; Paris → Detroit leaves Schengen. Expect French border/police passport control along your transfer. Have your U.S. passport ready, plus boarding pass if requested. Join whichever line staff assigns. If an automated lane is offered and rejects the passport, go to an officer—do not keep retrying. Never photograph the checkpoint.'],
    ['SECURITY IF DIRECTED','Security screening may or may not be required depending on actual arrival and transfer route. If the yellow signs lead to security, join the transfer line; prepare to remove items as directed. Keep your passport and boarding pass with you. If you see a Short Connection Pass notification or dedicated yellow priority route, show it to staff and follow their guidance. Do not assume priority access without being authorized.'],
    ['GET TO THE BOARDING GATE FIRST','Current flight is DL0229 operated by DELTA AIR LINES to Detroit, gate K52 as shown on Nov 1. Check the live screen again AFTER border/security screening. Walk to the Detroit gate without a food or shopping stop. Confirm DTW and the exact flight number on the gate display. Ask staff whether the flight is boarding. Boarding closes before the published departure time. Only relax once you have located the correct gate.'],
    ['BAGGAGE / BOARDING PASS EXCEPTION','With one through-ticket and a CLE-tagged bag, checked luggage normally transfers in Paris automatically. Do not go to the baggage carousel in Paris unless the airline explicitly tells you to. If the bag tag ends at CDG, you have separate tickets, or an airline says your baggage needs attention, show staff the baggage receipt and follow their specific instructions. If no Detroit boarding pass, go immediately to the Air France connections desk/kiosk—not the airport exit.'],
    ['IF THE FLIGHT ARRIVES LATE','On landing tell the flight attendant or transfer agent: “I have a short connection to Detroit. What is the fastest authorized route?” Ask whether you qualify for Short Connection Pass and follow any designated assistance signs. Keep moving toward the gate, but never skip passport/security or enter restricted passages without permission.'],
    ['IF LOST OR THE SIGNS DISAGREE','STOP at the nearest staffed Air France transfer/information desk. Show the French “Please direct me to my Detroit connection” card and your Detroit flight number. Ask staff to point to the next sign, not just the general terminal. Take a photo of the sign or write down the next step. Avoid wandering toward baggage claim.'],
    ['IF THE GATE CHANGES','Follow the newest airport monitor and gate announcements, not a previously saved screenshot. Confirm the changed flight number and full K/L/M area. If the new route is unclear or boarding time is close, ask airport staff for the quickest authorized transfer.'],
    ['IF YOU MISS THE DETROIT FLIGHT','Go to an Air France transfer/service desk immediately. Say that the prior flight was delayed if that is true. Ask for rebooking to CLEVELAND on the SAME reservation, the new boarding passes, baggage location, and any meals/hotel assistance you qualify for. Do not buy a separate ticket or leave the secured area before talking with the airline. If the flight is canceled, ask the same questions.'],
    ['IF STRANDED OVERNIGHT','Ask the airline about accommodation, meal vouchers, transport to a hotel, and when to return. Confirm whether passport/border formalities are needed to exit. If you are unable to enter France for any reason, tell the airline agent before going to the exit. Save the new itinerary offline and notify your ride home.'],
    ['IF THE PHONE / INTERNET FAILS','Use a printed itinerary and airport departure screens; ask uniformed Air France staff with the French show-card. CDG advertises free WIFI-AIRPORT, but these guide steps and the language cards are designed to be saved in the app. A printed boarding pass and passport are the most dependable backups.']
  ];
  const CDG_BRANCHES = [
    ['Gate K','Follow the yellow connection signs for Terminal 2E, gates K; walking may be involved. Expect passport exit control. Exact walking turns are not fixed in this guide.'],
    ['Gate L','Follow the yellow connection signs for Terminal 2E, gates L; use the signed airside transfer method, which may involve an automated shuttle. Expect passport exit control.'],
    ['Gate M','Follow the yellow connection signs for Terminal 2E, gates M; use the signed airside transfer method, which may involve a bus or shuttle. Expect passport exit control.'],
    ['Different terminal / gate','Do NOT force a 2F→2E route. Check the live screen and show the boarding pass to Air France staff for the correct airside transfer.'],
    ['No gate listed','Go to a transfer screen/kiosk or Air France transfer desk. Do not guess which K/L/M hall is correct.'],
    ['Very short connection','Ask staff about Short Connection Pass and show any airline-issued priority pass. Never bypass controls without authorization.']
  ];
  const CDG_FRENCH_HELP = [
    ['URGENT: Please help me reach Detroit','Ma correspondance pour Détroit est très courte. Pouvez-vous me montrer le chemin le plus rapide autorisé ?','My connection to Detroit is very short. Can you show me the fastest authorized route?'],
    ['Which gate and terminal?','Pouvez-vous vérifier le terminal et la porte de mon vol pour Détroit ?','Can you check my Detroit flight’s terminal and gate?'],
    ['Do I need passport control?','Où se trouve le contrôle des passeports pour mon vol vers Détroit ?','Where is passport control for my Detroit flight?'],
    ['Am I eligible for priority transfer?','Puis-je bénéficier du passage prioritaire pour une correspondance courte ?','Can I use priority passage for a short connection?'],
    ['I arrived late and may miss the flight','Mon vol précédent est arrivé en retard et je risque de manquer ma correspondance pour Détroit. Pouvez-vous m’aider ?','My previous flight arrived late and I may miss my Detroit connection. Can you help?'],
    ['I missed it; rebook me to Cleveland','J’ai manqué mon vol de correspondance. Pouvez-vous me réacheminer jusqu’à Cleveland et vérifier mes bagages ?','I missed my connection. Can you rebook me all the way to Cleveland and check my baggage?'],
    ['Please direct me one sign at a time','Je suis perdu. Pouvez-vous me montrer la prochaine direction à suivre pour mon vol vers Détroit ?','I am lost. Please show me the next direction to follow for my Detroit flight.']
  ];
  function dennisConfirmedFlights(){return `<section class="dennis-flight-summary" aria-label="Dennis flight itinerary"><div class="dennis-summary-heading"><b>✈️ Monday, Nov 2 · Fly home</b><small>Flight times are local to each airport · verify live gates</small></div><div class="dennis-flight-row"><div><b>FLR → CDG</b><small>6:50 → 8:45 AM · Air France · DL8565</small></div><strong>2F arrival</strong></div><div class="dennis-flight-row dennis-flight-critical"><div><b>CDG → DTW</b><small>10:30 AM → 1:16 PM · Delta · DL0229</small></div><strong>2E · K52*</strong></div><div class="dennis-flight-row"><div><b>DTW → CLE</b><small>5:40 → 6:36 PM · Endeavor / Delta Connection · DL4954</small></div><strong>C11*</strong></div><small class="dennis-summary-note">*Gates K52 and C11 were shown in the Nov 1 Delta screenshots and may change. Paris arrival gate unknown. Paris layover: 1h 45m.</small><details class="dennis-subsection"><summary>Seats, terminals & full flight details</summary><div class="dennis-details"><p><b>Florence → Paris:</b> Seat 18C. Arrive Paris Terminal 2F; arrival gate unknown. Follow Air France check-in at FLR.</p><p><b>Paris → Detroit:</b> Seat 44G. Depart Terminal 2E, K52 as last shown. Boarding ends before 10:30 AM departure. Follow yellow Flight Connections signs, then passport control as directed.</p><p><b>Detroit → Cleveland:</b> Seat 16B. McNamara C11 as last shown; Cleveland arrival gate B6B as last shown. At DTW follow U.S. entry, baggage and TSA instructions before going to the new gate.</p></div></details></section>`;}
  function dennisOfficialParisMaps(){return `<section class="dennis-details"><h3>🗺️ Paris official maps — saved offline</h3><p><b>Arrive Terminal 2F</b> (exact arrival gate unassigned in screenshot). <b>Depart Terminal 2E, K52</b> (check live screen). These are cropped official reference maps from provided screenshots; they may be older and are NOT turn-by-turn paths. Pinch-zoom or scroll to inspect.</p><div class="dennis-map-item"><b>2F — arrival concourse reference</b><div class="dennis-map-scroll"><img src="paris-2f-official-reference.jpg" alt="Official Terminal 2F map reference" style="min-width:500px;width:100%;height:auto"></div></div><div class="dennis-map-item"><b>2E — K gates, current departure K52</b><div class="dennis-map-scroll"><img src="paris-2e-k-official-reference.jpg" alt="Official Terminal 2E K gates map reference" style="min-width:500px;width:100%;height:auto"></div></div><div class="tip"><b>Do not walk based on the crop alone:</b> follow yellow Correspondances / Flight Connections signs toward 2E Gates K. Complete passport control as directed and confirm DL0229 and K52 again after the checkpoint. Do not take public CDGVAL or follow baggage claim unless staff directs you.</div></section>`;}
  function dennisParisDeepDive(){return `<section class="dennis-paris-deep"><div class="tip"><b>PARIS: PRIORITY IS YOUR DETROIT GATE.</b> Gate assignments, timing and even the route can change. The steps below are a decision guide, NOT an exact floor plan. The airline/airport signs and staff always win.</div>${dennisOfficialParisMaps()}<h3>🧭 Paris — step-by-step action order</h3>${CDG_PLAYBOOK.map(([h,b],i)=>`<details class="flight-step" ${i<4?'open':''}><summary>${i+1}. ${esc(h)}</summary><div class="dennis-details"><p>${esc(b)}</p></div></details>`).join('')}<h3>🚦 Which boarding area is on the screen?</h3>${CDG_BRANCHES.map(([h,b])=>`<details class="flight-step"><summary>${esc(h)}</summary><div class="dennis-details"><p>${esc(b)}</p></div></details>`).join('')}<h3>🗣️ Emergency French — tap to show staff</h3>${CDG_FRENCH_HELP.map(([h,fr,en],i)=>`<button type="button" class="dennis-phrase-button" onclick="dennisShowUrgentFrench(${i})"><b>${esc(h)}</b><small>Show full-screen French message</small><span>SHOW CARD ↗</span></button>`).join('')}<div class="tip"><b>If departure is imminent:</b> Seek airline help immediately, but do not push through security or passport control. If your incoming flight causes a missed protected connection, the airline can arrange rerouting. Separate-ticket bookings have different protections.</div></section>`}
  window.dennisShowUrgentFrench=i=>{const x=CDG_FRENCH_HELP[i];if(!x)return;const modal=document.createElement('div');modal.className='dennis-card-overlay';modal.innerHTML=`<div class="dennis-card-popup" role="dialog" aria-modal="true"><button class="dennis-card-close" onclick="this.closest('.dennis-card-overlay').remove()">✕ Close</button><p>🇫🇷 SHOW THIS TO AIR FRANCE STAFF</p><div class="dennis-native">${esc(x[1])}</div><p>${esc(x[2])}</p></div>`;modal.addEventListener('click',e=>{if(e.target===modal)modal.remove()});document.body.appendChild(modal)};

  function dennisHomeScreen(){const current=DENNIS_STAGES.find(x=>x.id===route.params.stage);const done=dennisDone();const total=DENNIS_STAGES.reduce((n,x)=>n+x.steps.length,0);const count=DENNIS_STAGES.reduce((n,x)=>n+x.steps.filter((_,i)=>done[x.id+'-'+i]).length,0);const italianCards=DENNIS_CARDS.map((x,i)=>({x,i})).filter(o=>/Italian|Florence/i.test(o.x.group));const frenchCards=DENNIS_CARDS.map((x,i)=>({x,i})).filter(o=>/French|Paris/i.test(o.x.group));const cardButtons=arr=>arr.map(({x,i})=>`<button class="dennis-phrase-button" type="button" onclick="dennisShowCard(${i})"><b>${esc(x.label)}</b><small>${esc(x.group)}</small><span>SHOW CARD ↗</span></button>`).join('');return `<section class="screen">${topbar('✈️ Dennis Goes Home')}<div class="content dennis-content dennis-compact">
    ${dennisConfirmedFlights()}
    <div class="dennis-priority"><b>🇫🇷 PARIS: 2F → 2E, K52*</b><small>1h 45m transfer · follow yellow Correspondances / Flight Connections signs. Passport control on the way. Confirm DL0229 on airport screens.</small><button class="pill-btn" onclick="go('rome',{stage:'cdg'},'rome')">Open Paris step-by-step →</button></div>
    <div class="dennis-progress"><b>What do I do next?</b><small>${count} of ${total} steps done · select an airport</small><div class="dennis-meter"><span style="width:${100*count/total}%"></span></div></div>
    <div class="dennis-stage-list">${DENNIS_STAGES.map(x=>`<button type="button" class="dennis-stage ${current?.id===x.id?'selected':''}" onclick="go('rome',{stage:'${x.id}'},'rome')"><span>${x.icon}</span><span><b>${esc(x.title)}</b><small>${esc(x.sub)}</small></span><span>›</span></button>`).join('')}</div>
    ${current?`<div class="dennis-details dennis-selected-panel" id="dennis-selected-instructions"><h3>${esc(current.title)}</h3><p class="small-note">Follow steps in order. Staff and live flight screens take priority over static information.</p>${dennisChecklist(current)}${current.id==='cdg'?dennisParisDeepDive():''}<button class="pill-btn gray" onclick="go('rome',{},'rome')">← Close airport instructions</button></div>`:''}
    <details class="dennis-section"><summary>🗺️ Maps & offline airport routes <span>4 airports</span></summary><div class="dennis-section-body"><p class="small-note">The route diagrams show sequences, not exact turn-by-turn floor plans. Paris 2F and 2E official reference maps are also available within the Paris guide.</p>${Object.entries(DENNIS_MAPS).map(([k,m])=>`<div class="dennis-map-item"><b>${esc(m.title)}</b><button class="pill-btn" type="button" onclick="dennisShowMap('${k}')">Open offline route</button><button class="pill-btn gray" type="button" onclick="openExternal('${m.url}')">Official map online ↗</button></div>`).join('')}</div></details>
    <details class="dennis-section"><summary>🗣️ Italian & French help cards <span>${DENNIS_CARDS.length} phrases</span></summary><div class="dennis-section-body"><p class="small-note">Show the large translated card to staff. Cards are included in the offline app.</p><button class="pill-btn" type="button" onclick="dennisSavePhraseSheet()">💾 Save offline phrase sheet</button><details class="dennis-subsection"><summary>🇮🇹 Florence · Italian (${italianCards.length})</summary>${cardButtons(italianCards)}</details><details class="dennis-subsection"><summary>🇫🇷 Paris · French (${frenchCards.length})</summary>${cardButtons(frenchCards)}</details>${DENNIS_CARDS.length-italianCards.length-frenchCards.length?`<details class="dennis-subsection"><summary>Other assistance phrases</summary>${cardButtons(DENNIS_CARDS.map((x,i)=>({x,i})).filter(o=>!italianCards.some(y=>y.i===o.i)&&!frenchCards.some(y=>y.i===o.i)))}</details>`:''}</div></details>
    <details class="dennis-section"><summary>🧾 U.S. customs, food & baggage</summary><div class="dennis-section-body"><p><b>Declare truthfully.</b> Follow the current CBP and airline instructions for food, gifts, alcohol, and checked luggage.</p>${DENNIS_DECLARATIONS.map(([a,b])=>`<p><b>${esc(a)}</b><br>${esc(b)}</p>`).join('')}</div></details>
    <details class="dennis-section"><summary>🆘 Delays, missed connections & emergencies</summary><div class="dennis-section-body"><p><b>Delayed or missed flight:</b> Contact the operating airline’s transfer desk. Ask about rebooking all the way to Cleveland and where the checked bag is.</p><p><b>Missing boarding pass:</b> Ask the airline desk for a reprint with passport and booking.</p><p><b>Missing checked bag:</b> Make a baggage report before leaving the airport and save the reference number.</p><p><b>Lost passport:</b> Contact airport police and the nearest U.S. consular service.</p><p><b>Emergency:</b> Italy / France 112; U.S. 911.</p><p><b>No signal:</b> Ask uniformed airport or airline staff. The guide is static; signs and gates may change.</p></div></details>
    <div class="dennis-action-row"><button class="pill-btn" onclick="go('bookings',{},'more')">🔐 Bookings & tickets</button><button class="pill-btn gray" onclick="go('documents',{},'more')">📄 Documents</button><button class="pill-btn gray" onclick="go('offline',{},'more')">📱 Offline check</button></div><p class="small-note">Airline screenshots are not live flight tracking. No personal booking codes stored in public app files.</p>
    </div>${bottomNav('rome')}</section>`;}

  function js(s){ return String(s).replace(/\\/g,'\\\\').replace(/'/g,"\\'").replace(/\n/g,' '); }

  function render(){
    let html='';
    switch(route.name){
      case 'home': html=homeScreen(); break;
      case 'dennisHome': html=dennisHomeScreen(); break;
      case 'rome': html=dennisHomeScreen(); break;
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
