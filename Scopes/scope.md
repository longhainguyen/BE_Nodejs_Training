# Scope - phạm vi

-   Các loại phạm vi:

    -   Global scope : phạm vi mặc định cho tất cả các code chạy trong script mode.
    -   Module scope : Phạm vi cho code chạy trong module code. : khi sử dụng ES6 Module thì mỗi module sẽ tạo ra một phạm vi riêng. Biến khai báo tại cấp cao nhất trong module vẫn chỉ thuộc module mà không trở thành biến Global
    -   Fucition scope : Phạm vi được tạo trong funtion
        Thêm nữa các biến được khai báo với let hoặc const có thể thuộc về một scope nữa:
    -   Block scope: Phạm vi được tạo bởi dấu ngoặc nhọn.

-   Một hàm tạo ra một phạm vi, do đó (ví dụ) một biến được xác định riêng trong hàm không thể được truy cập từ bên ngoài hàm hoặc bên trong các hàm khác. Ví dụ, những điều sau đây là không hợp lệ: vd1

-   Khi nào biến bị xóa khỏi bộ nhớ:
    -   Biến global: khi f5.
    -   Biến trong Block scope và hàm : Khi thoái khỏi phạm vi.
    -   Biến trong hàm được tham chiếu bởi 1 hàm :
