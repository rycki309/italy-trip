window.ITALY_TRIP_REFERENCE={

emergency:{
general:{
number:"112",
label:"European emergency number",
note:"Works for police, fire and medical emergencies."
},
actions:[
{icon:"🚑",label:"Medical Help",phrase:"Ho bisogno di un medico"},
{icon:"🆘",label:"Call Emergency Services",number:"112"},
{icon:"🏨",label:"Get to Hotel",action:"hotel"},
{icon:"🚕",label:"Get a Taxi",action:"taxi"},
{icon:"🇮🇹",label:"Show Emergency Italian",action:"italian"}
]
},

quickBar:[
{icon:"🏨",label:"Hotel",action:"hotel"},
{icon:"🧭",label:"Navigate",action:"navigate"},
{icon:"🚕",label:"Taxi",action:"taxi"},
{icon:"🆘",label:"Help",action:"help"}
],

navigation:{
provider:"Apple Maps",
offlineNote:"Download Rome and Florence offline areas in Apple Maps before the trip.",
fallbackNote:"Written planned-route information remains available inside this app offline.",
downloads:[
{city:"Rome",statusKey:"appleMapsRome"},
{city:"Florence",statusKey:"appleMapsFlorence"}
]
},

offlineChecklist:[
{id:"app",label:"Italy app opens offline"},
{id:"trip",label:"Trip plans available offline"},
{id:"italian",label:"Italian phrases available offline"},
{id:"progress",label:"Checkmarks and progress save correctly"},
{id:"rome-map",label:"Rome downloaded in Apple Maps"},
{id:"florence-map",label:"Florence downloaded in Apple Maps"},
{id:"test",label:"Full Airplane Mode test completed"}
],

moreMenu:[
{icon:"⭐",label:"Saved Places",screen:"saved"},
{icon:"🎟️",label:"Tickets & Reservations",screen:"tickets"},
{icon:"🏨",label:"Trip Info",screen:"trip-info"},
{icon:"🍺",label:"Food & Beer",screen:"food"},
{icon:"💶",label:"EUR → USD",screen:"money"},
{icon:"🆘",label:"Help & Emergency",screen:"help"},
{icon:"📶",label:"Offline & App Status",screen:"offline"},
{icon:"⚙️",label:"Settings",screen:"settings"},
{icon:"ℹ️",label:"About This Trip",screen:"about"}
],

money:{
from:"EUR",
to:"USD",
note:"Enter or update the exchange rate while online. The last saved rate remains usable offline."
},

easyDay:{
labels:{
keep:"KEEP ❤️",
skip:"SKIP FIRST IF TIRED",
taxi:"🚕 TAXI RECOMMENDED",
rest:"🛏️ PROTECT THIS REST"
},
note:"Easy Day never removes activities. It only highlights the easiest way to reduce effort."
},

progress:{
activityStates:["pending","done","skipped"],
note:"Done/skipped activities, packing progress, favorites and notes are stored separately from trip reference data."
},

privateData:{
storage:"device-only",
publicRepo:false,
examples:[
"flight confirmation numbers",
"private reservation codes",
"personal notes"
],
note:"Private Trip Info must never be placed in the public GitHub repository."
},

onlineEnhancements:[
{feature:"Weather",required:false,note:"Online-only shortcut; never required for itinerary use."},
{feature:"Current exchange rate",required:false,note:"Manual saved rate works offline."},
{feature:"Google Sheet backup",required:false,note:"Future optional backup. App must never depend on it."}
],

workExtension:{
start:"2026-11-02",
end:"2026-11-07",
area:"Near Colle di Val d’Elsa",
exactLocation:null,
note:"Exact retreat address/pickup information still needs confirmation and should not be invented."
},

appRules:[
"Plans default to the appropriate trip day but always allow manual day browsing.",
"Up Next is the first activity that is neither done nor skipped.",
"Optional means time is intentionally available if energy allows.",
"Completed activities may collapse but remain accessible.",
"User-created notes, favorites, places and list items must survive app updates.",
"Reset actions require confirmation.",
"Core trip features must work without internet."
]

};
