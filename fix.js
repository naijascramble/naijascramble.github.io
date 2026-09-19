/* Report-only diagnostic: when a phone-sized screen shows a wide (>620px) layout, send ONE note per device per day
   to the Traffic sheet (path /HFIX) with the browser identity and viewport facts. It changes nothing on the page.
   Remove this file and the <script src="fix.js?v=2"> lines once the cause is confirmed. */
(function(){
  var KEY = 'ns.hf2';
  window.addEventListener('load', function(){
    setTimeout(function(){
      try{
        var phone = screen.width <= 500 && (navigator.maxTouchPoints || 0) > 0;
        if(!phone || window.innerWidth <= 620) return;
        var today = new Date().toISOString().slice(0, 10);
        try{ if(localStorage.getItem(KEY) === today) return; localStorage.setItem(KEY, today); }catch(e){}
        var mm = function(q){ return window.matchMedia && window.matchMedia(q).matches ? 1 : 0; };
        var vv = window.visualViewport, meta = document.querySelector('meta[name="viewport"]');
        var msg = 'WIDE ' + ((mm('(display-mode: standalone)') || navigator.standalone) ? 'app' : 'tab') +
          ' sw=' + screen.width + 'x' + screen.height + ' iw=' + window.innerWidth + 'x' + window.innerHeight +
          ' ow=' + window.outerWidth + ' dpr=' + Math.round(window.devicePixelRatio * 100) / 100 +
          ' vv=' + (vv ? Math.round(vv.width) + '@' + Math.round(vv.scale * 100) / 100 : '-') +
          ' sc=' + document.documentElement.scrollWidth + '/' + document.documentElement.clientWidth +
          ' mq620=' + mm('(max-width: 620px)') + ' coarse=' + mm('(pointer: coarse)') + ' hover=' + mm('(hover: hover)') +
          ' vp=' + (meta ? meta.getAttribute('content') : 'none') +
          ' ua=' + navigator.userAgent.replace(/\s+/g, ' ').slice(0, 110);
        var b = new URLSearchParams();
        b.append('entry.1993350770', '/HFIX | ' + msg + ' | diag | ' + window.innerWidth + ' | -');
        fetch('https://docs.google.com/forms/d/e/1FAIpQLSe9BkaRhteedIggqd-wz5INQ8XGNVgiDG2wSappw1GyS-TIbQ/formResponse', { method:'POST', mode:'no-cors', body:b });
      }catch(e){}
    }, 500);
  });
})();
