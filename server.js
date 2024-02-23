const express = require('express');
const path = require('path');
const app = express();

// 静的ファイルの提供
app.use(express.static(path.join(__dirname, 'build')));

// すべてのリクエストをindex.htmlにリダイレクト
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// サーバーを起動
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
