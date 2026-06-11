Use Case Specifications
UC-01: Upload tài liệu
Actor: User
Mục tiêu: Tạo task tự động từ tài liệu.
Luồng chính:
User chọn file PDF/DOCX.
Hệ thống tải file lên.
AI đọc nội dung.
AI trích xuất task và deadline.
Hiển thị kết quả cho user xác nhận.
Lưu task.

UC-02: Tạo task thủ công
Actor: User
Mục tiêu: Tạo nhanh công việc không có trong tài liệu.
Luồng chính:
User chọn "Tạo Task".
Nhập tiêu đề.
Nhập deadline.
Chọn độ ưu tiên.
Lưu task.

UC-03: Quản lý task
Actor: User
Chức năng:
Xem danh sách task.
Chỉnh sửa task.
Xóa task.
Đánh dấu hoàn thành.

UC-04: Nhận thông báo
Actor: Notification Service
Mục tiêu: Nhắc người dùng trước deadline.
Ví dụ:
Trước 7 ngày.
Trước 1 ngày.
Trước 1 giờ.

UC-05: Xem lịch công việc
Actor: User
Mục tiêu: Theo dõi toàn bộ task trên giao diện lịch.

UC-06: Chat với AI (Giai đoạn 2)
Ví dụ câu hỏi:
Tôi có việc gì hôm nay?
Deadline gần nhất là gì?
Tóm tắt công việc tuần này.

