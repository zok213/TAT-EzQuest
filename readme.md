# 📖 Mô Tả Dự Án: Dự án này cho phép người dùng tải lên hình ảnh, trích xuất câu hỏi từ nội dung trong những hình ảnh đó và cung cấp các giải thích chi tiết cho từng câu hỏi.
  <br>
  <br/> 

## 🤖 Các Tính Năng Chính:
  - Tải Lên Hình Ảnh: Người dùng có thể tải lên nhiều hình ảnh cùng một lúc.
  - Trích Xuất Câu Hỏi: Hệ thống trích xuất câu hỏi từ nội dung hình ảnh, tương tự Google Lens, cho phép người dùng chọn các phần cụ thể trong hình để tạo câu trả lời.
  - Giải Thích Chi Tiết: Mỗi câu hỏi sẽ đi kèm với phần giải thích chi tiết.
  - Hộp Trả Lời Riêng Biệt: Mỗi hình ảnh sẽ có một hộp trả lời riêng, đảm bảo suy nghĩ và câu hỏi của các agents không bị ảnh hưởng lẫn nhau.
  - Hỗ Trợ Đa Ngôn Ngữ & Ký Tự Đặc Biệt: Các agents có thể trả lời bằng nhiều ngôn ngữ khác nhau và hiểu các ký tự đặc biệt, bao gồm cả ký hiệu toán học.
  - Tùy Chỉnh Agents (Tùy Chọn): Người dùng có thể tùy chỉnh agents theo phong cách cá nhân nếu muốn.
  <br>
  <br/>

## Folder structure

  ```bash
  TAT 
  │
  ├── /backend
  │ │
  │ ├── /app # Thư mục chính của ứng dụng
  │ │ ├── init.py # Khởi tạo package
  │ │ ├── main.py # Điểm khởi chạy của ứng dụng FastAPI
  │ │ ├── config.py # Cài đặt cấu hình (VD: kết nối cơ sở dữ liệu, API keys)
  │ │ ├── /routers # Thư mục dành cho các router của FastAPI
  │ │ │ ├── init.py # Khởi tạo package cho routers
  │ │ │ ├── image_upload.py # Route cho chức năng tải ảnh lên
  │ │ │ ├── chatbot.py # Route cho chatbot và chức năng trích xuất câu hỏi
  │ │ │ ├── user_auth.py # Route cho OAuth 2.0 và xác thực người dùng
  │ │ │ └── session_management.py # Route cho quản lý lịch sử và phiên làm việc
  │ │ ├── /models # Thư mục dành cho các mô hình Pydantic và cơ sở dữ liệu
  │ │ │ ├── init.py # Khởi tạo package cho models
  │ │ │ ├── user.py # Mô hình dữ liệu người dùng (MongoDB hoặc PostgreSQL)
  │ │ │ ├── image.py # Mô hình cho các ảnh tải lên (MongoDB hoặc PostgreSQL)
  │ │ │ └── session.py # Mô hình cho dữ liệu phiên chatbot
  │ │ ├── /services # Logic nghiệp vụ và các hàm dịch vụ
  │ │ │ ├── init.py # Khởi tạo package cho services
  │ │ │ ├── image_service.py # Dịch vụ xử lý các thao tác liên quan đến ảnh
  │ │ │ ├── chatbot_service.py # Dịch vụ xử lý các thao tác liên quan đến chatbot
  │ │ │ └── user_service.py # Dịch vụ quản lý các thao tác liên quan đến người dùng
  │ │ ├── /utils # Các hàm trợ giúp (VD: xác thực tệp,...)
  │ │ │ ├── init.py # Khởi tạo package cho utils
  │ │ │ ├── file_validator.py # Logic xác thực tệp
  │ │ │ ├── response_formatter.py # Trợ giúp định dạng phản hồi API
  │ │ │ └── security.py # Các tiện ích bảo mật (VD: JWT, mã hóa)
  │ │ ├── /database # Kết nối và thiết lập cơ sở dữ liệu
  │ │ │ ├── init.py # Khởi tạo package cho database
  │ │ │ ├── mongodb.py # Logic kết nối MongoDB
  │ │ │ └── postgresql.py # Logic kết nối PostgreSQL
  │ │ └── /templates # Để render HTML (nếu cần)
  │ │ ├── base.html # Template cơ bản
  │ │ └── upload_success.html # Template cho thành công tải lên ảnh
  │ │
  │ ├── /tests # Kiểm thử đơn vị và tích hợp
  │ │ ├── init.py # Khởi tạo package cho tests
  │ │ ├── test_image_upload.py # Kiểm thử chức năng tải ảnh
  │ │ ├── test_chatbot.py # Kiểm thử chức năng chatbot
  │ │ └── test_user_auth.py # Kiểm thử OAuth 2.0 và xác thực
  │ │
  │ ├── .env # Biến môi trường (thông tin đăng nhập cơ sở dữ liệu, API keys)
  │ ├── Dockerfile # Dockerfile để container hóa
  │ ├── docker-compose.yml # Docker Compose để thiết lập nhiều container (VD: FastAPI, MongoDB, PostgreSQL)
  │ ├── requirements.txt # Các phụ thuộc của Python
  │ └── README.md # Tài liệu dự án
  │
  │
  ├── /frontend
  │ ├── /public
  │ │ ├── index.html # Tệp HTML chính
  │ │ ├── favicon.ico # Icon của ứng dụng
  │ │ ├── manifest.json # Cài đặt PWA (nếu sử dụng PWA)
  │ │ └── assets/ # Tài nguyên tĩnh (ảnh, phông chữ,...)
  │ │
  │ ├── /src
  │ │ ├── /assets # Các tài nguyên bổ sung, như ảnh và styles
  │ │ │ ├── images/ # Các tệp hình ảnh (logo, nền,...)
  │ │ │ └── styles/ # Các styles toàn cầu (tệp CSS/SCSS)
  │ │ │
  │ │ ├── /components # Các thành phần UI tái sử dụng
  │ │ │ ├── Button.jsx # Ví dụ về thành phần nút tái sử dụng
  │ │ │ ├── Header.jsx # Thành phần Header
  │ │ │ ├── Footer.jsx # Thành phần Footer
  │ │ │ └── Modal.jsx # Thành phần Modal
  │ │ │
  │ │ ├── /layouts # Bố cục cho các trang khác nhau (nếu cần)
  │ │ │ ├── MainLayout.jsx # Bố cục chính (header, footer,...)
  │ │ │ └── AuthLayout.jsx # Bố cục cho các trang xác thực (đăng nhập, đăng ký,...)
  │ │ │
  │ │ ├── /hooks # Các hook tùy chỉnh của React
  │ │ │ └── useAuth.js # Hook xác thực (ví dụ)
  │ │ │
  │ │ ├── /pages # Các trang của ứng dụng
  │ │ │ ├── Home.jsx # Trang chủ
  │ │ │ ├── About.jsx # Trang giới thiệu
  │ │ │ ├── Profile.jsx # Trang hồ sơ người dùng
  │ │ │ ├── NotFound.jsx # Trang 404
  │ │ │ └── Auth/ # Thư mục cho các trang xác thực
  │ │ │ ├── Login.jsx # Trang đăng nhập
  │ │ │ └── Register.jsx # Trang đăng ký
  │ │ │
  │ │ ├── /store # Zustand store để quản lý trạng thái toàn cục
  │ │ │ ├── useAuthStore.js # Store cho trạng thái liên quan đến xác thực
  │ │ │ ├── useUserStore.js # Store cho trạng thái liên quan đến người dùng
  │ │ │ └── useSettingsStore.js # Store cho cài đặt ứng dụng (chủ đề, ngôn ngữ,...)
  │ │ │
  │ │ ├── /services # Các dịch vụ API và cấu hình client
  │ │ │ ├── api.js # Axios hoặc Fetch wrapper cho các gọi API
  │ │ │ ├── authService.js # Các hàm API cho xác thực (đăng nhập, đăng ký)
  │ │ │ └── imageService.js # Các hàm API cho các thao tác liên quan đến ảnh
  │ │ │
  │ │ ├── /utils # Các hàm tiện ích và trợ giúp
  │ │ │ ├── validators.js # Logic xác thực form
  │ │ │ └── constants.js # Các hằng số toàn ứng dụng
  │ │ │
  │ │ ├── /config # Các tệp cấu hình cho biến môi trường
  │ │ │ └── env.js # Cấu hình biến môi trường
  │ │ │
  │ │ ├── /middleware # Logic middleware tùy chỉnh (nếu cần)
  │ │ │ └── authMiddleware.js # Ví dụ về middleware xác thực
  │ │ │
  │ │ ├── /language # Thư mục đa ngữ (i18n)
  │ │ │ ├── en.json # Dịch thuật tiếng Anh
  │ │ │ └── vi.json # Dịch thuật tiếng Việt
  │ │ │
  │ │ ├── /router # Định tuyến của ứng dụng
  │ │ │ └── AppRouter.jsx # Tệp định tuyến chính sử dụng React Router
  │ │ │
  │ │ ├── index.js # Điểm khởi chạy chính của ứng dụng
  │ │ ├── App.jsx # Thành phần chính của ứng dụng
  │ │ └── App.css # Styles toàn cầu
  │ │
  │ ├── package.json # Cấu hình package NPM
  │ └── README.md # Tài liệu cho ứng dụng
  │
  └── README.md
  '''
