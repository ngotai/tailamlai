var http = require('http');//Phương thức “require”: đọc, thực thi, xử lý…đối tượng
var url = require('url')
var fs = require('fs');
http.createServer(function (request, response) { //“createServer”: tạo server nhận request từ client
    response.writeHead(200, {'Content-Type': 'text/html'}); // “writeHead” : gởi “header data” cho client
    var url = request.url;
    if (url == '/') {
        fs.readFile('index.html', function (error, data) {
            if (error == null) {
                response.write(data);
                response.end();
            } else {
                response.end(error);
            }
        });
    } else if (url == '/login') {
        response.end("Welcome to login");
    } else if (url == '/insert') { // chèn
        fs.writeFile('insert.txt', 'Ghi vao nha', function (error) {
            if (error == null) {
                response.end("Ghi thanh cong");
            } else {
                response.end(error);
            }
        });
    } else if (url == '/append') { // phần phụ
        fs.appendFile('insert.txt', 'Ghi vao nha nha', function (error) {
            if (error == null) {
                response.end("Ghi thanh cong phan phu");
            } else {
                response.end(error);
            }
        });

    } else if (url == '/unlink') { // hủy liên kết
        fs.unlink('insert.txt', function (error) {
            if (error == null) {
                response.end("Xoa thanh cong");
            } else {
                response.end(error);
            }
        });
    } else if (url == '/rename') { // đổi tên
        fs.rename('insert.txt', 'inserts.txt', function (error) {
            if (error == null) {
                response.end("Doi ten thanh cong");
            } else {
                response.end(error);
            }
        });
    } else {
        response.end("404 not found");
    }

}).listen(3000);// “listen(8080): xác định port thực thi
