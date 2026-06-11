Actors
User
Sinh viên
Nhân viên văn phòng
AI Service
Phân tích tài liệu
Trích xuất task và deadline
Tạo task từ hội thoại
Notification Service
Gửi thông báo nhắc nhở

UC01 – Đăng ký tài khoản
Actor
User
Mô tả
Người dùng tạo tài khoản mới để sử dụng hệ thống.
Preconditions
Chưa có tài khoản.
Main Flow
Người dùng chọn "Đăng ký".
Nhập họ tên, email, mật khẩu.
Hệ thống kiểm tra dữ liệu.
Tạo tài khoản thành công.
Postconditions
Tài khoản được lưu vào hệ thống.

UC02 – Đăng nhập tài khoản
Actor
User
Mô tả
Người dùng đăng nhập vào hệ thống.
Preconditions
Đã có tài khoản.
Main Flow
Nhập email và mật khẩu.
Hệ thống xác thực.
Đăng nhập thành công.
Postconditions
Người dùng được truy cập hệ thống.

UC03 – Upload tài liệu
Actor
User
Mô tả
Người dùng tải lên tài liệu PDF hoặc DOCX.
Preconditions
Đã đăng nhập.
Main Flow
Chọn file.
Upload lên hệ thống.
Hệ thống lưu tài liệu.
Kích hoạt AI phân tích tài liệu.
Include
UC04 – Phân tích tài liệu bằng AI
Postconditions
Tài liệu được lưu thành công.

UC04 – Phân tích tài liệu bằng AI
Actor
AI Service
Mô tả
AI đọc nội dung tài liệu và xác định công việc, deadline.
Preconditions
Tài liệu đã được upload.
Main Flow
Đọc nội dung tài liệu.
Trích xuất thông tin quan trọng.
Xác định deadline.
Tạo danh sách task.
Include
UC05 – Tạo task tự động
Postconditions
Danh sách task được tạo.

UC05 – Tạo task tự động
Actor
AI Service
Mô tả
Hệ thống tạo task từ kết quả phân tích tài liệu.
Preconditions
AI đã phân tích tài liệu.
Main Flow
Tạo task.
Gán deadline.
Lưu task vào hệ thống.
Postconditions
Task xuất hiện trong danh sách công việc.

UC06 – Tạo task thủ công
Actor
User
Mô tả
Người dùng tự tạo công việc mới.
Preconditions
Đã đăng nhập.
Main Flow
Chọn "Tạo task".
Nhập tiêu đề.
Nhập mô tả.
Chọn deadline.
Lưu task.
Postconditions
Task được lưu vào hệ thống.

UC07 – Xem danh sách task
Actor
User
Mô tả
Hiển thị tất cả công việc của người dùng.
Preconditions
Đã đăng nhập.
Main Flow
Truy cập trang Task.
Hệ thống hiển thị danh sách công việc.
Extensions
UC08 – Chỉnh sửa task
UC09 – Xóa task
UC10 – Đánh dấu hoàn thành

UC08 – Chỉnh sửa task
Actor
User
Mô tả
Cập nhật thông tin task.
Preconditions
Task tồn tại.
Main Flow
Chọn task.
Chỉnh sửa thông tin.
Lưu thay đổi.
Postconditions
Task được cập nhật.

UC09 – Xóa task
Actor
User
Mô tả
Xóa task khỏi hệ thống.
Preconditions
Task tồn tại.
Main Flow
Chọn task.
Chọn "Xóa".
Xác nhận xóa.
Postconditions
Task bị xóa khỏi hệ thống.

UC10 – Đánh dấu hoàn thành
Actor
User
Mô tả
Cập nhật trạng thái hoàn thành.
Preconditions
Task tồn tại.
Main Flow
Chọn task.
Nhấn "Hoàn thành".
Postconditions
Trạng thái task chuyển sang Completed.

UC11 – Xem lịch
Actor
User
Mô tả
Hiển thị công việc dưới dạng lịch.
Preconditions
Có task trong hệ thống.
Main Flow
Truy cập Calendar.
Hệ thống hiển thị lịch công việc.
Postconditions
Người dùng xem được lịch trình.

UC12 – Nhận thông báo
Actor
Notification Service
Mô tả
Gửi nhắc nhở trước deadline.
Preconditions
Task có deadline.
Main Flow
Hệ thống kiểm tra deadline.
Tạo thông báo.
Gửi tới người dùng.
Postconditions
Người dùng nhận được nhắc nhở.

UC13 – Chat với AI
Actor
User
Mô tả
Người dùng trao đổi với AI bằng ngôn ngữ tự nhiên.
Preconditions
Đã đăng nhập.
Main Flow
Nhập câu hỏi.
AI phân tích yêu cầu.
Trả về câu trả lời phù hợp.
Extensions
UC14 – Tạo task từ hội thoại

UC14 – Tạo task từ hội thoại
Actor
AI Service
Mô tả
AI tạo task từ nội dung trò chuyện.
Preconditions
Người dùng gửi yêu cầu tạo task.
Main Flow
Phân tích câu lệnh.
Xác định tiêu đề công việc.
Xác định deadline.
Tạo task.
Lưu vào hệ thống.
Example
Input:
Nhắc tôi họp khách hàng lúc 14h ngày mai.
Output:
Task: Họp khách hàng
Deadline: 14:00 ngày mai
Postconditions
Task được tạo thành công.

UC15 – Phân tích dữ liệu
Actor
User
Mô tả
Xem thống kê và hiệu suất làm việc.
Preconditions
Có dữ liệu task.
Main Flow
Truy cập Analytics Dashboard.
Hệ thống tổng hợp dữ liệu.
Hiển thị biểu đồ và thống kê.
Include
UC16 – Tạo báo cáo thống kê

UC16 – Tạo báo cáo thống kê
Actor
System
Mô tả
Tạo báo cáo hiệu suất công việc.
Main Flow
Tính tổng task.
Tính task hoàn thành.
Tính task quá hạn.
Tính tỷ lệ hoàn thành.
Hiển thị báo cáo.
Postconditions
Báo cáo được hiển thị cho người dùng.


