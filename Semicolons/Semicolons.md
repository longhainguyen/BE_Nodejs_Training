# Dấu chấm phẩy trong JavaScript

## Dấu chấm phẩy trong mọi ngôn ngữ đều rất quan trọng để trình biên dịch hiểu được mã,Nếu muốn tránh sử dụng dấu chấm phẩy trong mã của mình thì bạn phải biết về các quy tắc mà trình biên dịch sử dụng khi thêm dấu chấm phẩy trong quá trình phân tích cú pháp mã.

### Trình biên dịch tự thêm dấu chấm phẩy:

-   Khi mã ở dòng tiếp theo phá vỡ mã của dòng hiện tại.
-   Khi dòng tiếp theo đóng khối hiện tại bằng cách sử dụng dấu ‘}’.
-   Khi có một câu lệnh return trên dòng của nó.
-   Khi có một câu lệnh break trên dòng của nó.
-   Khi có một câu lệnh throw trên dòng của nó.
-   Khi có một câu lệnh continue trên dòng của nó.
