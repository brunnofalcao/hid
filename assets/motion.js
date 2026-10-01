/* Health Influence Day · movimento leve
   Tudo aqui é progressivo: sem JS ou com "reduzir movimento", a página aparece estática e completa. */
(function () {
  var d = document.documentElement;
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  d.classList.add('js');

  /* 1. Título com entrada palavra por palavra (preserva o ponto vermelho) */
  function splitWords(el) {
    var i = 0, nodes = Array.prototype.slice.call(el.childNodes);
    el.textContent = '';
    nodes.forEach(function (n) {
      if (n.nodeType === 3) {
        n.textContent.split(/(\s+)/).forEach(function (part) {
          if (!part) return;
          if (/^\s+$/.test(part)) { el.appendChild(document.createTextNode(' ')); return; }
          var w = document.createElement('span'); w.className = 'w';
          var s = document.createElement('span'); s.textContent = part; s.style.setProperty('--i', i++);
          w.appendChild(s); el.appendChild(w);
        });
      } else {
        var w2 = document.createElement('span'); w2.className = 'w';
        n.style && n.style.setProperty('--i', i++);
        w2.appendChild(n); el.appendChild(w2);
      }
    });
    el.setAttribute('aria-label', el.textContent);
  }
  if (!reduce) document.querySelectorAll('[data-split]').forEach(splitWords);

  /* 2. Entrada do hero depois que as fontes carregam (evita "pulo" de layout) */
  var go = function () { d.classList.add('ready'); };
  if (document.fonts && document.fonts.ready) {
    var t = setTimeout(go, 900);
    document.fonts.ready.then(function () { clearTimeout(t); requestAnimationFrame(go); });
  } else { go(); }

  /* 3. Revelação suave ao rolar */
  var sel = [
    'main .label:not(.hero .label)', 'main h2', 'main .list > .h', 'main .row', 'main .time',
    'main .strip-row > div', 'main .name', 'main .quote', 'main .bio', 'main .card', 'main .rd-box',
    'main .close', 'main .local', 'main .logo-hotmart', 'main .step', 'main .ty-note',
    'main .photo:not(.photo--hero)', 'main .convite-txt p', 'main .link', 'main .sec .mono.muted'
  ].join(',');
  var els = Array.prototype.slice.call(document.querySelectorAll(sel)).filter(function (el) {
    return !el.closest('.hero') && !el.closest('.ty-hero');
  });
  els.forEach(function (el) {
    el.classList.add('r');
    var sib = Array.prototype.indexOf.call(el.parentNode.children, el);
    el.style.setProperty('--d', Math.min(sib, 6) * 70 + 'ms');
  });
  if (reduce || !('IntersectionObserver' in window)) {
    els.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
    els.forEach(function (el) { io.observe(el); });
  }

  /* 4. Timecode de gravação nas fotos (linguagem de quem produz conteúdo) */
  var tcs = document.querySelectorAll('[data-tc]');
  if (tcs.length) {
    var start = Date.now();
    var pad = function (n) { return (n < 10 ? '0' : '') + n; };
    var tick = function () {
      var s = Math.floor((Date.now() - start) / 1000), f = Math.floor(((Date.now() - start) % 1000) / 40);
      var txt = pad(Math.floor(s / 3600)) + ':' + pad(Math.floor(s / 60) % 60) + ':' + pad(s % 60) + ':' + pad(f);
      tcs.forEach(function (el) { el.textContent = txt; });
    };
    tick();
    if (!reduce) setInterval(tick, 80);
  }

  /* 5. Topo ganha densidade ao rolar + leve parallax na foto do hero (desktop) */
  var top = document.querySelector('.top');
  var heroImg = document.querySelector('.photo--hero img');
  var desk = window.matchMedia && matchMedia('(min-width: 1000px)');
  var ticking = false;
  function onScroll() {
    var y = window.pageYOffset;
    if (top) top.classList.toggle('scrolled', y > 8);
    if (heroImg && !reduce && desk && desk.matches && y < 1200) {
      heroImg.style.transform = 'translate3d(0,' + (y * 0.06).toFixed(1) + 'px,0) scale(1.06)';
    }
    ticking = false;
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
  }, { passive: true });
  onScroll();
})();
