/* Italy 2026 V2.2 — phone polish + work extension. Local state only. */
(function(){
  const WORK_HOUSE_NAME='Taekus Tuscany Offsite House';
  const WORK_HOUSE_ADDRESS="Località Nerbona, 53031 Colle di Val d'Elsa SI, Italy";
  user.workInfo=user.workInfo||{};
  if(!user.workInfo.lodgingName) user.workInfo.lodgingName=WORK_HOUSE_NAME;
  if(!user.workInfo.lodgingAddress) user.workInfo.lodgingAddress=WORK_HOUSE_ADDRESS;
  const workSchedule=[
    ['Mon · Nov 2','Kick-off meetings · dinner cooked at the house · game night'],
    ['Tue · Nov 3','Team meetings · TBD · dinner out'],
    ['Wed · Nov 4','Team meetings · TBD · catered dinner at the house'],
    ['Thu · Nov 5','Field Trip Day · olive mill/tasting and/or vineyard tour/tasting · dinner out'],
    ['Fri · Nov 6','Off day / travel day'],
    ['Sat · Nov 7','House checkout at 10 AM']
  ];
  function persist(){save()}
  window.workExtension=function(){let w=user.workInfo;modal(`<button class="close" onclick="closeModal()">×</button><h2>💼 Work Extension</h2><p class="muted">Nov 2–7 · Tuscany work-trip reference. Available offline.</p><div class="work-card"><h3>🏨 Work lodging</h3><b>${fhtml(w.lodgingName||WORK_HOUSE_NAME)}</b><p>${fhtml(w.lodgingAddress||WORK_HOUSE_ADDRESS)}</p><div class="actions"><button class="btn gray" onclick="copyText(user.workInfo.lodgingAddress)">📋 Copy Address</button><button class="btn gray" onclick="showWorkDriver()">🚕 Show Driver</button></div></div><div class="work-card"><h3>📅 Work schedule</h3>${workSchedule.map(x=>`<div class="work-schedule-row"><b>${fhtml(x[0])}</b><span>${fhtml(x[1])}</span></div>`).join('')}</div><button class="btn gray full" onclick="phraseCat='Work';closeModal();showScreen('italian');phraseCat='Work';renderItalian()">🇮🇹 Work Italian</button>`) };
  window.showWorkDriver=function(){let w=user.workInfo;modal(`<button class="close" onclick="closeModal()">×</button><div class="driver-card"><div class="driver-label">🚕 MOSTRA ALL'AUTISTA · SHOW DRIVER</div><div class="driver-address">${fhtml(w.lodgingAddress||WORK_HOUSE_ADDRESS)}</div><div class="driver-name">${fhtml(w.lodgingName||WORK_HOUSE_NAME)}</div><button class="btn blue" onclick="copyText(user.workInfo.lodgingAddress||WORK_HOUSE_ADDRESS)">📋 Copy Address</button></div>`) };
  const oldMap=renderMap; renderMap=function(){oldMap();let w=user.workInfo,host=document.getElementById('mapContent');if(!host)return;let block=document.createElement('div');block.className='work-card';block.innerHTML=`<h3>💼 Work Extension</h3><button class="placeRow" onclick="workExtension()"><span>🏨</span><div><b>${fhtml(w.lodgingName||WORK_HOUSE_NAME)}</b><small>${fhtml(w.lodgingAddress||WORK_HOUSE_ADDRESS)}</small></div><i>›</i></button>`;host.appendChild(block)};
  const oldMore=renderMore; renderMore=function(){oldMore();let menu=moreContent.querySelector('.listmenu');if(menu&&!menu.querySelector('[data-work-extension]')){let b=document.createElement('button');b.dataset.workExtension='1';b.onclick=workExtension;b.innerHTML='<span class="ico">💼</span><span><b>Work Extension</b><small>Lodging · schedule · work Italian</small></span><span>›</span>';let settings=[...menu.children].find(x=>x.textContent.includes('Settings'));menu.insertBefore(b,settings||null)}};
  const oldItalian=renderItalian; renderItalian=function(){oldItalian();if(!phraseCat)return;let ps=ITALY_TRIP_ITALIAN.filter(p=>p.category===phraseCat),cards=italianContent.querySelectorAll('.phrase');cards.forEach((el,i)=>{let p=ps[i];if(p?.reply&&!el.querySelector('.reply')){let r=document.createElement('div');r.className='reply';r.innerHTML='<strong>What might they say back?</strong><br>'+fhtml(p.reply);el.appendChild(r)}})};
  const oldSettings=settings; settings=function(){oldSettings();let easy=document.querySelector('.setting-block input[type=checkbox]');if(easy&&!easy.closest('.switch')){let lab=document.createElement('label');lab.className='switch';easy.parentNode.replaceChild(lab,easy);lab.appendChild(easy);let s=document.createElement('span');lab.appendChild(s)}};
  persist();renderMap();renderItalian();renderMore();
})();
