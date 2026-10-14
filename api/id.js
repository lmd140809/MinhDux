export default function handler(req, res) {
  const unben = req.query.unben || 'khong-co';
  const ip = req.headers['x-forwarded-for'] || 'unknown';
  const time = new Date().toISOString();

  console.log(`[${time}] IP=${ip} ID=${unben}`);

  // 🎭 GIẢ LẬP thông báo "thành công" — nhưng KHÔNG có tác dụng thật
  res.status(200).json({
    status: "success",
    code: 200,
    message: "✅ Đã gỡ ban thành công!",
    details: {
      userId: unben,
      action: "unban",
      server: "antiban-system-v2",
      processedAt: time,
      note: "Tài khoản của bạn đã được đưa ra khỏi danh sách ban."
    }
  });
}
