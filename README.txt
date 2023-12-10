# Tên Dự Án
Mobile Sale Website


## Giới thiệu

- Dự án website Point of sales System
- Được thực hiện bởi: 
+ Sinh viên: Lê Nguyễn Tấn Thi - 52000806   
+ Sinh viên: Nguyễn Đức Minh Thuận - 52000809

### Yêu Cầu

- Node.js (đề xuất phiên bản v20.10.0)
- npm (đề xuất phiên bản 10.2.5)

### Bước 1: Clone dự án

git clone https://gitlab.duthu.net/S52000806/final-project-nodejs.git

### Bước 2: Cài đặt dependencies

Di chuyển vào thư mục dự án và chạy lệnh sau:

npm install

## Cấu Trúc Thư Mục
/
|-- README.md
|-- package.json
|--/src
    |--/app
        |-- /controllers
        |-- /models
        |-- /utils
    |-- /config
    |-- /routes
    |-- /resources
        |--/tailwindcss
        |--/views
    |-- /public
    |-- /middlewares
    |--index.js

README.md: Tập tin chứa thông tin giới thiệu, hướng dẫn sử dụng và các thông tin liên quan khác về dự án.
package.json: Tập tin chứa thông tin về các dependency và cấu hình của dự án.
index.js: File chính để khởi động ứng dụng.
config/: Thư mục dành cho các file cấu hình của dự án.
controllers/: Thư mục chứa các file điều khiển (controllers) để xử lý logic của ứng dụng.
models/: Thư mục chứa các file mô hình dữ liệu (models) để tương tác với cơ sở dữ liệu.
routes/: Thư mục chứa các file định tuyến (routes) cho ứng dụng.
views/: Thư mục chứa các file giao diện người dùng (views) nếu sử dụng template engine như EJS, Pug, hoặc HTML.
public/: Thư mục chứa các tài nguyên tĩnh như CSS, JavaScript và hình ảnh.
middlewares/: Thư mục chứa các middleware, như middleware xác thực (authentication middleware).
utils/: Thư mục chứa các file tiện ích, ví dụ như các hàm trợ giúp (helper functions).


## Sử Dụng

### Cách Chạy

#### 1. Cấu hình

Chỉnh sửa file `config/config.js` nếu cần thiết để đáp ứng cấu hình của bạn.

#### 2. Khởi động Ứng Dụng

npm start

Ứng dụng sẽ chạy trên http://localhost:3000

### Tài Khoản Admin để Test

Để truy cập quyền quản trị, bạn có thể sử dụng tài khoản admin sau:

- Tên đăng nhập: admin
- Mật khẩu: admin

Tài khoản user khác:
- Tên đăng nhập: lenguyentanthi2002
- Mật khẩu: 123

### Video Demo và Báo Cáo
Có thể tìm thấy video demo, báo cáo và các tài liệu khác tại thư mục sau:
https://drive.google.com/drive/folders/1w3DvrUESIh_SdGvNl4WjvFWVk1Sux1RT?usp=sharing
