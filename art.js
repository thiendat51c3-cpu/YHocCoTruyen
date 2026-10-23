/* Hình minh họa SVG tự vẽ cho các bài học */
(function () {
  'use strict';

  var BL = '#3b78c4', OR = '#d9822b';
  var HC = { moc: '#3f9b5a', hoa: '#d9482b', tho: '#c99a2e', kim: '#8793a0', thuy: '#2f6db5' };
  var uid = 0;
  var ART = {};

  /* ---------- Hàm hỗ trợ ---------- */
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
  function svg(w, h, inner, label) {
    return '<svg viewBox="0 0 ' + w + ' ' + h + '" role="img" aria-label="' + esc(label) + '" xmlns="http://www.w3.org/2000/svg">' + inner + '</svg>';
  }
  /* Văn bản nhiều dòng. o: s cỡ chữ, a căn lề, c lớp màu, b đậm, lh giãn dòng, rot xoay */
  function tx(x, y, s, o) {
    o = o || {};
    var lines = Array.isArray(s) ? s : [s];
    var fs = o.s || 12, lh = o.lh || Math.round(fs * 1.25);
    var out = '<text x="' + x + '" y="' + y + '" font-size="' + fs + '" text-anchor="' + (o.a || 'middle') + '" class="' + (o.c || 'ft') + '"' +
      (o.b ? ' font-weight="700"' : '') + (o.rot ? ' transform="rotate(' + o.rot + ' ' + x + ' ' + y + ')"' : '') + '>';
    lines.forEach(function (l, i) { out += '<tspan x="' + x + '" dy="' + (i ? lh : 0) + '">' + esc(l) + '</tspan>'; });
    return out + '</text>';
  }
  function marker(id, color) {
    return '<marker id="' + id + '" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0L10,5L0,10z" fill="' + color + '"/></marker>';
  }
  function rect(x, y, w, h, fill, o) {
    o = o || {};
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="' + (o.rx == null ? 10 : o.rx) + '" fill="' + fill + '"' +
      (o.stroke ? ' stroke="' + o.stroke + '" stroke-width="' + (o.sw || 1.5) + '"' : '') + (o.dash ? ' stroke-dasharray="' + o.dash + '"' : '') + (o.op ? ' opacity="' + o.op + '"' : '') + '/>';
  }
  function pol(cx, cy, r, deg) { var a = deg * Math.PI / 180; return [cx + r * Math.cos(a), cy + r * Math.sin(a)]; }
  function sector(cx, cy, r1, r2, a0, a1) {
    var p1 = pol(cx, cy, r2, a0), p2 = pol(cx, cy, r2, a1), p3 = pol(cx, cy, r1, a1), p4 = pol(cx, cy, r1, a0);
    return 'M' + p1 + ' A' + r2 + ',' + r2 + ' 0 0 1 ' + p2 + ' L' + p3 + ' A' + r1 + ',' + r1 + ' 0 0 0 ' + p4 + 'Z';
  }

  /* Biểu tượng ngũ hành, vẽ quanh gốc (0,0) */
  function icon(n, x, y, k) {
    var g = '<g transform="translate(' + x + ',' + y + ') scale(' + (k || 1) + ')">';
    if (n === 'moc') g += '<rect x="-3" y="4" width="6" height="14" fill="#8a5a2b"/><circle cx="0" cy="-5" r="13" fill="' + HC.moc + '"/><circle cx="-9" cy="2" r="8" fill="#4fae6b"/><circle cx="9" cy="2" r="8" fill="#4fae6b"/>';
    if (n === 'hoa') g += '<path d="M0,-18 C6,-8 14,-4 12,6 C10,15 -10,15 -12,6 C-14,-2 -6,-6 0,-18Z" fill="#e8552f"/><path d="M0,-4 C4,2 7,4 5,9 C3,13 -3,13 -5,9 C-6,5 -2,2 0,-4Z" fill="#ffd36b"/>';
    if (n === 'tho') g += '<path d="M-19,15 L-6,-9 L3,5 L10,-4 L19,15Z" fill="#b98a2e"/><path d="M-6,-9 L-1,0 L-6,-2 L-10,0Z" fill="#f4e3b0"/>';
    if (n === 'kim') g += '<path d="M-17,11 L-11,-5 L11,-5 L17,11Z" fill="#9aa5b1"/><path d="M-11,-5 L11,-5 L8,-12 L-8,-12Z" fill="#c9d1d9"/>';
    if (n === 'thuy') g += '<path d="M0,-17 C10,-3 14,3 14,8 C14,15 8,18 0,18 C-8,18 -14,15 -14,8 C-14,3 -10,-3 0,-17Z" fill="#3b82d6"/><path d="M-6,6 C-6,10 -3,12 0,12" stroke="#bcdcff" stroke-width="2" fill="none"/>';
    return g + '</g>';
  }

  /* ================= BÀI 1: ÂM DƯƠNG ================= */
  ART.taiji = function () {
    var cx = 180, cy = 92, R = 58, h = R / 2, s = '';
    s += '<circle cx="' + cx + '" cy="' + cy + '" r="' + R + '" fill="#f6d9a0"/>';
    s += '<path d="M' + cx + ',' + (cy - R) + ' A' + R + ',' + R + ' 0 0 1 ' + cx + ',' + (cy + R) + ' A' + h + ',' + h + ' 0 0 1 ' + cx + ',' + cy + ' A' + h + ',' + h + ' 0 0 0 ' + cx + ',' + (cy - R) + 'Z" fill="#2d4f86"/>';
    s += '<circle cx="' + cx + '" cy="' + (cy - h) + '" r="9" fill="#2d4f86"/><circle cx="' + cx + '" cy="' + (cy + h) + '" r="9" fill="#f6d9a0"/>';
    s += '<circle cx="' + cx + '" cy="' + cy + '" r="' + R + '" fill="none" class="fs" stroke-width="2"/>';
    s += tx(104, 40, 'DƯƠNG', { a: 'end', b: 1, c: 'fo', s: 14 });
    s += tx(104, 60, ['Ngày, sáng', 'Nóng', 'Động', 'Trên, ngoài', 'Khí, phủ'], { a: 'end', s: 12, lh: 18 });
    s += tx(256, 40, 'ÂM', { a: 'start', b: 1, c: 'fb', s: 14 });
    s += tx(256, 60, ['Đêm, tối', 'Lạnh', 'Tĩnh', 'Dưới, trong', 'Huyết, tạng'], { a: 'start', s: 12, lh: 18 });
    return svg(360, 170, s, 'Hình thái cực: nửa sáng là Dương, nửa tối là Âm');
  };

  ART.daycycle = function () {
    var x0 = 44, w = 272, top = 48, bot = 148, hh = bot - top, i, d = '', a = '';
    for (i = 0; i <= 24; i++) {
      var D = 0.5 - 0.5 * Math.cos(2 * Math.PI * i / 24);
      var x = (x0 + w * i / 24).toFixed(1);
      d += x + ',' + (bot - hh * D).toFixed(1) + ' ';
      a += x + ',' + (bot - hh * (1 - D)).toFixed(1) + ' ';
    }
    var s = '';
    s += '<line x1="30" y1="' + bot + '" x2="330" y2="' + bot + '" class="fs" stroke-width="1.5"/>';
    s += '<polyline points="' + d + '" fill="none" stroke="' + OR + '" stroke-width="3.5" stroke-linecap="round"/>';
    s += '<polyline points="' + a + '" fill="none" stroke="' + BL + '" stroke-width="3.5" stroke-linecap="round"/>';
    s += '<line x1="30" y1="12" x2="52" y2="12" stroke="' + OR + '" stroke-width="3.5"/>' + tx(58, 16, 'Dương (nóng, động): mạnh nhất lúc trưa', { a: 'start', s: 11.5 });
    s += '<line x1="30" y1="30" x2="52" y2="30" stroke="' + BL + '" stroke-width="3.5"/>' + tx(58, 34, 'Âm (mát, tĩnh): mạnh nhất lúc nửa đêm', { a: 'start', s: 11.5 });
    var names = ['Nửa đêm', 'Sáng', 'Trưa', 'Chiều', 'Nửa đêm'], hrs = ['0 giờ', '6 giờ', '12 giờ', '18 giờ', '24 giờ'];
    for (i = 0; i < 5; i++) {
      var xx = x0 + w * i / 4;
      s += '<line x1="' + xx + '" y1="' + bot + '" x2="' + xx + '" y2="' + (bot + 5) + '" class="fs"/>';
      s += tx(xx, bot + 19, names[i], { s: 12, b: 1 }) + tx(xx, bot + 33, hrs[i], { s: 10.5, c: 'fm' });
    }
    return svg(360, 200, s, 'Biểu đồ Dương tăng dần đến trưa rồi giảm, Âm ngược lại, trong một ngày');
  };

  /* ================= BÀI 2: NGŨ HÀNH ================= */
  function strip(title, color, rows) {
    var id = 'mk' + (++uid), s = '<defs>' + marker(id, color) + '</defs>';
    s += tx(10, 18, title, { a: 'start', b: 1, s: 14, c: color === '#2a9d6b' ? 'fgreen' : 'fred' });
    rows.forEach(function (r, i) {
      var cy = 52 + i * 54;
      s += icon(r[0], 30, cy, 1) + icon(r[1], 118, cy, 1);
      s += '<line x1="58" y1="' + cy + '" x2="92" y2="' + cy + '" stroke="' + color + '" stroke-width="3" stroke-linecap="round" marker-end="url(#' + id + ')"' + (color !== '#2a9d6b' ? ' stroke-dasharray="6 4"' : '') + '/>';
      s += tx(150, cy - 4, r[2], { a: 'start', b: 1, s: 12.5 }) + tx(150, cy + 12, r[3], { a: 'start', s: 12, c: 'fm' });
    });
    return svg(360, 40 + rows.length * 54, s, title);
  }
  ART.nhsinh = function () {
    return strip('Tương sinh: nuôi dưỡng nhau', '#2a9d6b', [
      ['moc', 'hoa', 'Mộc sinh Hỏa:', 'củi (gỗ) cháy thành lửa'],
      ['hoa', 'tho', 'Hỏa sinh Thổ:', 'lửa đốt thành tro, tro thành đất'],
      ['tho', 'kim', 'Thổ sinh Kim:', 'trong lòng đất có quặng kim loại'],
      ['kim', 'thuy', 'Kim sinh Thủy:', 'kim loại lạnh đọng giọt nước'],
      ['thuy', 'moc', 'Thủy sinh Mộc:', 'nước tưới nuôi cho cây lớn lên']
    ]);
  };
  ART.nhkhac = function () {
    return strip('Tương khắc: kiềm chế nhau', '#d1493a', [
      ['moc', 'tho', 'Mộc khắc Thổ:', 'rễ cây xuyên và giữ chặt đất'],
      ['tho', 'thuy', 'Thổ khắc Thủy:', 'đất đắp thành đê ngăn nước'],
      ['thuy', 'hoa', 'Thủy khắc Hỏa:', 'nước dập tắt lửa'],
      ['hoa', 'kim', 'Hỏa khắc Kim:', 'lửa nung chảy kim loại'],
      ['kim', 'moc', 'Kim khắc Mộc:', 'rìu (kim loại) chặt cây']
    ]);
  };

  /* ================= BÀI 3: TẠNG PHỦ ================= */
  ART.body = function () {
    var cid = 'cp' + (++uid), s = '';
    s += '<defs><clipPath id="' + cid + '"><rect x="105" y="68" width="150" height="270" rx="45"/></clipPath></defs>';
    s += '<circle cx="180" cy="40" r="26" fill="#f4e6d4" stroke="#9a8a76" stroke-width="2"/><rect x="170" y="62" width="20" height="12" fill="#f4e6d4"/>';
    s += rect(105, 68, 150, 270, '#f4e6d4', { rx: 45, stroke: '#9a8a76', sw: 2 });
    s += '<g clip-path="url(#' + cid + ')">' +
      '<rect x="100" y="68" width="160" height="100" fill="#d9482b" opacity="0.13"/>' +
      '<rect x="100" y="168" width="160" height="70" fill="#c99a2e" opacity="0.2"/>' +
      '<rect x="100" y="238" width="160" height="100" fill="#2f6db5" opacity="0.15"/></g>';
    s += '<line x1="105" y1="168" x2="255" y2="168" stroke="#9a8a76" stroke-dasharray="4 3"/><line x1="105" y1="238" x2="255" y2="238" stroke="#9a8a76" stroke-dasharray="4 3"/>';
    /* Phế */
    s += '<ellipse cx="152" cy="122" rx="20" ry="34" fill="#b9c2cc" stroke="#7e8a97" stroke-width="1.5"/><ellipse cx="208" cy="122" rx="20" ry="34" fill="#b9c2cc" stroke="#7e8a97" stroke-width="1.5"/>';
    /* Tâm */
    s += '<g transform="translate(192,143)"><path d="M0,12 C-14,2 -16,-10 -7,-13 C-3,-14 0,-11 0,-8 C0,-11 3,-14 7,-13 C16,-10 14,2 0,12Z" fill="#e8552f" stroke="#a02b12" stroke-width="1.2"/></g>';
    /* Can, Đởm */
    s += '<ellipse cx="148" cy="188" rx="30" ry="15" fill="#4fae6b" stroke="#2f7a4a" stroke-width="1.5"/><ellipse cx="166" cy="202" rx="7" ry="5" fill="#2f7a4a"/>';
    /* Vị, Tỳ */
    s += '<ellipse cx="206" cy="194" rx="25" ry="17" fill="#e0b84a" stroke="#9c7a1c" stroke-width="1.5"/><ellipse cx="236" cy="186" rx="7" ry="12" fill="#c99a2e" stroke="#9c7a1c" stroke-width="1.2"/>';
    /* Thận (ở phía lưng) */
    s += '<ellipse cx="140" cy="240" rx="11" ry="17" fill="#2f6db5" stroke="#fff" stroke-width="1.5" stroke-dasharray="3 2"/><ellipse cx="220" cy="240" rx="11" ry="17" fill="#2f6db5" stroke="#fff" stroke-width="1.5" stroke-dasharray="3 2"/>';
    /* Ruột */
    s += rect(140, 262, 80, 48, '#f0b38a', { rx: 14, stroke: '#c9824f' });
    s += '<path d="M150,272 H210 M150,286 H210 M150,300 H210" stroke="#c9824f" stroke-width="2.5" stroke-linecap="round" fill="none"/>';
    /* Bàng quang */
    s += '<ellipse cx="180" cy="324" rx="17" ry="11" fill="#5aa0e6" stroke="#2f6db5" stroke-width="1.5"/>';
    /* nhãn */
    var L = function (x1, y1, x2, y2) { return '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" class="fsm" stroke-width="1"/>'; };
    s += L(226, 112, 268, 104) + tx(272, 108, 'Phế', { a: 'start', b: 1, s: 13 });
    s += L(200, 146, 268, 136) + tx(272, 140, 'Tâm', { a: 'start', b: 1, s: 13 });
    s += L(243, 192, 268, 180) + tx(272, 184, ['Tỳ – Vị'], { a: 'start', b: 1, s: 13 });
    s += L(231, 240, 268, 232) + tx(272, 236, 'Thận', { a: 'start', b: 1, s: 13 }) + tx(272, 250, '(sau lưng)', { a: 'start', s: 10.5, c: 'fm' });
    s += L(214, 290, 268, 286) + tx(272, 290, 'Ruột', { a: 'start', b: 1, s: 13 }) + tx(272, 304, '(Tiểu trường,', { a: 'start', s: 10.5, c: 'fm' }) + tx(272, 316, 'Đại trường)', { a: 'start', s: 10.5, c: 'fm' });
    s += L(197, 326, 268, 334) + tx(272, 338, 'Bàng quang', { a: 'start', b: 1, s: 13 });
    s += L(120, 190, 92, 182) + tx(88, 186, 'Can', { a: 'end', b: 1, s: 13 }) + tx(88, 200, '(Đởm ở dưới)', { a: 'end', s: 10.5, c: 'fm' });
    /* chú thích Tam tiêu */
    s += rect(24, 362, 12, 12, 'rgba(217,72,43,0.35)', { rx: 3 }) + tx(42, 372, 'Thượng tiêu (ngực)', { a: 'start', s: 11.5 });
    s += rect(150, 362, 12, 12, 'rgba(201,154,46,0.5)', { rx: 3 }) + tx(168, 372, 'Trung tiêu (bụng trên)', { a: 'start', s: 11.5 });
    s += rect(24, 384, 12, 12, 'rgba(47,109,181,0.4)', { rx: 3 }) + tx(42, 394, 'Hạ tiêu (bụng dưới)', { a: 'start', s: 11.5 });
    return svg(360, 404, s, 'Sơ đồ vị trí các tạng phủ trên cơ thể, chia ba vùng thượng, trung, hạ tiêu');
  };

  ART.pairs = function () {
    var id = 'mk' + (++uid), s = '<defs>' + marker(id, '#7a8a85') + '</defs>';
    var rows = [
      ['Tâm', 'Tiểu trường', 'Hỏa', HC.hoa, 0], ['Phế', 'Đại trường', 'Kim', HC.kim, 1], ['Tỳ', 'Vị', 'Thổ', HC.tho, 1],
      ['Can', 'Đởm', 'Mộc', HC.moc, 0], ['Thận', 'Bàng quang', 'Thủy', HC.thuy, 0], ['Tâm bào', 'Tam tiêu', 'Hỏa', HC.hoa, 0]
    ];
    s += tx(90, 18, ['Tạng (Âm)', 'bên trong – lý'], { b: 1, s: 12, lh: 14, c: 'fb' });
    s += tx(270, 18, ['Phủ (Dương)', 'bên ngoài – biểu'], { b: 1, s: 12, lh: 14, c: 'fo' });
    rows.forEach(function (r, i) {
      var y = 48 + i * 46, dark = r[4] ? 'fd' : 'fw';
      s += rect(20, y, 140, 36, r[3], { rx: 10 }) + tx(90, y + 22, r[0] + ' (' + r[2] + ')', { b: 1, s: 13, c: dark });
      s += rect(200, y, 140, 36, r[3], { rx: 10, op: 0.5 }) + tx(270, y + 22, r[1], { b: 1, s: 13, c: 'fd' });
      s += '<line x1="180" y1="' + (y + 18) + '" x2="198" y2="' + (y + 18) + '" stroke="#7a8a85" stroke-width="2.5" marker-end="url(#' + id + ')"/>';
      s += '<line x1="180" y1="' + (y + 18) + '" x2="162" y2="' + (y + 18) + '" stroke="#7a8a85" stroke-width="2.5" marker-end="url(#' + id + ')"/>';
    });
    return svg(360, 330, s, 'Sáu cặp tạng và phủ có quan hệ biểu lý, cùng một hành');
  };

  /* ================= BÀI 4: KHÍ HUYẾT ================= */
  ART.tambao = function () {
    var id = 'mk' + (++uid), s = '<defs>' + marker(id, '#7a8a85') + '</defs>';
    var items = [
      [60, 'Tinh', '#2f6db5', ['Chất tinh túy,', 'chứa ở Thận']],
      [180, 'Khí', '#3f9b5a', ['Năng lượng', 'chức năng']],
      [300, 'Thần', '#d9482b', ['Ánh mắt, tinh thần,', 'sắc diện']]
    ];
    items.forEach(function (it) {
      s += '<circle cx="' + it[0] + '" cy="52" r="34" fill="' + it[2] + '"/>' + tx(it[0], 58, it[1], { b: 1, s: 17, c: 'fw' });
      s += tx(it[0], 104, it[3], { s: 11.5, c: 'fm' });
    });
    s += '<line x1="98" y1="52" x2="140" y2="52" stroke="#7a8a85" stroke-width="3" marker-end="url(#' + id + ')"/>' + tx(119, 42, 'hóa', { s: 11, c: 'fm' });
    s += '<line x1="218" y1="52" x2="260" y2="52" stroke="#7a8a85" stroke-width="3" marker-end="url(#' + id + ')"/>' + tx(239, 42, 'hóa', { s: 11, c: 'fm' });
    return svg(360, 135, s, 'Tinh hóa thành Khí, Khí hóa thành Thần: ba báu vật của con người');
  };

  ART.flow = function () {
    var id = 'mk' + (++uid), s = '<defs>' + marker(id, '#7a8a85') + '</defs>';
    var boxes = [
      ['Ăn uống', 'thức ăn, nước uống'],
      ['Tỳ Vị tiêu hóa', 'lấy phần tinh chất'],
      ['Phế', 'hợp khí trời → Tông khí'],
      ['Tâm', 'tinh chất hóa đỏ thành Huyết'],
      ['Mạch', 'Huyết + Dinh khí nuôi toàn thân']
    ];
    var side = { 1: ['Thận tàng tinh,', 'gốc của', 'Nguyên khí'], 2: ['Vệ khí chạy', 'ngoài mạch,', 'bảo vệ cơ thể'], 3: ['Can tàng huyết', '(dự trữ huyết)'], 4: ['Tỳ thống huyết', '(giữ huyết', 'trong mạch)'] };
    boxes.forEach(function (b, i) {
      var y = 10 + i * 62;
      s += rect(30, y, 200, 42, '#dff0ea', { rx: 12, stroke: '#1f6f5c' });
      s += tx(130, y + 18, b[0], { b: 1, s: 13, c: 'fd' }) + tx(130, y + 34, b[1], { s: 11, c: 'fd' });
      if (i < 4) s += '<line x1="130" y1="' + (y + 43) + '" x2="130" y2="' + (y + 61) + '" stroke="#7a8a85" stroke-width="3" marker-end="url(#' + id + ')"/>';
      if (side[i]) {
        s += '<line x1="230" y1="' + (y + 21) + '" x2="252" y2="' + (y + 21) + '" stroke="#b79a3c" stroke-width="1.5" stroke-dasharray="4 3"/>';
        s += rect(252, y - 2, 100, 46, '#fff1c9', { rx: 8, stroke: '#e8c872' }) + tx(302, y + 14, side[i], { s: 10.5, lh: 12, c: 'fd' });
      }
    });
    return svg(360, 308, s, 'Quá trình hình thành Khí và Huyết từ thức ăn qua Tỳ Vị, Phế, Tâm');
  };

  ART.khrel = function () {
    var id = 'mk' + (++uid), s = '<defs>' + marker(id, '#7a8a85') + '</defs>';
    s += '<circle cx="62" cy="88" r="42" fill="#d9822b"/>' + tx(62, 94, 'KHÍ', { b: 1, s: 18, c: 'fw' });
    s += '<circle cx="298" cy="88" r="42" fill="#c0392b"/>' + tx(298, 94, 'HUYẾT', { b: 1, s: 16, c: 'fw' });
    s += '<line x1="112" y1="72" x2="244" y2="72" stroke="#7a8a85" stroke-width="3" marker-end="url(#' + id + ')"/>';
    s += tx(178, 24, ['Khí là soái của huyết:', 'sinh huyết, đẩy huyết, giữ huyết trong mạch'], { s: 11.5, lh: 14, b: 0 });
    s += '<line x1="248" y1="106" x2="116" y2="106" stroke="#7a8a85" stroke-width="3" marker-end="url(#' + id + ')"/>';
    s += tx(178, 134, ['Huyết là mẹ của khí:', 'chứa đựng và nuôi dưỡng khí'], { s: 11.5, lh: 14 });
    return svg(360, 165, s, 'Khí và Huyết nương tựa nhau: khí là soái của huyết, huyết là mẹ của khí');
  };

  /* ================= BÀI 5: KINH LẠC ================= */
  ART.kinhdir = function () {
    var a = 'mk' + (++uid), b = 'mk' + (++uid), s = '<defs>' + marker(a, OR) + marker(b, BL) + '</defs>';
    s += '<g class="fs" stroke-width="6" stroke-linecap="round" fill="none">' +
      '<circle cx="180" cy="48" r="22"/><line x1="180" y1="72" x2="180" y2="235"/>' +
      '<line x1="180" y1="98" x2="95" y2="45"/><line x1="180" y1="98" x2="265" y2="45"/>' +
      '<line x1="180" y1="235" x2="142" y2="385"/><line x1="180" y1="235" x2="218" y2="385"/></g>';
    /* bên trái: kinh Dương */
    s += '<path d="M98,34 L152,42" stroke="' + OR + '" stroke-width="3.5" fill="none" marker-end="url(#' + a + ')"/>';
    s += '<path d="M166,78 C150,150 132,260 126,376" stroke="' + OR + '" stroke-width="3.5" fill="none" marker-end="url(#' + a + ')"/>';
    /* bên phải: kinh Âm */
    s += '<path d="M188,112 L260,62" stroke="' + BL + '" stroke-width="3.5" fill="none" marker-end="url(#' + b + ')"/>';
    s += '<path d="M222,380 C214,320 202,200 194,126" stroke="' + BL + '" stroke-width="3.5" fill="none" marker-end="url(#' + b + ')"/>';
    s += tx(8, 14, 'Thủ tam dương:', { a: 'start', b: 1, c: 'fo', s: 12 }) + tx(8, 28, 'ngón tay → đầu', { a: 'start', s: 11.5 });
    s += tx(8, 250, 'Túc tam dương:', { a: 'start', b: 1, c: 'fo', s: 12 }) + tx(8, 264, 'đầu → ngón chân', { a: 'start', s: 11.5 });
    s += tx(352, 14, 'Thủ tam âm:', { a: 'end', b: 1, c: 'fb', s: 12 }) + tx(352, 28, 'ngực → ngón tay', { a: 'end', s: 11.5 });
    s += tx(352, 250, 'Túc tam âm:', { a: 'end', b: 1, c: 'fb', s: 12 }) + tx(352, 264, ['ngón chân →', 'bụng, ngực'], { a: 'end', s: 11.5, lh: 14 });
    return svg(360, 405, s, 'Hướng đi của bốn nhóm kinh: thủ tam âm, thủ tam dương, túc tam dương, túc tam âm');
  };

  ART.clock = function () {
    var cx = 180, cy = 168, r1 = 66, r2 = 148, i, s = '';
    var names = [['Phế'], ['Đại', 'trường'], ['Vị'], ['Tỳ'], ['Tâm'], ['Tiểu', 'trường'], ['Bàng', 'quang'], ['Thận'], ['Tâm', 'bào'], ['Tam', 'tiêu'], ['Đởm'], ['Can']];
    var hrs = ['3–5', '5–7', '7–9', '9–11', '11–13', '13–15', '15–17', '17–19', '19–21', '21–23', '23–1', '1–3'];
    var am = [1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1];
    for (i = 0; i < 12; i++) {
      var c = -90 + 30 * i;
      s += '<path d="' + sector(cx, cy, r1, r2, c - 15, c + 15) + '" fill="' + (am[i] ? '#cfe0f5' : '#f9dcc0') + '" style="stroke:var(--surface);stroke-width:2.5"/>';
      var pn = pol(cx, cy, 120, c), ph = pol(cx, cy, 82, c);
      s += tx(pn[0].toFixed(1), (pn[1] + (names[i].length > 1 ? -3 : 4)).toFixed(1), names[i], { s: 11, b: 1, lh: 12, c: 'fd' });
      s += tx(ph[0].toFixed(1), (ph[1] + 4).toFixed(1), hrs[i], { s: 10, c: 'fd' });
    }
    s += tx(cx, cy - 4, '12 kinh', { b: 1, s: 14 }) + tx(cx, cy + 14, 'vòng 24 giờ', { s: 11, c: 'fm' });
    s += rect(88, 326, 12, 12, '#cfe0f5', { rx: 3 }) + tx(106, 336, 'Kinh Âm', { a: 'start', s: 12 });
    s += rect(190, 326, 12, 12, '#f9dcc0', { rx: 3 }) + tx(208, 336, 'Kinh Dương', { a: 'start', s: 12 });
    return svg(360, 348, s, 'Vòng giờ vượng khí của 12 kinh, mỗi kinh 2 giờ, bắt đầu từ kinh Phế lúc 3 đến 5 giờ sáng');
  };

  ART.nhamdoc = function () {
    var a = 'mk' + (++uid), b = 'mk' + (++uid), s = '<defs>' + marker(a, OR) + marker(b, BL) + '</defs>';
    s += '<circle cx="180" cy="44" r="26" fill="#f4e6d4" stroke="#9a8a76" stroke-width="2.5"/>';
    s += '<path d="M160,72 C148,110 148,175 154,228 L206,228 C214,175 212,110 200,72 Z" fill="#f4e6d4" stroke="#9a8a76" stroke-width="2.5"/>';
    s += '<path d="M159,224 C154,176 154,118 162,78 C150,66 150,34 168,22 C190,12 208,26 205,48" stroke="' + OR + '" stroke-width="3.5" fill="none" marker-end="url(#' + a + ')"/>';
    s += '<path d="M200,222 C207,176 205,126 196,92 L190,72" stroke="' + BL + '" stroke-width="3.5" fill="none" marker-end="url(#' + b + ')"/>';
    s += tx(138, 112, ['Đốc mạch (Dương):', 'dọc cột sống, qua', 'đỉnh đầu, đến', 'môi trên'], { a: 'end', s: 11.5, lh: 14, c: 'fo', b: 1 });
    s += tx(226, 112, ['Nhâm mạch (Âm):', 'giữa mặt trước', 'bụng, ngực, lên', 'đến cằm'], { a: 'start', s: 11.5, lh: 14, c: 'fb', b: 1 });
    s += tx(180, 250, 'Nhìn nghiêng: mặt trước ở bên phải hình, lưng ở bên trái hình', { s: 10.5, c: 'fm' });
    return svg(360, 260, s, 'Hình nhìn nghiêng: Đốc mạch chạy sau lưng, Nhâm mạch chạy giữa mặt trước');
  };

  /* ================= BÀI 6: NGUYÊN NHÂN BỆNH ================= */
  ART.scale = function () {
    function sc(cx, leftHeavy, t1, t2) {
      var yL = leftHeavy ? 86 : 56, yR = leftHeavy ? 56 : 86, p = '';
      p += tx(cx, 14, t1, { b: 1, s: 12.5 }) + tx(cx, 29, t2, { s: 11.5, c: 'fm' });
      p += '<line x1="' + cx + '" y1="70" x2="' + cx + '" y2="164" class="fs" stroke-width="4"/><line x1="' + (cx - 34) + '" y1="164" x2="' + (cx + 34) + '" y2="164" class="fs" stroke-width="5" stroke-linecap="round"/>';
      p += '<line x1="' + (cx - 62) + '" y1="' + yL + '" x2="' + (cx + 62) + '" y2="' + yR + '" class="fs" stroke-width="4" stroke-linecap="round"/><circle cx="' + cx + '" cy="70" r="6" fill="#d9822b"/>';
      [[cx - 62, yL, 'Chính khí', '#3f9b5a'], [cx + 62, yR, 'Tà khí', '#c0392b']].forEach(function (e) {
        p += '<path d="M' + e[0] + ',' + e[1] + ' L' + (e[0] - 24) + ',' + (e[1] + 36) + ' M' + e[0] + ',' + e[1] + ' L' + (e[0] + 24) + ',' + (e[1] + 36) + '" class="fsm" stroke-width="1.5" fill="none"/>';
        p += '<path d="M' + (e[0] - 28) + ',' + (e[1] + 36) + ' H' + (e[0] + 28) + ' A28,14 0 0 1 ' + (e[0] - 28) + ',' + (e[1] + 36) + 'Z" fill="' + e[3] + '"/>';
        p += tx(e[0], e[1] + 66, e[2], { s: 11.5, b: 1 });
      });
      return p;
    }
    var s = sc(90, true, 'Chính khí đủ mạnh', 'ít bệnh, khỏe mạnh') + sc(270, false, 'Tà khí thắng chính khí', 'phát sinh bệnh');
    return svg(360, 188, s, 'Cán cân chính khí và tà khí: bệnh phát sinh khi tà khí thắng chính khí');
  };

  function cards(items, cols, cw, ch, drawIcon) {
    var s = '';
    items.forEach(function (it, i) {
      var c = i % cols, r = Math.floor(i / cols), x = 5 + c * (cw + 10), y = 5 + r * (ch + 8);
      s += '<rect x="' + x + '" y="' + y + '" width="' + cw + '" height="' + ch + '" rx="12" class="fcard"/>';
      s += drawIcon(it, x + cw / 2, y);
    });
    return s;
  }
  ART.lucdam = function () {
    var items = [
      ['wind', 'Phong', 'Gió', 'hay đi, đổi nhanh'],
      ['cold', 'Hàn', 'Lạnh', 'co rút, ngưng trệ'],
      ['sun', 'Thử', 'Nắng nóng', 'hao khí, ra mồ hôi'],
      ['wet', 'Thấp', 'Ẩm ướt', 'nặng nề, dính trệ'],
      ['dry', 'Táo', 'Khô ráo', 'khô họng, ho khan'],
      ['fire', 'Hỏa', 'Nóng bốc', 'sốt cao, mặt đỏ']
    ];
    var s = cards(items, 3, 110, 118, function (it, cx, y) {
      var g = '<g transform="translate(' + cx + ',' + (y + 38) + ') scale(1.25)">', k;
      if (it[0] === 'wind') g += '<g fill="none" stroke="#6aa5c9" stroke-width="3" stroke-linecap="round"><path d="M-20,-8 H6 C14,-8 16,-18 8,-18"/><path d="M-20,2 H12 C22,2 22,-8 14,-8"/><path d="M-20,12 H2 C10,12 12,20 5,20"/></g>';
      if (it[0] === 'cold') g += '<g stroke="#4a8fd4" stroke-width="3" stroke-linecap="round"><path d="M0,-18V18"/><path d="M-16,-9L16,9"/><path d="M-16,9L16,-9"/></g><circle r="3.5" fill="#4a8fd4"/>';
      if (it[0] === 'sun') { g += '<circle r="9" fill="#f2b233"/><g stroke="#f2b233" stroke-width="3" stroke-linecap="round">'; for (k = 0; k < 8; k++) { var p1 = pol(0, 0, 13, k * 45), p2 = pol(0, 0, 19, k * 45); g += '<line x1="' + p1[0].toFixed(1) + '" y1="' + p1[1].toFixed(1) + '" x2="' + p2[0].toFixed(1) + '" y2="' + p2[1].toFixed(1) + '"/>'; } g += '</g>'; }
      if (it[0] === 'wet') g += '<path d="M-16,2 C-22,2 -22,-10 -12,-10 C-10,-20 6,-20 8,-10 C18,-11 20,2 12,2Z" fill="#9db3c4"/><g stroke="#3b82d6" stroke-width="3" stroke-linecap="round"><path d="M-10,8L-12,17"/><path d="M0,8L-2,17"/><path d="M10,8L8,17"/></g>';
      if (it[0] === 'dry') g += '<rect x="-19" y="-8" width="38" height="26" rx="3" fill="#d9b77a"/><path d="M-8,-8 L-3,1 L-11,8 L-4,18 M9,-8 L4,2 L12,9" stroke="#7a5a2a" stroke-width="2" fill="none"/>';
      if (it[0] === 'fire') g += '<path d="M0,-18 C6,-8 14,-4 12,6 C10,15 -10,15 -12,6 C-14,-2 -6,-6 0,-18Z" fill="#e8552f"/><path d="M0,-4 C4,2 7,4 5,9 C3,13 -3,13 -5,9 C-6,5 -2,2 0,-4Z" fill="#ffd36b"/>';
      g += '</g>';
      return g + tx(cx, y + 82, it[1] + ' – ' + it[2], { b: 1, s: 12.5 }) + tx(cx, y + 99, it[3], { s: 11, c: 'fm' });
    });
    return svg(360, 256, s, 'Sáu tà khí ngoại nhân gọi là lục dâm: phong, hàn, thử, thấp, táo, hỏa');
  };

  function face(type, cx, cy) {
    var fills = { hy: '#ffe08a', no: '#f6a49a', tu: '#f5d9a8', bi: '#b9d3ee', kh: '#d9c8ee', ki: '#cfe8d8' };
    var s = '<circle cx="' + cx + '" cy="' + cy + '" r="24" fill="' + fills[type] + '" stroke="#7a6a50" stroke-width="2"/>';
    var dk = 'fill="#3a2f22"', st = 'stroke="#3a2f22" stroke-width="2" fill="none" stroke-linecap="round"';
    var ex = function (dx, dy, r) { return '<circle cx="' + (cx + dx) + '" cy="' + (cy + dy) + '" r="' + r + '" ' + dk + '/>'; };
    var ln = function (a, b, c, d) { return '<path d="M' + (cx + a) + ',' + (cy + b) + ' L' + (cx + c) + ',' + (cy + d) + '" ' + st + '/>'; };
    if (type === 'hy') s += '<path d="M' + (cx - 12) + ',' + (cy - 3) + ' Q' + (cx - 8) + ',' + (cy - 9) + ' ' + (cx - 4) + ',' + (cy - 3) + ' M' + (cx + 4) + ',' + (cy - 3) + ' Q' + (cx + 8) + ',' + (cy - 9) + ' ' + (cx + 12) + ',' + (cy - 3) + '" ' + st + '/><path d="M' + (cx - 11) + ',' + (cy + 5) + ' Q' + cx + ',' + (cy + 19) + ' ' + (cx + 11) + ',' + (cy + 5) + 'Z" fill="#fff" stroke="#3a2f22" stroke-width="2"/>';
    if (type === 'no') s += ln(-13, -11, -4, -6) + ln(13, -11, 4, -6) + ex(-8, -2, 2.6) + ex(8, -2, 2.6) + '<path d="M' + (cx - 9) + ',' + (cy + 12) + ' Q' + cx + ',' + (cy + 5) + ' ' + (cx + 9) + ',' + (cy + 12) + '" ' + st + '/>';
    if (type === 'tu') s += ln(-13, -10, -4, -10) + ln(4, -14, 13, -9) + ex(-8, -3, 2.6) + ex(8, -3, 2.6) + '<path d="M' + (cx - 8) + ',' + (cy + 9) + ' q4,-5 8,0 t8,0" ' + st + '/><circle cx="' + (cx + 24) + '" cy="' + (cy - 20) + '" r="2.5" fill="#9a8a76"/><circle cx="' + (cx + 31) + '" cy="' + (cy - 28) + '" r="3.5" fill="#9a8a76"/>';
    if (type === 'bi') s += ln(-13, -5, -5, -10) + ln(13, -5, 5, -10) + ex(-8, -2, 2.6) + ex(8, -2, 2.6) + '<path d="M' + (cx - 9) + ',' + (cy + 12) + ' Q' + cx + ',' + (cy + 4) + ' ' + (cx + 9) + ',' + (cy + 12) + '" ' + st + '/><path d="M' + (cx - 8) + ',' + (cy + 4) + ' q-3,5 0,7 q3,-2 0,-7Z" fill="#3b82d6"/>';
    if (type === 'kh') s += ln(-13, -13, -5, -15) + ln(13, -13, 5, -15) + '<circle cx="' + (cx - 8) + '" cy="' + (cy - 4) + '" r="5" fill="#fff" stroke="#3a2f22" stroke-width="1.5"/><circle cx="' + (cx + 8) + '" cy="' + (cy - 4) + '" r="5" fill="#fff" stroke="#3a2f22" stroke-width="1.5"/>' + ex(-8, -4, 2) + ex(8, -4, 2) + '<ellipse cx="' + cx + '" cy="' + (cy + 11) + '" rx="5" ry="6.5" ' + dk + '/>';
    if (type === 'ki') s += ln(-13, -13, -5, -15) + ln(13, -13, 5, -15) + '<circle cx="' + (cx - 8) + '" cy="' + (cy - 4) + '" r="5.5" fill="#fff" stroke="#3a2f22" stroke-width="1.5"/><circle cx="' + (cx + 8) + '" cy="' + (cy - 4) + '" r="5.5" fill="#fff" stroke="#3a2f22" stroke-width="1.5"/>' + ex(-8, -4, 1.5) + ex(8, -4, 1.5) + '<circle cx="' + cx + '" cy="' + (cy + 11) + '" r="4" fill="none" stroke="#3a2f22" stroke-width="2"/><path d="M' + (cx + 20) + ',' + (cy - 20) + ' q-4,6 0,8 q4,-2 0,-8Z" fill="#3b82d6"/>';
    return s;
  }
  ART.thattinh = function () {
    var items = [
      ['hy', 'Hỷ – vui quá', 'Tổn Tâm', 'khí chậm, tán'],
      ['no', 'Nộ – giận', 'Tổn Can', 'khí bốc lên'],
      ['tu', 'Tư – nghĩ nhiều', 'Tổn Tỳ', 'khí uất kết'],
      ['bi', 'Ưu, Bi – lo, buồn', 'Tổn Phế', 'khí hao'],
      ['kh', 'Khủng – sợ', 'Tổn Thận', 'khí đi xuống'],
      ['ki', 'Kinh – hoảng sợ', 'Tổn Tâm, Đởm', 'khí rối loạn']
    ];
    var s = cards(items, 3, 110, 128, function (it, cx, y) {
      return face(it[0], cx, y + 36) + tx(cx, y + 80, it[1], { b: 1, s: 11.5 }) + tx(cx, y + 97, it[2], { s: 12, b: 1, c: 'fo' }) + tx(cx, y + 113, it[3], { s: 11, c: 'fm' });
    });
    return svg(360, 276, s, 'Bảy tình chí ảnh hưởng đến các tạng: hỷ tổn tâm, nộ tổn can, tư tổn tỳ, bi tổn phế, khủng tổn thận');
  };

  /* ================= BÀI 7: TỨ CHẨN ================= */
  function tonguePath(cx, cy, w, h) {
    var l = cx - w / 2, r = cx + w / 2, t = cy - h / 2, b = cy + h / 2;
    return 'M' + l + ',' + t + ' L' + l + ',' + (cy + h / 5) + ' Q' + l + ',' + b + ' ' + cx + ',' + b + ' Q' + r + ',' + b + ' ' + r + ',' + (cy + h / 5) + ' L' + r + ',' + t + 'Z';
  }
  ART.tonguezones = function () {
    var s = '';
    s += '<path d="' + tonguePath(150, 122, 120, 206) + '" fill="#ec9aa0" stroke="#b9565d" stroke-width="2"/>';
    s += '<line x1="150" y1="30" x2="150" y2="205" stroke="#c46a72" stroke-width="1.5"/>';
    s += '<line x1="90" y1="70" x2="210" y2="70" stroke="#fff" stroke-width="1.5" stroke-dasharray="5 3"/><line x1="90" y1="140" x2="210" y2="140" stroke="#fff" stroke-width="1.5" stroke-dasharray="5 3"/>';
    s += '<line x1="120" y1="70" x2="120" y2="140" stroke="#fff" stroke-width="1.5" stroke-dasharray="5 3"/><line x1="180" y1="70" x2="180" y2="140" stroke="#fff" stroke-width="1.5" stroke-dasharray="5 3"/>';
    var L = function (x1, y1, x2, y2) { return '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" class="fsm" stroke-width="1"/>'; };
    s += L(190, 45, 228, 38) + tx(232, 36, 'Gốc lưỡi', { a: 'start', b: 1, s: 12 }) + tx(232, 50, 'Thận, Bàng quang', { a: 'start', s: 11, c: 'fm' });
    s += L(150, 105, 228, 105) + tx(232, 103, 'Giữa lưỡi', { a: 'start', b: 1, s: 12 }) + tx(232, 117, 'Tỳ, Vị', { a: 'start', s: 11, c: 'fm' });
    s += L(105, 105, 70, 105) + tx(66, 100, ['Hai bên', 'Can, Đởm'], { a: 'end', b: 0, s: 11, lh: 13 });
    s += L(150, 200, 228, 196) + tx(232, 194, 'Đầu lưỡi', { a: 'start', b: 1, s: 12 }) + tx(232, 208, 'Tâm, Phế', { a: 'start', s: 11, c: 'fm' });
    return svg(360, 245, s, 'Các vùng của lưỡi tương ứng với tạng phủ: gốc lưỡi Thận, giữa lưỡi Tỳ Vị, hai bên Can Đởm, đầu lưỡi Tâm Phế');
  };

  ART.tongueswatch = function () {
    var items = [
      ['#ee9aa0', 'rgba(255,255,255,0.7)', ['Bình thường'], ['hồng nhạt,', 'rêu trắng mỏng']],
      ['#f6cfcf', null, ['Nhợt, bệu'], ['hư hàn,', 'khí huyết hư']],
      ['#d9333f', null, ['Đỏ'], ['nhiệt; ít rêu', 'là âm hư']],
      ['#8a4a8f', null, ['Tím'], ['huyết ứ']],
      ['#e8a0a0', 'rgba(228,196,60,0.9)', ['Rêu vàng', 'dày'], ['nhiệt, thấp,', 'đàm']]
    ];
    var s = '';
    items.forEach(function (it, i) {
      var cx = 36 + i * 72;
      s += '<path d="' + tonguePath(cx, 50, 50, 72) + '" fill="' + it[0] + '" stroke="#7a4a4f" stroke-width="1.5"/><line x1="' + cx + '" y1="20" x2="' + cx + '" y2="60" stroke="rgba(0,0,0,0.25)" stroke-width="1"/>';
      if (it[1]) s += '<ellipse cx="' + cx + '" cy="46" rx="14" ry="22" fill="' + it[1] + '"/>';
      s += tx(cx, 102, it[2], { b: 1, s: 10.5, lh: 12 }) + tx(cx, 130, it[3], { s: 10, lh: 12, c: 'fm' });
    });
    return svg(360, 160, s, 'Năm mẫu lưỡi thường gặp: bình thường, nhợt bệu, đỏ, tím, rêu vàng dày');
  };

  ART.wrist = function () {
    var s = '';
    s += '<ellipse cx="38" cy="80" rx="36" ry="28" fill="#f1c9a0" stroke="#c89968" stroke-width="1.5"/>' + tx(38, 84, 'Bàn tay', { s: 10.5, c: 'fd' });
    s += rect(68, 58, 270, 44, '#f1c9a0', { rx: 12, stroke: '#c89968' });
    s += '<circle cx="124" cy="59" r="5" fill="#e6b184" stroke="#c89968"/>';
    var pts = [[92, 'Thốn', ['gần bàn', 'tay nhất'], 58], [124, 'Quan', ['giữa, ngang', 'mỏm xương nhô'], 130], [156, 'Xích', ['xa bàn tay,', 'gần khuỷu'], 205]];
    pts.forEach(function (p) {
      s += '<circle cx="' + p[0] + '" cy="82" r="11" fill="#d9482b" opacity="0.9"/>';
      s += '<line x1="' + p[0] + '" y1="93" x2="' + p[3] + '" y2="116" class="fsm" stroke-width="1"/>';
      s += tx(p[3], 128, p[1], { b: 1, s: 12.5 }) + tx(p[3], 142, p[2], { s: 10.5, c: 'fm', lh: 12 });
    });
    s += tx(302, 84, 'khuỷu tay →', { s: 10.5, c: 'fd' });
    /* hai tầng độ sâu */
    [[5, 'Mạch phù', 'chạm nhẹ đã thấy', 242, 232], [185, 'Mạch trầm', 'ấn sâu mới thấy', 266, 256]].forEach(function (p) {
      var x0 = p[0];
      s += tx(x0 + 85, 188, p[1], { b: 1, s: 12.5 }) + tx(x0 + 85, 202, p[2], { s: 11, c: 'fm' });
      s += rect(x0, 232, 170, 14, '#f1c9a0', { rx: 3 }) + rect(x0, 246, 170, 30, '#d98c8c', { rx: 3 }) + rect(x0, 276, 170, 18, '#e9e4d8', { rx: 3 });
      s += tx(x0 + 4, 242, 'da', { a: 'start', s: 9, c: 'fd' }) + tx(x0 + 4, 264, 'cơ', { a: 'start', s: 9, c: 'fd' }) + tx(x0 + 4, 288, 'xương', { a: 'start', s: 9, c: 'fd' });
      s += '<circle cx="' + (x0 + 90) + '" cy="' + p[3] + '" r="6" fill="#c0392b"/>';
      s += '<path d="M' + (x0 + 74) + ',208 H' + (x0 + 106) + ' V' + (p[4] - 6) + ' Q' + (x0 + 90) + ',' + (p[4] + 6) + ' ' + (x0 + 74) + ',' + (p[4] - 6) + 'Z" fill="#f1c9a0" stroke="#c89968" stroke-width="1.5"/>';
    });
    s += tx(95, 310, 'Ngón tay đặt nhẹ trên da', { s: 10.5, c: 'fm' }) + tx(275, 310, 'Ngón tay ấn xuống tận sát xương', { s: 10.5, c: 'fm' });
    return svg(360, 322, s, 'Ba vị trí bắt mạch thốn, quan, xích ở cổ tay, và mạch phù nông, mạch trầm sâu');
  };

  /* ================= BÀI 8: BÁT CƯƠNG ================= */
  ART.bieuly = function () {
    var a = 'mk' + (++uid), s = '<defs>' + marker(a, '#c0392b') + '</defs>';
    s += '<circle cx="100" cy="115" r="92" fill="#f4d6b8"/><circle cx="100" cy="115" r="64" fill="#e9b9a0"/><circle cx="100" cy="115" r="36" fill="#b8493c"/>';
    s += tx(100, 41, 'Da lông', { s: 11.5, b: 1, c: 'fd' }) + tx(100, 69, ['Kinh lạc, cơ'], { s: 10.5, b: 1, c: 'fd' }) + tx(100, 119, 'Tạng phủ', { s: 11.5, b: 1, c: 'fw' });
    s += '<path d="M12,14 L56,52" stroke="#c0392b" stroke-width="3" fill="none" marker-end="url(#' + a + ')"/>' + tx(8, 10, 'Tà khí xâm nhập', { a: 'start', s: 10.5, c: 'fm' });
    s += '<line x1="190" y1="60" x2="212" y2="46" class="fsm"/>' + tx(216, 44, 'Biểu (nông)', { a: 'start', b: 1, s: 13, c: 'fo' });
    s += tx(216, 61, ['Bệnh mới, ở ngoài:', 'sợ lạnh, sốt nhẹ,', 'nghẹt mũi, mạch phù'], { a: 'start', s: 11.5, lh: 14 });
    s += '<line x1="124" y1="118" x2="212" y2="140" class="fsm"/>' + tx(216, 138, 'Lý (sâu)', { a: 'start', b: 1, s: 13, c: 'fo' });
    s += tx(216, 155, ['Bệnh ở tạng phủ:', 'đau bụng, nôn,', 'rêu dày, mạch trầm'], { a: 'start', s: 11.5, lh: 14 });
    return svg(360, 215, s, 'Biểu là phần nông của cơ thể (da lông), lý là phần sâu (tạng phủ)');
  };

  ART.matrix = function () {
    var s = '';
    s += tx(132, 22, 'Hàn (lạnh)', { b: 1, s: 13, c: 'fb' }) + tx(282, 22, 'Nhiệt (nóng)', { b: 1, s: 13, c: 'fo' });
    s += tx(30, 90, 'Hư (thiếu)', { b: 1, s: 12.5, rot: -90 }) + tx(30, 196, 'Thực (thừa)', { b: 1, s: 12.5, rot: -90 });
    var cells = [
      [0, 0, '#d2e3f6', 'Hư hàn', ['Mệt, sợ lạnh,', 'chân tay lạnh, phân nát'], 'bổ dương, ôn ấm'],
      [1, 0, '#fbdcc4', 'Hư nhiệt', ['Nóng chiều, mồ hôi trộm,', 'lưỡi đỏ ít rêu'], 'tư âm'],
      [0, 1, '#bcd4ee', 'Thực hàn', ['Đau co thắt do lạnh,', 'ấm thì đỡ, sợ lạnh'], 'tán hàn, làm ấm'],
      [1, 1, '#f8c9a4', 'Thực nhiệt', ['Sốt cao, khát,', 'mặt đỏ, táo bón'], 'thanh nhiệt']
    ];
    cells.forEach(function (c) {
      var x = 58 + c[0] * 150, y = 34 + c[1] * 106;
      s += rect(x, y, 144, 98, c[2], { rx: 12 });
      s += tx(x + 72, y + 22, c[3], { b: 1, s: 13.5, c: 'fd' });
      s += tx(x + 72, y + 42, c[4], { s: 10.8, lh: 13, c: 'fd' });
      s += tx(x + 72, y + 84, '→ ' + c[5], { s: 11, b: 1, c: 'fd' });
    });
    return svg(360, 246, s, 'Bảng bốn chứng phối hợp: hư hàn, hư nhiệt, thực hàn, thực nhiệt và hướng điều chỉnh');
  };

  window.ART = ART;
})();
