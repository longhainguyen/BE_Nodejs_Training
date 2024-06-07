let languages = ['JavaScript', 'PHP', 'Ruby'];

console.log(languages.toString());
console.log(languages.join('-'));

console.log(languages.pop()); // xóa thằng cuối và trả về thằng đó
console.log(languages);

console.log(languages.push('Dart', 'Java')); // thêm phần tử vào cuối mảng và trả về độ dài mảng
console.log(languages.shift()); // xóa phần tử đầu mảng và trả về phần tử đó

console.log(languages.unshift('Dart', 'Java')); // thêm phần tử vào đầu mảng và trả về độ dài

languages = ['JavaScript', 'PHP', 'Ruby'];

console.log(languages.splice(0, 2)); // xoa tu 0 den 2
console.log(languages);

console.log(languages.splice(1, 0, 'Dart')); // xóa 0 tại vị trí 1, thêm 'Dart' vào vị trí 1
console.log(languages);

console.log(languages.concat(['1', '2']));

languages = ['JavaScript', 'PHP', 'Ruby'];
console.log(languages.slice(1, 3));
