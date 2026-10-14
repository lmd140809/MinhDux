export default function handler(req, res) {
  res.status(500).json({
    status: "error",
    code: 500,
    title: "LỖI",
    message: "Lỗi kết nối mạng\nĐăng nhập máy chủ thất bại: 500"
  });
}
