// authMiddleware.js
const jwt = require('jsonwebtoken');
require('dotenv').config();

const checkLogin = (req, res, next) => {
  const token = req.cookies.token; // Lấy token từ cookie

  if (!token) {
      // Nếu không có token, chuyển hướng về trang đăng nhập
      return res.redirect('/login');
  }

  jwt.verify(token, process.env.TOKEN_SECRET_KEY, (err, user) => {
      if (err) {
          // Nếu token không hợp lệ, chuyển hướng về trang đăng nhập
          return res.redirect('/login');
      }

      // Lưu thông tin người dùng vào request để sử dụng trong các xử lý tiếp theo
      req.user = user;
      next();
  });
};
  
const logout = (req, res, next) => {
    // Xóa thông tin người dùng khỏi session
    req.session.destroy();
  
    // Xóa cookie người dùng
    res.clearCookie('token');
  
    // Chuyển hướng đến trang đăng nhập
    res.redirect('/login');
};
  
module.exports = {
    checkLogin,
    logout,
};
  