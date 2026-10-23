/* Flashcard và câu hỏi trắc nghiệm */
window.CARDS = [
  /* Âm dương */
  { topic: "amduong", term: "Âm (陰)", mean: "Mặt lạnh, tối, tĩnh, đi xuống, đi vào trong. Ví dụ: đêm, lạnh, tạng, huyết.", note: "Âm không có nghĩa là xấu." },
  { topic: "amduong", term: "Dương (陽)", mean: "Mặt nóng, sáng, động, đi lên, đi ra ngoài. Ví dụ: ngày, nóng, phủ, khí.", note: "Dương không có nghĩa là tốt hơn Âm." },
  { topic: "amduong", term: "Âm dương đối lập", mean: "Hai mặt chế ước lẫn nhau.", note: "Ví dụ: nóng làm bớt lạnh." },
  { topic: "amduong", term: "Hỗ căn", mean: "Nương tựa vào nhau, không có mặt này thì không có mặt kia.", note: "Ví dụ: không có ngày thì không có đêm." },
  { topic: "amduong", term: "Tiêu trưởng", mean: "Mặt này giảm thì mặt kia tăng, luôn thay đổi.", note: "Tiêu là giảm, trưởng là tăng." },
  { topic: "amduong", term: "Chuyển hóa (hàn cực sinh nhiệt)", mean: "Đến cực điểm thì chuyển thành mặt đối lập.", note: "Ví dụ: sốt cao kéo dài có thể kiệt sức, chân tay lạnh." },
  { topic: "amduong", term: "Dương thịnh", mean: "Dương quá mạnh, gây thực nhiệt: sốt, mặt đỏ, khát, táo bón.", note: "Điều chỉnh bằng thanh nhiệt." },
  { topic: "amduong", term: "Âm thịnh", mean: "Âm quá mạnh (hàn dư), gây thực hàn: sợ lạnh, đau bụng lạnh.", note: "Điều chỉnh bằng tán hàn, ôn ấm." },
  { topic: "amduong", term: "Dương hư", mean: "Dương thiếu, gây hư hàn: sợ lạnh, mệt, tay chân lạnh.", note: "Điều chỉnh bằng bổ dương." },
  { topic: "amduong", term: "Âm hư", mean: "Âm thiếu, gây hư nhiệt: nóng âm ỉ chiều, mồ hôi trộm, lưỡi đỏ ít rêu.", note: "Điều chỉnh bằng tư âm." },

  /* Ngũ hành */
  { topic: "nguhanh", term: "Mộc (木)", mean: "Cây. Sinh trưởng, vươn lên. Thuộc mùa Xuân, vị chua, tạng Can, phủ Đởm.", note: "Khiếu: mắt. Thể: gân." },
  { topic: "nguhanh", term: "Hỏa (火)", mean: "Lửa. Nóng, bốc lên. Thuộc mùa Hạ, vị đắng, tạng Tâm, phủ Tiểu trường.", note: "Khiếu: lưỡi. Thể: mạch." },
  { topic: "nguhanh", term: "Thổ (土)", mean: "Đất. Nuôi dưỡng, sinh hóa. Thuộc cuối hạ, vị ngọt, tạng Tỳ, phủ Vị.", note: "Khiếu: miệng. Thể: cơ nhục." },
  { topic: "nguhanh", term: "Kim (金)", mean: "Kim loại. Thu liễm, thanh lọc. Thuộc mùa Thu, vị cay, tạng Phế, phủ Đại trường.", note: "Khiếu: mũi. Thể: da lông." },
  { topic: "nguhanh", term: "Thủy (水)", mean: "Nước. Lạnh, tưới nhuần, đi xuống. Thuộc mùa Đông, vị mặn, tạng Thận, phủ Bàng quang.", note: "Khiếu: tai. Thể: xương." },
  { topic: "nguhanh", term: "Tương sinh (相生)", mean: "Hành này nuôi dưỡng hành kia: Mộc → Hỏa → Thổ → Kim → Thủy → Mộc.", note: "Hành sinh ra gọi là mẹ, hành được sinh gọi là con." },
  { topic: "nguhanh", term: "Tương khắc (相克)", mean: "Hành này kiềm chế hành kia: Mộc → Thổ → Thủy → Hỏa → Kim → Mộc.", note: "Khắc vừa phải là bình thường." },
  { topic: "nguhanh", term: "Tương thừa (相乘)", mean: "Khắc quá mạnh, nhân lúc hành kia yếu mà lấn át.", note: "Ví dụ: Mộc thừa Thổ (Can vượng lấn Tỳ)." },
  { topic: "nguhanh", term: "Tương vũ (相侮)", mean: "Phản khắc: hành bị khắc quá mạnh nên khắc ngược lại.", note: "Vũ là khinh nhờn." },

  /* Tạng phủ */
  { topic: "tangphu", term: "Tạng (臟)", mean: "Cơ quan đặc, thuộc Âm, chức năng tàng chứa tinh khí. Có 5 tạng: Tâm, Can, Tỳ, Phế, Thận.", note: "" },
  { topic: "tangphu", term: "Phủ (腑)", mean: "Cơ quan rỗng, thuộc Dương, chức năng truyền hóa. Có 6 phủ: Đởm, Vị, Tiểu trường, Đại trường, Bàng quang, Tam tiêu.", note: "" },
  { topic: "tangphu", term: "Tạng tượng (藏象)", mean: "Học thuyết xem biểu hiện bên ngoài (tượng) để suy ra hoạt động của tạng phủ bên trong.", note: "" },
  { topic: "tangphu", term: "Tâm (心)", mean: "Chủ huyết mạch, tàng thần; khai khiếu ra lưỡi.", note: "Hành Hỏa. Phủ đi đôi: Tiểu trường." },
  { topic: "tangphu", term: "Can (肝)", mean: "Tàng huyết, chủ sơ tiết, chủ gân; khai khiếu ra mắt.", note: "Hành Mộc. Phủ đi đôi: Đởm." },
  { topic: "tangphu", term: "Tỳ (脾)", mean: "Chủ vận hóa, thống huyết, chủ cơ nhục; khai khiếu ra miệng.", note: "Hành Thổ. Phủ đi đôi: Vị." },
  { topic: "tangphu", term: "Phế (肺)", mean: "Chủ khí, chủ hô hấp, chủ bì mao; khai khiếu ra mũi.", note: "Hành Kim. Phủ đi đôi: Đại trường." },
  { topic: "tangphu", term: "Thận (腎)", mean: "Tàng tinh, chủ thủy, chủ nạp khí, chủ xương; khai khiếu ra tai.", note: "Hành Thủy. Phủ đi đôi: Bàng quang." },
  { topic: "tangphu", term: "Tam tiêu (三焦)", mean: "Đường dẫn khí và nước toàn thân, gồm thượng tiêu (ngực), trung tiêu (bụng trên), hạ tiêu (bụng dưới).", note: "" },
  { topic: "tangphu", term: "Tâm bào (心包)", mean: "Lớp bao quanh Tâm, bảo vệ Tâm.", note: "Cặp với Tam tiêu." },
  { topic: "tangphu", term: "Biểu lý (表裏)", mean: "Quan hệ ngoài – trong. Tạng (lý) đi đôi với phủ (biểu), nối bằng kinh lạc.", note: "Ví dụ: Tỳ – Vị." },

  /* Khí huyết */
  { topic: "khihuyet", term: "Tinh (精)", mean: "Chất tinh túy, nền tảng sinh trưởng và sinh sản, chứa ở Thận.", note: "Tiên thiên (từ cha mẹ) và hậu thiên (từ ăn uống)." },
  { topic: "khihuyet", term: "Khí (氣)", mean: "Năng lượng chức năng vô hình, thúc đẩy mọi hoạt động cơ thể.", note: "Không chỉ là không khí." },
  { topic: "khihuyet", term: "Thần (神)", mean: "Biểu hiện của sự sống: ý thức, tinh thần, ánh mắt, nét mặt.", note: "Tinh – Khí – Thần là tam bảo." },
  { topic: "khihuyet", term: "Nguyên khí (元氣)", mean: "Khí gốc, xuất phát từ Thận, là động lực của tạng phủ.", note: "" },
  { topic: "khihuyet", term: "Vệ khí (衛氣)", mean: "Khí chạy ngoài mạch, bảo vệ cơ thể, làm ấm da, điều tiết mồ hôi.", note: "" },
  { topic: "khihuyet", term: "Dinh khí (營氣)", mean: "Khí chạy trong mạch cùng huyết, có chức năng nuôi dưỡng.", note: "" },
  { topic: "khihuyet", term: "Huyết (血)", mean: "Chất lỏng đỏ nuôi dưỡng toàn thân. Tâm chủ huyết, Can tàng huyết, Tỳ thống huyết.", note: "" },
  { topic: "khihuyet", term: "Tân dịch (津液)", mean: "Các chất lỏng bình thường của cơ thể. Tân loãng, dịch đặc.", note: "" },
  { topic: "khihuyet", term: "Khí trệ", mean: "Khí lưu thông kém: đau tức chướng, di chuyển.", note: "" },
  { topic: "khihuyet", term: "Huyết ứ", mean: "Huyết ngưng đọng: đau cố định như dùi đâm, lưỡi tím.", note: "" },
  { topic: "khihuyet", term: "Khí hư", mean: "Khí thiếu yếu: mệt, nói nhỏ, tự ra mồ hôi, dễ cảm.", note: "" },

  /* Kinh lạc */
  { topic: "kinhlac", term: "Kinh lạc (經絡)", mean: "Hệ đường dẫn khí huyết. Kinh là đường lớn chạy dọc, lạc là nhánh nối.", note: "" },
  { topic: "kinhlac", term: "Huyệt (穴)", mean: "Điểm trên kinh nơi khí tập trung, dùng để châm cứu, bấm huyệt.", note: "" },
  { topic: "kinhlac", term: "Thủ và Túc", mean: "Thủ là tay, Túc là chân. Dùng trong tên kinh.", note: "Ví dụ: Thủ thái âm Phế kinh." },
  { topic: "kinhlac", term: "Nhâm mạch (任脈)", mean: "Chạy giữa mặt trước bụng, ngực. Gọi là bể của các kinh Âm.", note: "" },
  { topic: "kinhlac", term: "Đốc mạch (督脈)", mean: "Chạy giữa mặt sau lưng, dọc cột sống. Gọi là bể của các kinh Dương.", note: "" },

  /* Nguyên nhân bệnh */
  { topic: "nguyennhan", term: "Lục dâm (六淫)", mean: "Sáu khí hậu quá mức hoặc trái mùa gây bệnh: Phong, Hàn, Thử, Thấp, Táo, Hỏa.", note: "" },
  { topic: "nguyennhan", term: "Phong (風)", mean: "Gió. Hay đi, thay đổi nhanh, hướng lên trên.", note: "Gây đau đầu, sổ mũi, ngứa." },
  { topic: "nguyennhan", term: "Hàn (寒)", mean: "Lạnh. Gây co rút, ngưng trệ, tổn Dương khí.", note: "Gây sợ lạnh, đau co thắt." },
  { topic: "nguyennhan", term: "Thử (暑)", mean: "Nắng nóng mùa hè, hao khí và tân dịch.", note: "Gây sốt, ra nhiều mồ hôi, say nắng." },
  { topic: "nguyennhan", term: "Thấp (濕)", mean: "Ẩm. Nặng nề, đục, dính trệ, kéo dài.", note: "Gây người nặng, phân nát." },
  { topic: "nguyennhan", term: "Táo (燥)", mean: "Khô. Hao tân dịch, hay tổn Phế.", note: "Gây khô miệng họng, ho khan." },
  { topic: "nguyennhan", term: "Hỏa (火, nhiệt)", mean: "Nóng, bốc lên, hao tân dịch.", note: "Gây sốt cao, mặt đỏ, mụn nhọt." },
  { topic: "nguyennhan", term: "Thất tình (七情)", mean: "Bảy cảm xúc: hỷ, nộ, ưu, tư, bi, khủng, kinh. Quá mức gây bệnh từ bên trong (nội nhân).", note: "Nộ hại Can, tư hại Tỳ, bi hại Phế, khủng hại Thận." },
  { topic: "nguyennhan", term: "Đàm ẩm (痰飲)", mean: "Chất dịch đục ứ đọng do tân dịch vận hóa kém. Vừa là sản phẩm của bệnh, vừa gây thêm bệnh.", note: "" },

  /* Tứ chẩn */
  { topic: "tuchan", term: "Vọng (望)", mean: "Nhìn: thần sắc, hình thể, lưỡi.", note: "" },
  { topic: "tuchan", term: "Văn (聞)", mean: "Nghe và ngửi: giọng nói, tiếng ho, hơi thở, mùi.", note: "" },
  { topic: "tuchan", term: "Vấn (問)", mean: "Hỏi: sợ lạnh hay nóng, mồ hôi, ăn uống, đại tiểu tiện, giấc ngủ.", note: "" },
  { topic: "tuchan", term: "Thiết (切)", mean: "Sờ: bắt mạch ở cổ tay, ấn khám vùng đau, bụng.", note: "" },
  { topic: "tuchan", term: "Thốn – Quan – Xích", mean: "Ba vị trí bắt mạch ở cổ tay, từ gần cổ tay đến xa.", note: "" },
  { topic: "tuchan", term: "Mạch phù (浮)", mean: "Chạm nhẹ đã thấy. Gợi ý bệnh ở biểu.", note: "" },
  { topic: "tuchan", term: "Mạch trầm (沉)", mean: "Phải ấn sâu mới thấy. Gợi ý bệnh ở lý.", note: "" },
  { topic: "tuchan", term: "Mạch trì (遲)", mean: "Chậm, dưới 60 nhịp/phút. Gợi ý hàn.", note: "" },
  { topic: "tuchan", term: "Mạch sác (數)", mean: "Nhanh, trên 90 nhịp/phút. Gợi ý nhiệt.", note: "" },
  { topic: "tuchan", term: "Biện chứng (辨證)", mean: "Tổng hợp thông tin từ tứ chẩn để xác định hội chứng (chứng) của bệnh.", note: "Sau đó là luận trị (chọn cách điều trị)." },

  /* Bát cương */
  { topic: "batcuong", term: "Bát cương (八綱)", mean: "Tám cương lĩnh chia thành bốn cặp: Biểu–Lý, Hàn–Nhiệt, Hư–Thực, Âm–Dương.", note: "" },
  { topic: "batcuong", term: "Biểu (表)", mean: "Bệnh ở nông (da lông), thường mới mắc: sợ lạnh phát sốt, đau đầu, mạch phù.", note: "" },
  { topic: "batcuong", term: "Lý (裏)", mean: "Bệnh ở sâu (tạng phủ), thường kéo dài hoặc nặng; mạch trầm.", note: "" },
  { topic: "batcuong", term: "Hàn (寒, trong Bát cương)", mean: "Chứng lạnh: sợ lạnh, thích ấm, phân lỏng, tiểu trong, mạch trì.", note: "" },
  { topic: "batcuong", term: "Nhiệt (熱)", mean: "Chứng nóng: sợ nóng, khát nước mát, tiểu vàng, rêu vàng, mạch sác.", note: "" },
  { topic: "batcuong", term: "Hư (虛)", mean: "Chính khí thiếu: mệt, nói nhỏ, đau âm ỉ thích xoa bóp, mạch hư.", note: "" },
  { topic: "batcuong", term: "Thực (實)", mean: "Tà khí mạnh: người khỏe, bệnh cấp, đau ấn đau thêm, mạch thực.", note: "" }
].map(function (c, i) { c.id = "c" + i; return c; });

/* Câu hỏi trắc nghiệm: o = các đáp án, a = chỉ số đáp án đúng (bắt đầu từ 0), e = giải thích */
window.QUIZ = [
  /* Âm dương */
  { topic: "amduong", q: "Cặp nào dưới đây thuộc Dương?", o: ["Ban đêm", "Lạnh", "Động", "Bên trong"], a: 2, e: "Động thuộc Dương. Đêm, lạnh, bên trong thuộc Âm." },
  { topic: "amduong", q: "“Hàn cực sinh nhiệt, nhiệt cực sinh hàn” minh họa quy luật nào?", o: ["Đối lập", "Hỗ căn", "Tiêu trưởng", "Chuyển hóa"], a: 3, e: "Khi đến cực điểm, một mặt chuyển thành mặt đối lập, gọi là chuyển hóa." },
  { topic: "amduong", q: "Người nóng âm ỉ về chiều, mồ hôi trộm, lòng bàn tay chân nóng, lưỡi đỏ ít rêu thuộc tình trạng nào?", o: ["Dương thịnh", "Âm thịnh", "Âm hư", "Dương hư"], a: 2, e: "Âm thiếu nên Dương tương đối vượng, gây hư nhiệt, gọi là Âm hư." },
  { topic: "amduong", q: "Theo Âm dương, Khí và Huyết được phân loại thế nào?", o: ["Khí thuộc Âm, huyết thuộc Dương", "Khí thuộc Dương, huyết thuộc Âm", "Cả hai thuộc Âm", "Cả hai thuộc Dương"], a: 1, e: "Khí vô hình, thiên về chức năng, thuộc Dương. Huyết hữu hình, thuộc Âm." },

  /* Ngũ hành */
  { topic: "nguhanh", q: "Theo tương sinh, Mộc sinh ra hành nào?", o: ["Thổ", "Hỏa", "Kim", "Thủy"], a: 1, e: "Mộc sinh Hỏa (củi cháy thành lửa)." },
  { topic: "nguhanh", q: "Theo tương khắc, Thổ khắc hành nào?", o: ["Thủy", "Mộc", "Kim", "Hỏa"], a: 0, e: "Thổ khắc Thủy (đất ngăn nước)." },
  { topic: "nguhanh", q: "“Mộc thừa Thổ” nghĩa là gì?", o: ["Can vượng lấn Tỳ", "Tỳ vượng lấn Can", "Phế vượng lấn Can", "Thận vượng lấn Tâm"], a: 0, e: "Mộc là Can, Thổ là Tỳ. Can vượng khắc quá mạnh gây ảnh hưởng Tỳ." },
  { topic: "nguhanh", q: "Hành nào ứng với mùa Thu, vị cay, tạng Phế?", o: ["Mộc", "Hỏa", "Kim", "Thủy"], a: 2, e: "Kim ứng với Thu, vị cay, Phế (tạng), Đại trường (phủ)." },
  { topic: "nguhanh", q: "Hành nào khắc Hỏa?", o: ["Mộc", "Thổ", "Kim", "Thủy"], a: 3, e: "Thủy khắc Hỏa (nước dập lửa)." },

  /* Tạng phủ */
  { topic: "tangphu", q: "Điểm khác nhau chính giữa tạng và phủ là gì?", o: ["Tạng rỗng, phủ đặc", "Tạng đặc, chức năng tàng chứa tinh khí; phủ rỗng, chức năng truyền hóa", "Tạng ở ngoài, phủ ở trong", "Không có khác biệt"], a: 1, e: "Tạng đặc thuộc Âm, tàng giữ tinh khí. Phủ rỗng thuộc Dương, truyền hóa." },
  { topic: "tangphu", q: "Phủ nào có quan hệ biểu lý với Phế?", o: ["Vị", "Tiểu trường", "Đại trường", "Bàng quang"], a: 2, e: "Phế – Đại trường là một cặp biểu lý (đều thuộc Kim)." },
  { topic: "tangphu", q: "Tạng nào “tàng tinh” và chủ xương?", o: ["Can", "Thận", "Tỳ", "Phế"], a: 1, e: "Thận tàng tinh, chủ xương, sinh tủy." },
  { topic: "tangphu", q: "Tạng nào chủ vận hóa thức ăn?", o: ["Tỳ", "Tâm", "Can", "Phế"], a: 0, e: "Tỳ chủ vận hóa, chuyển thức ăn thành khí huyết." },
  { topic: "tangphu", q: "Can khai khiếu ra bộ phận nào?", o: ["Lưỡi", "Mũi", "Mắt", "Tai"], a: 2, e: "Can khai khiếu ra mắt, nên bệnh Can thường gây hoa mắt." },
  { topic: "tangphu", q: "Tâm và Phế nằm ở phần nào của Tam tiêu?", o: ["Thượng tiêu", "Trung tiêu", "Hạ tiêu", "Không thuộc Tam tiêu"], a: 0, e: "Thượng tiêu là vùng ngực, chứa Tâm và Phế." },

  /* Khí huyết */
  { topic: "khihuyet", q: "Vệ khí có chức năng chính nào?", o: ["Nuôi dưỡng trong mạch", "Bảo vệ cơ thể, điều tiết mồ hôi", "Chứa tinh ở Thận", "Sinh ra huyết"], a: 1, e: "Vệ khí chạy ngoài mạch, bảo vệ cơ thể, làm ấm da và điều tiết mồ hôi." },
  { topic: "khihuyet", q: "“Khí là soái của huyết” nghĩa là gì?", o: ["Khí đẩy và giữ huyết trong mạch, giúp sinh huyết", "Huyết điều khiển khí", "Khí và huyết không liên quan", "Khí chỉ có ở phổi"], a: 0, e: "Khí sinh huyết, đẩy huyết đi và giữ huyết trong mạch." },
  { topic: "khihuyet", q: "Đau tức, chướng, di chuyển, đỡ khi ợ hơi, xì hơi thường gặp ở tình trạng nào?", o: ["Khí trệ", "Huyết ứ", "Huyết hư", "Âm hư"], a: 0, e: "Khí trệ gây đau tức chướng di chuyển. Huyết ứ gây đau cố định." },
  { topic: "khihuyet", q: "Tạng nào tàng huyết?", o: ["Tâm", "Tỳ", "Can", "Phế"], a: 2, e: "Can tàng huyết (dự trữ), Tâm chủ huyết (đẩy), Tỳ thống huyết (giữ)." },
  { topic: "khihuyet", q: "Tiên thiên tinh nhận từ đâu và chứa ở tạng nào?", o: ["Từ thức ăn, chứa ở Tỳ", "Từ cha mẹ, chứa ở Thận", "Từ khí trời, chứa ở Phế", "Từ cảm xúc, chứa ở Can"], a: 1, e: "Tiên thiên tinh nhận từ cha mẹ, chứa ở Thận." },

  /* Kinh lạc */
  { topic: "kinhlac", q: "Có bao nhiêu kinh chính?", o: ["8", "10", "12", "14"], a: 2, e: "Có 12 kinh chính, ứng với 12 tạng phủ (tính cả Tâm bào)." },
  { topic: "kinhlac", q: "“Thủ” trong tên kinh nghĩa là gì?", o: ["Chân", "Tay", "Đầu", "Bụng"], a: 1, e: "Thủ là tay, Túc là chân." },
  { topic: "kinhlac", q: "Ba kinh Dương ở chân (Túc tam dương) đi theo hướng nào?", o: ["Từ chân lên bụng ngực", "Từ đầu mặt xuống ngón chân", "Từ ngực ra ngón tay", "Từ ngón tay lên đầu"], a: 1, e: "Túc tam dương (Vị, Đởm, Bàng quang) đi từ đầu mặt xuống chân." },
  { topic: "kinhlac", q: "Huyệt Hợp cốc (LI4) thuộc kinh nào?", o: ["Phế", "Đại trường", "Vị", "Tâm"], a: 1, e: "LI là viết tắt của Large Intestine (Đại trường). Hợp cốc là huyệt thứ 4." },
  { topic: "kinhlac", q: "Đốc mạch chạy ở đâu?", o: ["Giữa mặt trước bụng, ngực", "Giữa mặt sau lưng, dọc cột sống", "Hai bên sườn", "Mặt trong chân"], a: 1, e: "Đốc mạch chạy dọc cột sống, gọi là bể của các kinh Dương. Nhâm mạch ở giữa mặt trước." },

  /* Nguyên nhân */
  { topic: "nguyennhan", q: "Lục dâm gồm những tà khí nào?", o: ["Phong, Hàn, Thử, Thấp, Táo, Hỏa", "Hỷ, Nộ, Ưu, Tư, Bi, Khủng", "Mộc, Hỏa, Thổ, Kim, Thủy", "Biểu, Lý, Hàn, Nhiệt, Hư, Thực"], a: 0, e: "Lục dâm là sáu khí hậu quá mức hoặc trái mùa gây bệnh." },
  { topic: "nguyennhan", q: "Tà khí nào có đặc tính nặng nề, đục, dính trệ, kéo dài?", o: ["Phong", "Thấp", "Táo", "Hàn"], a: 1, e: "Thấp (ẩm) gây người nặng, phân nát, nước tiểu đục, rêu lưỡi nhớt." },
  { topic: "nguyennhan", q: "Giận quá mức chủ yếu làm tổn hại tạng nào?", o: ["Tâm", "Can", "Phế", "Thận"], a: 1, e: "Nộ (giận) hại Can, làm khí bốc lên: đau đầu, mặt đỏ." },
  { topic: "nguyennhan", q: "Thất tình thuộc nhóm nguyên nhân nào?", o: ["Ngoại nhân", "Nội nhân", "Bất nội ngoại nhân", "Không gây bệnh"], a: 1, e: "Thất tình là cảm xúc quá mức, gây bệnh từ bên trong (nội nhân)." },
  { topic: "nguyennhan", q: "Thử (nắng nóng) chỉ gặp vào mùa nào?", o: ["Xuân", "Hạ", "Thu", "Đông"], a: 1, e: "Thử là khí nóng của mùa hè." },

  /* Tứ chẩn */
  { topic: "tuchan", q: "Tứ chẩn gồm những phương pháp nào?", o: ["Vọng, Văn, Vấn, Thiết", "Biểu, Lý, Hàn, Nhiệt", "Châm, Cứu, Xoa, Bóp", "Âm, Dương, Khí, Huyết"], a: 0, e: "Vọng (nhìn), Văn (nghe, ngửi), Vấn (hỏi), Thiết (sờ, bắt mạch)." },
  { topic: "tuchan", q: "Mạch phù thường gợi ý điều gì?", o: ["Bệnh ở biểu", "Bệnh ở lý", "Hàn", "Huyết ứ"], a: 0, e: "Mạch phù nổi ở nông, thường gặp khi bệnh còn ở biểu." },
  { topic: "tuchan", q: "Mạch sác (nhanh, trên 90 nhịp/phút) gợi ý điều gì?", o: ["Hàn", "Nhiệt", "Hư hàn", "Thấp"], a: 1, e: "Mạch nhanh thường gặp ở chứng nhiệt. Mạch trì (chậm) gợi ý hàn." },
  { topic: "tuchan", q: "Lưỡi tím hoặc có chấm tím thường gợi ý điều gì?", o: ["Huyết ứ", "Âm hư", "Biểu hàn", "Khí hư"], a: 0, e: "Lưỡi tím thường do huyết ngưng đọng (huyết ứ)." },
  { topic: "tuchan", q: "Ba vị trí bắt mạch ở cổ tay là gì?", o: ["Thốn – Quan – Xích", "Phong – Hàn – Thấp", "Tâm – Can – Tỳ", "Phù – Trầm – Trì"], a: 0, e: "Thốn (gần cổ tay), Quan (giữa), Xích (xa nhất)." },

  /* Bát cương */
  { topic: "batcuong", q: "Bát cương chia thành bao nhiêu cặp?", o: ["2 cặp", "3 cặp", "4 cặp", "8 cặp"], a: 2, e: "Bốn cặp: Biểu–Lý, Hàn–Nhiệt, Hư–Thực, Âm–Dương." },
  { topic: "batcuong", q: "Sợ lạnh, thích ấm, tay chân lạnh, phân lỏng, nước tiểu trong thuộc cương nào?", o: ["Hàn", "Nhiệt", "Thực nhiệt", "Biểu"], a: 0, e: "Đây là các biểu hiện của chứng Hàn." },
  { topic: "batcuong", q: "Mới bị 2 ngày, sợ lạnh kèm sốt nhẹ, đau đầu, nghẹt mũi, rêu trắng mỏng, mạch phù thuộc chứng nào?", o: ["Lý hàn", "Lý nhiệt", "Biểu", "Hư nhiệt"], a: 2, e: "Bệnh mới, ở nông, mạch phù là đặc điểm của chứng Biểu." },
  { topic: "batcuong", q: "Trong Bát cương, cặp nào là “tổng cương” (gom lại các cặp còn lại)?", o: ["Hư – Thực", "Hàn – Nhiệt", "Âm – Dương", "Biểu – Lý"], a: 2, e: "Âm dương gom các cặp còn lại: Dương thường là biểu, thực, nhiệt; Âm thường là lý, hư, hàn." },
  { topic: "batcuong", q: "Đau âm ỉ, thích xoa bóp, ấn vào dễ chịu thường thuộc cương nào?", o: ["Thực", "Hư", "Nhiệt", "Biểu"], a: 1, e: "Đau âm ỉ, ấn dễ chịu là đặc điểm của chứng Hư. Đau ấn đau thêm là Thực." }
];
