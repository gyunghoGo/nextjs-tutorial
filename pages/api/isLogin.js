export default function handler(req, res) {
  res.status(200);
  res.json({ name: req.cookies.a_name });
}
