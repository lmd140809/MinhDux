export default function handler(req, res) {
  const unben = req.query.unben || 'unknown';
  const time = new Date().toISOString();

  console.log(`[${time}] ID=${unben}`);

  // Trả JSON mà tool FF sẽ đọc và hiện thông báo
  res.status(200).json({
    status: "success",
    code: 200,
    title: "THÔNG BÁO",
    message: "Đã gỡ ban thành công cho ID: " + unben,
    type: "success",  // tool dùng field này để chọn màu khung
    time: time,
    data: {
      userId: unben,
      action: "unban",
      server: "FF-Antiban-v3"
    }
  });
}
