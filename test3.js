var getValue = function () {
    return 0;
};
var List;
(function (List) {
    List[List["A"] = getValue()] = "A";
    List[List["B"] = 2] = "B";
    List[List["C"] = 3] = "C";
})(List || (List = {}));
console.log(List);
console.log(List.A); // 0
console.log(List.B); // 2
console.log(List.C); // 3
//A 的值是被计算出来的。注意注释部分，如果某个属性的值是计算出来的，那么它后面一位的成员必须要初始化值。
var str = '1';
var str2 = str; //str、str2 是 string 类型
console.log(str2);
