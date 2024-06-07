# Async/Await là gì?

Trước đây, để làm việc với code bất đồng bộ, chúng ta sử dụng callback và promise, Async/Await là một cách mới để viết code bất đồng bộ, được Javascript giới thiệu từ bản cập nhật ES7. Nó được xây dựng trên Promise và tương thích với tất cả Promise dựa trên API. Trong đó:

Async được dùng để khai báo một hàm bất đồng bộ. Việc sử dụng async chỉ đơn giản là ngụ ý rằng một lời hứa sẽ được trả lại và nếu một lời hứa không được trả lại, JavaScript sẽ tự động kết thúc nó.

Await được sử dụng để chờ một Promise. Nó chỉ có thể được sử dụng bên trong một khối Async. Từ khóa Await làm cho JavaScript đợi cho đến khi promise trả về kết quả. Cần lưu ý rằng nó chỉ làm cho khối chức năng không đồng bộ chờ đợi chứ không phải toàn bộ chương trình thực thi.
