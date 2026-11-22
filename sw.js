self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(clients.claim()));
self.addEventListener('fetch',()=>{});
self.addEventListener('push',e=>{let d={};try{const j=e.data.json();d=j.data||j.notification||j}catch(_){}
e.waitUntil(self.registration.showNotification(d.title||'Chamada UBS',{body:d.body||'',icon:'icon.svg',badge:'icon.svg',requireInteraction:true,vibrate:[200,100,200]}))});
self.addEventListener('notificationclick',e=>{e.notification.close();e.waitUntil(clients.matchAll({type:'window'}).then(l=>l.length?l[0].focus():clients.openWindow('./')))});
