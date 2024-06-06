# Trong Javascript, this ám chỉ một object. Tùy vào cách sử dụng

-   Trong phương thức object, this ám chỉ đến object đó
-   Nếu ở một mình, nó ám chỉ global object.
-   Trong function, this ám chỉ global object.
-   Trong fuction, ở strict mode , this là undefined.
-   Trong sự kiện, this ám chỉ element nhận được event.

## this is not a variable. It is a keyword. You cannot change the value of this.

-   Các phương thức bind(), call(), apply() có thể tham chiếu this tới đối tượng khác.
