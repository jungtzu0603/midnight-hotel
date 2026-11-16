(()=>{
'use strict';
const data=window.HOTEL_DATA;
const $=id=>document.getElementById(id);
const screens=['home','rules','game','reaction','ending'];
let current=0,decisions=[],lastFocus=null;
const safe=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function show(name){screens.forEach(s=>$(s).classList.toggle('hidden',s!==name));window.scrollTo(0,0)}
function getGuest(){return data.guests[current]}
function renderGuest(){const g=getGuest();$('progress').textContent=`第 ${current+1} / ${data.guests.length} 位住客`;$('arrival').textContent=g.time;$('guestName').textContent=g.name;$('guestDescription').textContent=g.description;$('portrait').textContent=g.emoji;$('guestSpeech').textContent=g.speech;$('clock').textContent=`NIGHT 01 · ${g.time}`;show('game')}
function docLine(label,value){return `<div class="doc-line"><span>${safe(label)}</span><strong>${safe(value)}</strong></div>`}
function openDoc(type){const g=getGuest();let title='',eyebrow='',html='';
if(type==='invitation'){title='入住邀請函';eyebrow='INVITATION';html=docLine('持有人',g.invitation.holder)+docLine('入住日期',g.invitation.date)+docLine('預定房號',g.invitation.room)+docLine('月亮印記',g.invitation.seal)}
if(type==='registry'){title='今晚登記簿';eyebrow='REGISTRY';html=docLine('預約狀態',g.registry.found?'有紀錄':'查無紀錄')+docLine('登記姓名',g.registry.name)+docLine('時間',g.registry.time)+docLine('房號',g.registry.room)}
if(type==='rules'){title='夜班入住守則';eyebrow='STAFF MANUAL';html='<ol>'+data.rules.map(r=>`<li>${safe(r)}</li>`).join('')+'</ol>'}
if(type==='observation'){title='住客觀察紀錄';eyebrow='OBSERVATION';html=`<p>${safe(g.observation)}</p>`}
$('modalTitle').textContent=title;$('modalEyebrow').textContent=eyebrow;$('modalBody').innerHTML=html;lastFocus=document.activeElement;$('modal').classList.remove('hidden');$('closeModal').focus()}
function closeDoc(){$('modal').classList.add('hidden');lastFocus?.focus()}
function choose(allow){const g=getGuest();decisions.push({guestId:g.id,allow});$('reactionTitle').textContent=`${g.name}的審查已封存`;$('reactionText').textContent=g.reactions[allow?'allow':'deny'];$('next').textContent=current===data.guests.length-1?'查看夜班結算 →':'接待下一位 →';show('reaction')}
function renderResults(){const correct=decisions.filter((d,i)=>d.allow===data.guests[i].allow).length;$('score').textContent=`${correct} / ${data.guests.length} 判斷正確`;$('results').innerHTML=data.guests.map((g,i)=>{const d=decisions[i];const ok=d.allow===g.allow;return `<div class="result-row"><h3>${safe(g.name)} · <span class="${ok?'correct':'incorrect'}">${ok?'判斷正確':'判斷錯誤'}</span></h3><p>你的決定：${d.allow?'允許':'拒絕'} ｜ 正確答案：${g.allow?'允許':'拒絕'}</p><p><strong>規則依據：</strong>${safe(g.explanation)}</p><p><strong>故事：</strong>${safe(g.story)}</p></div>`}).join('');$('epilogue').textContent=data.epilogue;$('clock').textContent='NIGHT 01 · 06:00';show('ending')}
function reset(){current=0;decisions=[];$('clock').textContent='NIGHT 01';show('home')}
$('initialRules').innerHTML=data.rules.map(r=>`<li>${safe(r)}</li>`).join('');$('start').addEventListener('click',()=>show('rules'));$('enter').addEventListener('click',renderGuest);document.querySelectorAll('[data-doc]').forEach(b=>b.addEventListener('click',()=>openDoc(b.dataset.doc)));$('closeModal').addEventListener('click',closeDoc);$('closeModalBottom').addEventListener('click',closeDoc);$('modal').addEventListener('click',e=>{if(e.target===$('modal'))closeDoc()});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!$('modal').classList.contains('hidden'))closeDoc()});$('allow').addEventListener('click',()=>choose(true));$('deny').addEventListener('click',()=>choose(false));$('next').addEventListener('click',()=>{current++;current<data.guests.length?renderGuest():renderResults()});$('restart').addEventListener('click',reset);
})();
