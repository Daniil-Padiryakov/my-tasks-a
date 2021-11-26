const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/my-tasks-a'));

app.get('/*', function (req, res) {
  res.sendFile('index.html', {root: 'dist/my-tasks-a/'}
  );
});

app.listen(process.env.PORT || 8080);
