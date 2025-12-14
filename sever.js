const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Xin chào Phúc Lộc! Đây là bản Deploy tự động');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});