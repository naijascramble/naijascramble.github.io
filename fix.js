/* Self-diagnosing fix for the iOS home-screen app opening in a zoomed-out (wide) layout.
   Only acts when: installed app + phone-sized screen + layout wider than 620px + not desktop-mode.
   Each step switches off one visual suspect (see the html.hfN rules in style.css), reloads, and re-checks.
   The first step that brings the width back to normal is remembered and reported to the Traffic sheet. */
(function(){
  var KEY = 'ns.hf', STEPS = ['hf1','hf2','hf3','hf4','hf5'];
  var de = document.documentElement, st = { cls:[], n:0, log:[], gaveUp:false, reported:false };
  try{ var raw = localStorage.getItem(KEY); if(raw) st = JSON.parse(raw); }catch(e){}
  function save(){ try{ localStorage.setItem(KEY, JSON.stringify(st)); }catch(e){} }
  (st.cls || []).forEach(function(c){ de.className += ' ' + c; });     // apply before first paint

  function report(msg){
    try{
      var b = new URLSearchParams();
      b.append('entry.1993350770', '/HFIX | ' + msg + ' | diag | ' + window.innerWidth + ' | -');
      fetch('https://docs.google.com/forms/d/e/1FAIpQLSe9BkaRhteedIggqd-wz5INQ8XGNVgiDG2wSappw1GyS-TIbQ/formResponse', { method:'POST', mode:'no-cors', body:b });
    }catch(e){}
  }
  function facts(){
    var vv = window.visualViewport;
    return 'sw=' + screen.width + 'x' + screen.height + ' iw=' + window.innerWidth + 'x' + window.innerHeight +
           ' dpr=' + window.devicePixelRatio + ' vv=' + (vv ? Math.round(vv.width) + '@' + vv.scale : '-') +
           ' sc=' + de.scrollWidth + '/' + de.clientWidth + ' cls=[' + (st.cls || []).join(',') + '] log=[' + (st.log || []).join(',') + ']';
  }

  window.addEventListener('load', function(){
    setTimeout(function(){
      try{
        var standalone = (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) || navigator.standalone;
        var phone = screen.width <= 500 && (navigator.maxTouchPoints || 0) > 0;
        var desktopUA = /Macintosh|Windows|X11|CrOS/.test(navigator.userAgent) && !/iPhone|Android/.test(navigator.userAgent) && (navigator.maxTouchPoints || 0) < 1;
        if(!standalone || !phone || desktopUA) return;
        var wide = window.innerWidth > 620;

        if(wide){
          if(st.gaveUp) return;
          st.log.push(window.innerWidth);
          if(st.n >= STEPS.length){
            report('GAVE UP ' + facts());
            st.cls = []; st.gaveUp = true; save();
            location.reload();
            return;
          }
          if(st.n === 0) report('WIDE base ' + facts());
          st.cls.push(STEPS[st.n]); st.n++; save();
          location.reload();
        } else if(st.cls.length && !st.reported){
          st.reported = true; save();
          report('FIXED by ' + st.cls.join('+') + ' ' + facts());
        }
      }catch(e){}
    }, 500);
  });
})();
