/* Italy 2026 private vault. No secrets or OAuth tokens are embedded in published files. */
(() => {
'use strict';
const $ = id => document.getElementById(id);
const enc = new TextEncoder(), dec = new TextDecoder();
const STORE='italy2026-encrypted-vault-v1', CONFIG='italy2026-private-sheet-config-v1';
const DEFAULT_CLIENT_ID='372758760985-v2vvfub24nbq5cm9sshhcjlcfo3pficr.apps.googleusercontent.com';
const DEFAULT_SHEET_ID='1JUKDRXvOl4t1mzDQFos8lA42H7bA8p2oiqK5-udKGTw';
const b64=b=>btoa(String.fromCharCode(...new Uint8Array(b)));
const bytes=s=>Uint8Array.from(atob(s), c=>c.charCodeAt(0));
let entries=null, tokenClient=null;
function status(msg){$('status').textContent=msg;}
function show(data){entries=data;$('entries').replaceChildren();for(const [key,value] of Object.entries(data)){
 const d=document.createElement('div');d.className='entry';const title=document.createElement('strong');title.textContent=key;
 const v=document.createElement('span');v.textContent=value;const copy=document.createElement('button');copy.textContent='Copy';copy.addEventListener('click',()=>navigator.clipboard.writeText(value).then(()=>status('Copied.')));
 d.append(title,v,copy);$('entries').append(d);
} $('vault').hidden=false;status(`Unlocked ${Object.keys(data).length} private entries on this device.`);}
async function derive(pass,salt){const material=await crypto.subtle.importKey('raw',enc.encode(pass),'PBKDF2',false,['deriveKey']);return crypto.subtle.deriveKey({name:'PBKDF2',salt,iterations:310000,hash:'SHA-256'},material,{name:'AES-GCM',length:256},false,['encrypt','decrypt']);}
async function save(data,pass){if(pass.length<12)throw Error('Use a passphrase at least 12 characters long.');const salt=crypto.getRandomValues(new Uint8Array(16)),iv=crypto.getRandomValues(new Uint8Array(12));const key=await derive(pass,salt);const ciphertext=await crypto.subtle.encrypt({name:'AES-GCM',iv},key,enc.encode(JSON.stringify(data)));localStorage.setItem(STORE,JSON.stringify({v:1,salt:b64(salt),iv:b64(iv),data:b64(ciphertext)}));show(data);}
async function unlock(pass){const raw=localStorage.getItem(STORE);if(!raw)throw Error('No offline copy saved yet. Sign in and sync while online.');const record=JSON.parse(raw);const key=await derive(pass,bytes(record.salt));const plaintext=await crypto.subtle.decrypt({name:'AES-GCM',iv:bytes(record.iv)},key,bytes(record.data));show(JSON.parse(dec.decode(plaintext)));}
function config(){return JSON.parse(localStorage.getItem(CONFIG)||'{}');}
function setConfig(){const clientId=$('clientId').value.trim(),sheetId=$('sheetId').value.trim();if(!clientId.endsWith('.apps.googleusercontent.com'))throw Error('Enter a valid Google OAuth Web Client ID.');if(!/^[\w-]{15,}$/.test(sheetId))throw Error('Enter the Google Sheet ID from its URL.');localStorage.setItem(CONFIG,JSON.stringify({clientId,sheetId}));status('Configuration saved on this device.');}
async function sync(accessToken){const {sheetId}=config();const url=`https://sheets.googleapis.com/v4/spreadsheets/${encodeURIComponent(sheetId)}/values/${encodeURIComponent("'🔐 App Private Data'!A2:E200")}`;const res=await fetch(url,{headers:{Authorization:`Bearer ${accessToken}`},cache:'no-store'});if(!res.ok)throw Error(`Google Sheets returned ${res.status}. Check sheet sharing, API access, and account.`);const body=await res.json();const data={};for(const row of body.values||[]){const key=String(row[1]||'').trim(),label=String(row[2]||key).trim(),value=String(row[3]||'');if(key&&value)data[label]=value;}if(!Object.keys(data).length)throw Error('No private values found in the App Private Data tab (columns B–D).');const pass=$('passphrase').value;if(!pass)throw Error('Enter an offline passphrase before syncing.');await save(data,pass);status(`Synced ${Object.keys(data).length} private entries. Encrypted offline copy saved.`);}
function signIn(){const {clientId,sheetId}=config();if(!clientId||!sheetId)throw Error('Save your OAuth Client ID and Sheet ID first.');if(!window.google?.accounts?.oauth2)throw Error('Google sign-in needs internet. Reload while online.');tokenClient=google.accounts.oauth2.initTokenClient({client_id:clientId,scope:'https://www.googleapis.com/auth/spreadsheets.readonly',callback:async response=>{if(response.error){status('Google sign-in failed: '+response.error);return;}try{await sync(response.access_token);}catch(e){status(e.message);}}});tokenClient.requestAccessToken({prompt:'consent'});}
$('saveConfig').onclick=()=>{try{setConfig();}catch(e){status(e.message);}};
$('signIn').onclick=()=>{try{signIn();}catch(e){status(e.message);}};
$('unlock').onclick=async()=>{try{await unlock($('passphrase').value);}catch(e){status('Unable to unlock: incorrect passphrase or missing/corrupt data.');}};
$('lock').onclick=()=>{entries=null;$('vault').hidden=true;$('entries').replaceChildren();$('passphrase').value='';status('Locked. Encrypted offline copy remains on this device.');};
$('erase').onclick=()=>{if(confirm('Delete the encrypted offline copy from this device?')){localStorage.removeItem(STORE);entries=null;$('vault').hidden=true;$('entries').replaceChildren();status('Encrypted offline copy deleted.');}};
const c=config();$('clientId').value=c.clientId||DEFAULT_CLIENT_ID;$('sheetId').value=c.sheetId||DEFAULT_SHEET_ID;
if(!window.isSecureContext)status('Secure HTTPS is required for encrypted storage and sign-in.');else status(localStorage.getItem(STORE)?'Offline copy found. Enter passphrase and tap Unlock.':'No offline copy yet. Configure Google sign-in and sync while online.');
})();
