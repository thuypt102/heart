const querystring = require('querystring');

const loginHandler = function(request, response) {
    // Xử lý yêu cầu đăng nhập từ người dùng
    let body = '';
    request.on('data', chunk => {
        body += chunk.toString();
    });
    request.on('end', () => {
        const data = querystring.parse(body);
        if (data.username === 'admin' && data.password === '123456') {
            // Đăng nhập thành công
            // Set cookie cho trình duyệt web lưu lại
            response.setHeader("Cookie", "session=admin; HttpOnly");
            // Chuyển hướng sang trang logout.html
            response.statusCode = 302;
            response.setHeader("Location", "/home.html");
            response.end();
        } else {
            // Đăng nhập không thành công
            response.setHeader('Content-Type', 'text/html; charset=utf-8');
            response.end('Sai tên tài khoản hoặc mật khẩu!');
        }
    });
};

const logoutHandler = function(request, response) {
    // Thay đổi cookie và chuyển cho trình duyệt web lưu lại
    response.setHeader("Cookie", "session=normal; HttpOnly");
};

module.exports = {
  loginHandler,
  logoutHandler
};
//module.exports.loginHandler = loginHandler;
//module.exports.logoutHandler = logoutHandler;