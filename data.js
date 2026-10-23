/* Dữ liệu bài học – Lý luận Y học cổ truyền cơ bản */
window.DATA = {
  topics: [
    { id: "amduong", name: "Âm dương" },
    { id: "nguhanh", name: "Ngũ hành" },
    { id: "tangphu", name: "Tạng phủ" },
    { id: "khihuyet", name: "Tinh khí thần, khí huyết" },
    { id: "kinhlac", name: "Kinh lạc" },
    { id: "nguyennhan", name: "Nguyên nhân bệnh" },
    { id: "tuchan", name: "Tứ chẩn" },
    { id: "batcuong", name: "Bát cương" }
  ],

  /* ---------- Trạng thái Âm dương (dùng cho sơ đồ tương tác) ---------- */
  yinyangStates: [
    {
      id: "binh", name: "Cân bằng", D: 50, A: 50, tag: "Khỏe mạnh",
      giaithich: "Dương và Âm ngang nhau, chế ước và nuôi dưỡng lẫn nhau. Người ấm vừa phải, ăn ngủ tốt, tinh thần tỉnh táo.",
      bieuhien: ["Ăn ngủ tốt, đại tiểu tiện bình thường", "Tay chân ấm vừa phải, không quá nóng hay lạnh", "Tinh thần tỉnh táo, sắc mặt tươi nhuận"],
      huong: "Giữ gìn: ăn uống điều độ, ngủ nghỉ đúng giờ, vận động vừa sức."
    },
    {
      id: "duongthinh", name: "Dương thịnh", D: 90, A: 50, tag: "Thực nhiệt",
      giaithich: "Dương (mặt nóng, động) tăng quá mức trong khi Âm chưa suy. Giống như bếp lửa cháy quá to: nóng nhiều. Chữ “thịnh” nghĩa là quá mạnh; chữ “thực” nghĩa là tà khí (yếu tố gây bệnh) mạnh.",
      bieuhien: ["Sốt, sợ nóng, mặt đỏ", "Khát nhiều, thích uống nước mát", "Nước tiểu vàng sẫm, táo bón", "Bứt rứt, rêu lưỡi vàng, mạch nhanh có lực"],
      huong: "Nguyên tắc điều chỉnh: thanh nhiệt (làm mát, giải nhiệt)."
    },
    {
      id: "amthinh", name: "Âm thịnh", D: 50, A: 90, tag: "Thực hàn",
      giaithich: "Âm (mặt lạnh, tĩnh) tăng quá mức, hàn tà (khí lạnh gây bệnh) mạnh. Giống như gió lạnh tràn vào nhà: lạnh nhiều dù bên trong vẫn còn sức.",
      bieuhien: ["Sợ lạnh, tay chân lạnh, thích ấm", "Đau bụng co thắt do lạnh, đỡ khi chườm ấm", "Phân lỏng, nước tiểu trong", "Rêu lưỡi trắng, mạch chậm có lực"],
      huong: "Nguyên tắc điều chỉnh: tán hàn, ôn trung (xua lạnh, làm ấm)."
    },
    {
      id: "duonghu", name: "Dương hư", D: 25, A: 50, tag: "Hư hàn",
      giaithich: "Dương không đủ nên cơ thể thiếu “lửa” để sưởi ấm và vận hành. Chữ “hư” nghĩa là thiếu, yếu (chính khí không đủ). Lạnh ở đây do thiếu nóng, khác với Âm thịnh là do lạnh dư.",
      bieuhien: ["Sợ lạnh, tay chân lạnh, người mệt, thích nằm", "Nước tiểu trong và nhiều, phân nát", "Lưỡi nhợt, bệu, mạch yếu và chậm"],
      huong: "Nguyên tắc điều chỉnh: bổ dương, ôn ấm (bồi bổ phần dương còn thiếu)."
    },
    {
      id: "amhu", name: "Âm hư", D: 50, A: 25, tag: "Hư nhiệt",
      giaithich: "Âm (chất dịch nuôi dưỡng, làm mát) thiếu nên Dương tương đối “bốc lên”. Giống như nồi nước cạn, lửa nhỏ vẫn làm nóng. Gọi là “nhiệt giả”, vì nóng do thiếu nước chứ không phải do lửa quá to.",
      bieuhien: ["Nóng âm ỉ về chiều tối, lòng bàn tay bàn chân nóng", "Mồ hôi trộm (ra mồ hôi khi ngủ, tỉnh dậy hết)", "Khô miệng họng, gầy, lưỡi đỏ ít rêu, mạch nhỏ và nhanh"],
      huong: "Nguyên tắc điều chỉnh: tư âm (nuôi dưỡng, bổ sung phần âm)."
    }
  ],

  /* ---------- Ngũ hành ---------- */
  nguhanh: [
    { ten: "Mộc", mau: "#3f9b5a", ky: "Cây", tinhchat: "Sinh trưởng, vươn lên, mềm dẻo, điều đạt",
      mua: "Xuân", phuong: "Đông", sac: "Xanh", vi: "Chua", khihau: "Phong (gió)", tang: "Can", phu: "Đởm", khieu: "Mắt", the: "Gân", chi: "Giận (nộ)", dich: "Nước mắt" },
    { ten: "Hỏa", mau: "#d9482b", ky: "Lửa", tinhchat: "Nóng, bốc lên, sáng",
      mua: "Hạ", phuong: "Nam", sac: "Đỏ", vi: "Đắng", khihau: "Thử (nắng nóng)", tang: "Tâm", phu: "Tiểu trường", khieu: "Lưỡi", the: "Mạch (huyết mạch)", chi: "Vui (hỷ)", dich: "Mồ hôi" },
    { ten: "Thổ", mau: "#c99a2e", ky: "Đất", tinhchat: "Nuôi dưỡng, sinh hóa, chứa đựng",
      mua: "Cuối hạ (trưởng hạ)", phuong: "Trung ương (giữa)", sac: "Vàng", vi: "Ngọt", khihau: "Thấp (ẩm)", tang: "Tỳ", phu: "Vị", khieu: "Miệng", the: "Cơ nhục (thịt)", chi: "Lo nghĩ (tư)", dich: "Nước dãi loãng" },
    { ten: "Kim", mau: "#8793a0", ky: "Kim loại", tinhchat: "Thu liễm, thanh lọc, đi xuống",
      mua: "Thu", phuong: "Tây", sac: "Trắng", vi: "Cay", khihau: "Táo (khô)", tang: "Phế", phu: "Đại trường", khieu: "Mũi", the: "Da lông", chi: "Buồn (bi)", dich: "Nước mũi" },
    { ten: "Thủy", mau: "#2f6db5", ky: "Nước", tinhchat: "Lạnh, tưới nhuần, đi xuống, chứa giữ",
      mua: "Đông", phuong: "Bắc", sac: "Đen", vi: "Mặn", khihau: "Hàn (lạnh)", tang: "Thận", phu: "Bàng quang", khieu: "Tai", the: "Xương", chi: "Sợ (khủng)", dich: "Nước bọt đặc" }
  ],

  /* ---------- Tạng phủ ---------- */
  tangphu: [
    {
      id: "tamtt", tang: "Tâm", phu: "Tiểu trường", hanh: "Hỏa",
      tangCT: ["Chủ huyết mạch: đẩy huyết đi khắp cơ thể qua hệ mạch.", "Tàng thần: giữ gìn hoạt động ý thức, tinh thần, giấc ngủ, trí nhớ."],
      phuCT: ["Tiếp nhận thức ăn đã được Vị tiêu hóa sơ bộ.", "Phân thanh trọc: tách phần tinh chất (thanh) đưa đi nuôi cơ thể và phần cặn bã (trọc) đưa xuống Đại trường, Bàng quang."],
      khieu: "Khai khiếu ra Lưỡi (lưỡi phản ánh tình trạng của Tâm); vinh nhuận ra sắc mặt.",
      benh: ["Hồi hộp, đánh trống ngực", "Mất ngủ, hay quên, hay mơ", "Lưỡi loét, đỏ; mặt nhợt hoặc đỏ bất thường"]
    },
    {
      id: "phedt", tang: "Phế", phu: "Đại trường", hanh: "Kim",
      tangCT: ["Chủ khí, chủ hô hấp: hít khí trong, thở khí đục ra.", "Tuyên phát và túc giáng: đưa khí, tân dịch ra da lông (tuyên phát) và đưa xuống dưới (túc giáng).", "Thông điều thủy đạo: giúp điều hòa đường đi của nước.", "Chủ bì mao: bảo vệ da lông, tạo hàng rào chống tà khí bên ngoài."],
      phuCT: ["Tiếp nhận cặn bã từ Tiểu trường.", "Hấp thu lại phần nước, tạo thành phân và thải ra ngoài (truyền tống)."],
      khieu: "Khai khiếu ra Mũi.",
      benh: ["Ho, khó thở, tức ngực", "Dễ cảm mạo, tự ra mồ hôi, sổ mũi", "Táo bón hoặc tiêu chảy kèm triệu chứng hô hấp"]
    },
    {
      id: "tyvi", tang: "Tỳ", phu: "Vị", hanh: "Thổ",
      tangCT: ["Chủ vận hóa: tiêu hóa, hấp thu thức ăn, biến thành khí huyết và vận chuyển nước.", "Thống huyết: giữ huyết chạy trong mạch, không để thoát ra ngoài.", "Chủ cơ nhục và tứ chi: nuôi dưỡng cơ bắp và tay chân."],
      phuCT: ["Tiếp nhận thức ăn, nghiền nhuyễn và “nấu chín” sơ bộ (hủ thục).", "Giáng xuống: đẩy thức ăn đã sơ chế xuống Tiểu trường."],
      khieu: "Khai khiếu ra Miệng; vinh nhuận ra môi.",
      benh: ["Ăn kém, đầy bụng, phân nát", "Mệt mỏi, tay chân nặng, cơ nhẽo", "Dễ chảy máu, bầm tím (Tỳ không thống huyết)"]
    },
    {
      id: "candot", tang: "Can", phu: "Đởm", hanh: "Mộc",
      tangCT: ["Tàng huyết: dự trữ huyết, điều tiết lượng huyết khi vận động hay nghỉ ngơi.", "Chủ sơ tiết: giúp khí lưu thông thông suốt, giữ tâm trạng thoải mái và hỗ trợ tiêu hóa.", "Chủ gân: nuôi dưỡng gân, khớp cử động mềm dẻo."],
      phuCT: ["Chứa và bài tiết mật, giúp tiêu hóa chất béo.", "Chủ quyết đoán: liên quan đến sự dứt khoát, dũng khí."],
      khieu: "Khai khiếu ra Mắt; vinh nhuận ra móng tay chân.",
      benh: ["Hay cáu gắt, tức ngực sườn, thở dài", "Hoa mắt, mắt khô, móng giòn", "Chuột rút, co giật gân"]
    },
    {
      id: "thanbq", tang: "Thận", phu: "Bàng quang", hanh: "Thủy",
      tangCT: ["Tàng tinh: chứa tinh, là nền tảng của sinh trưởng, phát dục, sinh sản và già yếu.", "Chủ thủy: điều hòa chuyển hóa nước trong cơ thể.", "Chủ nạp khí: giữ khí hít vào xuống sâu cho hơi thở đầy đặn.", "Chủ xương, sinh tủy, thông não."],
      phuCT: ["Chứa nước tiểu.", "Khí hóa để bài tiết nước tiểu ra ngoài đúng lúc."],
      khieu: "Khai khiếu ra Tai và hai âm (cơ quan sinh dục, hậu môn); vinh nhuận ra tóc.",
      benh: ["Đau mỏi lưng gối", "Tiểu đêm nhiều, tiểu không kiểm soát", "Ù tai, giảm thính lực, tóc rụng bạc sớm"]
    },
    {
      id: "tambaotam", tang: "Tâm bào", phu: "Tam tiêu", hanh: "Hỏa (tướng hỏa)",
      tangCT: ["Là lớp “màng bao quanh Tâm”, thay Tâm đỡ tà khí.", "Giúp bảo vệ Tâm và hỗ trợ điều hòa tinh thần."],
      phuCT: ["Là “đường dẫn” khí và nước toàn cơ thể, chia làm ba phần:", "Thượng tiêu (ngực): chứa Tâm, Phế, hướng thăng và tuyên phát khí.", "Trung tiêu (bụng trên): chứa Tỳ, Vị, lo tiêu hóa.", "Hạ tiêu (bụng dưới): chứa Can, Thận, Bàng quang, ruột, lo bài tiết."],
      khieu: "Không có khiếu riêng; hoạt động gắn với Tâm và các tạng phủ khác.",
      benh: ["Tâm bào: tinh thần mê man, nói sảng khi sốt cao", "Tam tiêu: phù nề, tiểu ít, đầy bụng do khí và nước không thông"]
    }
  ],

  /* ---------- 12 kinh chính ---------- */
  kinh12: [
    { stt: 1, ten: "Thủ thái âm Phế kinh", loai: "am", chi: "thu", tp: "Phế", duong: "Từ ngực, chạy dọc mặt trước (phía trong) cánh tay, đến đầu ngón cái.", gio: "3–5 giờ", huyet: "Thái uyên (LU9)" },
    { stt: 2, ten: "Thủ dương minh Đại trường kinh", loai: "duong", chi: "thu", tp: "Đại trường", duong: "Từ ngón trỏ, chạy dọc mặt trước ngoài cánh tay lên vai, cổ, mặt, kết thúc bên cạnh mũi.", gio: "5–7 giờ", huyet: "Hợp cốc (LI4)" },
    { stt: 3, ten: "Túc dương minh Vị kinh", loai: "duong", chi: "tuc", tp: "Vị", duong: "Từ dưới mắt, xuống mặt, cổ, ngực, bụng, chạy mặt trước đùi cẳng chân, đến ngón chân thứ hai.", gio: "7–9 giờ", huyet: "Túc tam lý (ST36)" },
    { stt: 4, ten: "Túc thái âm Tỳ kinh", loai: "am", chi: "tuc", tp: "Tỳ", duong: "Từ ngón chân cái, chạy mặt trong chân lên bụng, ngực, kết thúc ở sườn.", gio: "9–11 giờ", huyet: "Tam âm giao (SP6)" },
    { stt: 5, ten: "Thủ thiếu âm Tâm kinh", loai: "am", chi: "thu", tp: "Tâm", duong: "Từ nách, chạy dọc mặt trong cánh tay phía ngón út, đến đầu ngón út.", gio: "11–13 giờ", huyet: "Thần môn (HT7)" },
    { stt: 6, ten: "Thủ thái dương Tiểu trường kinh", loai: "duong", chi: "thu", tp: "Tiểu trường", duong: "Từ ngón út, chạy mặt sau ngoài cánh tay lên vai, cổ, mặt, đến trước tai.", gio: "13–15 giờ", huyet: "Hậu khê (SI3)" },
    { stt: 7, ten: "Túc thái dương Bàng quang kinh", loai: "duong", chi: "tuc", tp: "Bàng quang", duong: "Từ khóe mắt trong, lên đỉnh đầu, xuống dọc hai bên cột sống, mặt sau chân, đến ngón chân út.", gio: "15–17 giờ", huyet: "Ủy trung (BL40)" },
    { stt: 8, ten: "Túc thiếu âm Thận kinh", loai: "am", chi: "tuc", tp: "Thận", duong: "Từ lòng bàn chân, chạy mặt trong chân lên bụng, kết thúc ở ngực gần xương đòn.", gio: "17–19 giờ", huyet: "Dũng tuyền (KI1)" },
    { stt: 9, ten: "Thủ quyết âm Tâm bào kinh", loai: "am", chi: "thu", tp: "Tâm bào", duong: "Từ ngực, chạy giữa mặt trong cánh tay, đến đầu ngón giữa.", gio: "19–21 giờ", huyet: "Nội quan (PC6)" },
    { stt: 10, ten: "Thủ thiếu dương Tam tiêu kinh", loai: "duong", chi: "thu", tp: "Tam tiêu", duong: "Từ ngón áp út, chạy mặt sau giữa cánh tay lên vai, cổ, vòng sau tai, đến đuôi mắt.", gio: "21–23 giờ", huyet: "Ngoại quan (TE5)" },
    { stt: 11, ten: "Túc thiếu dương Đởm kinh", loai: "duong", chi: "tuc", tp: "Đởm", duong: "Từ đuôi mắt, vòng quanh đầu, xuống cổ, sườn, mặt ngoài chân, đến ngón chân thứ tư.", gio: "23–1 giờ", huyet: "Phong trì (GB20)" },
    { stt: 12, ten: "Túc quyết âm Can kinh", loai: "am", chi: "tuc", tp: "Can", duong: "Từ ngón chân cái, chạy mặt trong chân lên bụng dưới, kết thúc ở sườn.", gio: "1–3 giờ", huyet: "Thái xung (LR3)" }
  ],

  /* ---------- Triệu chứng cho bài tập Bát cương ---------- */
  symptoms: [
    { t: "Mới bị vài ngày, sợ gió, sợ lạnh kèm sốt nhẹ", tags: ["bieu"] },
    { t: "Đau mỏi người, nghẹt mũi, hắt hơi", tags: ["bieu"] },
    { t: "Bệnh kéo dài, ảnh hưởng sâu đến ăn uống, tiêu hóa", tags: ["ly"] },
    { t: "Đầy bụng, chán ăn, buồn nôn", tags: ["ly"] },
    { t: "Sợ lạnh, thích ấm, tay chân lạnh", tags: ["han"] },
    { t: "Không khát hoặc thích uống nước nóng", tags: ["han"] },
    { t: "Phân lỏng, nước tiểu trong và dài", tags: ["han"] },
    { t: "Sốt cao, sợ nóng, mặt đỏ", tags: ["nhiet"] },
    { t: "Khát nhiều, thích uống nước mát", tags: ["nhiet"] },
    { t: "Nước tiểu vàng sẫm, táo bón", tags: ["nhiet"] },
    { t: "Mệt mỏi, nói nhỏ, hơi thở ngắn", tags: ["hu"] },
    { t: "Đau âm ỉ, thích xoa bóp, ấn vào thấy dễ chịu", tags: ["hu"] },
    { t: "Đau dữ dội, ấn vào đau thêm", tags: ["thuc"] },
    { t: "Bụng chướng đầy, tiếng nói to, người khỏe nhưng bệnh cấp", tags: ["thuc"] },
    { t: "Nóng bứt rứt về chiều, mồ hôi trộm, lòng bàn tay chân nóng", tags: ["hu", "nhiet"] }
  ],

  /* ---------- Bài học ---------- */
  lessons: [
    /* ===== 1. ÂM DƯƠNG ===== */
    {
      id: "amduong", icon: "☯️", title: "Âm dương", sub: "Hai mặt đối lập của mọi sự vật", minutes: 8,
      blocks: [
        { t: "p", x: "<b>Âm dương</b> là cách người xưa chia mọi sự vật, hiện tượng thành hai mặt đối lập nhưng gắn bó với nhau: ngày – đêm, nóng – lạnh, trên – dưới. Y học cổ truyền (YHCT) dùng cách chia này để mô tả cơ thể, bệnh tật và cả thuốc men." },
        { t: "note", x: "<b>Dương</b>: mặt sáng, nóng, động, đi lên, đi ra ngoài. <b>Âm</b>: mặt tối, lạnh, tĩnh, đi xuống, đi vào trong. Âm dương <b>không phải tốt hay xấu</b>, chỉ là hai mặt của một thể thống nhất. Một vật có thể là Dương khi so với vật này và là Âm khi so với vật khác (tính tương đối)." },
        { t: "fig", id: "taiji", cap: "Hình thái cực: nửa sáng là Dương, nửa tối là Âm. Chấm đậm trong vùng sáng nghĩa là trong Dương có mầm Âm; chấm sáng trong vùng tối nghĩa là trong Âm có mầm Dương." },
        { t: "h", x: "Bảng phân loại thường gặp" },
        { t: "table", head: ["Tiêu chí", "Dương", "Âm"], rows: [
          ["Thời gian", "Ban ngày", "Ban đêm"],
          ["Nhiệt độ", "Nóng, ấm", "Lạnh, mát"],
          ["Trạng thái", "Động, hưng phấn", "Tĩnh, ức chế"],
          ["Vị trí", "Trên, ngoài, lưng", "Dưới, trong, bụng"],
          ["Cơ thể", "Phủ (cơ quan rỗng), khí (chức năng vô hình)", "Tạng (cơ quan đặc), huyết và tân dịch (chất hữu hình)"],
          ["Tính chất bệnh", "Nhiệt, thực, biểu", "Hàn, hư, lý"],
          ["Thuốc, thức ăn", "Tính nóng, ấm; vị cay, ngọt", "Tính mát, lạnh; vị chua, đắng, mặn"]
        ] },
        { t: "h", x: "Bốn quy luật cơ bản" },
        { t: "ul", x: [
          "<b>Đối lập</b>: hai mặt chế ước lẫn nhau. Ví dụ: nóng làm bớt lạnh, lạnh làm bớt nóng.",
          "<b>Hỗ căn</b> (nương tựa vào nhau): không có Âm thì không có Dương và ngược lại. Ví dụ: không có ngày thì không có đêm.",
          "<b>Tiêu trưởng</b> (giảm – tăng): khi một bên tăng thì bên kia giảm. Ví dụ: từ sáng đến trưa, Dương tăng, trời nóng dần; từ chiều xuống đêm, Dương giảm, Âm tăng, trời mát dần.",
          "<b>Chuyển hóa</b>: khi đến cực điểm, một bên có thể chuyển thành bên kia. Ví dụ: “hàn cực sinh nhiệt, nhiệt cực sinh hàn”. Người sốt cao kéo dài có thể kiệt sức, tay chân lạnh toát."
        ] },
        { t: "fig", id: "daycycle", cap: "Ví dụ quy luật tiêu trưởng trong một ngày: từ nửa đêm đến trưa Dương tăng, Âm giảm; từ trưa về nửa đêm thì ngược lại." },
        { t: "h", x: "Thử xem các trạng thái mất cân bằng" },
        { t: "p", x: "Bấm vào từng trạng thái bên dưới để xem Dương và Âm thay đổi ra sao, cùng biểu hiện thường gặp." },
        { t: "widget", id: "yinyang" }
      ],
      key: [
        "Âm dương là hai mặt đối lập, nương tựa, tăng giảm và chuyển hóa cho nhau.",
        "Bệnh là sự mất cân bằng Âm dương; chữa bệnh là đưa về cân bằng.",
        "Thịnh = quá mạnh (thừa). Hư = thiếu yếu. Thực = tà khí mạnh."
      ]
    },

    /* ===== 2. NGŨ HÀNH ===== */
    {
      id: "nguhanh", icon: "🌳", title: "Ngũ hành", sub: "Năm kiểu vận động và mối quan hệ sinh khắc", minutes: 10,
      blocks: [
        { t: "p", x: "<b>Ngũ hành</b> (năm hành) gồm <b>Mộc</b> (cây), <b>Hỏa</b> (lửa), <b>Thổ</b> (đất), <b>Kim</b> (kim loại), <b>Thủy</b> (nước). Đây không chỉ là năm chất liệu mà là <b>năm kiểu vận động, năm tính chất</b>. Người xưa dùng chúng để xếp các sự vật có tính chất tương tự vào cùng một nhóm (gọi là quy loại)." },
        { t: "note", x: "Ví dụ quy loại: mùa Xuân cây cối nảy mầm, vươn lên nên thuộc Mộc. Trong cơ thể, Can (gan) có tính điều đạt, thoải mái, vươn lên nên cũng thuộc Mộc. Vì vậy Xuân hay gắn với Can." },
        { t: "h", x: "Bảng quy loại" },
        { t: "widget", id: "nguhanhtable" },
        { t: "h", x: "Quan hệ Tương sinh – Tương khắc" },
        { t: "ul", x: [
          "<b>Tương sinh</b> (sinh ra, nuôi dưỡng): Mộc → Hỏa → Thổ → Kim → Thủy → Mộc. Hành sinh ra hành khác gọi là “mẹ”, hành được sinh ra gọi là “con”. Ví dụ: Mộc sinh Hỏa (củi cháy thành lửa), nên Mộc là mẹ của Hỏa.",
          "<b>Tương khắc</b> (chế ngự, kiềm chế): Mộc → Thổ → Thủy → Hỏa → Kim → Mộc. Ví dụ: Thủy khắc Hỏa (nước dập lửa). Khắc ở mức vừa phải là bình thường, giúp giữ cân bằng."
        ] },
        { t: "fig", id: "nhsinh", cap: "Tương sinh qua hiện tượng đời thường. Mũi tên chỉ chiều “sinh ra”." },
        { t: "fig", id: "nhkhac", cap: "Tương khắc qua hiện tượng đời thường. Mũi tên nét đứt chỉ chiều “khắc” (kiềm chế)." },
        { t: "p", x: "Bấm vào từng hành trên sơ đồ để xem nó sinh ai, được ai sinh, khắc ai, bị ai khắc, kèm các thuộc tính của hành đó." },
        { t: "widget", id: "nguhanh" },
        { t: "h", x: "Khi sinh khắc mất cân bằng" },
        { t: "table", head: ["Thuật ngữ", "Nghĩa", "Ví dụ"], rows: [
          ["Tương thừa", "“Thừa” là nhân lúc yếu mà lấn át. Hành khắc quá mạnh, hoặc hành bị khắc quá yếu.", "Mộc thừa Thổ: Can (Mộc) vượng, lấn Tỳ (Thổ). Biểu hiện cáu gắt, tức sườn kèm đầy bụng, ăn kém, phân nát."],
          ["Tương vũ", "“Vũ” là khinh nhờn. Hành bị khắc quá mạnh nên khắc ngược lại hành khắc nó.", "Mộc vũ Kim: Can hỏa quá vượng, ngược lại làm tổn Phế (Kim): ho khan, ho từng cơn, đau tức sườn."],
          ["Mẫu bệnh cập tử", "Mẹ bệnh ảnh hưởng tới con.", "Thận (Thủy) hư không nuôi được Can (Mộc): chóng mặt, mắt khô, mỏi lưng."],
          ["Tử bệnh phạm mẫu", "Con bệnh ảnh hưởng ngược lại mẹ.", "Tâm (Hỏa) vượng lâu ngày làm hao Can (Mộc): bứt rứt, mất ngủ, hoa mắt."]
        ] }
      ],
      key: [
        "Ngũ hành là 5 kiểu vận động, dùng để phân loại tạng phủ, mùa, vị, màu…",
        "Tương sinh: Mộc → Hỏa → Thổ → Kim → Thủy → Mộc.",
        "Tương khắc: Mộc → Thổ → Thủy → Hỏa → Kim → Mộc.",
        "Tương thừa, tương vũ là khi sinh khắc quá mức, gây bệnh."
      ]
    },

    /* ===== 3. TẠNG PHỦ ===== */
    {
      id: "tangphu", icon: "🫀", title: "Tạng phủ", sub: "Ngũ tạng, lục phủ và quan hệ biểu lý", minutes: 12,
      blocks: [
        { t: "p", x: "YHCT chia nội tạng thành <b>năm tạng</b> (Tâm, Can, Tỳ, Phế, Thận) và <b>sáu phủ</b> (Đởm, Vị, Tiểu trường, Đại trường, Bàng quang, Tam tiêu). Học thuyết này gọi là <b>tạng tượng</b> (xem “tượng” bên ngoài để suy ra hoạt động của tạng bên trong)." },
        { t: "note", x: "<b>Tạng</b>: cơ quan “đặc”, thuộc Âm, có nhiệm vụ <b>tàng</b> (chứa giữ) tinh khí, không để thất thoát. <b>Phủ</b>: cơ quan “rỗng”, thuộc Dương, có nhiệm vụ <b>truyền hóa</b> (tiếp nhận, tiêu hóa, chuyển đi, bài tiết) nên cần thông suốt. Lưu ý: “Tỳ”, “Can”, “Thận”… trong YHCT là cả một hệ chức năng, không hoàn toàn trùng với cơ quan cùng tên trong y học hiện đại." },
        { t: "fig", id: "body", cap: "Vị trí các tạng phủ trên cơ thể (hình minh họa đơn giản). Ba vùng màu là Tam tiêu: thượng tiêu (ngực), trung tiêu (bụng trên), hạ tiêu (bụng dưới). Màu mỗi tạng gợi ý hành của nó." },
        { t: "h", x: "Năm cặp tạng – phủ và Tâm bào – Tam tiêu" },
        { t: "p", x: "Mỗi tạng đi đôi với một phủ, gọi là quan hệ <b>biểu lý</b>. “Lý” là bên trong (tạng), “biểu” là bên ngoài (phủ). Hai bên nối với nhau bằng kinh lạc nên bệnh có thể ảnh hưởng qua lại. Bấm vào từng cặp để xem chức năng, khiếu và biểu hiện khi mất cân bằng." },
        { t: "fig", id: "pairs", cap: "Sáu cặp tạng – phủ (quan hệ biểu lý). Hai bên của mỗi cặp luôn cùng một hành, nối với nhau bằng kinh lạc." },
        { t: "widget", id: "tangphu" },
        { t: "h", x: "Mối quan hệ giữa các tạng" },
        { t: "ul", x: [
          "<b>Tâm – Thận</b>: Tâm (Hỏa) ở trên làm ấm Thận, Thận (Thủy) ở dưới làm mát Tâm. Mất cân bằng gây mất ngủ, hồi hộp, nóng bứt rứt.",
          "<b>Can – Tỳ</b>: Can (Mộc) sơ tiết giúp Tỳ (Thổ) tiêu hóa tốt. Can uất thì Tỳ bị ảnh hưởng.",
          "<b>Tỳ – Phế</b>: Tỳ (Thổ) hóa sinh khí nuôi Phế (Kim). Tỳ yếu thì Phế yếu, hay ho, dễ cảm.",
          "<b>Phế – Thận</b>: Phế (Kim) hít khí vào, Thận (Thủy) giữ khí xuống sâu. Hai bên phối hợp tạo hơi thở đầy đặn."
        ] }
      ],
      key: [
        "Tạng đặc, Âm, tàng giữ tinh khí. Phủ rỗng, Dương, truyền hóa.",
        "Cặp biểu lý: Tâm–Tiểu trường, Phế–Đại trường, Tỳ–Vị, Can–Đởm, Thận–Bàng quang, Tâm bào–Tam tiêu.",
        "Tạng phủ YHCT là hệ chức năng, không đồng nhất với cơ quan giải phẫu."
      ]
    },

    /* ===== 4. KHÍ HUYẾT ===== */
    {
      id: "khihuyet", icon: "💧", title: "Tinh, khí, thần, huyết, tân dịch", sub: "Những chất cơ bản nuôi sống cơ thể", minutes: 10,
      blocks: [
        { t: "p", x: "Theo YHCT, sự sống được duy trì bởi các chất cơ bản: <b>Tinh, Khí, Huyết, Tân dịch</b> và biểu hiện tổng hợp là <b>Thần</b>. Tinh – Khí – Thần được gọi là “ba báu vật” (<b>tam bảo</b>) của con người." },
        { t: "note", x: "<b>Khí</b> trong YHCT không chỉ là không khí hay hơi thở. Đó là <b>năng lượng chức năng vô hình</b> thúc đẩy mọi hoạt động của cơ thể: tiêu hóa, tuần hoàn, hô hấp, bảo vệ…" },
        { t: "fig", id: "tambao", cap: "Tinh, Khí, Thần là “tam bảo”: Tinh hóa thành Khí, Khí hóa thành Thần." },
        { t: "table", head: ["Chất", "Là gì", "Nguồn gốc và vai trò"], rows: [
          ["Tinh", "Chất tinh túy nhất, nền tảng của sự sống.", "Tiên thiên tinh nhận từ cha mẹ, chứa ở Thận. Hậu thiên tinh từ thức ăn do Tỳ Vị chuyển hóa. Quyết định sinh trưởng, phát dục, sinh sản, già yếu."],
          ["Khí", "Năng lượng chức năng vô hình.", "Từ Tinh của Thận, từ thức ăn (Tỳ Vị) và khí trời hít vào (Phế). Có 5 chức năng: thúc đẩy, ôn ấm, phòng vệ, cố nhiếp, khí hóa."],
          ["Huyết", "Chất lỏng màu đỏ nuôi dưỡng toàn thân.", "Sinh ra từ tinh chất thức ăn (Tỳ Vị) qua Phế lên Tâm hóa đỏ. Tâm chủ huyết, Can tàng huyết, Tỳ thống huyết."],
          ["Tân dịch", "Các chất lỏng bình thường của cơ thể.", "Tân: loãng, làm ẩm da, cơ (mồ hôi, nước mắt). Dịch: đặc, bôi trơn khớp, nuôi não tủy. Do Tỳ vận hóa, Phế tuyên giáng, Thận chủ thủy."],
          ["Thần", "Biểu hiện của sự sống: ý thức, tinh thần, ánh mắt, nét mặt.", "Còn Thần (đắc thần): mắt sáng, tỉnh táo. Mất Thần (thất thần): mắt đờ đẫn, lơ mơ, là dấu hiệu bệnh nặng."]
        ] },
        { t: "fig", id: "flow", cap: "Khí và Huyết được hình thành từ thức ăn và khí trời như thế nào." },
        { t: "h", x: "Khí có những loại nào" },
        { t: "ul", x: [
          "<b>Nguyên khí</b>: khí gốc, xuất phát từ Thận, là động lực cho mọi tạng phủ.",
          "<b>Tông khí</b>: ở ngực, kết hợp khí trời và tinh chất thức ăn, giúp hô hấp và đẩy huyết.",
          "<b>Dinh khí</b>: chạy trong mạch cùng huyết, có chức năng nuôi dưỡng.",
          "<b>Vệ khí</b>: chạy ngoài mạch, bảo vệ cơ thể, làm ấm da cơ và điều tiết đóng mở lỗ chân lông (mồ hôi)."
        ] },
        { t: "note", title: "5 chức năng của Khí", x: "<b>Thúc đẩy</b>: đẩy mọi hoạt động (nhịp tim, tiêu hóa). <b>Ôn ấm</b>: giữ thân nhiệt. <b>Phòng vệ</b>: chống tà khí xâm nhập. <b>Cố nhiếp</b>: giữ huyết, mồ hôi, nước tiểu không chảy ra bừa bãi. <b>Khí hóa</b>: biến đổi chất này thành chất khác (ví dụ thức ăn thành khí huyết)." },
        { t: "h", x: "Quan hệ giữa Khí và Huyết" },
        { t: "ul", x: [
          "<b>Khí là soái của huyết</b>: khí sinh huyết, đẩy huyết đi, giữ huyết trong mạch.",
          "<b>Huyết là mẹ của khí</b>: huyết chứa và nuôi dưỡng khí. Mất huyết nhiều thì khí cũng hao theo."
        ] },
        { t: "fig", id: "khrel", cap: "Khí và Huyết nương tựa lẫn nhau." },
        { t: "h", x: "Các tình trạng bệnh thường gặp" },
        { t: "table", head: ["Tình trạng", "Nghĩa", "Biểu hiện"], rows: [
          ["Khí hư", "Khí thiếu, yếu.", "Mệt, nói nhỏ, hơi thở ngắn, tự ra mồ hôi, dễ cảm."],
          ["Khí trệ", "Khí bị tắc, lưu thông kém.", "Đau tức, chướng, đau lan di chuyển, đỡ khi ợ hơi, xì hơi."],
          ["Huyết hư", "Huyết thiếu.", "Da xanh nhợt, hoa mắt, hồi hộp, mất ngủ, kinh nguyệt ít."],
          ["Huyết ứ", "Huyết ngưng đọng, không lưu thông.", "Đau cố định như dùi đâm, nặng về đêm, lưỡi tím hoặc có chấm tím."],
          ["Tân dịch hao", "Thiếu các chất lỏng.", "Khô miệng, khô da, khát, táo bón, nước tiểu ít."]
        ] }
      ],
      key: [
        "Tinh – Khí – Thần là “tam bảo”. Tinh chứa ở Thận.",
        "Khí là soái của huyết; huyết là mẹ của khí.",
        "Khí trệ gây đau tức di chuyển; huyết ứ gây đau cố định."
      ]
    },

    /* ===== 5. KINH LẠC ===== */
    {
      id: "kinhlac", icon: "🧭", title: "Kinh lạc", sub: "Mạng lưới đường dẫn khí huyết và huyệt", minutes: 10,
      blocks: [
        { t: "p", x: "<b>Kinh lạc</b> là hệ thống các đường dẫn khí huyết đi khắp cơ thể, nối tạng phủ với da, cơ, xương. “<b>Kinh</b>” là đường lớn chạy dọc; “<b>lạc</b>” là các nhánh nhỏ nối giữa các kinh. Trên kinh có các điểm gọi là <b>huyệt</b>, nơi khí tập trung và có thể dùng để châm cứu, bấm huyệt." },
        { t: "note", x: "Tên kinh gồm ba phần. Ví dụ <b>Thủ thái âm Phế kinh</b>: <b>Thủ</b> = tay (Túc = chân); <b>thái âm</b> = mức độ Âm (ba mức Âm: thái âm, thiếu âm, quyết âm; ba mức Dương: dương minh, thái dương, thiếu dương); <b>Phế</b> = tạng phủ mà kinh thuộc về." },
        { t: "h", x: "Quy luật đường đi" },
        { t: "ul", x: [
          "<b>Thủ tam âm</b> (3 kinh Âm ở tay: Phế, Tâm bào, Tâm): đi từ ngực ra đầu ngón tay.",
          "<b>Thủ tam dương</b> (3 kinh Dương ở tay: Đại trường, Tam tiêu, Tiểu trường): đi từ đầu ngón tay lên đầu mặt.",
          "<b>Túc tam dương</b> (3 kinh Dương ở chân: Vị, Đởm, Bàng quang): đi từ đầu mặt xuống ngón chân.",
          "<b>Túc tam âm</b> (3 kinh Âm ở chân: Tỳ, Can, Thận): đi từ ngón chân lên bụng ngực."
        ] },
        { t: "fig", id: "kinhdir", cap: "Hướng đi của 4 nhóm kinh, tính với người đứng thẳng và giơ hai tay lên (quy ước để dễ nhớ). Một bên làm ví dụ, bên kia đối xứng." },
        { t: "p", x: "Khí huyết lưu thông nối tiếp qua 12 kinh theo thứ tự: <b>Phế → Đại trường → Vị → Tỳ → Tâm → Tiểu trường → Bàng quang → Thận → Tâm bào → Tam tiêu → Đởm → Can → Phế</b>, tạo thành vòng tuần hoàn khép kín." },
        { t: "fig", id: "clock", cap: "Mỗi kinh “vượng khí” nhất trong một khung 2 giờ. Số trong vòng là khung giờ (ví dụ 3–5 là từ 3 đến 5 giờ sáng)." },
        { t: "h", x: "12 kinh chính" },
        { t: "widget", id: "kinhlac" },
        { t: "h", x: "Hai mạch quan trọng trong tám mạch kỳ kinh" },
        { t: "ul", x: [
          "<b>Nhâm mạch</b>: chạy giữa mặt trước bụng, ngực, cổ. Được gọi là “bể của các kinh Âm”.",
          "<b>Đốc mạch</b>: chạy giữa mặt sau lưng, dọc cột sống, lên đỉnh đầu. Được gọi là “bể của các kinh Dương”."
        ] },
        { t: "fig", id: "nhamdoc", cap: "Nhâm mạch và Đốc mạch trên cơ thể nhìn nghiêng." },
        { t: "note", title: "Lưu ý an toàn", x: "Nội dung chỉ để học lý luận. Châm cứu, bấm huyệt cần người có chuyên môn thực hiện. Một số huyệt (ví dụ Hợp cốc, Tam âm giao) thường được khuyến cáo thận trọng với phụ nữ có thai." }
      ],
      key: [
        "12 kinh chính, đi nối tiếp thành vòng tuần hoàn.",
        "Thủ = tay, Túc = chân. Tam âm, tam dương có quy luật hướng đi riêng.",
        "Nhâm mạch (Âm) ở giữa trước, Đốc mạch (Dương) ở giữa sau."
      ]
    },

    /* ===== 6. NGUYÊN NHÂN BỆNH ===== */
    {
      id: "nguyennhan", icon: "🌬️", title: "Nguyên nhân gây bệnh", sub: "Lục dâm, thất tình và các yếu tố khác", minutes: 10,
      blocks: [
        { t: "p", x: "YHCT quan niệm bệnh xảy ra khi <b>tà khí</b> (yếu tố gây bệnh) mạnh hơn <b>chính khí</b> (sức chống đỡ của cơ thể). Chính khí đầy đủ thì tà khí khó xâm nhập. Nguyên nhân chia làm ba nhóm: <b>ngoại nhân</b> (từ bên ngoài), <b>nội nhân</b> (từ bên trong), và <b>bất nội ngoại nhân</b> (không thuộc hai nhóm trên)." },
        { t: "fig", id: "scale", cap: "Bệnh phát sinh khi tà khí thắng chính khí." },
        { t: "h", x: "1. Ngoại nhân: Lục dâm" },
        { t: "note", x: "<b>Lục dâm</b> là sáu loại khí hậu (phong, hàn, thử, thấp, táo, hỏa) khi xuất hiện <b>quá mức hoặc trái mùa</b> thì gây bệnh. Khi diễn ra bình thường, sáu khí này gọi là “lục khí” và không gây bệnh." },
        { t: "table", head: ["Tà khí", "Đặc tính", "Biểu hiện thường gặp"], rows: [
          ["Phong (gió)", "Hay đi, thay đổi nhanh, hướng lên trên và ra ngoài (đầu mặt).", "Đau đầu, sổ mũi, ngứa, bệnh khi ở chỗ này khi ở chỗ khác. Xưa nói “phong là đầu của trăm bệnh”."],
          ["Hàn (lạnh)", "Lạnh, co rút, ngưng trệ, làm tổn Dương khí.", "Sợ lạnh, tay chân lạnh, đau co thắt, đỡ khi chườm ấm."],
          ["Thử (nắng nóng)", "Nóng, chỉ có ở mùa hè, hao khí và tân dịch, thường kèm thấp.", "Sốt, ra nhiều mồ hôi, khát, mệt, say nắng."],
          ["Thấp (ẩm)", "Nặng nề, đục, dính trệ, kéo dài, hay xuống dưới.", "Người nặng, chân tê nặng, phân nát, nước tiểu đục, rêu lưỡi nhớt."],
          ["Táo (khô)", "Khô ráo, hao tân dịch, hay tổn thương Phế.", "Khô miệng mũi họng, ho khan, da khô, táo bón."],
          ["Hỏa (nhiệt)", "Nóng, bốc lên, hao tân dịch, dễ sinh phong.", "Sốt cao, mặt đỏ, khát, bứt rứt, mụn nhọt, chảy máu cam."]
        ] },
        { t: "fig", id: "lucdam", cap: "Lục dâm: sáu loại khí hậu quá mức hoặc trái mùa. Mỗi loại có đặc tính riêng." },
        { t: "h", x: "2. Nội nhân: Thất tình" },
        { t: "p", x: "<b>Thất tình</b> là bảy trạng thái cảm xúc: Hỷ (vui), Nộ (giận), Ưu (lo), Tư (nghĩ ngợi), Bi (buồn), Khủng (sợ), Kinh (hoảng sợ). Cảm xúc quá mạnh hoặc kéo dài làm rối loạn khí của tạng phủ tương ứng." },
        { t: "table", head: ["Cảm xúc", "Tạng bị ảnh hưởng", "Khí biến đổi và biểu hiện"], rows: [
          ["Hỷ (vui quá)", "Tâm", "Khí hoãn (chậm tán): tinh thần phân tán, hồi hộp, khó tập trung."],
          ["Nộ (giận)", "Can", "Khí thượng (bốc lên): đau đầu, mặt đỏ, nặng thì ngất."],
          ["Tư (nghĩ ngợi quá)", "Tỳ", "Khí kết (uất lại): ăn kém, đầy bụng."],
          ["Ưu, Bi (lo, buồn)", "Phế", "Khí tiêu (hao): mệt, thở ngắn, ho."],
          ["Khủng (sợ)", "Thận", "Khí hạ (đi xuống): đại tiểu tiện không kiểm soát, mỏi lưng."],
          ["Kinh (hoảng sợ)", "Tâm, Đởm", "Khí loạn: hồi hộp, mất ngủ, sợ hãi."]
        ] },
        { t: "fig", id: "thattinh", cap: "Thất tình: cảm xúc quá mức làm rối loạn khí của tạng tương ứng (gộp Ưu và Bi thành một thẻ)." },
        { t: "h", x: "3. Bất nội ngoại nhân" },
        { t: "ul", x: [
          "<b>Ăn uống</b>: ăn quá no hoặc quá đói làm tổn Tỳ Vị; ăn nhiều đồ sống lạnh sinh hàn; ăn nhiều đồ béo, ngọt, cay nóng sinh đàm thấp hoặc nhiệt.",
          "<b>Lao lực và quá nhàn</b>: làm việc quá sức hao khí; ngồi nằm nhiều làm khí huyết ứ trệ.",
          "<b>Phòng dục quá độ</b>: hao tổn Thận tinh.",
          "<b>Chấn thương</b>: va đập, té ngã, vết thương gây ứ huyết.",
          "<b>Sản phẩm bệnh lý</b>: <b>đàm ẩm</b> (chất dịch đục, ứ đọng do tân dịch vận hóa kém) và <b>huyết ứ</b> (huyết ngưng đọng). Các chất này sinh ra rồi lại gây thêm bệnh."
        ] }
      ],
      key: [
        "Bệnh xảy ra khi tà khí thắng chính khí.",
        "Ngoại nhân: Phong, Hàn, Thử, Thấp, Táo, Hỏa (lục dâm).",
        "Nội nhân: Thất tình. Mỗi cảm xúc thương một tạng.",
        "Bất nội ngoại nhân: ăn uống, lao lực, chấn thương, đàm ẩm, huyết ứ."
      ]
    },

    /* ===== 7. TỨ CHẨN ===== */
    {
      id: "tuchan", icon: "👁️", title: "Tứ chẩn", sub: "Bốn cách thu thập thông tin để chẩn đoán", minutes: 10,
      blocks: [
        { t: "p", x: "<b>Tứ chẩn</b> là bốn phương pháp khám bệnh của YHCT: <b>Vọng</b> (nhìn), <b>Văn</b> (nghe, ngửi), <b>Vấn</b> (hỏi), <b>Thiết</b> (sờ, bắt mạch). Thầy thuốc phối hợp cả bốn để có bức tranh đầy đủ, không dựa vào một dấu hiệu riêng lẻ." },
        { t: "table", head: ["Phương pháp", "Làm gì", "Quan sát"], rows: [
          ["Vọng (nhìn)", "Quan sát bằng mắt.", "Thần sắc (tinh thần, ánh mắt), sắc mặt, hình thể, dáng đi, đặc biệt là <b>lưỡi</b> (chất lưỡi và rêu lưỡi)."],
          ["Văn (nghe, ngửi)", "Nghe âm thanh, ngửi mùi.", "Giọng nói, tiếng ho, hơi thở, mùi hơi thở, mùi chất tiết."],
          ["Vấn (hỏi)", "Hỏi người bệnh và người nhà.", "Hàn nhiệt (sợ lạnh hay nóng), mồ hôi, đầu mình đau, ăn uống, đại tiểu tiện, giấc ngủ, khát, tiền sử bệnh."],
          ["Thiết (sờ)", "Bắt mạch và ấn khám.", "Mạch ở cổ tay, ấn vùng bụng, vùng đau để xem lạnh nóng, mềm cứng."]
        ] },
        { t: "h", x: "Vọng lưỡi" },
        { t: "note", x: "Lưỡi gồm <b>chất lưỡi</b> (thân lưỡi, phản ánh khí huyết và tạng phủ) và <b>rêu lưỡi</b> (lớp phủ trên mặt lưỡi, phản ánh tình trạng Vị khí và tà khí)." },
        { t: "fig", id: "tonguezones", cap: "Bản đồ lưỡi: mỗi vùng của lưỡi phản ánh một nhóm tạng phủ." },
        { t: "table", head: ["Dấu hiệu", "Gợi ý thường gặp"], rows: [
          ["Chất lưỡi hồng nhạt, rêu trắng mỏng", "Bình thường."],
          ["Chất lưỡi nhợt, bệu", "Hư hàn, khí huyết hư."],
          ["Chất lưỡi đỏ", "Nhiệt; nếu ít rêu, thường là Âm hư."],
          ["Chất lưỡi tím hoặc có chấm tím", "Huyết ứ."],
          ["Rêu trắng mỏng", "Bình thường, hoặc bệnh mới ở biểu."],
          ["Rêu vàng", "Nhiệt."],
          ["Rêu dày, nhớt", "Thấp, đàm, thức ăn tích trệ."],
          ["Lưỡi ít hoặc không rêu", "Âm hư, tân dịch hao."]
        ] },
        { t: "fig", id: "tongueswatch", cap: "Một số mẫu lưỡi thường gặp (màu minh họa, thực tế thay đổi theo ánh sáng và từng người)." },
        { t: "h", x: "Thiết chẩn: Bắt mạch" },
        { t: "p", x: "Mạch thường bắt ở cổ tay, chỗ động mạch quay đập, dùng ba ngón đặt tại ba vị trí là <b>Thốn</b> (gần cổ tay nhất), <b>Quan</b> (giữa), <b>Xích</b> (xa nhất, gần khuỷu). Mạch bình thường có 4 đến 5 nhịp mỗi nhịp thở (khoảng 60 đến 90 nhịp/phút), đều, hòa hoãn, có lực vừa phải." },
        { t: "fig", id: "wrist", cap: "Trên: ba vị trí bắt mạch Thốn, Quan, Xích. Dưới: mạch phù nổi nông, mạch trầm chìm sâu." },
        { t: "table", head: ["Mạch", "Cảm giác khi bắt", "Gợi ý"], rows: [
          ["Phù", "Chạm nhẹ đã thấy, ấn mạnh thì giảm.", "Bệnh ở biểu (ngoài)."],
          ["Trầm", "Phải ấn sâu mới thấy.", "Bệnh ở lý (trong)."],
          ["Trì", "Chậm (dưới 60 nhịp/phút).", "Hàn."],
          ["Sác", "Nhanh (trên 90 nhịp/phút).", "Nhiệt."],
          ["Hư", "Yếu, vô lực.", "Hư (thiếu chính khí)."],
          ["Thực", "Mạnh, có lực.", "Thực (tà khí mạnh)."],
          ["Hoạt", "Trơn, lăn như hạt châu.", "Đàm thấp, thức ăn tích; cũng gặp ở thai kỳ."],
          ["Huyền", "Căng như dây đàn.", "Bệnh ở Can, đau, đàm ẩm."]
        ] },
        { t: "h", x: "Biện chứng" },
        { t: "p", x: "Sau khi thu thập thông tin bằng tứ chẩn, thầy thuốc tổng hợp, phân tích để xác định bản chất của bệnh theo Bát cương, Tạng phủ, Khí huyết… Quá trình này gọi là <b>biện chứng</b> (phân tích để tìm ra “chứng”, tức hội chứng bệnh). Từ đó đưa ra phương pháp điều trị phù hợp (<b>luận trị</b>)." }
      ],
      key: [
        "Tứ chẩn: Vọng, Văn, Vấn, Thiết, phối hợp cả bốn.",
        "Lưỡi: nhợt (hư hàn), đỏ (nhiệt), tím (huyết ứ); rêu vàng (nhiệt), rêu dày nhớt (thấp đàm).",
        "Mạch: phù (biểu), trầm (lý), trì (hàn), sác (nhiệt), hư, thực."
      ]
    },

    /* ===== 8. BÁT CƯƠNG ===== */
    {
      id: "batcuong", icon: "⚖️", title: "Bát cương", sub: "Tám cương lĩnh để phân loại bệnh", minutes: 10,
      blocks: [
        { t: "p", x: "<b>Bát cương</b> là tám “cương lĩnh” (mốc lớn) dùng để phân loại bệnh, chia thành bốn cặp: <b>Biểu – Lý</b> (vị trí bệnh nông hay sâu), <b>Hàn – Nhiệt</b> (tính chất lạnh hay nóng), <b>Hư – Thực</b> (sức chính khí thiếu hay tà khí mạnh), <b>Âm – Dương</b> (tổng hợp lại). Bát cương là bước đầu tiên và quan trọng trong biện chứng." },
        { t: "table", head: ["Cương", "Ý nghĩa", "Biểu hiện thường gặp"], rows: [
          ["Biểu", "Bệnh ở nông (da lông, kinh lạc phần ngoài), thường mới mắc.", "Sợ lạnh kèm sốt, đau đầu, đau mỏi người, nghẹt mũi; rêu trắng mỏng; mạch phù."],
          ["Lý", "Bệnh ở sâu (tạng phủ), thường kéo dài hoặc nặng.", "Sốt không sợ lạnh hoặc chỉ lạnh không sốt; đau bụng, nôn, tiêu hóa rối loạn; rêu dày; mạch trầm."],
          ["Hàn", "Lạnh (do hàn tà hoặc Dương hư).", "Sợ lạnh, thích ấm, không khát hoặc thích uống nóng, phân lỏng, tiểu trong; lưỡi nhợt; mạch trì."],
          ["Nhiệt", "Nóng (do nhiệt tà hoặc Âm hư).", "Sợ nóng, khát thích mát, tiểu vàng, táo bón, mặt đỏ; lưỡi đỏ, rêu vàng; mạch sác."],
          ["Hư", "Chính khí thiếu, yếu. Bệnh thường lâu ngày.", "Mệt, nói nhỏ, tự ra mồ hôi; đau âm ỉ, thích xoa bóp; lưỡi bệu nhợt; mạch hư nhược."],
          ["Thực", "Tà khí mạnh mà chính khí chưa suy. Bệnh thường cấp.", "Người khỏe, tiếng nói to, đau dữ dội ấn đau thêm, bụng chướng; rêu dày; mạch thực có lực."]
        ] },
        { t: "fig", id: "bieuly", cap: "Biểu là lớp ngoài (da lông), lý là lớp trong (tạng phủ)." },
        { t: "note", title: "Âm dương là tổng cương", x: "Trong Bát cương, <b>Âm – Dương</b> gom lại hai nhóm lớn: <b>Dương chứng</b> thường là biểu, thực, nhiệt; <b>Âm chứng</b> thường là lý, hư, hàn. Thực tế thường gặp các chứng phối hợp, ví dụ <i>lý thực nhiệt</i>, <i>biểu hàn</i>, <i>hư hàn</i>, <i>hư nhiệt</i>." },
        { t: "fig", id: "matrix", cap: "Ghép Hư–Thực với Hàn–Nhiệt thành bốn chứng thường gặp." },
        { t: "h", x: "Ví dụ phân tích" },
        { t: "table", head: ["Triệu chứng", "Phân tích", "Kết luận Bát cương"], rows: [
          ["Mới 2 ngày, sợ lạnh, sốt nhẹ, đau đầu, nghẹt mũi, nước mũi trong, rêu trắng mỏng, mạch phù", "Mới mắc, ở nông; lạnh.", "Biểu hàn"],
          ["Sốt cao, không sợ lạnh, khát nhiều, mặt đỏ, tiểu vàng, táo bón, rêu vàng, mạch nhanh có lực", "Ở sâu hơn; nóng; tà khí mạnh.", "Lý thực nhiệt"],
          ["Mệt mỏi, ăn kém, phân nát, tay chân lạnh, lưỡi nhợt bệu, mạch yếu", "Bệnh lâu, thiếu chính khí; lạnh.", "Hư hàn"],
          ["Nóng âm ỉ về chiều, mồ hôi trộm, lòng bàn tay chân nóng, lưỡi đỏ ít rêu, mạch nhỏ nhanh", "Thiếu Âm, Dương tương đối vượng.", "Hư nhiệt"]
        ] },
        { t: "h", x: "Thử bài tập phân tích" },
        { t: "p", x: "Chọn các triệu chứng bên dưới để xem chúng nghiêng về cương nào. Đây chỉ là bài tập minh họa cách vận dụng Bát cương, không dùng để tự chẩn đoán hay điều trị." },
        { t: "widget", id: "batcuong" }
      ],
      key: [
        "Bát cương: Biểu–Lý, Hàn–Nhiệt, Hư–Thực, Âm–Dương.",
        "Biểu = nông, mới. Lý = sâu, tạng phủ.",
        "Âm chứng thường là lý, hư, hàn; Dương chứng thường là biểu, thực, nhiệt."
      ]
    }
  ]
};
