/* Phần Nâng cao: bài học, thẻ ôn, trắc nghiệm và sơ đồ tương tác */
(function () {
  'use strict';
  var D = window.DATA, CARDS = window.CARDS, QUIZ = window.QUIZ;

  D.topics.push(
    { id: "benhco", name: "Bệnh cơ, nội sinh ngũ tà", grp: "nc" },
    { id: "bctangphu", name: "Biện chứng tạng phủ", grp: "nc" },
    { id: "ngoaicam", name: "Biện chứng ngoại cảm", grp: "nc" },
    { id: "phapdieutri", name: "Nguyên tắc và pháp điều trị", grp: "nc" }
  );

  D.lessons.push(
    /* ===== 9. BỆNH CƠ ===== */
    {
      id: "benhco", grp: "nc", icon: "⚖️", title: "Bệnh cơ và nội sinh ngũ tà", sub: "Bệnh sinh ra và diễn biến thế nào", minutes: 14,
      blocks: [
        { t: "p", x: "Ở các bài cơ bản, bạn đã biết <b>nguyên nhân bệnh</b> (phong, hàn, thử, thấp, táo, hỏa từ bên ngoài, cùng cảm xúc, ăn uống, lao lực). Bài này hỏi một câu sâu hơn: <b>khi nguyên nhân tác động vào cơ thể, bệnh được hình thành và biến đổi bằng cơ chế nào?</b> Phần giải thích cơ chế đó gọi là <b>bệnh cơ</b>." },
        { t: "note", title: "Giải thích thuật ngữ", x: "<b>Bệnh cơ</b> (病機): “cơ” là then chốt, cơ chế. Bệnh cơ là cơ chế phát sinh, phát triển và biến hóa của bệnh. Nắm bệnh cơ giúp bạn hiểu <i>vì sao</i> một triệu chứng xuất hiện, thay vì chỉ học thuộc danh sách triệu chứng." },
        { t: "h", x: "1. Chính khí và tà khí đấu nhau" },
        { t: "p", x: "<b>Chính khí</b> là toàn bộ sức chống đỡ, tự điều chỉnh và hồi phục của cơ thể. <b>Tà khí</b> là mọi yếu tố gây bệnh. Việc mắc bệnh hay không, nặng hay nhẹ phụ thuộc vào cuộc giằng co giữa hai bên, gọi là <b>chính tà tương tranh</b> (đấu tranh giữa chính và tà)." },
        { t: "fig", id: "chinhta", cap: "Cột xanh là chính khí, cột đỏ là tà khí. Cơ thể khỏe khi chính khí đầy đủ; bệnh biểu hiện khác nhau tùy bên nào mạnh hay yếu." },
        { t: "table", head: ["Trạng thái", "Tương quan", "Biểu hiện thường gặp", "Hướng xử trí chung"], rows: [
          ["<b>Thực chứng</b>", "Tà khí mạnh, chính khí chưa suy", "Sốt cao, đau dữ dội, bụng chướng, tiếng nói to, mạch có lực", "Đuổi tà (tả)"],
          ["<b>Hư chứng</b>", "Chính khí yếu, tà không rõ", "Mệt mỏi, hơi thở ngắn, tiếng nhỏ, mạch yếu", "Bồi bổ chính khí (bổ)"],
          ["<b>Hư thực thác tạp</b> (hư và thực lẫn lộn)", "Chính khí yếu mà tà còn mạnh", "Người suy nhược nhưng vẫn có thực tà như đờm, thấp, nhiệt", "Vừa bổ vừa tả, tùy bên nào cấp hơn"]
        ] },
        { t: "h", x: "2. Âm dương thịnh suy" },
        { t: "p", x: "Bệnh cơ cơ bản nhất là Âm dương mất cân bằng. Có bốn tình trạng, nhớ theo câu cổ: <i>Dương thắng thì nhiệt, Âm thắng thì hàn; Dương hư thì hàn, Âm hư thì nhiệt.</i>" },
        { t: "fig", id: "amduongthinh", cap: "Vạch đứt là mức bình thường. Thịnh nghĩa là vượt mức (chứng thực); hư nghĩa là thấp hơn mức (chứng hư). Âm hư gây nóng vì Dương không còn bị Âm kiềm chế." },
        { t: "ul", x: [
          "<b>Dương thịnh → thực nhiệt</b>: sốt, mặt đỏ, khát, bứt rứt, táo bón, nước tiểu vàng.",
          "<b>Âm thịnh → thực hàn</b>: lạnh bụng đau co thắt, sợ lạnh, thích ấm, nước tiểu trong.",
          "<b>Dương hư → hư hàn</b>: sợ lạnh, tay chân lạnh, mệt, phân nát, lưỡi nhợt.",
          "<b>Âm hư → hư nhiệt</b>: nóng âm ỉ về chiều, mồ hôi trộm, lòng bàn tay chân nóng, lưỡi đỏ ít rêu."
        ] },
        { t: "note", title: "Giải thích thuật ngữ", x: "<b>Vong âm, vong dương</b>: giai đoạn nguy kịch khi Âm hoặc Dương mất đi nhanh (ví dụ ra mồ hôi nhiều, tay chân lạnh, mạch yếu muốn dứt). Đây là tình trạng cấp cứu, cần đến cơ sở y tế ngay." },
        { t: "h", x: "3. Khí cơ: thăng, giáng, xuất, nhập" },
        { t: "p", x: "Khí trong cơ thể luôn vận động theo bốn hướng. <b>Thăng</b> (đi lên), <b>giáng</b> (đi xuống), <b>xuất</b> (đi ra), <b>nhập</b> (đi vào). Bốn hướng này cân bằng thì khí huyết lưu thông; lệch hướng thì sinh bệnh. Người xưa gọi sự vận động này là <b>khí cơ</b>." },
        { t: "fig", id: "khico", cap: "Can và Tỳ có xu hướng đưa khí lên; Phế và Vị đưa khí xuống. Bên dưới là sáu kiểu rối loạn khí cơ." },
        { t: "table", head: ["Rối loạn", "Ý nghĩa", "Ví dụ"], rows: [
          ["<b>Khí hư</b>", "Khí không đủ", "Mệt, ngại nói, dễ ra mồ hôi"],
          ["<b>Khí trệ</b>", "Khí đi chậm, bị ứ", "Đầy tức, đau chạy lung tung, thở dài khi căng thẳng (hay gặp ở Can)"],
          ["<b>Khí nghịch</b>", "Khí đáng đi xuống lại đi ngược lên", "Ợ, nôn (Vị khí nghịch); ho, khó thở (Phế khí nghịch)"],
          ["<b>Khí hãm</b>", "Khí không giữ được, tụt xuống", "Sa dạ dày, sa tử cung, tiêu chảy kéo dài (Tỳ khí hạ hãm)"],
          ["<b>Khí thoát</b>", "Khí mất nhanh, không giữ được", "Vã mồ hôi lạnh, mạch yếu muốn dứt. Cấp cứu"],
          ["<b>Khí bế</b>", "Khí bị bít, không thông ra vào", "Đột ngột bất tỉnh, nghiến răng, tay nắm chặt. Cấp cứu"]
        ] },
        { t: "h", x: "4. Nội sinh ngũ tà" },
        { t: "p", x: "Ở bài nguyên nhân bệnh, <b>ngoại tà</b> (phong, hàn, thấp, táo, hỏa…) đi từ bên ngoài vào. Nhưng khi tạng phủ, khí huyết hoặc âm dương rối loạn, cơ thể cũng tự sinh ra những trạng thái <b>giống</b> các tà ấy, gọi là <b>nội sinh ngũ tà</b> (năm tà sinh từ bên trong): nội phong, nội hàn, nội thấp, nội táo, nội hỏa." },
        { t: "note", title: "Giải thích thuật ngữ", x: "<b>Nội</b> là bên trong. “Nội phong” không có nghĩa là gió thổi vào người, mà là những triệu chứng <i>giống như gió</i> (đột ngột, thay đổi, run, chóng mặt) do rối loạn bên trong. Không có “nội thử” vì thử (nắng nóng mùa hè) chỉ đến từ bên ngoài." },
        { t: "fig", id: "noitangu", cap: "Năm tà sinh từ bên trong, gốc rễ của mỗi loại và biểu hiện chính." },
        { t: "table", head: ["Nội tà", "Cơ chế thường gặp", "Biểu hiện", "Liên quan tạng"], rows: [
          ["<b>Nội phong</b>", "Can dương bốc lên; nhiệt quá cao; huyết hư không nuôi gân", "Chóng mặt, run tay, tê, giật cơ, co giật", "Can"],
          ["<b>Nội hàn</b>", "Dương khí hư, không sinh đủ ấm", "Sợ lạnh, tay chân lạnh, tiêu chảy phân sống, tiểu trong dài", "Tỳ, Thận"],
          ["<b>Nội thấp</b>", "Tỳ hư, vận hóa thủy dịch kém, nước ứ đọng", "Nặng người, đầy bụng, phân nát, rêu lưỡi nhờn, phù", "Tỳ"],
          ["<b>Nội táo</b>", "Tân dịch hao tổn (mất mồ hôi, nôn, tiêu chảy, bệnh nhiệt kéo dài)", "Khô miệng họng, da khô, táo bón, nước tiểu ít", "Phế, Vị, Đại tràng"],
          ["<b>Nội hỏa</b>", "<i>Hỏa thực</i>: dương khí quá thịnh, cảm xúc dồn nén. <i>Hư hỏa</i>: Âm hư nên Dương vượng", "Hỏa thực: sốt, khát, bứt rứt, mặt đỏ. Hư hỏa: nóng chiều, mồ hôi trộm", "Tâm, Can, Thận"]
        ] },
        { t: "note", title: "Lưu ý khi học", x: "Các nội tà thường đi <b>kết hợp</b>: hàn kèm thấp (hàn thấp), nhiệt kèm thấp (thấp nhiệt), phong kèm hỏa. Thầy thuốc phải xem toàn bộ triệu chứng, lưỡi, mạch rồi mới kết luận. Phần thử bên dưới chỉ để luyện suy luận." },
        { t: "h", x: "Thử bài tập: nhận biết nội tà" },
        { t: "p", x: "Chọn các triệu chứng để xem chúng nghiêng về nội tà nào. Đây là bài tập minh họa, không dùng để tự chẩn đoán." },
        { t: "widget", id: "noita" }
      ],
      key: [
        "Bệnh cơ là cơ chế sinh bệnh: chính tà tương tranh, âm dương mất cân bằng, khí cơ rối loạn.",
        "Thực: tà mạnh. Hư: chính khí yếu. Hư thực thác tạp: chính yếu mà tà còn mạnh.",
        "Dương thắng thì nhiệt, Âm thắng thì hàn; Dương hư thì hàn, Âm hư thì nhiệt.",
        "Khí cơ gồm thăng, giáng, xuất, nhập. Rối loạn: khí hư, trệ, nghịch, hãm, thoát, bế.",
        "Nội sinh ngũ tà: nội phong (Can), nội hàn (dương hư), nội thấp (Tỳ), nội táo (tân dịch hao), nội hỏa (thực hoặc hư)."
      ]
    },

    /* ===== 10. BIỆN CHỨNG TẠNG PHỦ ===== */
    {
      id: "bctangphu", grp: "nc", icon: "🫀", title: "Biện chứng tạng phủ", sub: "Nhận ra chứng của Can, Tâm, Tỳ, Phế, Thận", minutes: 16,
      blocks: [
        { t: "p", x: "<b>Biện chứng</b> là phân tích các triệu chứng (từ tứ chẩn và bát cương) để kết luận <b>chứng</b>. Trong biện chứng tạng phủ, bạn trả lời hai câu hỏi: <b>bệnh nằm ở tạng phủ nào</b> và <b>bản chất của nó là gì</b> (hư hay thực, hàn hay nhiệt, khí huyết hay âm dương)." },
        { t: "note", title: "Giải thích thuật ngữ", x: "<b>Chứng</b> (證) khác với <b>triệu chứng</b> và khác với <b>bệnh</b>. Triệu chứng là từng dấu hiệu riêng lẻ. Chứng là bức tranh tổng hợp ở một giai đoạn: vị trí, tính chất và nguyên nhân. Hai người cùng bệnh có thể khác chứng, hai người khác bệnh có thể cùng chứng." },
        { t: "fig", id: "congthuc", cap: "Công thức đơn giản để gọi tên một chứng: Vị trí + Tính chất. Ví dụ Tỳ + khí hư = Tỳ khí hư." },
        { t: "h", x: "Các chứng thường gặp" },
        { t: "p", x: "Mỗi tạng có triệu chứng “đặc trưng” cho chức năng của nó (đã học ở bài Tạng phủ). Hãy tìm triệu chứng đặc trưng trước để xác định <b>vị trí</b>, rồi dựa vào nóng/lạnh, lưỡi, mạch để xác định <b>tính chất</b>." },
        { t: "h", x: "Can (gan)" },
        { t: "table", head: ["Chứng", "Biểu hiện chính", "Bản chất"], rows: [
          ["<b>Can khí uất kết</b>", "Tức đau hai bên sườn, hay thở dài, dễ cáu, căng tức ngực vú, kinh nguyệt không đều, mạch huyền", "Khí trệ do cảm xúc dồn nén"],
          ["<b>Can hỏa thượng viêm</b>", "Đau đầu, mắt đỏ, miệng đắng, rất dễ cáu, ù tai, lưỡi đỏ rêu vàng", "Hỏa thực bốc lên"],
          ["<b>Can dương thượng cang</b>", "Chóng mặt, nhức đầu, mặt đỏ, ù tai, đầu nặng chân nhẹ", "Thận âm và Can âm hư, Can dương vượng lên"],
          ["<b>Can huyết hư</b>", "Hoa mắt, tê tay chân, móng khô, kinh ít, lưỡi nhợt, mạch tế", "Huyết thiếu, không nuôi được Can"]
        ] },
        { t: "h", x: "Tâm" },
        { t: "table", head: ["Chứng", "Biểu hiện chính", "Bản chất"], rows: [
          ["<b>Tâm huyết hư, Tâm âm hư</b>", "Hồi hộp, mất ngủ, hay quên, hoa mắt, mơ nhiều. Nếu thiên về âm hư: thêm nóng chiều, mồ hôi trộm, lòng bàn tay chân nóng", "Hư (huyết hoặc âm thiếu)"],
          ["<b>Tâm hỏa thượng viêm</b>", "Loét miệng lưỡi, bứt rứt, mất ngủ, nước tiểu vàng, đầu lưỡi đỏ", "Thực nhiệt"],
          ["<b>Tâm dương hư</b>", "Hồi hộp, hơi thở ngắn, sợ lạnh, tay chân lạnh, sắc mặt nhợt", "Hư hàn"]
        ] },
        { t: "note", title: "Cảnh báo", x: "Đau thắt ngực, khó thở, vã mồ hôi lạnh là dấu hiệu cần cấp cứu. Không dùng lý luận ở đây để tự xử lý; hãy đến cơ sở y tế ngay." },
        { t: "h", x: "Tỳ (hệ tiêu hóa và vận hóa)" },
        { t: "table", head: ["Chứng", "Biểu hiện chính", "Bản chất"], rows: [
          ["<b>Tỳ khí hư</b>", "Mệt mỏi, ăn kém, đầy bụng sau ăn, phân nát, mặt vàng nhợt, tay chân yếu", "Hư"],
          ["<b>Tỳ dương hư</b>", "Như Tỳ khí hư, thêm bụng lạnh thích ấm, phân lỏng sống, sợ lạnh, có thể phù", "Hư hàn"],
          ["<b>Tỳ khí hạ hãm</b>", "Tức nặng bụng dưới, tiêu chảy lâu ngày, sa tạng (dạ dày, tử cung, trực tràng)", "Khí hư không nâng giữ được"],
          ["<b>Tỳ hư thấp trệ</b>", "Nặng người, đầy bụng, phân nát, rêu lưỡi nhờn, nhiều đờm", "Hư kèm thực tà (thấp)"]
        ] },
        { t: "h", x: "Phế (phổi)" },
        { t: "table", head: ["Chứng", "Biểu hiện chính", "Bản chất"], rows: [
          ["<b>Phế khí hư</b>", "Ho yếu, thở ngắn, tiếng nói nhỏ, dễ ra mồ hôi, hay bị cảm", "Hư"],
          ["<b>Phế âm hư</b>", "Ho khan ít đờm, khô họng, nóng chiều, má đỏ, mồ hôi trộm", "Hư nhiệt"],
          ["<b>Phong hàn phạm Phế</b>", "Ho, đờm loãng trắng, sợ lạnh, nghẹt mũi, rêu trắng mỏng", "Thực, biểu hàn"],
          ["<b>Đàm nhiệt ủng Phế</b>", "Ho đờm vàng đặc, khò khè, sốt, khát, rêu vàng nhờn", "Thực nhiệt"]
        ] },
        { t: "h", x: "Thận" },
        { t: "table", head: ["Chứng", "Biểu hiện chính", "Bản chất"], rows: [
          ["<b>Thận dương hư</b>", "Lưng gối mỏi lạnh, sợ lạnh, tiểu đêm nhiều nước trong, tiêu chảy lúc gần sáng, giảm sinh lực", "Hư hàn"],
          ["<b>Thận âm hư</b>", "Lưng gối mỏi, ù tai, họng khô, nóng chiều, mồ hôi trộm, lòng bàn tay chân nóng", "Hư nhiệt"],
          ["<b>Thận tinh bất túc</b>", "Trẻ chậm lớn, người lớn tóc rụng sớm, răng lung lay, giảm sinh lực", "Hư (thiếu gốc)"],
          ["<b>Thận khí bất cố</b>", "Tiểu són, tiểu không tự chủ, tiểu đêm nhiều, di tinh", "Hư không giữ được"]
        ] },
        { t: "h", x: "Quan hệ giữa các tạng" },
        { t: "p", x: "Tạng không bệnh riêng lẻ. Bệnh ở tạng này thường lan sang tạng khác theo các quan hệ sinh khắc đã học ở bài Ngũ hành." },
        { t: "fig", id: "tangquanhe", cap: "Sáu mối quan hệ thường gặp. Đường xanh là quan hệ nuôi dưỡng, đường đỏ đứt là quan hệ khắc quá mức, đường cam là quan hệ hỗ trợ nhau." },
        { t: "table", head: ["Số", "Quan hệ", "Ý nghĩa", "Biểu hiện khi rối loạn"], rows: [
          ["1", "<b>Can – Tỳ</b> (Mộc khắc Thổ)", "Can điều đạt khí giúp Tỳ vận hóa. Can khí uất thì “lấn” Tỳ", "Căng thẳng thì đau sườn, đầy bụng, phân nát"],
          ["2", "<b>Tâm – Thận</b> (Thủy hỏa tương tế)", "Thận Thủy đi lên làm mát Tâm Hỏa; Tâm Hỏa đi xuống làm ấm Thận", "Mất ngủ, hồi hộp, nóng chiều, lưng gối mỏi"],
          ["3", "<b>Tỳ – Phế</b> (Thổ sinh Kim)", "Tỳ hóa ra tinh vi, nuôi Phế. Câu cổ: Tỳ là nguồn sinh đàm, Phế là nơi chứa đàm", "Tỳ hư thì Phế yếu: ho đờm nhiều, dễ cảm"],
          ["4", "<b>Thận – Can</b> (Thủy sinh Mộc, “Can Thận đồng nguyên”)", "Thận âm nuôi Can âm", "Thận âm hư dẫn đến Can dương vượng: chóng mặt, ù tai"],
          ["5", "<b>Tỳ – Thận</b> (hậu thiên – tiên thiên)", "Thận dương làm ấm Tỳ; Tỳ cấp dưỡng cho Thận", "Thận dương hư gây Tỳ dương hư: tiêu chảy gần sáng, lạnh bụng"],
          ["6", "<b>Phế – Thận</b>", "Phế chủ hít khí, Thận “nạp khí” (giữ khí hít vào ở sâu)", "Thận không nạp khí: thở nông, hít vào khó, hơi thở ngắn khi gắng sức"]
        ] },
        { t: "note", title: "Giải thích thuật ngữ", x: "<b>Tiên thiên</b>: nền tảng sinh lực nhận từ cha mẹ, lưu ở Thận. <b>Hậu thiên</b>: nguồn nuôi dưỡng có được sau khi sinh nhờ ăn uống, do Tỳ Vị đảm nhiệm. Hai nguồn này nâng đỡ nhau." },
        { t: "h", x: "Thử bài tập: tìm chứng tạng phủ" },
        { t: "p", x: "Chọn các triệu chứng bạn thấy trong tình huống giả định. Công cụ sẽ cho biết chứng nào có nhiều dấu hiệu khớp nhất. Đây là bài tập suy luận, không phải chẩn đoán." },
        { t: "widget", id: "chungtp" }
      ],
      key: [
        "Biện chứng = tìm Vị trí (tạng phủ nào) + Tính chất (hư/thực, hàn/nhiệt).",
        "Can: uất kết, hỏa thượng viêm, dương thượng cang, huyết hư.",
        "Tâm: huyết/âm hư, hỏa thượng viêm, dương hư. Tỳ: khí hư, dương hư, khí hạ hãm. Phế: khí hư, âm hư. Thận: dương hư, âm hư, tinh bất túc.",
        "Hư nhiệt (âm hư) khác hư hàn (dương hư): một bên nóng chiều, mồ hôi trộm; bên kia sợ lạnh, phân lỏng.",
        "Các tạng liên hệ: Can–Tỳ, Tâm–Thận, Tỳ–Phế, Thận–Can, Tỳ–Thận, Phế–Thận."
      ]
    },

    /* ===== 11. BIỆN CHỨNG NGOẠI CẢM ===== */
    {
      id: "ngoaicam", grp: "nc", icon: "🌡️", title: "Biện chứng ngoại cảm", sub: "Lục kinh, vệ khí dinh huyết, tam tiêu", minutes: 15,
      blocks: [
        { t: "p", x: "<b>Ngoại cảm</b> là bệnh do tà khí từ bên ngoài (phong, hàn, thử, thấp, táo, hỏa, hoặc dịch khí) xâm nhập, thường khởi phát nhanh, hay có sốt. Biện chứng ngoại cảm cho biết <b>bệnh đang ở giai đoạn nào</b> và <b>sẽ đi tiếp theo hướng nào</b>. Qua nhiều thế kỷ có ba hệ thống chính, bài này chỉ giới thiệu ở mức nhập môn." },
        { t: "table", head: ["Hệ thống", "Người đề xuất, thời kỳ", "Dùng nhiều cho", "Tên giai đoạn"], rows: [
          ["<b>Lục kinh</b>", "Trương Trọng Cảnh, sách <i>Thương hàn luận</i>, khoảng thế kỷ 2–3", "Bệnh do hàn tà (thương hàn)", "Thái dương, Dương minh, Thiếu dương, Thái âm, Thiếu âm, Quyết âm"],
          ["<b>Vệ khí dinh huyết</b>", "Diệp Thiên Sĩ, thời nhà Thanh, thế kỷ 18", "Bệnh ôn nhiệt (ôn bệnh)", "Vệ phận, Khí phận, Dinh phận, Huyết phận"],
          ["<b>Tam tiêu</b>", "Ngô Cúc Thông, sách <i>Ôn bệnh điều biện</i>, cuối thế kỷ 18", "Bệnh ôn nhiệt", "Thượng tiêu, Trung tiêu, Hạ tiêu"]
        ] },
        { t: "note", title: "Giải thích thuật ngữ", x: "<b>Thương hàn</b>: bệnh do hàn tà gây ra, bắt đầu ở bề mặt cơ thể rồi đi sâu vào. <b>Ôn bệnh</b>: bệnh do nhiệt tà (ôn tà) gây ra, chuyển biến nhanh và dễ làm tổn thương tân dịch, âm. Hai nhóm này khác nhau ở cách bệnh diễn biến, nên cần hệ thống biện chứng riêng." },
        { t: "h", x: "1. Lục kinh (Thương hàn luận)" },
        { t: "p", x: "Bệnh đi từ ngoài vào trong, từ <b>kinh dương</b> (tà mạnh, chính khí còn đủ, thiên về thực và nhiệt) sang <b>kinh âm</b> (chính khí suy, thiên về hư và hàn). Đây là quy luật chung, thực tế có thể nhảy giai đoạn hoặc kết hợp." },
        { t: "fig", id: "lucKinh", cap: "Ba kinh dương ở hàng trên, ba kinh âm ở hàng dưới. Mỗi ô nêu dấu hiệu nổi bật nhất của giai đoạn." },
        { t: "table", head: ["Giai đoạn", "Vị trí, tính chất", "Dấu hiệu chính", "Hướng xử trí chung"], rows: [
          ["<b>Thái dương</b>", "Biểu: tà ở lớp nông", "Sợ lạnh, sốt, đau đầu, cứng gáy, mạch phù. Có mồ hôi, mạch hoãn gọi là <i>trúng phong</i>; không mồ hôi, mạch khẩn gọi là <i>thương hàn</i>", "Giải biểu"],
          ["<b>Dương minh</b>", "Lý nhiệt thực", "Sốt cao, không sợ lạnh, ra mồ hôi nhiều, khát. Nếu vào phủ: bụng đầy chướng, táo bón", "Thanh nhiệt hoặc thông phủ (hạ)"],
          ["<b>Thiếu dương</b>", "Bán biểu bán lý (nửa nông nửa sâu)", "Lúc rét lúc nóng xen kẽ (<i>hàn nhiệt vãng lai</i>), tức đầy ngực sườn, miệng đắng, họng khô, hoa mắt, mạch huyền", "Hòa giải"],
          ["<b>Thái âm</b>", "Tỳ hư hàn thấp", "Đầy bụng, nôn, tiêu chảy, không khát, bụng đau thích ấm", "Ôn trung, kiện Tỳ"],
          ["<b>Thiếu âm</b>", "Tâm Thận suy; hàn hóa hoặc nhiệt hóa", "Uể oải, buồn ngủ, tay chân lạnh, tiêu chảy phân sống, mạch rất yếu (hàn hóa); hoặc bứt rứt mất ngủ, họng khô (nhiệt hóa)", "Ôn dương hoặc tư âm tùy dạng"],
          ["<b>Quyết âm</b>", "Hàn nhiệt lẫn lộn, giai đoạn cuối", "Tay chân lạnh buốt (<i>quyết</i>), khát, đói nhưng không muốn ăn, khí xông lên ngực", "Điều hòa hàn nhiệt"]
        ] },
        { t: "note", title: "Giải thích thuật ngữ", x: "<b>Mạch phù</b>: sờ nhẹ đã thấy, ấn mạnh thì bớt. <b>Mạch hoãn</b>: chậm, mềm. <b>Mạch khẩn</b>: căng như dây xoắn. <b>Mạch huyền</b>: căng thẳng như dây đàn. <b>Quyết</b>: tay chân lạnh buốt, thường tới khuỷu gối." },
        { t: "h", x: "2. Vệ khí dinh huyết" },
        { t: "p", x: "Hệ này mô tả bệnh ôn nhiệt như một cuộc đi sâu <b>bốn lớp</b>: từ lớp ngoài nhất là <b>vệ</b> (khí bảo vệ bề mặt), đến <b>khí</b>, đến <b>dinh</b> (phần dinh dưỡng của máu), cuối cùng là <b>huyết</b>. Càng sâu càng nặng." },
        { t: "fig", id: "veKhi", cap: "Mũi tên đỏ chỉ hướng bệnh đi sâu. Giai đoạn càng sâu thì nhiệt càng nặng và càng dễ tổn thương âm huyết." },
        { t: "table", head: ["Giai đoạn", "Dấu hiệu", "Lưỡi, mạch", "Hướng xử trí chung"], rows: [
          ["<b>Vệ phận</b>", "Sốt nhẹ, hơi sợ gió, đau họng, ho, hơi khát", "Rêu trắng mỏng, mạch phù nhanh", "Tân lương giải biểu"],
          ["<b>Khí phận</b>", "Sốt cao, không sợ lạnh, khát, ra mồ hôi, bứt rứt", "Rêu vàng, mạch to nhanh", "Thanh nhiệt"],
          ["<b>Dinh phận</b>", "Sốt nặng về đêm, bứt rứt, mất ngủ, có thể mê sảng nhẹ, ban mờ", "Lưỡi đỏ thẫm, ít rêu", "Thanh dinh, dưỡng âm"],
          ["<b>Huyết phận</b>", "Sốt cao, ban đỏ rõ, chảy máu (cam, dưới da), mê sảng, co giật", "Lưỡi đỏ sẫm hoặc tía", "Cấp cứu: lương huyết, cầm máu. Phải đi viện ngay"]
        ] },
        { t: "h", x: "3. Tam tiêu" },
        { t: "p", x: "Tam tiêu chia cơ thể thành ba vùng, bệnh ôn nhiệt thường đi từ <b>thượng tiêu</b> xuống <b>trung tiêu</b> rồi <b>hạ tiêu</b>, ứng với mức độ ngày càng nặng và tổn thương Âm ngày càng sâu." },
        { t: "fig", id: "tamtieu", cap: "Thượng tiêu là ngực (Phế, Tâm), trung tiêu là bụng trên (Tỳ, Vị), hạ tiêu là bụng dưới (Can, Thận)." },
        { t: "ul", x: [
          "<b>Thượng tiêu</b>: bệnh mới, nhẹ, nhiều dấu hiệu ở Phế (sốt, ho, đau họng) và có thể ảnh hưởng Tâm.",
          "<b>Trung tiêu</b>: nhiệt hoặc thấp nhiệt ở Tỳ Vị (sốt, khát, bụng đầy, táo bón hoặc tiêu chảy).",
          "<b>Hạ tiêu</b>: giai đoạn muộn, tổn thương âm của Can và Thận (sốt nhẹ kéo dài, gầy, mệt, run, co giật)."
        ] },
        { t: "note", title: "Giải thích thuật ngữ", x: "<b>Tiêu</b> (焦) ở đây là các vùng trong thân, không phải “ngọn” như ở bài điều trị. <b>Thấp nhiệt</b>: nhiệt kèm thấp, hay gây nặng nề, sốt dai dẳng, rêu vàng nhờn." },
        { t: "h", x: "So sánh nhanh" },
        { t: "ul", x: [
          "<b>Lục kinh</b>: tập trung vào hàn tà, mô tả bệnh từ biểu vào lý, từ dương vào âm.",
          "<b>Vệ khí dinh huyết</b>: tập trung vào mức độ sâu của nhiệt trong bệnh ôn nhiệt.",
          "<b>Tam tiêu</b>: tập trung vào vùng cơ thể bị ảnh hưởng và tổn thương âm.",
          "Trong thực tế thầy thuốc <b>phối hợp</b> các hệ thống, không dùng một cách cứng nhắc."
        ] },
        { t: "note", title: "Cảnh báo an toàn", x: "Sốt cao kéo dài, lơ mơ, co giật, nổi ban kèm chảy máu, khó thở là <b>dấu hiệu nguy hiểm</b>. Cần đi cấp cứu theo y học hiện đại ngay, không chờ theo lý luận này." },
        { t: "h", x: "Thử bài tập: xác định giai đoạn" },
        { t: "p", x: "Chọn hệ thống rồi chọn dấu hiệu để xem giai đoạn nào khớp nhất. Bài tập chỉ minh họa cách tư duy." },
        { t: "widget", id: "ngoaicam" }
      ],
      key: [
        "Ba hệ thống: Lục kinh (hàn tà), Vệ khí dinh huyết và Tam tiêu (ôn nhiệt).",
        "Lục kinh: Thái dương, Dương minh, Thiếu dương, Thái âm, Thiếu âm, Quyết âm. Kinh dương thiên về thực nhiệt, kinh âm thiên về hư hàn.",
        "Thiếu dương là bán biểu bán lý, đặc trưng rét nóng xen kẽ, miệng đắng.",
        "Vệ → Khí → Dinh → Huyết: từ nông đến sâu, từ nhẹ đến nặng.",
        "Tam tiêu: thượng (Phế, Tâm), trung (Tỳ, Vị), hạ (Can, Thận)."
      ]
    },

    /* ===== 12. NGUYÊN TẮC VÀ PHÁP ĐIỀU TRỊ ===== */
    {
      id: "phapdieutri", grp: "nc", icon: "🧭", title: "Nguyên tắc và pháp điều trị", sub: "Trị tận gốc, tiêu bản, bát pháp", minutes: 15,
      blocks: [
        { t: "p", x: "Sau khi biện chứng xong, thầy thuốc phải quyết định <b>hướng chữa</b>. Bài này nói về <b>nguyên tắc</b> (suy nghĩ chung) và <b>pháp</b> (phương pháp cụ thể) trong chữa bệnh. Bài chỉ giới thiệu lý luận, <b>không có phác đồ, bài thuốc hay liều dùng</b>." },
        { t: "note", title: "Giải thích thuật ngữ", x: "<b>Pháp</b> (法) là cách chữa, ví dụ “làm ra mồ hôi”, “làm mát”. Pháp khác với <b>phương</b> (đơn thuốc cụ thể). Thầy thuốc chọn pháp trước, sau đó mới chọn phương và vị thuốc phù hợp." },
        { t: "h", x: "1. Trị bệnh cầu bản (tìm gốc để chữa)" },
        { t: "p", x: "<b>Trị bệnh cầu bản</b> nghĩa là chữa bệnh phải tìm đến gốc của nó, không chỉ dập triệu chứng. Hai người cùng đau đầu có thể khác gốc (Can dương vượng, huyết hư, hay phong hàn), nên cách chữa khác nhau. Ngược lại, hai bệnh khác nhau có thể cùng gốc nên cùng một hướng chữa." },
        { t: "ul", x: [
          "<b>Đồng bệnh dị trị</b>: cùng một bệnh nhưng chứng khác nhau thì cách chữa khác nhau.",
          "<b>Dị bệnh đồng trị</b>: khác bệnh nhưng cùng một chứng thì có thể chữa cùng hướng.",
          "<b>Chính trị</b>: chữa ngược với tính chất bệnh. Nhiệt thì làm mát, hàn thì làm ấm, hư thì bổ, thực thì tả. Đây là cách thông thường.",
          "<b>Phản trị</b>: dùng khi biểu hiện bên ngoài trái với bản chất bên trong (giả tượng), ví dụ bên trong rất nóng nhưng tay chân lạnh buốt. Cách này đòi hỏi thầy thuốc có kinh nghiệm để phân biệt thật giả."
        ] },
        { t: "h", x: "2. Tiêu và bản" },
        { t: "p", x: "<b>Bản</b> là gốc, <b>tiêu</b> là ngọn. Phân biệt như sau:" },
        { t: "table", head: ["", "Bản (gốc)", "Tiêu (ngọn)"], rows: [
          ["Về chính tà", "Chính khí", "Tà khí"],
          ["Về nguyên nhân và triệu chứng", "Nguyên nhân gây bệnh", "Triệu chứng biểu hiện"],
          ["Về thời gian", "Bệnh có trước, bệnh nguyên phát", "Bệnh mới sinh, bệnh thứ phát"]
        ] },
        { t: "fig", id: "tieuban", cap: "Cây có gốc rễ (bản) và ngọn lá (tiêu). Thường nên chữa gốc, nhưng khi bệnh cấp thì phải xử lý ngọn trước." },
        { t: "ul", x: [
          "<b>Cấp thì trị tiêu</b>: triệu chứng đang nguy cấp, ví dụ đau dữ dội, chảy máu nhiều, khó thở thì phải xử trí ngay.",
          "<b>Hoãn thì trị bản</b>: bệnh ổn định, kéo dài thì tìm gốc mà chữa.",
          "<b>Tiêu bản đồng trị</b>: vừa cấp vừa hư thì chữa cả hai."
        ] },
        { t: "h", x: "3. Phù chính khứ tà" },
        { t: "p", x: "<b>Phù chính</b> là nâng đỡ chính khí, <b>khứ tà</b> là đuổi tà khí. Tùy tương quan chính tà đã học ở bài Bệnh cơ mà chọn:" },
        { t: "table", head: ["Tình huống", "Nguyên tắc"], rows: [
          ["Thực chứng (tà mạnh, chính chưa suy)", "<b>Khứ tà</b> là chính: tà đi thì chính an"],
          ["Hư chứng (chính khí yếu)", "<b>Phù chính</b> là chính: bổ để cơ thể tự mạnh lên"],
          ["Hư thực lẫn lộn", "Vừa phù chính vừa khứ tà; bên nào cấp hơn thì ưu tiên trước"]
        ] },
        { t: "note", title: "Giải thích thuật ngữ", x: "<b>Bế môn lưu khấu</b> (đóng cửa giữ giặc): nếu tà còn mạnh mà vội bồi bổ thì tà bị giữ lại, bệnh có thể nặng hơn. Vì vậy không phải lúc nào “bổ” cũng tốt." },
        { t: "h", x: "4. Điều chỉnh âm dương và tam nhân chế nghi" },
        { t: "ul", x: [
          "<b>Điều chỉnh âm dương</b>: mục tiêu cuối cùng. Dương thịnh thì ức chế bớt Dương; Âm hư thì bổ Âm; Dương hư thì bổ Dương.",
          "<b>Tam nhân chế nghi</b> (ba yếu tố khi chọn cách chữa): <b>nhân thời</b> (theo mùa, thời tiết), <b>nhân địa</b> (theo vùng, nơi ở), <b>nhân nhân</b> (theo người: tuổi, giới, thể chất, nghề nghiệp). Cùng một chứng, trẻ em khác người già, mùa hè khác mùa đông."
        ] },
        { t: "h", x: "5. Bát pháp: tám phép chữa" },
        { t: "p", x: "Tám pháp cơ bản này là khung chung cho nhiều cách chữa. Pháp được chọn dựa vào kết quả Bát cương: biểu hay lý, hàn hay nhiệt, hư hay thực." },
        { t: "fig", id: "batphap", cap: "Tám phép chữa: hãn, thổ, hạ, hòa, ôn, thanh, tiêu, bổ. Chữ Hán trong vòng tròn chỉ để nhận mặt chữ." },
        { t: "table", head: ["Pháp", "Ý nghĩa", "Dùng khi", "Lưu ý"], rows: [
          ["<b>Hãn</b> (汗)", "Làm ra mồ hôi để đưa tà ra khỏi biểu. Có <i>tân ôn</i> (cay ấm, cho biểu hàn) và <i>tân lương</i> (cay mát, cho biểu nhiệt)", "Bệnh còn ở biểu", "Không dùng khi đã ra mồ hôi nhiều hoặc mất nước"],
          ["<b>Thổ</b> (吐)", "Gây nôn để đưa tà ở phần trên (đờm, thức ăn ứ) ra", "Tà ứ ở thượng tiêu, hầu họng, dạ dày", "Ngày nay ít dùng, dễ gây hại nếu không có chỉ định"],
          ["<b>Hạ</b> (下)", "Thông đại tiện để đẩy tà tích tụ ở lý ra", "Táo bón thực nhiệt, tích trệ", "Không dùng cho người yếu, phụ nữ có thai (trừ khi thầy thuốc cân nhắc)"],
          ["<b>Hòa</b> (和)", "Điều hòa, giải theo cách không thuần bổ không thuần tả", "Thiếu dương (nửa nông nửa sâu), Can Tỳ bất hòa", "Cần phân biệt đúng chứng"],
          ["<b>Ôn</b> (溫)", "Làm ấm, trừ hàn, ôn dương", "Lý hàn, dương hư", "Không dùng khi có nhiệt hoặc âm hư"],
          ["<b>Thanh</b> (清)", "Làm mát, thanh nhiệt, giải độc", "Chứng nhiệt, hỏa", "Dùng quá nhiều dễ làm tổn thương Tỳ Vị dương"],
          ["<b>Tiêu</b> (消)", "Làm tiêu tan những thứ tích tụ: thức ăn ứ, đờm, khối kết", "Thực tích, đàm, huyết ứ", "Dùng lâu có thể hao chính khí"],
          ["<b>Bổ</b> (補)", "Bồi bổ cái đang thiếu: khí, huyết, âm, dương", "Hư chứng", "Không bổ khi tà còn mạnh (bế môn lưu khấu)"]
        ] },
        { t: "note", title: "Giải thích thuật ngữ", x: "<b>Tích trệ</b>: thức ăn hay chất thải ứ đọng, không tiêu. <b>Huyết ứ</b>: huyết lưu thông kém, đọng lại, gây đau cố định, lưỡi tím. <b>Giải độc</b>: loại bớt tà nhiệt, tà độc, không đồng nghĩa với “thải độc” theo nghĩa quảng cáo." },
        { t: "h", x: "6. Từ Bát cương đến pháp điều trị" },
        { t: "p", x: "Bát cương gợi ra hướng chữa. Ví dụ biểu thì giải biểu; lý hàn thì ôn; lý nhiệt thì thanh; hư thì bổ. Bài tập dưới đây giúp bạn nối hai bước đó." },
        { t: "widget", id: "phapdt" },
        { t: "note", title: "Cảnh báo an toàn", x: "Đây là bài học lý luận. Việc chọn pháp, phương thuốc, liều dùng hay châm cứu phải do thầy thuốc có chuyên môn quyết định sau khi thăm khám trực tiếp. Không tự áp dụng khi đang có bệnh, mang thai, dùng thuốc khác hoặc có bệnh mạn tính." }
      ],
      key: [
        "Trị bệnh cầu bản: tìm gốc rồi chữa. Đồng bệnh dị trị, dị bệnh đồng trị.",
        "Chính trị: ngược tính chất bệnh. Phản trị: dùng khi có giả tượng.",
        "Cấp thì trị tiêu, hoãn thì trị bản, vừa cấp vừa hư thì tiêu bản đồng trị.",
        "Phù chính (bổ) và khứ tà (tả) tùy tương quan chính tà. Không bổ vội khi tà còn mạnh.",
        "Bát pháp: hãn, thổ, hạ, hòa, ôn, thanh, tiêu, bổ.",
        "Tam nhân chế nghi: theo thời, theo địa, theo người."
      ]
    }
  );

  /* ---------- Thẻ ôn ---------- */
  function C(topic, term, mean, note) { CARDS.push({ topic: topic, term: term, mean: mean, note: note || "" }); }
  C("benhco", "Bệnh cơ (病機)", "Cơ chế phát sinh, phát triển và biến hóa của bệnh.", "Giúp hiểu vì sao triệu chứng xuất hiện.");
  C("benhco", "Chính khí", "Sức chống đỡ, tự điều chỉnh và hồi phục của cơ thể.", "Chính khí mạnh thì khó mắc bệnh.");
  C("benhco", "Tà khí", "Mọi yếu tố gây bệnh, từ bên ngoài hoặc sinh ra bên trong.", "Phong, hàn, thấp, nhiệt… là các loại tà.");
  C("benhco", "Chính tà tương tranh", "Cuộc giằng co giữa chính khí và tà khí quyết định bệnh nặng hay nhẹ, chuyển hướng ra sao.", "");
  C("benhco", "Thực chứng", "Tà khí mạnh, chính khí chưa suy: sốt cao, đau dữ dội, bụng chướng, mạch có lực.", "Hướng chữa: tả (đuổi tà).");
  C("benhco", "Hư chứng", "Chính khí yếu: mệt, hơi thở ngắn, tiếng nhỏ, mạch yếu.", "Hướng chữa: bổ.");
  C("benhco", "Hư thực thác tạp", "Hư và thực lẫn lộn: chính khí yếu mà tà còn mạnh.", "Phải vừa bổ vừa tả tùy bên nào cấp hơn.");
  C("benhco", "Dương thắng thì nhiệt, Âm thắng thì hàn", "Dương quá vượt mức gây thực nhiệt; Âm quá vượt mức gây thực hàn.", "");
  C("benhco", "Dương hư thì hàn, Âm hư thì nhiệt", "Dương thiếu gây hư hàn (sợ lạnh); Âm thiếu gây hư nhiệt (nóng chiều, mồ hôi trộm).", "Âm hư nóng vì Dương không còn bị Âm kiềm chế.");
  C("benhco", "Khí cơ (氣機)", "Sự vận động của khí theo bốn hướng: thăng, giáng, xuất, nhập.", "Rối loạn khí cơ là cơ chế sinh nhiều bệnh.");
  C("benhco", "Khí trệ", "Khí đi chậm, bị ứ lại: đầy tức, đau, thở dài, hay gặp ở Can.", "");
  C("benhco", "Khí nghịch", "Khí đáng đi xuống lại đi ngược lên.", "Ví dụ: Vị khí nghịch gây ợ, nôn; Phế khí nghịch gây ho.");
  C("benhco", "Khí hãm", "Khí hư không nâng giữ được, tụt xuống: sa dạ dày, sa tử cung, tiêu chảy kéo dài.", "Gặp ở Tỳ khí hạ hãm.");
  C("benhco", "Nội sinh ngũ tà", "Năm tà sinh từ bên trong: nội phong, nội hàn, nội thấp, nội táo, nội hỏa.", "Không có nội thử vì thử chỉ đến từ bên ngoài.");
  C("benhco", "Nội phong", "Triệu chứng giống gió do rối loạn bên trong: chóng mặt, run, tê, giật cơ.", "Liên quan Can.");
  C("benhco", "Nội thấp", "Nước ứ đọng do Tỳ hư vận hóa kém: nặng người, đầy bụng, phân nát, rêu nhờn.", "");

  C("bctangphu", "Biện chứng", "Phân tích triệu chứng để kết luận chứng: vị trí và tính chất của bệnh.", "");
  C("bctangphu", "Chứng (證)", "Bức tranh tổng hợp ở một giai đoạn của bệnh: vị trí, tính chất, nguyên nhân.", "Khác triệu chứng và khác bệnh.");
  C("bctangphu", "Can khí uất kết", "Khí trệ ở Can: tức sườn, thở dài, dễ cáu, kinh nguyệt không đều, mạch huyền.", "Do cảm xúc dồn nén.");
  C("bctangphu", "Can hỏa thượng viêm", "Hỏa thực bốc lên: đau đầu, mắt đỏ, miệng đắng, rất dễ cáu, lưỡi đỏ rêu vàng.", "");
  C("bctangphu", "Can dương thượng cang", "Chóng mặt, nhức đầu, mặt đỏ, ù tai do Âm hư không kiềm được Dương của Can.", "Gốc ở Can Thận âm hư.");
  C("bctangphu", "Tâm âm hư", "Hồi hộp, mất ngủ, hay quên, kèm nóng chiều, mồ hôi trộm, lòng bàn tay chân nóng.", "Hư nhiệt.");
  C("bctangphu", "Tỳ khí hư", "Mệt mỏi, ăn kém, đầy bụng sau ăn, phân nát, mặt vàng nhợt.", "Hư.");
  C("bctangphu", "Tỳ dương hư", "Như Tỳ khí hư kèm bụng lạnh thích ấm, phân lỏng sống, sợ lạnh, có thể phù.", "Hư hàn.");
  C("bctangphu", "Tỳ khí hạ hãm", "Tức nặng bụng dưới, tiêu chảy lâu, sa tạng.", "Khí hư không nâng giữ.");
  C("bctangphu", "Phế khí hư", "Ho yếu, thở ngắn, tiếng nói nhỏ, dễ ra mồ hôi, hay bị cảm.", "");
  C("bctangphu", "Phế âm hư", "Ho khan ít đờm, khô họng, nóng chiều, má đỏ, mồ hôi trộm.", "Hư nhiệt.");
  C("bctangphu", "Thận dương hư", "Lưng gối mỏi lạnh, sợ lạnh, tiểu đêm nhiều nước trong, tiêu chảy gần sáng.", "Hư hàn.");
  C("bctangphu", "Thận âm hư", "Lưng gối mỏi, ù tai, họng khô, nóng chiều, mồ hôi trộm.", "Hư nhiệt.");
  C("bctangphu", "Tâm – Thận (Thủy hỏa tương tế)", "Thận Thủy làm mát Tâm Hỏa, Tâm Hỏa làm ấm Thận Thủy. Rối loạn: mất ngủ, hồi hộp, nóng chiều.", "");
  C("bctangphu", "Can – Thận đồng nguyên", "Thận âm nuôi Can âm; Thận âm hư dẫn đến Can dương vượng.", "");
  C("bctangphu", "Tiên thiên và hậu thiên", "Tiên thiên: nền sinh lực từ cha mẹ, lưu ở Thận. Hậu thiên: nguồn nuôi dưỡng sau sinh, do Tỳ Vị đảm nhiệm.", "");

  C("ngoaicam", "Ngoại cảm", "Bệnh do tà khí từ bên ngoài xâm nhập, thường khởi phát nhanh, hay có sốt.", "");
  C("ngoaicam", "Thương hàn", "Bệnh do hàn tà gây ra, đi từ ngoài vào trong. Sách Thương hàn luận của Trương Trọng Cảnh.", "");
  C("ngoaicam", "Ôn bệnh", "Bệnh do nhiệt tà (ôn tà), chuyển biến nhanh, dễ tổn thương tân dịch và âm.", "");
  C("ngoaicam", "Lục kinh", "Sáu giai đoạn: Thái dương, Dương minh, Thiếu dương, Thái âm, Thiếu âm, Quyết âm.", "Ba kinh dương thiên về thực nhiệt, ba kinh âm thiên về hư hàn.");
  C("ngoaicam", "Thái dương", "Giai đoạn biểu: sợ lạnh, sốt, đau đầu, cứng gáy, mạch phù.", "Có mồ hôi mạch hoãn: trúng phong. Không mồ hôi mạch khẩn: thương hàn.");
  C("ngoaicam", "Dương minh", "Lý nhiệt thực: sốt cao, không sợ lạnh, mồ hôi nhiều, khát. Vào phủ thì bụng chướng, táo bón.", "");
  C("ngoaicam", "Thiếu dương", "Bán biểu bán lý: hàn nhiệt vãng lai (lúc rét lúc nóng), tức ngực sườn, miệng đắng, mạch huyền.", "");
  C("ngoaicam", "Thái âm", "Tỳ hư hàn thấp: đầy bụng, nôn, tiêu chảy, không khát, bụng đau thích ấm.", "");
  C("ngoaicam", "Thiếu âm", "Tâm Thận suy: uể oải, buồn ngủ, tay chân lạnh, tiêu chảy phân sống, mạch rất yếu.", "Có hàn hóa và nhiệt hóa.");
  C("ngoaicam", "Quyết âm", "Giai đoạn cuối, hàn nhiệt lẫn lộn, tay chân lạnh buốt (quyết).", "");
  C("ngoaicam", "Vệ khí dinh huyết", "Bốn lớp của ôn bệnh: Vệ, Khí, Dinh, Huyết, từ nông đến sâu, từ nhẹ đến nặng.", "Do Diệp Thiên Sĩ đề xuất.");
  C("ngoaicam", "Vệ phận", "Giai đoạn nông: sốt nhẹ, hơi sợ gió, đau họng, ho; rêu trắng mỏng, mạch phù nhanh.", "");
  C("ngoaicam", "Khí phận", "Sốt cao, không sợ lạnh, khát, ra mồ hôi; rêu vàng.", "");
  C("ngoaicam", "Dinh phận", "Sốt nặng về đêm, bứt rứt, mất ngủ; lưỡi đỏ thẫm, ít rêu.", "");
  C("ngoaicam", "Huyết phận", "Sốt cao, ban đỏ, xuất huyết, mê sảng, co giật; lưỡi đỏ sẫm.", "Nguy hiểm, cần cấp cứu.");
  C("ngoaicam", "Tam tiêu", "Ba vùng cơ thể: thượng (Phế, Tâm), trung (Tỳ, Vị), hạ (Can, Thận). Ôn bệnh thường đi từ trên xuống dưới.", "Do Ngô Cúc Thông đề xuất.");
  C("ngoaicam", "Hàn nhiệt vãng lai", "Cơn rét và cơn nóng xen kẽ.", "Đặc trưng của Thiếu dương.");

  C("phapdieutri", "Trị bệnh cầu bản", "Chữa bệnh phải tìm đến gốc, không chỉ dập triệu chứng.", "");
  C("phapdieutri", "Đồng bệnh dị trị", "Cùng bệnh nhưng chứng khác thì cách chữa khác.", "");
  C("phapdieutri", "Dị bệnh đồng trị", "Khác bệnh nhưng cùng chứng thì có thể chữa cùng hướng.", "");
  C("phapdieutri", "Chính trị và phản trị", "Chính trị: chữa ngược tính chất bệnh (nhiệt thì làm mát). Phản trị: dùng khi có giả tượng.", "");
  C("phapdieutri", "Tiêu và bản", "Bản là gốc (nguyên nhân, chính khí, bệnh có trước). Tiêu là ngọn (triệu chứng, tà khí, bệnh mới).", "");
  C("phapdieutri", "Cấp thì trị tiêu, hoãn thì trị bản", "Triệu chứng nguy cấp phải xử trí ngay; bệnh ổn định thì tìm gốc mà chữa.", "");
  C("phapdieutri", "Phù chính khứ tà", "Nâng đỡ chính khí và đuổi tà khí. Thực thì khứ tà, hư thì phù chính.", "");
  C("phapdieutri", "Bế môn lưu khấu", "Đóng cửa giữ giặc: bồi bổ vội khi tà còn mạnh khiến tà bị giữ lại.", "");
  C("phapdieutri", "Tam nhân chế nghi", "Chọn cách chữa theo thời (mùa), theo địa (nơi ở), theo người (tuổi, thể chất).", "");
  C("phapdieutri", "Hãn", "Làm ra mồ hôi, đưa tà ra khỏi biểu. Có tân ôn (biểu hàn) và tân lương (biểu nhiệt).", "");
  C("phapdieutri", "Thổ", "Gây nôn để đưa tà ở phần trên ra.", "Ngày nay ít dùng.");
  C("phapdieutri", "Hạ", "Thông đại tiện để đẩy tà tích tụ ở lý ra.", "");
  C("phapdieutri", "Hòa", "Điều hòa, giải theo cách không thuần bổ không thuần tả.", "Dùng cho Thiếu dương, Can Tỳ bất hòa.");
  C("phapdieutri", "Ôn", "Làm ấm, trừ hàn, ôn dương.", "Dùng cho lý hàn, dương hư.");
  C("phapdieutri", "Thanh", "Làm mát, thanh nhiệt, giải độc.", "Dùng cho chứng nhiệt, hỏa.");
  C("phapdieutri", "Tiêu", "Làm tiêu tan thứ tích tụ: thức ăn ứ, đờm, khối kết.", "");
  C("phapdieutri", "Bổ", "Bồi bổ cái đang thiếu: khí, huyết, âm, dương.", "Không bổ khi tà còn mạnh.");

  /* ---------- Trắc nghiệm ---------- */
  function Q(topic, q, o, a, e) { QUIZ.push({ topic: topic, q: q, o: o, a: a, e: e }); }
  Q("benhco", "Bệnh cơ là gì?", ["Danh sách triệu chứng của một bệnh", "Cơ chế phát sinh, phát triển và biến hóa của bệnh", "Tên một loại thuốc", "Cách bắt mạch"], 1, "Bệnh cơ là cơ chế sinh bệnh và diễn biến của bệnh.");
  Q("benhco", "Chính khí yếu mà tà khí còn mạnh gọi là gì?", ["Thực chứng", "Hư chứng", "Hư thực thác tạp", "Khỏe mạnh"], 2, "Hư và thực lẫn lộn gọi là hư thực thác tạp.");
  Q("benhco", "Âm hư gây ra tình trạng nào?", ["Thực hàn", "Thực nhiệt", "Hư hàn", "Hư nhiệt"], 3, "Âm thiếu nên Dương tương đối vượng, gây nóng âm ỉ, mồ hôi trộm (hư nhiệt).");
  Q("benhco", "Dương hư thường biểu hiện thế nào?", ["Sợ lạnh, tay chân lạnh, mệt", "Sốt cao, mặt đỏ", "Nóng chiều, mồ hôi trộm", "Táo bón, bụng chướng"], 0, "Dương hư là hư hàn: sợ lạnh, tay chân lạnh, mệt.");
  Q("benhco", "Bốn hướng vận động của khí là gì?", ["Thăng, giáng, xuất, nhập", "Sinh, trưởng, thu, tàng", "Hàn, nhiệt, hư, thực", "Biểu, lý, hàn, nhiệt"], 0, "Thăng (lên), giáng (xuống), xuất (ra), nhập (vào).");
  Q("benhco", "Ợ, nôn là biểu hiện của rối loạn nào?", ["Khí hãm", "Khí nghịch (Vị khí nghịch)", "Khí thoát", "Khí hư"], 1, "Vị khí đáng đi xuống nhưng lại đi ngược lên nên gây ợ, nôn.");
  Q("benhco", "Sa dạ dày, sa tử cung, tiêu chảy kéo dài thường do?", ["Khí nghịch", "Khí bế", "Khí hãm (Tỳ khí hạ hãm)", "Khí trệ"], 2, "Tỳ khí hư không nâng giữ, khí tụt xuống.");
  Q("benhco", "Nội tà nào liên quan nhất đến Tỳ hư vận hóa kém?", ["Nội phong", "Nội thấp", "Nội táo", "Nội hàn"], 1, "Tỳ hư làm nước ứ đọng, sinh nội thấp: nặng người, đầy bụng, phân nát.");
  Q("benhco", "Vì sao không có “nội thử” trong ngũ tà sinh từ bên trong?", ["Vì thử không gây bệnh", "Vì thử chỉ đến từ bên ngoài (nắng nóng mùa hè)", "Vì thử là nội phong", "Vì sách bỏ sót"], 1, "Thử chỉ là tà khí mùa hè từ bên ngoài, nên nội tà chỉ có năm loại.");
  Q("benhco", "Chóng mặt, run tay, tê, giật cơ thuộc nội tà nào?", ["Nội hàn", "Nội thấp", "Nội phong", "Nội táo"], 2, "Đó là các biểu hiện giống gió, liên quan Can, gọi là nội phong.");
  Q("benhco", "Nội táo thường do?", ["Dương khí hư", "Tân dịch hao tổn", "Tỳ hư", "Cảm xúc dồn nén"], 1, "Mất mồ hôi, nôn, tiêu chảy hay bệnh nhiệt kéo dài làm hao tân dịch, gây khô.");
  Q("benhco", "Hư hỏa khác thực hỏa ở điểm nào?", ["Hư hỏa do Âm hư, thực hỏa do Dương thịnh", "Hư hỏa không có triệu chứng", "Hư hỏa luôn sốt cao", "Hai loại giống hệt nhau"], 0, "Hư hỏa: Âm hư nên Dương vượng (nóng chiều, mồ hôi trộm). Thực hỏa: Dương quá thịnh (sốt, khát, mặt đỏ).");

  Q("bctangphu", "Chứng là gì?", ["Một triệu chứng riêng lẻ", "Bức tranh tổng hợp gồm vị trí, tính chất và nguyên nhân", "Tên một vị thuốc", "Màu sắc của lưỡi"], 1, "Chứng là kết luận tổng hợp ở một giai đoạn của bệnh.");
  Q("bctangphu", "Tức đau hai bên sườn, hay thở dài, dễ cáu thuộc chứng nào?", ["Tỳ khí hư", "Can khí uất kết", "Thận dương hư", "Phế âm hư"], 1, "Can khí không thông gây tức sườn, thở dài, dễ cáu.");
  Q("bctangphu", "Ho khan ít đờm, khô họng, nóng chiều, má đỏ thuộc chứng nào?", ["Phế khí hư", "Phong hàn phạm Phế", "Phế âm hư", "Đàm nhiệt ủng Phế"], 2, "Âm hư sinh hư nhiệt gây ho khan, khô họng, nóng chiều.");
  Q("bctangphu", "Tiêu chảy gần sáng, lưng gối mỏi lạnh, tiểu đêm nhiều thuộc chứng nào?", ["Thận âm hư", "Thận dương hư", "Tâm hỏa thượng viêm", "Can hỏa thượng viêm"], 1, "Thận dương hư là hư hàn: lạnh, tiểu đêm, tiêu chảy lúc gần sáng.");
  Q("bctangphu", "Tỳ khí hư khác Tỳ dương hư ở điểm nào?", ["Tỳ dương hư có thêm dấu hiệu lạnh (bụng lạnh, sợ lạnh, phân lỏng sống)", "Tỳ khí hư nặng hơn", "Không khác gì", "Tỳ khí hư có sốt cao"], 0, "Dương hư là khí hư cộng thêm hàn.");
  Q("bctangphu", "Quan hệ Tâm – Thận được gọi là gì?", ["Mộc khắc Thổ", "Thủy hỏa tương tế", "Thổ sinh Kim", "Kim thủy tương sinh"], 1, "Thận Thủy làm mát Tâm Hỏa; Tâm Hỏa ấm Thận Thủy.");
  Q("bctangphu", "Thận âm hư lâu ngày dễ dẫn đến chứng nào ở Can?", ["Can huyết hư nặng", "Can dương thượng cang", "Can hàn", "Không ảnh hưởng"], 1, "Can Thận đồng nguyên: Âm không đủ thì Dương của Can vượng lên.");
  Q("bctangphu", "Căng thẳng thì đau sườn, đầy bụng, phân nát cho thấy mối quan hệ nào?", ["Can khí lấn Tỳ", "Phế sinh Thận", "Tâm khắc Phế", "Thận sinh Tâm"], 0, "Can (Mộc) khắc Tỳ (Thổ) quá mức.");
  Q("bctangphu", "“Tỳ là nguồn sinh đàm, Phế là nơi chứa đàm” nói lên điều gì?", ["Phế yếu thì Tỳ yếu", "Tỳ hư vận hóa kém thì sinh đàm thấp, ảnh hưởng đến Phế", "Đàm chỉ do Phế sinh", "Đàm không liên quan đến Tỳ"], 1, "Tỳ hư sinh thấp, thấp tụ thành đàm, đàm ứ ở Phế gây ho nhiều đờm.");
  Q("bctangphu", "Hồi hộp, mất ngủ, nóng chiều, lưng gối mỏi cùng xuất hiện gợi nhớ mối quan hệ nào bị rối loạn?", ["Can – Tỳ", "Tỳ – Phế", "Tâm – Thận", "Phế – Thận"], 2, "Thủy hỏa bất tế: Thận âm hư, Tâm hỏa vượng.");
  Q("bctangphu", "Hít vào khó, thở nông, ngắn hơi khi gắng sức liên quan đến?", ["Thận không nạp khí", "Can khí uất", "Tâm hỏa", "Tỳ khí hạ hãm"], 0, "Phế chủ hít khí, Thận nạp khí. Thận yếu thì khó hít sâu.");

  Q("ngoaicam", "Hệ thống Lục kinh xuất phát từ sách nào?", ["Thương hàn luận", "Ôn bệnh điều biện", "Hoàng Đế nội kinh", "Bản thảo"], 0, "Lục kinh do Trương Trọng Cảnh trình bày trong Thương hàn luận.");
  Q("ngoaicam", "Giai đoạn nào có “hàn nhiệt vãng lai”, miệng đắng, tức ngực sườn?", ["Thái dương", "Dương minh", "Thiếu dương", "Thái âm"], 2, "Thiếu dương ở giữa biểu và lý nên rét nóng xen kẽ.");
  Q("ngoaicam", "Sốt cao, không sợ lạnh, ra mồ hôi nhiều, khát thuộc giai đoạn nào?", ["Thái dương", "Dương minh", "Thiếu âm", "Quyết âm"], 1, "Đó là lý nhiệt thực của Dương minh.");
  Q("ngoaicam", "Đầy bụng, nôn, tiêu chảy, không khát, bụng đau thích ấm thuộc?", ["Dương minh", "Thiếu dương", "Thái âm", "Thái dương"], 2, "Thái âm là Tỳ hư hàn thấp.");
  Q("ngoaicam", "Trong Vệ khí dinh huyết, giai đoạn nông nhất là?", ["Huyết phận", "Dinh phận", "Khí phận", "Vệ phận"], 3, "Thứ tự từ nông đến sâu: Vệ, Khí, Dinh, Huyết.");
  Q("ngoaicam", "Sốt nặng về đêm, bứt rứt, mất ngủ, lưỡi đỏ thẫm ít rêu gợi giai đoạn nào?", ["Vệ phận", "Khí phận", "Dinh phận", "Thái dương"], 2, "Nhiệt đã vào Dinh, làm hao âm nên sốt về đêm, lưỡi đỏ thẫm.");
  Q("ngoaicam", "Dấu hiệu nào cho biết cần cấp cứu ngay?", ["Hơi sợ gió, hơi ho", "Sốt cao, lơ mơ, co giật, ban kèm chảy máu", "Hơi khô họng", "Hơi mệt"], 1, "Đó là biểu hiện nặng (ví dụ ở huyết phận), cần đến cơ sở y tế ngay.");
  Q("ngoaicam", "Tam tiêu gồm những vùng nào?", ["Thượng, trung, hạ tiêu", "Biểu, lý, bán biểu bán lý", "Vệ, khí, huyết", "Tâm, Can, Thận"], 0, "Thượng tiêu (Phế, Tâm), trung tiêu (Tỳ, Vị), hạ tiêu (Can, Thận).");
  Q("ngoaicam", "Hệ thống nào chuyên cho bệnh ôn nhiệt?", ["Chỉ Lục kinh", "Vệ khí dinh huyết và Tam tiêu", "Chỉ Bát cương", "Chỉ Ngũ hành"], 1, "Ôn bệnh dùng Vệ khí dinh huyết và Tam tiêu.");
  Q("ngoaicam", "Mạch phù là mạch như thế nào?", ["Sờ nhẹ đã thấy, ấn mạnh thì bớt", "Rất chậm", "Căng như dây đàn", "Rất yếu, khó thấy"], 0, "Mạch phù nổi ở nông, thường gặp khi tà còn ở biểu.");

  Q("phapdieutri", "“Trị bệnh cầu bản” nghĩa là?", ["Chữa triệu chứng cho nhanh", "Tìm gốc của bệnh để chữa", "Dùng nhiều thuốc bổ", "Chỉ chữa bệnh mới mắc"], 1, "Phải tìm nguyên nhân gốc, không chỉ dập triệu chứng.");
  Q("phapdieutri", "Cùng một bệnh nhưng chứng khác nên chữa khác nhau gọi là?", ["Dị bệnh đồng trị", "Đồng bệnh dị trị", "Phản trị", "Chính trị"], 1, "Đồng bệnh dị trị: cùng bệnh, khác chứng, khác cách chữa.");
  Q("phapdieutri", "Nguyên tắc “cấp thì trị tiêu” nghĩa là?", ["Bệnh nguy cấp thì xử lý triệu chứng nguy cấp trước", "Luôn chữa gốc trước", "Không cần chữa", "Chỉ dùng bổ"], 0, "Khi triệu chứng đang đe dọa, phải xử lý ngay rồi mới tính chữa gốc.");
  Q("phapdieutri", "Thực chứng thì nguyên tắc chính là?", ["Phù chính", "Khứ tà", "Bổ nhiều", "Nghỉ ngơi hoàn toàn"], 1, "Tà mạnh thì đuổi tà; tà đi thì chính an.");
  Q("phapdieutri", "“Bế môn lưu khấu” cảnh báo điều gì?", ["Bổ vội khi tà còn mạnh sẽ giữ tà lại", "Đóng cửa sổ khi lạnh", "Không được uống nước", "Không dùng thanh nhiệt"], 0, "Bổ khi tà chưa đi có thể làm tà bị giữ lại, bệnh nặng thêm.");
  Q("phapdieutri", "Tam nhân chế nghi gồm?", ["Nhân thời, nhân địa, nhân nhân", "Nhân hàn, nhân nhiệt, nhân thấp", "Nhân khí, nhân huyết, nhân tinh", "Nhân biểu, nhân lý, nhân hư"], 0, "Chọn cách chữa theo mùa, nơi ở và người bệnh.");
  Q("phapdieutri", "Phép nào dùng cho bệnh còn ở biểu?", ["Hạ", "Hãn", "Bổ", "Ôn lý"], 1, "Hãn là làm ra mồ hôi để đưa tà khỏi biểu.");
  Q("phapdieutri", "Phép hòa thường dùng cho giai đoạn nào?", ["Thái dương", "Thiếu dương (nửa biểu nửa lý)", "Dương minh phủ chứng", "Thiếu âm hàn hóa"], 1, "Hòa giải dùng khi bệnh không thuần biểu cũng không thuần lý.");
  Q("phapdieutri", "Lý hàn, dương hư thường dùng phép nào?", ["Thanh", "Hạ", "Ôn", "Hãn"], 2, "Ôn là làm ấm, trừ hàn.");
  Q("phapdieutri", "Phép tiêu dùng cho tình huống nào?", ["Hư chứng nặng", "Thức ăn, đờm, khối tích tụ", "Chỉ biểu hàn", "Mất nước"], 1, "Tiêu là làm tiêu tan những thứ tích tụ.");
  Q("phapdieutri", "Chính trị là gì?", ["Chữa ngược tính chất bệnh: nhiệt làm mát, hàn làm ấm", "Chữa theo giả tượng", "Chữa bằng chính trị", "Không chữa gì"], 0, "Chính trị là cách thông thường, đối nghịch với tính chất của bệnh.");
  Q("phapdieutri", "Vì sao không tự áp dụng bát pháp khi đang bệnh?", ["Vì pháp chữa phải do thầy thuốc chọn sau khi thăm khám trực tiếp", "Vì bát pháp không có tác dụng", "Vì chỉ dùng cho người khỏe", "Vì cần mua nhiều thuốc"], 0, "Chọn pháp đúng cần biện chứng đúng; sai pháp có thể gây hại.");

  /* ---------- Sơ đồ tương tác ---------- */
  var W = window.WIDGETS_EXT = window.WIDGETS_EXT || {};

  function checklist(h, items, onchange) {
    var wrap = h.el('div'), chosen = {};
    items.forEach(function (s, i) {
      var cb = h.el('input', { type: 'checkbox' });
      cb.addEventListener('change', function () { chosen[i] = cb.checked; onchange(chosen); });
      wrap.appendChild(h.el('label', { class: 'sym' }, cb, h.el('span', {}, s.t)));
    });
    return { node: wrap, chosen: chosen };
  }
  function bar(h, label, pct, right, color) {
    return h.el('div', { class: 'bar-row' },
      h.el('span', { class: 'lbl', style: 'width:96px' }, label),
      h.el('div', { class: 'bar' }, h.el('i', { style: 'width:' + pct + '%;background:' + (color || '#d9822b') })),
      h.el('span', { class: 'bar-note', style: 'width:44px;text-align:right' }, right)
    );
  }

  /* Bài 9: nhận biết nội tà */
  W.noita = function (h) {
    var box = h.el('div', { class: 'widget' }), result = h.el('div');
    var info = {
      phong: ['Nội phong', 'Biểu hiện giống gió: đột ngột, thay đổi, run, chóng mặt, tê, giật. Liên quan Can (Can dương bốc lên, nhiệt cực hoặc huyết hư).', 'Hướng chung: làm dịu Can, nuôi huyết, tư âm.'],
      han: ['Nội hàn', 'Dương khí hư nên không sinh đủ ấm: sợ lạnh, tay chân lạnh, tiêu chảy phân sống. Liên quan Tỳ, Thận dương.', 'Hướng chung: ôn bổ dương khí.'],
      thap: ['Nội thấp', 'Tỳ hư vận hóa thủy dịch kém nên nước ứ đọng: nặng người, đầy bụng, phân nát, phù, rêu nhờn.', 'Hướng chung: kiện Tỳ, trừ thấp.'],
      tao: ['Nội táo', 'Tân dịch hao tổn nên khô: khô miệng họng, da khô, táo bón, tiểu ít.', 'Hướng chung: dưỡng âm, sinh tân dịch.'],
      hoa: ['Nội hỏa', 'Dương quá thịnh (hỏa thực: sốt, khát, mặt đỏ, bứt rứt) hoặc Âm hư làm Dương vượng (hư hỏa: nóng chiều, mồ hôi trộm).', 'Hướng chung: hỏa thực thì thanh nhiệt; hư hỏa thì tư âm.']
    };
    var syms = [
      { t: 'Chóng mặt, run tay, tê bì, giật cơ', g: ['phong'] },
      { t: 'Sợ lạnh, tay chân lạnh, thích ấm', g: ['han'] },
      { t: 'Tiêu chảy phân sống, tiểu trong dài, lạnh bụng', g: ['han'] },
      { t: 'Người nặng nề, đầy bụng, phân nát, rêu lưỡi nhờn', g: ['thap'] },
      { t: 'Phù nhẹ, tiểu ít, miệng nhạt, ăn kém', g: ['thap'] },
      { t: 'Khô miệng, khô họng, da khô nứt nẻ', g: ['tao'] },
      { t: 'Táo bón, phân khô, nước tiểu ít và vàng', g: ['tao'] },
      { t: 'Nóng, mặt đỏ, khát nước, bứt rứt', g: ['hoa'] },
      { t: 'Mất ngủ, miệng đắng, dễ cáu gắt', g: ['hoa'] },
      { t: 'Nóng âm ỉ về chiều, mồ hôi trộm', g: ['hoa'] },
      { t: 'Chóng mặt, đầu nặng chân nhẹ, mặt đỏ, hay cáu', g: ['phong', 'hoa'] },
      { t: 'Sốt cao kèm co giật', g: ['phong', 'hoa'] }
    ];
    function calc(chosen) {
      var c = {}, any = false;
      syms.forEach(function (s, i) { if (chosen[i]) { any = true; s.g.forEach(function (k) { c[k] = (c[k] || 0) + 1; }); } });
      h.clear(result);
      if (!any) { result.appendChild(h.el('p', { class: 'bar-note' }, 'Chọn ít nhất một triệu chứng để xem kết quả.')); return; }
      var keys = Object.keys(info).sort(function (a, b) { return (c[b] || 0) - (c[a] || 0); });
      var max = c[keys[0]] || 1;
      keys.forEach(function (k) { if (c[k]) result.appendChild(bar(h, info[k][0], Math.round(c[k] * 100 / max), String(c[k]))); });
      var top = keys.filter(function (k) { return c[k] === max; });
      var txt = top.map(function (k) { return '<b>' + info[k][0] + '</b>: ' + info[k][1] + '<br><i>' + info[k][2] + '</i>'; }).join('<br><br>');
      if (top.length > 1) txt = 'Có nhiều hướng ngang nhau, nội tà thường đi kết hợp.<br><br>' + txt;
      result.appendChild(h.el('div', { class: 'explain', html: txt + '<br><br>Bài tập chỉ minh họa cách suy luận, không dùng để tự chẩn đoán hay tự điều trị.' }));
    }
    var cl = checklist(h, syms, calc);
    box.appendChild(cl.node);
    box.appendChild(h.el('h4', { style: 'margin-top:12px' }, 'Kết quả'));
    box.appendChild(result);
    calc(cl.chosen);
    return box;
  };

  /* Bài 10: chứng tạng phủ */
  W.chungtp = function (h) {
    var box = h.el('div', { class: 'widget' }), result = h.el('div');
    var P = {
      canuat: ['Can khí uất kết', 'Can', 'Khí trệ. Hướng chung: sơ Can giải uất (làm khí thông).'],
      canhoa: ['Can hỏa thượng viêm', 'Can', 'Hỏa thực. Hướng chung: thanh Can tả hỏa.'],
      tamam: ['Tâm âm hư', 'Tâm', 'Hư nhiệt. Hướng chung: tư âm, dưỡng Tâm, an thần.'],
      tyhu: ['Tỳ khí hư', 'Tỳ', 'Hư. Hướng chung: kiện Tỳ, ích khí.'],
      tyduong: ['Tỳ dương hư', 'Tỳ', 'Hư hàn. Hướng chung: ôn trung, kiện Tỳ.'],
      phehu: ['Phế khí hư', 'Phế', 'Hư. Hướng chung: bổ khí Phế, cố biểu.'],
      pheam: ['Phế âm hư', 'Phế', 'Hư nhiệt. Hướng chung: dưỡng âm, nhuận Phế.'],
      thanduong: ['Thận dương hư', 'Thận', 'Hư hàn. Hướng chung: ôn bổ Thận dương.'],
      thanam: ['Thận âm hư', 'Thận', 'Hư nhiệt. Hướng chung: tư bổ Thận âm.']
    };
    var syms = [
      { t: 'Tức đau hai bên sườn, hay thở dài', g: ['canuat'] },
      { t: 'Dễ cáu, căng tức ngực, tâm trạng bực bội', g: ['canuat', 'canhoa'] },
      { t: 'Đau đầu, mắt đỏ, miệng đắng', g: ['canhoa'] },
      { t: 'Hồi hộp, mất ngủ, hay quên', g: ['tamam'] },
      { t: 'Nóng âm ỉ về chiều, mồ hôi trộm', g: ['tamam', 'pheam', 'thanam'] },
      { t: 'Lòng bàn tay, bàn chân nóng', g: ['tamam', 'thanam'] },
      { t: 'Mệt mỏi, ăn kém', g: ['tyhu', 'tyduong'] },
      { t: 'Đầy bụng sau ăn, phân nát', g: ['tyhu', 'tyduong'] },
      { t: 'Bụng lạnh, thích chườm ấm, phân lỏng sống', g: ['tyduong', 'thanduong'] },
      { t: 'Ho yếu, thở ngắn, tiếng nói nhỏ', g: ['phehu'] },
      { t: 'Dễ ra mồ hôi, hay bị cảm', g: ['phehu'] },
      { t: 'Ho khan ít đờm, khô họng', g: ['pheam'] },
      { t: 'Lưng gối mỏi', g: ['thanduong', 'thanam'] },
      { t: 'Sợ lạnh, tay chân lạnh', g: ['thanduong', 'tyduong'] },
      { t: 'Tiểu đêm nhiều, nước tiểu trong', g: ['thanduong'] },
      { t: 'Ù tai, họng khô', g: ['thanam'] }
    ];
    var tot = {};
    syms.forEach(function (s) { s.g.forEach(function (k) { tot[k] = (tot[k] || 0) + 1; }); });
    function calc(chosen) {
      var c = {}, any = false;
      syms.forEach(function (s, i) { if (chosen[i]) { any = true; s.g.forEach(function (k) { c[k] = (c[k] || 0) + 1; }); } });
      h.clear(result);
      if (!any) { result.appendChild(h.el('p', { class: 'bar-note' }, 'Chọn ít nhất một triệu chứng để xem kết quả.')); return; }
      var keys = Object.keys(c).sort(function (a, b) { return (c[b] / tot[b]) - (c[a] / tot[a]) || c[b] - c[a]; }).slice(0, 3);
      keys.forEach(function (k) { result.appendChild(bar(h, P[k][0], Math.round(c[k] * 100 / tot[k]), c[k] + '/' + tot[k], '#2a9d6b')); });
      var k0 = keys[0];
      result.appendChild(h.el('div', { class: 'bar-note' }, 'Thanh dài là tỷ lệ dấu hiệu của chứng đó mà bạn đã chọn (số bên phải: đã chọn / tổng số dấu hiệu trong bài).'));
      result.appendChild(h.el('div', { class: 'explain', html: '<b>Gần khớp nhất: ' + P[k0][0] + '</b> (tạng ' + P[k0][1] + ').<br>' + P[k0][2] + '<br><br>Một chứng chỉ được kết luận khi xem đủ lưỡi, mạch và toàn cảnh. Bài tập chỉ minh họa, không dùng để tự chẩn đoán.' }));
    }
    var cl = checklist(h, syms, calc);
    box.appendChild(cl.node);
    box.appendChild(h.el('h4', { style: 'margin-top:12px' }, 'Kết quả'));
    box.appendChild(result);
    calc(cl.chosen);
    return box;
  };

  /* Bài 11: ngoại cảm */
  W.ngoaicam = function (h) {
    var box = h.el('div', { class: 'widget' }), result = h.el('div'), sys = 'lk', chosen = {};
    var ST = {
      lk: {
        thaiduong: ['Thái dương', 'Biểu: tà ở lớp nông. Hướng chung: giải biểu.', 'Nếu không giải được, tà có thể vào sâu sang Dương minh hoặc Thiếu dương.'],
        duongminh: ['Dương minh', 'Lý nhiệt thực. Hướng chung: thanh nhiệt, nếu táo bón bụng chướng thì thông phủ.', 'Nếu kéo dài làm hao âm dịch.'],
        thieuduong: ['Thiếu dương', 'Bán biểu bán lý. Hướng chung: hòa giải.', 'Có thể chuyển vào lý hoặc ra biểu.'],
        thaiam: ['Thái âm', 'Tỳ hư hàn thấp. Hướng chung: ôn trung, kiện Tỳ.', 'Nếu nặng thêm có thể vào Thiếu âm.'],
        thieuam: ['Thiếu âm', 'Tâm Thận suy. Hướng chung: ôn dương hoặc tư âm tùy dạng.', 'Giai đoạn nặng, cần thầy thuốc theo dõi.'],
        quyetam: ['Quyết âm', 'Hàn nhiệt lẫn lộn, giai đoạn cuối. Hướng chung: điều hòa hàn nhiệt.', 'Giai đoạn rất nặng.']
      },
      vk: {
        ve: ['Vệ phận', 'Giai đoạn nông nhất. Hướng chung: tân lương giải biểu.', 'Nếu không giải sẽ vào Khí phận.'],
        khi: ['Khí phận', 'Nhiệt vào khí, sốt cao, khát. Hướng chung: thanh nhiệt.', 'Nếu nhiệt lấn sâu sẽ vào Dinh phận.'],
        dinh: ['Dinh phận', 'Nhiệt vào phần dinh, hao âm. Hướng chung: thanh dinh, dưỡng âm.', 'Nặng, cần được thăm khám kịp thời.'],
        huyet: ['Huyết phận', 'Nhiệt vào huyết, có thể xuất huyết. Hướng chung: lương huyết, cầm máu.', 'CẤP CỨU: đi viện ngay.']
      }
    };
    var syms = [
      { t: 'Sợ lạnh rõ, không ra mồ hôi, đau đầu cứng gáy, mạch phù', lk: 'thaiduong', vk: 've' },
      { t: 'Sốt nhẹ, hơi sợ gió, đau họng, ho, rêu trắng mỏng', lk: 'thaiduong', vk: 've' },
      { t: 'Sốt cao, không sợ lạnh, ra mồ hôi nhiều, khát nhiều', lk: 'duongminh', vk: 'khi' },
      { t: 'Bụng đầy chướng, đau, táo bón nhiều ngày, sốt về chiều', lk: 'duongminh', vk: 'khi' },
      { t: 'Lúc rét lúc nóng xen kẽ, tức đầy ngực sườn, miệng đắng, họng khô', lk: 'thieuduong', vk: null },
      { t: 'Đầy bụng, nôn, tiêu chảy, không khát, bụng đau thích ấm', lk: 'thaiam', vk: null },
      { t: 'Mệt lả, hay ngủ gà, chân tay lạnh, tiêu chảy phân sống, mạch rất yếu', lk: 'thieuam', vk: null },
      { t: 'Sốt nặng về đêm, bứt rứt, mất ngủ, lưỡi đỏ thẫm ít rêu', lk: null, vk: 'dinh' },
      { t: 'Sốt cao, mê sảng, ban đỏ sẫm, chảy máu cam hoặc xuất huyết dưới da', lk: null, vk: 'huyet' },
      { t: 'Tay chân lạnh buốt, khát, đói nhưng không muốn ăn, khí xông lên ngực', lk: 'quyetam', vk: null }
    ];
    var seg = h.el('div', { class: 'seg' });
    var b1 = h.el('button', { type: 'button', class: 'on' }, 'Lục kinh'), b2 = h.el('button', { type: 'button' }, 'Vệ khí dinh huyết');
    seg.appendChild(b1); seg.appendChild(b2);
    function setSys(s) { sys = s; b1.className = s === 'lk' ? 'on' : ''; b2.className = s === 'vk' ? 'on' : ''; calc(); }
    b1.addEventListener('click', function () { setSys('lk'); });
    b2.addEventListener('click', function () { setSys('vk'); });
    function calc() {
      var c = {}, any = false, unmapped = 0;
      syms.forEach(function (s, i) { if (chosen[i]) { any = true; var k = s[sys]; if (k) c[k] = (c[k] || 0) + 1; else unmapped++; } });
      h.clear(result);
      if (!any) { result.appendChild(h.el('p', { class: 'bar-note' }, 'Chọn ít nhất một dấu hiệu để xem kết quả.')); return; }
      var keys = Object.keys(c).sort(function (a, b) { return c[b] - c[a]; });
      if (!keys.length) { result.appendChild(h.el('div', { class: 'explain', html: 'Các dấu hiệu bạn chọn không đặc trưng cho hệ thống này. Hãy thử chuyển sang hệ thống còn lại.' })); return; }
      var max = c[keys[0]];
      keys.forEach(function (k) { result.appendChild(bar(h, ST[sys][k][0], Math.round(c[k] * 100 / max), String(c[k]), '#8a5cc4')); });
      var k0 = keys[0];
      var warn = (sys === 'vk' && (k0 === 'huyet' || k0 === 'dinh')) || (sys === 'lk' && (k0 === 'thieuam' || k0 === 'quyetam'));
      result.appendChild(h.el('div', { class: 'explain', html: '<b>Gần khớp nhất: ' + ST[sys][k0][0] + '</b><br>' + ST[sys][k0][1] + '<br><i>' + ST[sys][k0][2] + '</i>' +
        (unmapped ? '<br><br>Có ' + unmapped + ' dấu hiệu bạn chọn không thuộc hệ thống này.' : '') +
        (warn ? '<br><br><b>Giai đoạn nặng: cần đến cơ sở y tế, không tự xử lý.</b>' : '') +
        '<br><br>Bài tập chỉ minh họa cách tư duy, không dùng để tự chẩn đoán.' }));
    }
    var wrap = h.el('div');
    syms.forEach(function (s, i) {
      var cb = h.el('input', { type: 'checkbox' });
      cb.addEventListener('change', function () { chosen[i] = cb.checked; calc(); });
      wrap.appendChild(h.el('label', { class: 'sym' }, cb, h.el('span', {}, s.t)));
    });
    box.appendChild(h.el('h4', {}, 'Chọn hệ thống'));
    box.appendChild(seg);
    box.appendChild(wrap);
    box.appendChild(h.el('h4', { style: 'margin-top:12px' }, 'Kết quả'));
    box.appendChild(result);
    calc();
    return box;
  };

  /* Bài 12: từ Bát cương đến pháp */
  W.phapdt = function (h) {
    var box = h.el('div', { class: 'widget' }), st = { vt: 'bieu', tc: 'han', hs: 'thuc' };
    var result = h.el('div');
    var T = {
      'bieu-han-thuc': ['Hãn: tân ôn giải biểu', 'Tà hàn mạnh ở bề mặt, chính khí còn đủ.', 'Sợ lạnh rõ, không mồ hôi, đau đầu, mạch phù khẩn.', 'Không dùng khi đã ra nhiều mồ hôi hay mất nước.'],
      'bieu-nhiet-thuc': ['Hãn: tân lương giải biểu', 'Tà nhiệt ở lớp nông, chính khí còn đủ.', 'Sốt, hơi sợ gió, đau họng, ho, mạch phù nhanh.', 'Không dùng cay nóng vì sẽ làm nhiệt thêm.'],
      'bieu-han-hu': ['Hãn kèm phù chính (giải biểu kèm bổ khí hoặc ôn dương)', 'Tà ở biểu nhưng chính khí yếu.', 'Hay bị cảm, sợ lạnh, ra mồ hôi, người mệt.', 'Chỉ giải biểu đơn thuần dễ làm hao thêm chính khí.'],
      'bieu-nhiet-hu': ['Hãn kèm tư âm (giải biểu kèm nuôi âm)', 'Tà nhiệt ở biểu nhưng Âm đã hư.', 'Sốt nhẹ, khô họng, người gầy, mồ hôi ít.', 'Không phát hãn mạnh vì dễ hao âm.'],
      'ly-han-thuc': ['Ôn: ôn lý tán hàn', 'Hàn mạnh ở bên trong.', 'Đau bụng co thắt do lạnh, thích ấm, tay chân lạnh, tiêu chảy phân sống.', 'Không dùng khi có nhiệt hoặc âm hư.'],
      'ly-nhiet-thuc': ['Thanh hoặc hạ', 'Nhiệt thực ở bên trong. Nếu có táo bón, bụng chướng thì xem xét hạ; không táo bón thì thanh nhiệt.', 'Sốt cao, khát, mặt đỏ, nước tiểu vàng, rêu vàng, mạch có lực.', 'Hạ không dùng cho người yếu hoặc phụ nữ có thai (trừ khi thầy thuốc cân nhắc).'],
      'ly-han-hu': ['Ôn bổ dương khí (ôn kết hợp bổ)', 'Dương khí hư, sinh nội hàn.', 'Sợ lạnh, tay chân lạnh, mệt, phân nát, lưỡi nhợt.', 'Cần xem Tỳ hay Thận là chủ yếu.'],
      'ly-nhiet-hu': ['Tư âm thanh nhiệt (bổ âm, làm mát)', 'Âm hư sinh hư nhiệt.', 'Nóng âm ỉ về chiều, mồ hôi trộm, lòng bàn tay chân nóng, lưỡi đỏ ít rêu.', 'Tránh thuốc quá cay nóng làm hao âm.']
    };
    function seg(key, a, b) {
      var wrap = h.el('div', { class: 'seg' });
      var A = h.el('button', { type: 'button', class: 'on' }, a[1]), B = h.el('button', { type: 'button' }, b[1]);
      function sync() { A.className = st[key] === a[0] ? 'on' : ''; B.className = st[key] === b[0] ? 'on' : ''; }
      A.addEventListener('click', function () { st[key] = a[0]; sync(); calc(); });
      B.addEventListener('click', function () { st[key] = b[0]; sync(); calc(); });
      wrap.appendChild(A); wrap.appendChild(B);
      return wrap;
    }
    function calc() {
      var r = T[st.vt + '-' + st.tc + '-' + st.hs];
      h.clear(result);
      result.appendChild(h.el('div', { class: 'res-card' },
        h.el('h5', {}, 'Hướng chữa: ' + r[0]),
        h.el('div', { class: 'row', html: '<b>Ý nghĩa:</b> ' + r[1] }),
        h.el('div', { class: 'row', html: '<b>Biểu hiện thường gặp:</b> ' + r[2] }),
        h.el('div', { class: 'row', html: '<b>Lưu ý:</b> ' + r[3] })
      ));
      result.appendChild(h.el('p', { class: 'bar-note' }, 'Đây là hướng lý luận chung, không phải chỉ định điều trị. Việc chọn phương thuốc, liều dùng phải do thầy thuốc quyết định.'));
    }
    box.appendChild(h.el('h4', {}, 'Chọn tính chất bệnh theo Bát cương'));
    box.appendChild(h.el('div', { class: 'bar-note' }, 'Vị trí'));
    box.appendChild(seg('vt', ['bieu', 'Biểu'], ['ly', 'Lý']));
    box.appendChild(h.el('div', { class: 'bar-note' }, 'Hàn hay nhiệt'));
    box.appendChild(seg('tc', ['han', 'Hàn'], ['nhiet', 'Nhiệt']));
    box.appendChild(h.el('div', { class: 'bar-note' }, 'Hư hay thực'));
    box.appendChild(seg('hs', ['thuc', 'Thực'], ['hu', 'Hư']));
    box.appendChild(result);
    calc();
    return box;
  };
})();
