const http = require('http');
const fs = require('fs');
const route = require('./route');

const server = http.createServer((req, res) => {

    if (req.url === '/login' && req.method === 'GET') {
        // Gửi nội dung của file login.html cho trình duyệt web
        fs.readFile('./login.html', (err, data) => {
            if (err) throw err;
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        });
    }
    else if (req.url === '/style.css' && req.method === 'GET') {
      // Gửi nội dung của file style.css cho trình duyệt web
      fs.readFile('./style.css', (err, data) => {
          if (err) throw err;
          res.setHeader('Content-Type', 'text/css');
          res.end(data);
      });
    } 
    else if (req.url === '/login' && req.method === 'POST') {
        // Xử lý yêu cầu đăng nhập từ người dùng
        route.loginHandler(req, res);
    } 
    else if (req.url === '/logout' && req.method === 'POST') {
        // Xử lý yêu cầu đăng xuất từ người dùng
        route.logoutHandler(req, res);
    } 
    else if (req.url === '/logout.html' && req.method === 'GET') {
        // Gửi nội dung của file logout.html cho trình duyệt web
        fs.readFile('./logout.html', (err, data) => {
            if (err) throw err;
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        });
    } 
    else if (req.url === '/home.html' && req.method === 'GET') {
      // Gửi nội dung của file logout.html cho trình duyệt web
      fs.readFile('./home.html', (err, data) => {
          if (err) throw err;
          res.setHeader('Content-Type', 'text/html');
          res.end(data);
      });
  } 
    else {
        // Trả về mã trạng thái 404 nếu không tìm thấy tài nguyên yêu cầu
        res.statusCode = 404;
        res.end();
    }
});

server.listen(3000);

console.log('Server is running at...');
console.log('http://127.0.0.1:3000/login');