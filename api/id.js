export default function handler(req, res) {
  res.status(500).json({
    title: "LỖI",
    message: "Lỗi kết nối mạng\nĐăng nhập máy chủ thất bại: 500"
  });
}
