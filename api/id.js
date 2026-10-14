export default function handler(req, res) {
  // Lấy query param "unben"
  const unben = req.query.unben || 'khong-co';

  // Lấy IP người gọi
  const ip =
    req.headers['x-forwarded-for'] ||
    req.socket?.remoteAddress ||
    'unknown';

  // Lấy thời gian
  const time = new Date().toISOString();

  // In ra log (xem ở Vercel → Logs)
  console.log(`[${time}] IP=${ip} ID=${unben}`);

  // Trả về đúng như server gốc
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.status(200).send('OK');
}
