const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, 'uploads'));
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: function (req, file, callback) {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg') {
      callback(null, true);
    } else {
      console.log('Wrong format Image');
      callback(null, false);
    }
  },
//   limits: {
//     fileSize: 1024 * 1024 * 2, // 2 MB limit
//   },
});

module.exports = upload;
