/* Hình minh họa SVG cho phần Nâng cao */
(function () {
  'use strict';
  var A = window.ART, H = A && A._h;
  if (!H) return;
  var svg = H.svg, tx = H.tx, rect = H.rect, pol = H.pol, marker = H.marker;
  var BL = '#3b78c4', OR = '#d9822b', GR = '#2a9d6b', RD = '#d9482b';

  function line(x1, y1, x2, y2, col, w, o) {
    o = o || {};
    return '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="' + col + '" stroke-width="' + (w || 2) + '" stroke-linecap="round"' +
      (o.dash ? ' stroke-dasharray="' + o.dash + '"' : '') + (o.mk ? ' marker-end="url(#' + o.mk + ')"' : '') + '/>';
  }
  function circ(x, y, r, fill, o) {
    o = o || {};
    return '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + fill + '"' + (o.stroke ? ' stroke="' + o.stroke + '" stroke-width="' + (o.sw || 1.5) + '"' : '') + '/>';
  }

  /* ===== Bài 9: Bệnh cơ ===== */
  A.chinhta = function () {
    var s = '', cols = [
      ['Khỏe mạnh', ['Chính khí đủ,', 'tà khí ít'], 100, 12],
      ['Chứng thực', ['Tà mạnh,', 'chính chưa suy'], 80, 100],
      ['Chứng hư', ['Chính khí yếu,', 'tà không rõ'], 28, 18],
      ['Hư thực lẫn lộn', ['Chính khí yếu,', 'tà còn mạnh'], 28, 90]
    ];
    s += rect(10, 8, 12, 12, GR, { rx: 3 }) + tx(28, 18, 'Chính khí', { a: 'start', s: 12 });
    s += rect(110, 8, 12, 12, RD, { rx: 3 }) + tx(128, 18, 'Tà khí', { a: 'start', s: 12 });
    cols.forEach(function (c, i) {
      var cx = 45 + i * 90, base = 176;
      s += rect(cx - 36, 30, 72, 146, 'none', { rx: 8, stroke: 'var(--line)', sw: 1 });
      s += rect(cx - 28, base - c[2] * 1.2, 24, c[2] * 1.2, GR, { rx: 4 });
      s += rect(cx + 4, base - c[3] * 1.2, 24, c[3] * 1.2, RD, { rx: 4 });
      s += tx(cx, 196, c[0], { b: 1, s: 12 });
      s += tx(cx, 212, c[1], { s: 10.5, lh: 13, c: 'fm' });
    });
    return svg(360, 244, s, 'Bốn trạng thái của cuộc đấu giữa chính khí và tà khí: khỏe mạnh, thực, hư, hư thực lẫn lộn');
  };

  A.amduongthinh = function () {
    var s = '', rows = [
      ['Dương thịnh', 70, 100, 'Thực nhiệt', 'nóng, thừa'],
      ['Âm thịnh', 100, 70, 'Thực hàn', 'lạnh, thừa'],
      ['Dương hư', 70, 38, 'Hư hàn', 'lạnh, thiếu'],
      ['Âm hư', 38, 70, 'Hư nhiệt', 'nóng, thiếu']
    ];
    s += rect(8, 8, 12, 12, BL, { rx: 3 }) + tx(25, 18, 'Âm', { a: 'start', s: 12 });
    s += rect(60, 8, 12, 12, OR, { rx: 3 }) + tx(77, 18, 'Dương', { a: 'start', s: 12 });
    s += line(140, 8, 140, 20, 'var(--muted)', 2, { dash: '3 3' }) + tx(148, 18, 'Mức bình thường', { a: 'start', s: 12, c: 'fm' });
    rows.forEach(function (r, i) {
      var top = 34 + i * 62, k = 1.2, x0 = 108;
      s += rect(4, top, 352, 54, 'none', { rx: 10, stroke: 'var(--line)', sw: 1 });
      s += tx(12, top + 31, r[0], { a: 'start', b: 1, s: 13 });
      s += rect(x0, top + 10, r[1] * k, 14, BL, { rx: 3 });
      s += rect(x0, top + 30, r[2] * k, 14, OR, { rx: 3 });
      s += line(x0 + 70 * k, top + 5, x0 + 70 * k, top + 49, 'var(--muted)', 1.5, { dash: '3 3' });
      s += tx(256, top + 25, r[3], { a: 'start', b: 1, s: 13, c: r[3].indexOf('nhiệt') > -1 ? 'fred' : 'fb' });
      s += tx(256, top + 41, r[4], { a: 'start', s: 11, c: 'fm' });
    });
    return svg(360, 288, s, 'Bốn tình trạng: dương thịnh gây thực nhiệt, âm thịnh gây thực hàn, dương hư gây hư hàn, âm hư gây hư nhiệt');
  };

  A.khico = function () {
    var s = '', id = H.nextId(), id2 = H.nextId();
    s += '<defs>' + marker(id, GR) + marker(id2, OR) + '</defs>';
    s += circ(180, 86, 30, '#f6e7c1');
    s += tx(180, 83, 'Khí cơ', { b: 1, s: 12.5, c: 'fd' }) + tx(180, 98, 'cơ thể', { s: 11, c: 'fd' });
    s += line(180, 52, 180, 14, GR, 3.5, { mk: id });
    s += line(180, 120, 180, 158, GR, 3.5, { mk: id });
    s += line(146, 86, 40, 86, OR, 3.5, { mk: id2 });
    s += line(214, 86, 320, 86, OR, 3.5, { mk: id2 });
    s += tx(190, 26, 'Thăng ↑  (Can, Tỳ)', { a: 'start', b: 1, s: 12, c: 'fgreen' });
    s += tx(190, 150, 'Giáng ↓  (Phế, Vị)', { a: 'start', b: 1, s: 12, c: 'fgreen' });
    s += tx(92, 74, 'Xuất', { b: 1, s: 12.5, c: 'fo' }) + tx(92, 106, ['thở ra, ra mồ hôi,', 'đào thải'], { s: 10.5, lh: 12, c: 'fm' });
    s += tx(268, 74, 'Nhập', { b: 1, s: 12.5, c: 'fo' }) + tx(268, 106, ['hít vào, ăn uống,', 'thu nạp'], { s: 10.5, lh: 12, c: 'fm' });
    var d = [
      ['Khí hư', 'thiếu khí, mệt'], ['Khí trệ', 'khí đi chậm, đầy tức'], ['Khí nghịch', 'khí đi ngược lên'],
      ['Khí hãm', 'khí tụt xuống, sa'], ['Khí thoát', 'khí mất nhanh'], ['Khí bế', 'khí bị bít, tắc']
    ];
    s += tx(10, 186, 'Sáu kiểu rối loạn khí cơ', { a: 'start', b: 1, s: 13 });
    d.forEach(function (r, i) {
      var x = 4 + (i % 2) * 178, y = 196 + Math.floor(i / 2) * 44;
      s += rect(x, y, 174, 38, '#fbeed5', { rx: 8 });
      s += tx(x + 8, y + 16, r[0], { a: 'start', b: 1, s: 12.5, c: 'fd' }) + tx(x + 8, y + 31, r[1], { a: 'start', s: 10.8, c: 'fd' });
    });
    return svg(360, 330, s, 'Bốn hướng vận động của khí: thăng, giáng, xuất, nhập; và sáu kiểu rối loạn khí cơ');
  };

  A.noitangu = function () {
    var s = '', rows = [
      ['風', 'Nội phong', 'Can dương lên cao, nhiệt cực, huyết hư', 'chóng mặt, run, co giật, tê', '#3f9b5a'],
      ['寒', 'Nội hàn', 'Dương khí hư (Tỳ, Thận)', 'sợ lạnh, tay chân lạnh, tiêu chảy', '#2f6db5'],
      ['濕', 'Nội thấp', 'Tỳ hư, vận hóa kém', 'nặng người, đầy bụng, phân nát', '#b98a2e'],
      ['燥', 'Nội táo', 'Tân dịch hao tổn', 'khô miệng họng, da khô, táo bón', '#8793a0'],
      ['火', 'Nội hỏa', 'Dương quá thịnh hoặc âm hư', 'nóng, khát, bứt rứt, mất ngủ', '#d9482b']
    ];
    rows.forEach(function (r, i) {
      var cy = 32 + i * 58;
      s += rect(4, cy - 26, 352, 52, 'none', { rx: 10, stroke: 'var(--line)', sw: 1 });
      s += circ(34, cy, 20, r[4]);
      s += tx(34, cy + 7, r[0], { s: 20, c: 'fw', b: 1 });
      s += tx(66, cy - 8, r[1], { a: 'start', b: 1, s: 13 });
      s += tx(66, cy + 6, 'Gốc: ' + r[2], { a: 'start', s: 10.6, c: 'fm' });
      s += tx(66, cy + 20, '→ ' + r[3], { a: 'start', s: 10.6 });
    });
    return svg(360, 296, s, 'Năm loại tà khí sinh từ bên trong cơ thể và biểu hiện chính');
  };

  /* ===== Bài 10: Biện chứng tạng phủ ===== */
  A.tangquanhe = function () {
    var cx = 180, cy = 128, R = 88, s = '';
    var nodes = [
      ['Tâm', 'hoa', -90, '#e8552f'], ['Tỳ', 'tho', -18, '#c99a2e'], ['Phế', 'kim', 54, '#8793a0'],
      ['Thận', 'thuy', 126, '#2f6db5'], ['Can', 'moc', 198, '#3f9b5a']
    ];
    var P = nodes.map(function (n) { return pol(cx, cy, R, n[2]); });
    var rel = [[4, 1, RD], [0, 3, OR], [1, 2, GR], [3, 4, GR], [1, 3, GR], [2, 3, GR]];
    rel.forEach(function (r, i) {
      var a = P[r[0]], b = P[r[1]];
      s += line(a[0], a[1], b[0], b[1], r[2], 2.5, r[2] === RD ? { dash: '6 4' } : {});
    });
    rel.forEach(function (r, i) {
      var a = P[r[0]], b = P[r[1]], mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2;
      s += circ(mx, my, 10, 'var(--surface)', { stroke: r[2], sw: 2 }) + tx(mx, my + 4, String(i + 1), { b: 1, s: 12 });
    });
    nodes.forEach(function (n, i) {
      s += circ(P[i][0], P[i][1], 22, n[3]);
      s += tx(P[i][0], P[i][1] + 5, n[0], { b: 1, s: 13, c: 'fw' });
    });
    s += tx(10, 250, '1 Can – Tỳ   2 Tâm – Thận   3 Tỳ – Phế', { a: 'start', s: 11.5, c: 'fm' });
    s += tx(10, 267, '4 Thận – Can   5 Tỳ – Thận   6 Phế – Thận', { a: 'start', s: 11.5, c: 'fm' });
    return svg(360, 278, s, 'Sáu mối quan hệ giữa các tạng: Can–Tỳ, Tâm–Thận, Tỳ–Phế, Thận–Can, Tỳ–Thận, Phế–Thận');
  };

  A.congthuc = function () {
    var s = '', id = H.nextId();
    s += '<defs>' + marker(id, 'var(--muted)') + '</defs>';
    s += rect(6, 10, 128, 66, '#d6e8f7', { rx: 12 }) + tx(70, 36, 'Vị trí', { b: 1, s: 14, c: 'fd' }) + tx(70, 54, ['(tạng/phủ nào)'], { s: 11, c: 'fd' });
    s += tx(148, 49, '+', { b: 1, s: 22 });
    s += rect(162, 10, 128, 66, '#fbe5d3', { rx: 12 }) + tx(226, 36, 'Tính chất', { b: 1, s: 14, c: 'fd' }) + tx(226, 54, ['(hư/thực, hàn/nhiệt)'], { s: 10.5, c: 'fd' });
    s += tx(304, 49, '=', { b: 1, s: 22 });
    s += rect(316, 22, 40, 42, '#d9f0e4', { rx: 10 }) + tx(336, 48, 'Chứng', { b: 1, s: 10.5, c: 'fd' });
    var ex = [['Tỳ', 'khí hư', 'Tỳ khí hư', 'mệt, ăn kém, phân nát'], ['Thận', 'âm hư', 'Thận âm hư', 'lưng gối mỏi, nóng chiều']];
    s += tx(10, 106, 'Ví dụ', { a: 'start', b: 1, s: 13 });
    ex.forEach(function (e, i) {
      var y = 120 + i * 56;
      s += rect(6, y, 60, 40, '#d6e8f7', { rx: 10 }) + tx(36, y + 25, e[0], { b: 1, s: 13, c: 'fd' });
      s += rect(76, y, 70, 40, '#fbe5d3', { rx: 10 }) + tx(111, y + 25, e[1], { b: 1, s: 12.5, c: 'fd' });
      s += line(152, y + 20, 178, y + 20, 'var(--muted)', 2.5, { mk: id });
      s += tx(186, y + 17, e[2], { a: 'start', b: 1, s: 13 }) + tx(186, y + 33, e[3], { a: 'start', s: 11, c: 'fm' });
    });
    return svg(360, 236, s, 'Công thức biện chứng: vị trí cộng tính chất bằng chứng, kèm hai ví dụ Tỳ khí hư và Thận âm hư');
  };

  /* ===== Bài 11: Biện chứng ngoại cảm ===== */
  A.lucKinh = function () {
    var s = '', id = H.nextId(), id2 = H.nextId();
    s += '<defs>' + marker(id, 'var(--muted)') + marker(id2, RD) + '</defs>';
    var dg = [['Thái dương', 'Sợ lạnh, sốt,', 'đau đầu gáy'], ['Dương minh', 'Sốt cao, khát,', 'ra mồ hôi nhiều'], ['Thiếu dương', 'Lúc rét lúc nóng,', 'miệng đắng']];
    var am = [['Thái âm', 'Đầy bụng, nôn,', 'tiêu chảy'], ['Thiếu âm', 'Mệt lả, chân', 'tay lạnh'], ['Quyết âm', 'Hàn nhiệt lẫn,', 'tay chân lạnh']];
    s += tx(10, 18, 'Ba kinh dương: tà mạnh, chính khí còn đủ', { a: 'start', b: 1, s: 12, c: 'fo' });
    dg.forEach(function (r, i) {
      var x = 4 + i * 120, y = 28;
      s += rect(x, y, 108, 62, '#fbe5d3', { rx: 10 }) + tx(x + 54, y + 20, r[0], { b: 1, s: 12.5, c: 'fd' }) + tx(x + 54, y + 38, [r[1], r[2]], { s: 10.2, lh: 12, c: 'fd' });
      if (i < 2) s += line(x + 110, y + 31, x + 118, y + 31, 'var(--muted)', 2, { mk: id });
    });
    s += line(180, 94, 180, 126, RD, 3, { mk: id2 });
    s += tx(190, 114, 'Chính khí suy, bệnh vào sâu', { a: 'start', s: 11, c: 'fred', b: 1 });
    s += tx(10, 148, 'Ba kinh âm: chính khí suy, thiên về hư và hàn', { a: 'start', b: 1, s: 12, c: 'fb' });
    am.forEach(function (r, i) {
      var x = 4 + i * 120, y = 158;
      s += rect(x, y, 108, 62, '#d6e8f7', { rx: 10 }) + tx(x + 54, y + 20, r[0], { b: 1, s: 12.5, c: 'fd' }) + tx(x + 54, y + 38, [r[1], r[2]], { s: 10.2, lh: 12, c: 'fd' });
      if (i < 2) s += line(x + 110, y + 31, x + 118, y + 31, 'var(--muted)', 2, { mk: id });
    });
    s += tx(180, 244, 'Càng sang phải và xuống dưới, bệnh càng sâu', { s: 10.8, c: 'fm' });
    return svg(360, 256, s, 'Sáu kinh theo Thương hàn luận: ba kinh dương và ba kinh âm, bệnh đi từ nông vào sâu');
  };

  A.veKhi = function () {
    var s = '', id = H.nextId();
    s += '<defs>' + marker(id, RD) + '</defs>';
    var rows = [
      ['Vệ phận', 'Nông nhất', 'Sốt nhẹ, hơi sợ gió, đau họng, ho', '#cfe6f5'],
      ['Khí phận', 'Sâu hơn', 'Sốt cao, khát, ra mồ hôi, rêu vàng', '#f6e3b0'],
      ['Dinh phận', 'Vào sâu', 'Sốt nặng về đêm, bứt rứt, mất ngủ, lưỡi đỏ thẫm', '#f3c9a8'],
      ['Huyết phận', 'Sâu nhất', 'Sốt cao, ban đỏ, xuất huyết, mê sảng', '#eba39a']
    ];
    s += line(18, 14, 18, 236, RD, 3, { mk: id });
    rows.forEach(function (r, i) {
      var y = 10 + i * 60;
      s += rect(34, y, 322, 52, r[3], { rx: 10 });
      s += tx(44, y + 20, r[0], { a: 'start', b: 1, s: 13.5, c: 'fd' }) + tx(348, y + 20, r[1], { a: 'end', s: 11, c: 'fd' });
      s += tx(44, y + 39, r[2], { a: 'start', s: 11, c: 'fd' });
    });
    return svg(360, 252, s, 'Bốn giai đoạn vệ, khí, dinh, huyết của bệnh ôn nhiệt từ nông vào sâu');
  };

  A.tamtieu = function () {
    var s = '';
    s += '<path d="M180,24 C200,24 214,36 214,56 C214,70 206,80 196,84 L196,92 C228,98 250,108 252,134 L254,210 C254,222 246,230 236,230 L124,230 C114,230 106,222 106,210 L108,134 C110,108 132,98 164,92 L164,84 C154,80 146,70 146,56 C146,36 160,24 180,24Z" fill="#f4e6d3" stroke="var(--muted)" stroke-width="1.5"/>';
    s += '<path d="M112,118 L248,118 L250,164 L110,164Z" fill="#cfe6f5" opacity=".9"/>';
    s += '<path d="M110,164 L250,164 L252,196 L108,196Z" fill="#f6e3b0" opacity=".9"/>';
    s += '<path d="M108,196 L252,196 L254,210 C254,222 246,230 236,230 L124,230 C114,230 106,222 106,210Z" fill="#f3c9a8" opacity=".9"/>';
    s += line(256, 141, 276, 141, 'var(--muted)', 1.5) + line(256, 180, 276, 180, 'var(--muted)', 1.5) + line(256, 213, 276, 213, 'var(--muted)', 1.5);
    s += tx(180, 146, 'Thượng tiêu', { b: 1, s: 12.5, c: 'fd' });
    s += tx(180, 184, 'Trung tiêu', { b: 1, s: 12.5, c: 'fd' });
    s += tx(180, 217, 'Hạ tiêu', { b: 1, s: 12.5, c: 'fd' });
    s += tx(282, 136, ['Phế, Tâm', '(ngực)'], { a: 'start', s: 11, lh: 13 });
    s += tx(282, 175, ['Tỳ, Vị', '(bụng trên)'], { a: 'start', s: 11, lh: 13 });
    s += tx(282, 208, ['Can, Thận', '(bụng dưới)'], { a: 'start', s: 11, lh: 13 });
    return svg(360, 246, s, 'Ba vùng của cơ thể theo học thuyết tam tiêu: thượng tiêu, trung tiêu, hạ tiêu');
  };

  /* ===== Bài 12: Nguyên tắc và pháp điều trị ===== */
  A.tieuban = function () {
    var s = '';
    s += '<path d="M60,138 L60,104" stroke="#8a5a2b" stroke-width="12" stroke-linecap="round"/>';
    s += '<ellipse cx="60" cy="62" rx="52" ry="42" fill="#4fae6b"/>';
    s += '<path d="M60,148 C46,160 34,166 22,178 M60,148 C60,164 60,172 60,188 M60,148 C74,160 88,166 98,178" stroke="#8a5a2b" stroke-width="5" fill="none" stroke-linecap="round"/>';
    s += line(4, 148, 116, 148, 'var(--muted)', 2, { dash: '4 3' });
    s += tx(60, 58, 'Tiêu', { b: 1, s: 15, c: 'fw' }) + tx(60, 74, '(ngọn)', { s: 11, c: 'fw' });
    s += tx(60, 202, 'Bản (gốc)', { b: 1, s: 13 });
    s += tx(130, 40, 'Tiêu: biểu hiện bên ngoài', { a: 'start', b: 1, s: 12.5 });
    s += tx(130, 56, ['triệu chứng, tà khí,', 'bệnh mới mắc sau'], { a: 'start', s: 11, lh: 13, c: 'fm' });
    s += tx(130, 168, 'Bản: nguyên nhân gốc', { a: 'start', b: 1, s: 12.5 });
    s += tx(130, 184, ['chính khí, bệnh có trước,', 'nguyên nhân ban đầu'], { a: 'start', s: 11, lh: 13, c: 'fm' });
    s += rect(130, 88, 226, 54, '#fbeed5', { rx: 10 });
    s += tx(140, 106, 'Cấp (nguy, nặng) → trị tiêu trước', { a: 'start', s: 11.2, b: 1, c: 'fd' });
    s += tx(140, 122, 'Hoãn (ổn định) → trị bản', { a: 'start', s: 11.2, b: 1, c: 'fd' });
    s += tx(140, 137, 'Vừa cấp vừa hư → tiêu bản đồng trị', { a: 'start', s: 11.2, b: 1, c: 'fd' });
    return svg(360, 214, s, 'Cây minh họa tiêu và bản: ngọn là triệu chứng, gốc là nguyên nhân; nguyên tắc cấp trị tiêu, hoãn trị bản');
  };

  A.batphap = function () {
    var s = '', it = [
      ['汗', 'Hãn', 'Làm ra mồ hôi, giải biểu', '#cfe6f5'], ['吐', 'Thổ', 'Gây nôn, đưa tà ra', '#e1ecc4'],
      ['下', 'Hạ', 'Thông đại tiện', '#f3c9a8'], ['和', 'Hòa', 'Điều hòa, dung hòa', '#d9f0e4'],
      ['溫', 'Ôn', 'Làm ấm, trừ hàn', '#f6e3b0'], ['清', 'Thanh', 'Làm mát, thanh nhiệt', '#d6e8f7'],
      ['消', 'Tiêu', 'Làm tan thứ tích tụ', '#ecd9f5'], ['補', 'Bổ', 'Bồi bổ chỗ hư', '#fbd9d9']
    ];
    it.forEach(function (r, i) {
      var x = 4 + (i % 2) * 178, y = 6 + Math.floor(i / 2) * 66;
      s += rect(x, y, 174, 58, r[3], { rx: 12 });
      s += circ(x + 28, y + 29, 20, 'var(--surface)', { stroke: 'var(--muted)', sw: 1 });
      s += tx(x + 28, y + 36, r[0], { s: 21, b: 1 });
      s += tx(x + 56, y + 25, r[1], { a: 'start', b: 1, s: 14, c: 'fd' });
      s += tx(x + 56, y + 42, r[2], { a: 'start', s: 10.2, c: 'fd' });
    });
    return svg(360, 274, s, 'Tám phép chữa bệnh: hãn, thổ, hạ, hòa, ôn, thanh, tiêu, bổ');
  };
})();
