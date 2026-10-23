(function () {
  'use strict';

  var D = window.DATA, CARDS = window.CARDS, QUIZ = window.QUIZ;
  var app = document.getElementById('app');

  /* ---------- Tiện ích ---------- */
  function el(tag, attrs) {
    var n = document.createElement(tag);
    attrs = attrs || {};
    Object.keys(attrs).forEach(function (k) {
      var v = attrs[k];
      if (k === 'class') n.className = v;
      else if (k === 'html') n.innerHTML = v;
      else if (k.indexOf('on') === 0 && typeof v === 'function') n.addEventListener(k.slice(2), v);
      else if (v !== false && v != null) n.setAttribute(k, v);
    });
    for (var i = 2; i < arguments.length; i++) {
      var c = arguments[i];
      if (c == null || c === false) continue;
      if (Array.isArray(c)) c.forEach(function (x) { if (x) n.appendChild(typeof x === 'string' ? document.createTextNode(x) : x); });
      else n.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
    }
    return n;
  }
  function clear(n) { while (n.firstChild) n.removeChild(n.firstChild); }
  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function topicName(id) {
    for (var i = 0; i < D.topics.length; i++) if (D.topics[i].id === id) return D.topics[i].name;
    return id;
  }
  function lessonIndex(id) {
    for (var i = 0; i < D.lessons.length; i++) if (D.lessons[i].id === id) return i;
    return -1;
  }

  /* ---------- Lưu tiến độ ---------- */
  var store = { read: {}, known: {}, best: {} };
  try {
    var raw = localStorage.getItem('ycct.v1');
    if (raw) { var o = JSON.parse(raw); store.read = o.read || {}; store.known = o.known || {}; store.best = o.best || {}; }
  } catch (e) { /* bỏ qua */ }
  function save() { try { localStorage.setItem('ycct.v1', JSON.stringify(store)); } catch (e) { /* bỏ qua */ } }
  function count(o) { return Object.keys(o).length; }

  /* ---------- Định tuyến ---------- */
  function route() {
    var h = location.hash.replace(/^#\/?/, '') || 'home';
    var p = h.split('/'), name = p[0], arg = p[1];
    clear(app);
    var navKey = name === 'lesson' ? 'lessons' : name;
    Array.prototype.forEach.call(document.querySelectorAll('.tabbar a'), function (a) {
      a.classList.toggle('active', a.getAttribute('data-nav') === navKey);
    });
    if (name === 'lessons') viewLessons();
    else if (name === 'lesson') viewLesson(arg);
    else if (name === 'cards') viewCards(arg);
    else if (name === 'quiz') viewQuiz(arg);
    else viewHome();
    window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', route);

  function disclaimer() {
    return el('p', { class: 'dis', html: 'Ứng dụng chỉ phục vụ học lý luận cơ bản của Y học cổ truyền. Nội dung <b>không thay thế</b> việc khám, chẩn đoán và điều trị của thầy thuốc hoặc bác sĩ. Không tự dùng thuốc hay tự châm cứu dựa trên nội dung ở đây.' });
  }

  /* ---------- Trang chủ ---------- */
  function lessonItem(l) {
    return el('a', { class: 'lesson-item', href: '#/lesson/' + l.id },
      el('div', { class: 'ico' }, l.icon),
      el('div', {}, el('div', { class: 't', html: '' }, l.title), el('div', { class: 's' }, l.sub + ' · ' + l.minutes + ' phút')),
      store.read[l.id] ? el('div', { class: 'done' }, '✓ Đã học') : null
    );
  }
  function lessonGroups() {
    var basic = D.lessons.filter(function (l) { return l.grp !== 'nc'; });
    var adv = D.lessons.filter(function (l) { return l.grp === 'nc'; });
    var g = el('div', { class: 'grid' });
    basic.forEach(function (l) { g.appendChild(lessonItem(l)); });
    app.appendChild(g);
    if (adv.length) {
      app.appendChild(el('h2', { class: 'adv-head' }, 'Nâng cao ', el('span', { class: 'tag-adv' }, adv.length + ' bài')));
      app.appendChild(el('p', { class: 'adv-note', html: '<b>Nên học sau khi đã xong 8 bài cơ bản ở trên.</b> Phần này dùng nhiều thuật ngữ và kiến thức của các bài trước, nên bạn sẽ dễ theo hơn khi đã nắm vững nền tảng.' }));
      var g2 = el('div', { class: 'grid' });
      adv.forEach(function (l) { g2.appendChild(lessonItem(l)); });
      app.appendChild(g2);
    }
  }
  function viewHome() {
    var bestVals = Object.keys(store.best).map(function (k) { return store.best[k]; });
    var bestTxt = bestVals.length ? Math.max.apply(null, bestVals) + '%' : '–';
    app.appendChild(el('div', { class: 'hero' },
      el('h1', {}, 'Y học cổ truyền cơ bản'),
      el('p', {}, 'Học lý luận nền tảng từng bước, dành cho người mới bắt đầu: âm dương, ngũ hành, tạng phủ, khí huyết, kinh lạc, nguyên nhân bệnh, tứ chẩn và bát cương. Sau đó có phần Nâng cao: bệnh cơ, biện chứng tạng phủ, biện chứng ngoại cảm và các pháp điều trị.')
    ));
    app.appendChild(el('div', { class: 'stats' },
      el('div', { class: 'stat', html: '<b>' + count(store.read) + '/' + D.lessons.length + '</b><small>Bài đã học</small>' }),
      el('div', { class: 'stat', html: '<b>' + count(store.known) + '/' + CARDS.length + '</b><small>Thẻ đã nhớ</small>' }),
      el('div', { class: 'stat', html: '<b>' + bestTxt + '</b><small>Điểm trắc nghiệm cao nhất</small>' })
    ));
    app.appendChild(el('h2', {}, 'Lộ trình học gợi ý'));
    app.appendChild(el('p', { class: 'sub' }, 'Học theo thứ tự từ trên xuống. Mỗi bài có phần “Cần nhớ” ở cuối, sau đó làm trắc nghiệm để kiểm tra.'));
    lessonGroups();
    app.appendChild(el('div', { class: 'btn-row' },
      el('a', { class: 'btn ghost', href: '#/cards' }, 'Ôn thẻ thuật ngữ'),
      el('a', { class: 'btn', href: '#/quiz' }, 'Làm trắc nghiệm')
    ));
    app.appendChild(disclaimer());
  }

  function viewLessons() {
    app.appendChild(el('h1', {}, 'Bài học'));
    app.appendChild(el('p', { class: 'sub' }, D.lessons.length + ' bài (8 cơ bản và ' + D.lessons.filter(function (l) { return l.grp === 'nc'; }).length + ' nâng cao), học theo thứ tự để dễ hiểu nhất.'));
    lessonGroups();
    app.appendChild(disclaimer());
  }

  /* ---------- Hiển thị bài học ---------- */
  function table(b) {
    var t = el('table');
    t.appendChild(el('thead', {}, el('tr', {}, b.head.map(function (h) { return el('th', { html: h }); }))));
    var tb = el('tbody');
    b.rows.forEach(function (r) { tb.appendChild(el('tr', {}, r.map(function (c) { return el('td', { html: c }); }))); });
    t.appendChild(tb);
    return el('div', { class: 'tablewrap' }, t);
  }
  function block(b) {
    switch (b.t) {
      case 'h': return el('h3', { html: b.x });
      case 'p': return el('p', { html: b.x });
      case 'ul': return el('ul', {}, b.x.map(function (i) { return el('li', { html: i }); }));
      case 'note': return el('div', { class: 'note' }, el('strong', { html: b.title || 'Giải thích thuật ngữ' }), el('div', { html: b.x }));
      case 'table': return table(b);
      case 'fig':
        if (!window.ART || !window.ART[b.id]) return null;
        return el('figure', { class: 'fig' }, el('div', { html: window.ART[b.id]() }), el('figcaption', {}, b.cap));
      case 'widget':
        if (WIDGETS[b.id]) return WIDGETS[b.id]();
        if (window.WIDGETS_EXT && window.WIDGETS_EXT[b.id]) return window.WIDGETS_EXT[b.id]({ el: el, clear: clear, D: D });
        return null;
    }
    return null;
  }
  function viewLesson(id) {
    var i = lessonIndex(id);
    if (i < 0) { location.hash = '#/lessons'; return; }
    var l = D.lessons[i];
    app.appendChild(el('div', { class: 'sub' }, el('a', { href: '#/lessons' }, '← Danh sách bài học')));
    app.appendChild(el('h1', {}, l.icon + ' Bài ' + (i + 1) + ': ' + l.title));
    app.appendChild(el('p', { class: 'sub' }, l.sub + ' · khoảng ' + l.minutes + ' phút'));
    if (l.grp === 'nc') app.appendChild(el('p', { class: 'adv-note', html: '<b>Bài Nâng cao.</b> Nên học sau khi đã xong 8 bài cơ bản. Gặp thuật ngữ lạ, hãy quay lại bài cơ bản hoặc xem phần “Giải thích thuật ngữ” trong bài.' }));
    l.blocks.forEach(function (b) { var n = block(b); if (n) app.appendChild(n); });
    app.appendChild(el('div', { class: 'keybox' },
      el('h3', {}, 'Cần nhớ'),
      el('ul', {}, l.key.map(function (k) { return el('li', { html: k }); }))
    ));
    var doneBtn = el('button', { class: 'btn' + (store.read[l.id] ? ' ghost' : ''), type: 'button' }, store.read[l.id] ? '✓ Đã học (bấm để bỏ đánh dấu)' : 'Đánh dấu đã học');
    doneBtn.addEventListener('click', function () {
      if (store.read[l.id]) delete store.read[l.id]; else store.read[l.id] = true;
      save();
      doneBtn.className = 'btn' + (store.read[l.id] ? ' ghost' : '');
      doneBtn.textContent = store.read[l.id] ? '✓ Đã học (bấm để bỏ đánh dấu)' : 'Đánh dấu đã học';
    });
    app.appendChild(el('div', { class: 'btn-row' },
      doneBtn,
      el('a', { class: 'btn ghost', href: '#/cards/' + l.id }, 'Ôn thẻ bài này'),
      el('a', { class: 'btn ghost', href: '#/quiz/' + l.id }, 'Trắc nghiệm bài này')
    ));
    var nav = el('div', { class: 'btn-row' });
    if (i > 0) nav.appendChild(el('a', { class: 'btn ghost small', href: '#/lesson/' + D.lessons[i - 1].id }, '← ' + D.lessons[i - 1].title));
    if (i < D.lessons.length - 1) nav.appendChild(el('a', { class: 'btn small', href: '#/lesson/' + D.lessons[i + 1].id }, D.lessons[i + 1].title + ' →'));
    app.appendChild(nav);
    app.appendChild(disclaimer());
  }

  /* ---------- Các sơ đồ tương tác ---------- */
  var WIDGETS = {};

  /* Âm dương */
  WIDGETS.yinyang = function () {
    var box = el('div', { class: 'widget' });
    var chips = el('div', { class: 'chips' });
    var out = el('div');
    function show(s) {
      Array.prototype.forEach.call(chips.children, function (c) { c.classList.toggle('on', c.getAttribute('data-id') === s.id); });
      clear(out);
      out.appendChild(el('h4', {}, s.name + ' '));
      out.lastChild.appendChild(el('span', { class: 'pill' }, s.tag));
      out.appendChild(el('p', { html: s.giaithich }));
      out.appendChild(el('div', { class: 'bars' },
        el('div', { class: 'bar-row' }, el('span', { class: 'lbl' }, 'Dương'), el('div', { class: 'bar' }, el('i', { style: 'width:' + s.D + '%;background:#d9822b' }), el('span', { class: 'mid' }))),
        el('div', { class: 'bar-row' }, el('span', { class: 'lbl' }, 'Âm'), el('div', { class: 'bar' }, el('i', { style: 'width:' + s.A + '%;background:#3b78c4' }), el('span', { class: 'mid' }))),
        el('div', { class: 'bar-note' }, 'Vạch đen ở giữa là mức bình thường (50%). Thanh dài quá vạch là quá mạnh, ngắn hơn vạch là thiếu.')
      ));
      out.appendChild(el('h4', {}, 'Biểu hiện thường gặp'));
      out.appendChild(el('ul', {}, s.bieuhien.map(function (b) { return el('li', {}, b); })));
      out.appendChild(el('p', {}, el('b', {}, s.huong)));
    }
    D.yinyangStates.forEach(function (s) {
      chips.appendChild(el('button', { class: 'chip', type: 'button', 'data-id': s.id, onclick: function () { show(s); } }, s.name));
    });
    box.appendChild(chips); box.appendChild(out);
    show(D.yinyangStates[0]);
    return box;
  };

  /* Bảng quy loại ngũ hành */
  WIDGETS.nguhanhtable = function () {
    var rows = [
      ['Tính chất', 'tinhchat'], ['Mùa', 'mua'], ['Phương', 'phuong'], ['Màu', 'sac'], ['Vị', 'vi'],
      ['Khí hậu', 'khihau'], ['Tạng (Âm)', 'tang'], ['Phủ (Dương)', 'phu'], ['Khiếu (giác quan)', 'khieu'],
      ['Thể (mô)', 'the'], ['Chí (cảm xúc)', 'chi'], ['Dịch', 'dich']
    ];
    var t = el('table');
    t.appendChild(el('thead', {}, el('tr', {}, [el('th', {}, 'Thuộc tính')].concat(D.nguhanh.map(function (h) { return el('th', {}, h.ten); })))));
    var tb = el('tbody');
    rows.forEach(function (r) {
      tb.appendChild(el('tr', {}, [el('td', {}, r[0])].concat(D.nguhanh.map(function (h) { return el('td', {}, h[r[1]]); }))));
    });
    t.appendChild(tb);
    return el('div', { class: 'tablewrap' }, t);
  };

  /* Sơ đồ ngũ hành */
  WIDGETS.nguhanh = function () {
    var NS = 'http://www.w3.org/2000/svg';
    var cx = 190, cy = 190, R = 130, NR = 34;
    var mode = 'both', sel = -1;
    var H = D.nguhanh;
    var pts = H.map(function (h, i) {
      var ang = (-90 + (i - 1) * 72) * Math.PI / 180;
      return { x: cx + R * Math.cos(ang), y: cy + R * Math.sin(ang) };
    });
    var box = el('div', { class: 'widget' });
    var modes = el('div', { class: 'chips' });
    var svgHost = el('div');
    var info = el('div', { class: 'detail' });

    function mk(tag, attrs) {
      var n = document.createElementNS(NS, tag);
      Object.keys(attrs).forEach(function (k) { n.setAttribute(k, attrs[k]); });
      return n;
    }
    function line(i, j, cls, dim) {
      var dx = pts[j].x - pts[i].x, dy = pts[j].y - pts[i].y, d = Math.sqrt(dx * dx + dy * dy);
      var ux = dx / d, uy = dy / d, pad = NR + 6;
      var l = mk('line', {
        x1: pts[i].x + ux * pad, y1: pts[i].y + uy * pad, x2: pts[j].x - ux * pad, y2: pts[j].y - uy * pad,
        'class': 'nh-line ' + cls + (dim ? ' dim' : ''), 'marker-end': 'url(#' + (cls === 'sinh' ? 'as' : 'ak') + ')'
      });
      return l;
    }
    function draw() {
      clear(svgHost);
      var svg = mk('svg', { viewBox: '0 0 380 380', 'class': 'nh-svg', role: 'img', 'aria-label': 'Sơ đồ ngũ hành tương sinh tương khắc' });
      var defs = mk('defs', {});
      function marker(id, color) {
        var m = mk('marker', { id: id, viewBox: '0 0 10 10', refX: 8, refY: 5, markerWidth: 7, markerHeight: 7, orient: 'auto-start-reverse' });
        m.appendChild(mk('path', { d: 'M0,0 L10,5 L0,10 z', fill: color }));
        return m;
      }
      defs.appendChild(marker('as', '#2a9d6b'));
      defs.appendChild(marker('ak', '#d1493a'));
      svg.appendChild(defs);
      var i;
      for (i = 0; i < 5; i++) {
        if (mode !== 'khac') svg.appendChild(line(i, (i + 1) % 5, 'sinh', sel >= 0 && sel !== i && sel !== (i + 1) % 5));
        if (mode !== 'sinh') svg.appendChild(line(i, (i + 2) % 5, 'khac', sel >= 0 && sel !== i && sel !== (i + 2) % 5));
      }
      H.forEach(function (h, k) {
        var g = mk('g', { 'class': 'nh-node' + (sel === k ? ' sel' : ''), tabindex: 0, role: 'button', 'aria-label': h.ten });
        g.appendChild(mk('circle', { cx: pts[k].x, cy: pts[k].y, r: NR, fill: h.mau }));
        var t = mk('text', { x: pts[k].x, y: pts[k].y });
        t.textContent = h.ten;
        g.appendChild(t);
        g.addEventListener('click', function () { sel = k; draw(); showInfo(); });
        g.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); sel = k; draw(); showInfo(); } });
        svg.appendChild(g);
      });
      svgHost.appendChild(svg);
    }
    function showInfo() {
      clear(info);
      if (sel < 0) { info.appendChild(el('p', { class: 'bar-note' }, 'Bấm vào một hành trên sơ đồ để xem chi tiết.')); return; }
      var h = H[sel];
      var sinh = H[(sel + 1) % 5], me = H[(sel + 4) % 5], khac = H[(sel + 2) % 5], bikhac = H[(sel + 3) % 5];
      info.appendChild(el('h4', {}, h.ten + ' (' + h.ky + '): ' + h.tinhchat));
      info.appendChild(el('div', { class: 'rel-list' },
        el('div', { html: '<b>Sinh ra</b> (là mẹ của): ' + sinh.ten }),
        el('div', { html: '<b>Được sinh bởi</b> (mẹ của ' + h.ten + '): ' + me.ten }),
        el('div', { html: '<b>Khắc</b> (kiềm chế): ' + khac.ten }),
        el('div', { html: '<b>Bị khắc bởi</b>: ' + bikhac.ten })
      ));
      info.appendChild(el('p', { html: '<b>Thuộc tính:</b> mùa ' + h.mua + '; phương ' + h.phuong + '; màu ' + h.sac + '; vị ' + h.vi + '; khí hậu ' + h.khihau + '; tạng ' + h.tang + ', phủ ' + h.phu + '; khiếu: ' + h.khieu + '; thể: ' + h.the + '; chí: ' + h.chi + '.' }));
    }
    [['both', 'Cả hai'], ['sinh', 'Tương sinh'], ['khac', 'Tương khắc']].forEach(function (m) {
      var b = el('button', { class: 'chip' + (mode === m[0] ? ' on' : ''), type: 'button' }, m[1]);
      b.addEventListener('click', function () {
        mode = m[0];
        Array.prototype.forEach.call(modes.children, function (c) { c.classList.remove('on'); });
        b.classList.add('on');
        draw();
      });
      modes.appendChild(b);
    });
    box.appendChild(modes);
    box.appendChild(svgHost);
    box.appendChild(el('div', { class: 'legend', html: '<span><i class="s"></i>Tương sinh (nuôi dưỡng)</span><span><i class="k"></i>Tương khắc (kiềm chế)</span>' }));
    box.appendChild(info);
    draw(); showInfo();
    return box;
  };

  /* Tạng phủ */
  WIDGETS.tangphu = function () {
    var box = el('div', { class: 'widget' });
    var chips = el('div', { class: 'chips' });
    var out = el('div', { class: 'detail' });
    function show(t) {
      Array.prototype.forEach.call(chips.children, function (c) { c.classList.toggle('on', c.getAttribute('data-id') === t.id); });
      clear(out);
      out.appendChild(el('h4', {}, 'Tạng ' + t.tang + ' (Âm) – Phủ ' + t.phu + ' (Dương)'));
      out.appendChild(el('p', { html: '<b>Hành:</b> ' + t.hanh }));
      out.appendChild(el('h4', {}, 'Chức năng của ' + t.tang));
      out.appendChild(el('ul', {}, t.tangCT.map(function (x) { return el('li', {}, x); })));
      out.appendChild(el('h4', {}, 'Chức năng của ' + t.phu));
      out.appendChild(el('ul', {}, t.phuCT.map(function (x) { return el('li', {}, x); })));
      out.appendChild(el('h4', {}, 'Khiếu (cơ quan giác quan liên quan)'));
      out.appendChild(el('p', {}, t.khieu));
      out.appendChild(el('h4', {}, 'Biểu hiện khi mất cân bằng'));
      out.appendChild(el('ul', {}, t.benh.map(function (x) { return el('li', {}, x); })));
    }
    D.tangphu.forEach(function (t) {
      chips.appendChild(el('button', { class: 'chip', type: 'button', 'data-id': t.id, onclick: function () { show(t); } }, t.tang + ' – ' + t.phu));
    });
    box.appendChild(chips); box.appendChild(out);
    show(D.tangphu[0]);
    return box;
  };

  /* Kinh lạc */
  WIDGETS.kinhlac = function () {
    var box = el('div', { class: 'widget' });
    var filt = 'all';
    var chips = el('div', { class: 'chips' });
    var list = el('div');
    var filters = [['all', 'Tất cả'], ['am', 'Kinh Âm'], ['duong', 'Kinh Dương'], ['thu', 'Ở tay (Thủ)'], ['tuc', 'Ở chân (Túc)']];
    function render() {
      clear(list);
      D.kinh12.filter(function (k) { return filt === 'all' || k.loai === filt || k.chi === filt; }).forEach(function (k) {
        list.appendChild(el('div', { class: 'kinh-card' },
          el('div', { class: 'nm' }, k.stt + '. ' + k.ten, el('span', { class: 'badge ' + k.loai }, k.loai === 'am' ? 'Âm' : 'Dương')),
          el('div', { class: 'row', html: '<b>Thuộc:</b> ' + k.tp + ' · <b>Giờ vượng khí:</b> ' + k.gio }),
          el('div', { class: 'row', html: '<b>Đường đi:</b> ' + k.duong }),
          el('div', { class: 'row', html: '<b>Huyệt tiêu biểu:</b> ' + k.huyet })
        ));
      });
    }
    filters.forEach(function (f) {
      var b = el('button', { class: 'chip' + (f[0] === filt ? ' on' : ''), type: 'button' }, f[1]);
      b.addEventListener('click', function () {
        filt = f[0];
        Array.prototype.forEach.call(chips.children, function (c) { c.classList.remove('on'); });
        b.classList.add('on'); render();
      });
      chips.appendChild(b);
    });
    box.appendChild(el('div', { class: 'note', html: '<strong>Cách đọc mã huyệt</strong>Mã gồm chữ cái và số. Chữ cái là tên kinh theo tiếng Anh: LU (Phế), LI (Đại trường), ST (Vị), SP (Tỳ), HT (Tâm), SI (Tiểu trường), BL (Bàng quang), KI (Thận), PC (Tâm bào), TE (Tam tiêu), GB (Đởm), LR (Can). Số là thứ tự huyệt trên kinh đó. Ví dụ LI4 là huyệt thứ 4 của kinh Đại trường (Hợp cốc).' }));
    box.appendChild(chips); box.appendChild(list);
    render();
    return box;
  };

  /* Bát cương: bài tập chọn triệu chứng */
  WIDGETS.batcuong = function () {
    var box = el('div', { class: 'widget' });
    var chosen = {};
    var result = el('div');
    var pairs = [
      ['Biểu', 'bieu', 'Lý', 'ly'],
      ['Hàn', 'han', 'Nhiệt', 'nhiet'],
      ['Hư', 'hu', 'Thực', 'thuc']
    ];
    function calc() {
      var c = {}, any = false;
      D.symptoms.forEach(function (s, i) {
        if (chosen[i]) { any = true; s.tags.forEach(function (t) { c[t] = (c[t] || 0) + 1; }); }
      });
      clear(result);
      if (!any) { result.appendChild(el('p', { class: 'bar-note' }, 'Chọn ít nhất một triệu chứng để xem kết quả.')); return; }
      var concl = [];
      pairs.forEach(function (p) {
        var a = c[p[1]] || 0, b = c[p[3]] || 0, tot = a + b;
        var row = el('div', { class: 'bar-row' },
          el('span', { class: 'lbl', style: 'width:84px' }, p[0] + ' – ' + p[2]),
          el('div', { class: 'bar' }, el('i', { style: 'width:' + (tot ? Math.round(a * 100 / tot) : 0) + '%;background:#d9822b' })),
          el('span', { class: 'bar-note', style: 'width:64px;text-align:right' }, a + ' : ' + b)
        );
        result.appendChild(row);
        if (tot) concl.push(a > b ? p[0] : (b > a ? p[2] : p[0] + '/' + p[2] + ' (chưa rõ)'));
      });
      result.appendChild(el('div', { class: 'bar-note' }, 'Thanh màu cam là phần của cương đứng trước (Biểu, Hàn, Hư); phần còn lại là cương đứng sau (Lý, Nhiệt, Thực). Số bên phải là số triệu chứng đã chọn thuộc từng bên.'));
      result.appendChild(el('div', { class: 'explain', html: '<b>Nghiêng về:</b> ' + concl.join(' · ') + '<br>Bài tập chỉ minh họa cách suy luận, không dùng để tự chẩn đoán.' }));
    }
    D.symptoms.forEach(function (s, i) {
      var cb = el('input', { type: 'checkbox' });
      cb.addEventListener('change', function () { chosen[i] = cb.checked; calc(); });
      box.appendChild(el('label', { class: 'sym' }, cb, el('span', {}, s.t)));
    });
    box.appendChild(el('h4', { style: 'margin-top:12px' }, 'Kết quả'));
    box.appendChild(result);
    calc();
    return box;
  };

  /* ---------- Thẻ ôn ---------- */
  function topicSelect(current, onchange) {
    var s = el('select');
    s.appendChild(el('option', { value: 'all' }, 'Tất cả chủ đề'));
    var og1 = el('optgroup', { label: 'Cơ bản' }), og2 = el('optgroup', { label: 'Nâng cao' });
    D.topics.forEach(function (t) { (t.grp === 'nc' ? og2 : og1).appendChild(el('option', { value: t.id }, t.name)); });
    s.appendChild(og1); if (og2.firstChild) s.appendChild(og2);
    s.value = current;
    s.addEventListener('change', function () { onchange(s.value); });
    return s;
  }
  function viewCards(topicArg) {
    var topic = topicArg && topicName(topicArg) !== topicArg ? topicArg : 'all';
    var mode = 'flip', onlyUnknown = false, doShuffle = false, idx = 0, queue = [], flipped = false, search = '';

    app.appendChild(el('h1', {}, 'Thẻ ôn thuật ngữ'));
    app.appendChild(el('p', { class: 'sub' }, 'Bấm vào thẻ để lật. Bấm “Đã nhớ” hoặc “Chưa nhớ” để sang thẻ tiếp theo.'));
    var ctrl = el('div');
    var body = el('div');
    app.appendChild(ctrl); app.appendChild(body);
    app.appendChild(disclaimer());

    function filtered() {
      return CARDS.filter(function (c) {
        if (topic !== 'all' && c.topic !== topic) return false;
        if (mode === 'flip' && onlyUnknown && store.known[c.id]) return false;
        if (mode === 'list' && search) {
          var s = search.toLowerCase();
          if ((c.term + ' ' + c.mean + ' ' + c.note).toLowerCase().indexOf(s) < 0) return false;
        }
        return true;
      });
    }
    function rebuild() { queue = filtered(); if (doShuffle) queue = shuffle(queue); idx = 0; flipped = false; render(); }

    function drawCtrl() {
      clear(ctrl);
      ctrl.appendChild(el('div', { class: 'chips' },
        el('button', { class: 'chip' + (mode === 'flip' ? ' on' : ''), type: 'button', onclick: function () { mode = 'flip'; drawCtrl(); rebuild(); } }, 'Lật thẻ'),
        el('button', { class: 'chip' + (mode === 'list' ? ' on' : ''), type: 'button', onclick: function () { mode = 'list'; drawCtrl(); rebuild(); } }, 'Danh sách tra cứu')
      ));
      ctrl.appendChild(topicSelect(topic, function (v) { topic = v; rebuild(); }));
      if (mode === 'flip') {
        var c1 = el('input', { type: 'checkbox' }); c1.checked = onlyUnknown;
        c1.addEventListener('change', function () { onlyUnknown = c1.checked; rebuild(); });
        var c2 = el('input', { type: 'checkbox' }); c2.checked = doShuffle;
        c2.addEventListener('change', function () { doShuffle = c2.checked; rebuild(); });
        ctrl.appendChild(el('label', { class: 'check' }, c1, 'Chỉ ôn thẻ chưa nhớ'));
        ctrl.appendChild(el('label', { class: 'check' }, c2, 'Xáo trộn thứ tự'));
      } else {
        var inp = el('input', { type: 'search', placeholder: 'Tìm thuật ngữ…' });
        inp.value = search;
        inp.addEventListener('input', function () { search = inp.value; var pos = inp.selectionStart; queue = filtered(); renderList(); });
        ctrl.appendChild(el('div', { style: 'margin-top:8px' }, inp));
      }
    }

    function render() { if (mode === 'flip') renderFlip(); else renderList(); }

    function renderList() {
      clear(body);
      if (!queue.length) { body.appendChild(el('p', { class: 'empty' }, 'Không có thuật ngữ phù hợp.')); return; }
      var w = el('div', { class: 'card' });
      queue.forEach(function (c) {
        w.appendChild(el('div', { class: 'listitem' },
          el('div', { class: 'tt' }, c.term + (store.known[c.id] ? ' ✓' : '')),
          el('div', { class: 'mm' }, c.mean),
          c.note ? el('div', { class: 'nn' }, c.note) : null,
          el('div', { class: 'nn' }, 'Chủ đề: ' + topicName(c.topic))
        ));
      });
      body.appendChild(w);
    }

    function renderFlip() {
      clear(body);
      var total = CARDS.filter(function (c) { return topic === 'all' || c.topic === topic; });
      var knownN = total.filter(function (c) { return store.known[c.id]; }).length;
      body.appendChild(el('div', { class: 'bar-note' }, 'Đã nhớ ' + knownN + '/' + total.length + ' thẻ' + (topic === 'all' ? '' : ' của chủ đề này')));
      body.appendChild(el('div', { class: 'progress' }, el('i', { style: 'width:' + (total.length ? Math.round(knownN * 100 / total.length) : 0) + '%' })));
      if (!queue.length) {
        body.appendChild(el('div', { class: 'card empty', html: onlyUnknown ? 'Bạn đã nhớ hết các thẻ ở chủ đề này. Rất tốt!' : 'Không có thẻ nào.' }));
        return;
      }
      if (idx >= queue.length) {
        body.appendChild(el('div', { class: 'card empty', html: 'Đã xem hết ' + queue.length + ' thẻ.' }));
        body.appendChild(el('div', { class: 'btn-row' }, el('button', { class: 'btn', type: 'button', onclick: rebuild }, 'Ôn lại từ đầu')));
        return;
      }
      var c = queue[idx];
      var card = el('div', { class: 'flip' + (flipped ? ' on' : '') },
        el('div', { class: 'flip-inner', style: 'min-height:240px' },
          el('div', { class: 'face front' }, el('div', { class: 'tag' }, topicName(c.topic) + ' · thẻ ' + (idx + 1) + '/' + queue.length), el('div', { class: 'term' }, c.term), el('div', { class: 'hint' }, 'Bấm để xem nghĩa')),
          el('div', { class: 'face back' }, el('div', { class: 'tag' }, c.term), el('div', { class: 'mean' }, c.mean), c.note ? el('div', { class: 'extra' }, c.note) : null)
        )
      );
      card.addEventListener('click', function () { flipped = !flipped; card.classList.toggle('on', flipped); });
      body.appendChild(card);
      function next(known) {
        if (known) store.known[c.id] = true; else delete store.known[c.id];
        save(); idx++; flipped = false; renderFlip();
      }
      body.appendChild(el('div', { class: 'btn-row' },
        el('button', { class: 'btn ghost', type: 'button', onclick: function () { next(false); } }, '✗ Chưa nhớ'),
        el('button', { class: 'btn', type: 'button', onclick: function () { next(true); } }, '✓ Đã nhớ')
      ));
    }

    drawCtrl(); rebuild();
  }

  /* ---------- Trắc nghiệm ---------- */
  function viewQuiz(topicArg) {
    var topic = topicArg && topicName(topicArg) !== topicArg ? topicArg : 'all';
    app.appendChild(el('h1', {}, 'Trắc nghiệm'));
    var host = el('div');
    app.appendChild(host);
    app.appendChild(disclaimer());

    function start() {
      clear(host);
      host.appendChild(el('p', { class: 'sub' }, 'Chọn chủ đề rồi bấm bắt đầu. Mỗi lượt tối đa 10 câu, có giải thích sau mỗi câu.'));
      var sel = topicSelect(topic, function (v) { topic = v; start(); });
      host.appendChild(sel);
      var pool = QUIZ.filter(function (q) { return topic === 'all' || q.topic === topic; });
      host.appendChild(el('p', { class: 'bar-note' }, 'Có ' + pool.length + ' câu trong chủ đề này.' + (store.best[topic] != null ? ' Điểm cao nhất của bạn: ' + store.best[topic] + '%.' : '')));
      host.appendChild(el('div', { class: 'btn-row' }, el('button', { class: 'btn', type: 'button', onclick: function () { run(pool); } }, 'Bắt đầu')));
    }

    function run(pool) {
      var qs = shuffle(pool).slice(0, 10);
      var i = 0, score = 0, wrong = [];
      function ask() {
        clear(host);
        if (i >= qs.length) return finish();
        var q = qs[i];
        host.appendChild(el('div', { class: 'bar-note' }, 'Câu ' + (i + 1) + '/' + qs.length + ' · ' + topicName(q.topic)));
        host.appendChild(el('div', { class: 'progress' }, el('i', { style: 'width:' + Math.round(i * 100 / qs.length) + '%' })));
        host.appendChild(el('div', { class: 'q' }, q.q));
        var order = shuffle(q.o.map(function (t, k) { return { t: t, ok: k === q.a }; }));
        var btns = [], fb = el('div'), answered = false;
        order.forEach(function (op) {
          var b = el('button', { class: 'opt', type: 'button' }, op.t);
          b.addEventListener('click', function () {
            if (answered) return;
            answered = true;
            btns.forEach(function (x, k) {
              x.disabled = true;
              if (order[k].ok) x.classList.add('ok');
            });
            if (op.ok) { score++; b.classList.add('ok'); }
            else { b.classList.add('bad'); wrong.push({ q: q.q, right: q.o[q.a], e: q.e }); }
            fb.appendChild(el('div', { class: 'explain', html: (op.ok ? '<b>Đúng.</b> ' : '<b>Chưa đúng.</b> ') + q.e }));
            fb.appendChild(el('div', { class: 'btn-row' }, el('button', { class: 'btn', type: 'button', onclick: function () { i++; ask(); } }, i + 1 >= qs.length ? 'Xem kết quả' : 'Câu tiếp theo')));
          });
          btns.push(b); host.appendChild(b);
        });
        host.appendChild(fb);
      }
      function finish() {
        var pct = Math.round(score * 100 / qs.length);
        if (store.best[topic] == null || pct > store.best[topic]) { store.best[topic] = pct; save(); }
        host.appendChild(el('h2', { style: 'text-align:center' }, 'Kết quả'));
        host.appendChild(el('div', { class: 'score' }, score + '/' + qs.length));
        host.appendChild(el('p', { style: 'text-align:center' }, pct >= 80 ? 'Rất tốt! Bạn nắm khá vững phần này.' : pct >= 50 ? 'Khá ổn. Hãy xem lại các câu sai bên dưới.' : 'Hãy đọc lại bài học rồi thử lại nhé.'));
        if (wrong.length) {
          host.appendChild(el('h3', {}, 'Các câu cần xem lại'));
          wrong.forEach(function (w) {
            host.appendChild(el('div', { class: 'wrong-item' }, el('b', {}, w.q), el('small', { html: 'Đáp án đúng: <b>' + w.right + '</b>. ' + w.e })));
          });
        }
        host.appendChild(el('div', { class: 'btn-row' },
          el('button', { class: 'btn', type: 'button', onclick: function () { run(pool); } }, 'Làm lại'),
          el('button', { class: 'btn ghost', type: 'button', onclick: start }, 'Chọn chủ đề khác')
        ));
      }
      ask();
    }

    start();
  }

  route();
})();
