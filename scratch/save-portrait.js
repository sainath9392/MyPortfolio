const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  if (req.method === 'POST' && req.url === '/save-portrait') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        const { image } = JSON.parse(body);
        const base64Data = image.replace(/^data:image\/png;base64,/, '');
        fs.writeFileSync('public/img/sainath-portrait.png', base64Data, 'base64');
        console.log('Successfully saved public/img/sainath-portrait.png');
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('SUCCESS');
        setTimeout(() => process.exit(0), 500);
      } catch (err) {
        console.error(err);
        res.writeHead(500);
        res.end('ERROR');
      }
    });
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(5175, () => console.log('Crop server listening on 5175'));
