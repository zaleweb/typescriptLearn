// 函数声明和函数表达式
function funcName(param) {
    return 'result';
}
var funcName1 = function (param) {
    return "sres";
};
//函数类型 
// 显式声明
function funcName2(param) {
    return 'result';
}
var greetUnnamed;
greetUnnamed = function (param) {
    return "sres";
};
var greetUnnamed1 = function (param) {
    return "sres";
};
// 可选参数
function add(foo, foo1, foo2) {
    return foo + foo1 + foo2;
}
console.log(add(2, 2));
console.log(add(2, 3, 2));
// 包含默认参数
function add1(foo, foo1, foo2) {
    if (foo2 === void 0) { foo2 = 1; }
    return foo + foo1 + foo2;
}
console.log(add1(2, 2));
console.log(add1(2, 3, 2));
// 剩余参数
function add2() {
    var foo = [];
    for (var _a = 0; _a < arguments.length; _a++) {
        foo[_a] = arguments[_a];
    }
    var result = 0;
    for (var i = 0; i < foo.length; i++) {
        result += foo[i];
    }
    return result;
}
console.log(add2(2, 2));
console.log(add2(2, 3, 2));
//函数重载
//function test(name : string) : string;
function test(age) { return ""; }
;
// 立即调用函数
// js代码
var bar = 0;
(function () {
    var foo = 0; //函数作用域
    bar = 1; //全局作用域
    console.log(bar); //1
    console.log(foo); //0
})();
console.log(bar); //1
//console.log(foo);//报错
//--------------------------------------------------
var bar = 0;
(function (global) {
    var foo = 0; //函数作用域
    bar = 1; //全局作用域
    console.log(global.bar); //1
    console.log(foo); //0
})(this);
console.log(bar); //1
//console.log(foo);//报错
// 类的定义
var counter = (function () {
    function counter() {
        this._i = 0;
    }
    counter.prototype.get = function () {
        return this._i;
    };
    counter.prototype.set = function (val) {
        this._i = val;
    };
    counter.prototype.increment = function () {
        this._i++;
    };
    return counter;
}());
var counter1 = new counter();
console.log(counter1.get());
counter1.set(2);
console.log(counter1.get());
counter1.increment();
console.log(counter1.get());

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy8wMV9mdW5jdGlvbi8wMV8wMS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxhQUFhO0FBRWIsa0JBQW1CLEtBQWM7SUFDL0IsTUFBTSxDQUFDLFFBQVEsQ0FBQztBQUNsQixDQUFDO0FBRUQsSUFBSSxTQUFTLEdBQUcsVUFBUyxLQUFjO0lBQ3JDLE1BQU0sQ0FBQyxNQUFNLENBQUM7QUFDaEIsQ0FBQyxDQUFBO0FBR0QsT0FBTztBQUVQLE9BQU87QUFDUCxtQkFBb0IsS0FBYztJQUNoQyxNQUFNLENBQUMsUUFBUSxDQUFDO0FBQ2xCLENBQUM7QUFHRCxJQUFJLFlBQXdDLENBQUM7QUFFN0MsWUFBWSxHQUFHLFVBQVMsS0FBYztJQUNwQyxNQUFNLENBQUMsTUFBTSxDQUFDO0FBQ2hCLENBQUMsQ0FBQTtBQUdELElBQUksYUFBYSxHQUErQixVQUFTLEtBQWM7SUFDckUsTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUNoQixDQUFDLENBQUE7QUFHRCxPQUFPO0FBQ1AsYUFBYSxHQUFZLEVBQUUsSUFBYSxFQUFFLElBQWM7SUFDdEQsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQzNCLENBQUM7QUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFFdkIsU0FBUztBQUNULGNBQWMsR0FBWSxFQUFFLElBQWEsRUFBRSxJQUFpQjtJQUFqQixxQkFBQSxFQUFBLFFBQWlCO0lBQzFELE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQztBQUMzQixDQUFDO0FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDdEIsT0FBTyxDQUFD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QUMsR0FBRyxFQUFFLENBQUMsQ0FBQyIsImZpbGUiOiIwMV9mdW5jdGlvbi8wMV8wMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIOWHveaVsOWjsOaYjuWSjOWHveaVsOihqOi+vuW8j1xyXG5cclxuZnVuY3Rpb24gZnVuY05hbWUgKHBhcmFtIDogc3RyaW5nKSA6IHN0cmluZyB7XHJcbiAgcmV0dXJuICdyZXN1bHQnO1xyXG59XHJcblxyXG52YXIgZnVuY05hbWUxID0gZnVuY3Rpb24ocGFyYW0gOiBzdHJpbmcpIDogc3RyaW5ne1xyXG4gIHJldHVybiBcInNyZXNcIjtcclxufVxyXG5cclxuXHJcbi8v5Ye95pWw57G75Z6LIFxyXG5cclxuLy8g5pi+5byP5aOw5piOXHJcbmZ1bmN0aW9uIGZ1bmNOYW1lMiAocGFyYW0gOiBzdHJpbmcpIDogc3RyaW5nIHtcclxuICByZXR1cm4gJ3Jlc3VsdCc7XHJcbn1cclxuXHJcblxyXG52YXIgZ3JlZXRVbm5hbWVkIDogKG5hbWUgOiBzdHJpbmcpID0+IHN0cmluZztcclxuXHJcbmdyZWV0VW5uYW1lZCA9IGZ1bmN0aW9uKHBhcmFtIDogc3RyaW5nKSA6IHN0cmluZ3tcclxuICByZXR1cm4gXCJzcmVzXCI7XHJcbn1cclxuXHJcblxyXG52YXIgZ3JlZXRVbm5hbWVkMSA6IChuYW1lIDogc3RyaW5nKSA9PiBzdHJpbmcgPSBmdW5jdGlvbihwYXJhbSA6IHN0cmluZykgOiBzdHJpbmd7XHJcbiAgcmV0dXJuIFwic3Jlc1wiO1xyXG59XHJcblxyXG5cclxuLy8g5Y+v6YCJ5Y+C5pWwXHJcbmZ1bmN0aW9uIGFkZChmb28gOiBudW1iZXIsIGZvbzEgOiBudW1iZXIsIGZvbzI/IDogbnVtYmVyKXtcclxuICByZXR1cm4gZm9vICsgZm9vMSArIGZvbzI7XHJcbn1cclxuXHJcbmNvbnNvbGUubG9nKGFkZCgyLDIpKVxyXG5jb25zb2xlLmxvZyhhZGQoMiwzLDIpKVxyXG5cclxuLy8g5YyF5ZCr6buY6K6k5Y+C5pWwXHJcbmZ1bmN0aW9uIGFkZDEoZm9vIDogbnVtYmVyLCBmb28xIDogbnVtYmVyLCBmb28yIDogbnVtYmVyID0gMSl7XHJcbiAgcmV0dXJuIGZvbyArIGZvbzEgKyBmb28yO1xyXG59XHJcblxyXG5jb25zb2xlLmxvZyhhZGQxKDIsMikpXHJcbmNvbnNvbGUubG9nKGFkZDEoMiwzLDIpKVxyXG5cclxuXHJcbi8vIOWJqeS9meWPguaVsFxyXG5cclxuZnVuY3Rpb24gYWRkMiguLi5mb28gOiBudW1iZXJbXSkgOiBudW1iZXIge1xyXG4gIHZhciByZXN1bHQgPSAwO1xyXG4gIGZvcih2YXIgaSA9IDA7IGkgPCBmb28ubGVuZ3RoOyBpKyspe1xyXG4gICAgcmVzdWx0ICs9IGZvb1tpXTtcclxuICB9XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5jb25zb2xlLmxvZyhhZGQyKDIsMikpXHJcbmNvbnNvbGUubG9nKGFkZDIoMiwzLDIpKVxyXG5cclxuLy/lh73mlbDph43ovb1cclxuXHJcbi8vZnVuY3Rpb24gdGVzdChuYW1lIDogc3RyaW5nKSA6IHN0cmluZztcclxuZnVuY3Rpb24gdGVzdChhZ2UgOiBudW1iZXIpIDogc3RyaW5ne3JldHVybiBcIlwifTtcclxuXHJcbi8vIOeJueWumumHjei9veetvuWQjVxyXG5cclxuaW50ZXJmYWNlIHRlc3RJbnRlcmZhY2Uge1xyXG4gIGNyZWF0ZUVsZW1lbnQodGFnTmFtZSA6IFwiZGl2XCIpIDogSFRNTERpdkVsZW1lbnQ7Ly/nibnlrprph43ovb3nrb7lkI1cclxuICBjcmVhdGVFbGVtZW50KHRhZ05hbWUgOiBzdHJpbmcpIDogSFRNTEVsZW1lbnQ7Ly/pnZ7nibnlrprph43ovb3nrb7lkI1cclxufVxyXG5cclxuLy8g56uL5Y2z6LCD55So5Ye95pWwXHJcblxyXG4vLyBqc+S7o+eggVxyXG52YXIgYmFyID0gMDtcclxuKGZ1bmN0aW9uKCkge1xyXG4gIHZhciBmb28gOiBudW1iZXIgPSAwOyAvL+WHveaVsOS9nOeUqOWfn1xyXG4gIGJhciA9IDE7Ly/lhajlsYDkvZznlKjln59cclxuICBjb25zb2xlLmxvZyhiYXIpOy8vMVxyXG4gIGNvbnNvbGUubG9nKGZvbyk7Ly8wXHJcbn0pKCk7XHJcblxyXG5jb25zb2xlLmxvZyhiYXIpOy8vMVxyXG4vL2NvbnNvbGUubG9nKGZvbyk7Ly/miqXplJlcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG52YXIgYmFyID0gMDtcclxuKGZ1bmN0aW9uKGdsb2JhbCkge1xyXG4gIHZhciBmb28gOiBudW1iZXIgPSAwOyAvL+WHveaVsOS9nOeUqOWfn1xyXG4gIGJhciA9IDE7Ly/lhajlsYDkvZznlKjln59cclxuICBjb25zb2xlLmxvZyhnbG9iYWwuYmFyKTsvLzFcclxuICBjb25zb2xlLmxvZyhmb28pOy8vMFxyXG59KSh0aGlzKTtcclxuY29uc29sZS5sb2coYmFyKTsvLzFcclxuLy9jb25zb2xlLmxvZyhmb28pOy8v5oql6ZSZXHJcblxyXG4vLyDnsbvnmoTlrprkuYlcclxuY2xhc3MgY291bnRlciB7XHJcbiAgLy8g6YCa5bi45L2/55SoIF8g5byA5aeL5L2c5Li656eB5pyJ5Y+Y6YeP55qE5ZG95ZCNXHJcbiAgcHJpdmF0ZSBfaSA6IG51bWJlcjtcclxuICBjb25zdHJ1Y3RvciAoKXtcclxuICAgIHRoaXMuX2kgPSAwO1xyXG4gIH1cclxuXHJcbiAgZ2V0KCkgOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2k7XHJcbiAgfVxyXG5cclxuICBzZXQodmFsIDogbnVtYmVyKSA6IHZvaWQge1xyXG4gICAgdGhpcy5faSA9IHZhbDtcclxuICB9XHJcblxyXG4gIGluY3JlbWVudCgpIDogdm9pZCB7XHJcbiAgICB0aGlzLl9pKys7XHJcbiAgfVxyXG59XHJcblxyXG52YXIgY291bnRlcjEgPSBuZXcgY291bnRlcigpO1xyXG5jb25zb2xlLmxvZyhjb3VudGVyMS5nZXQoKSk7XHJcbmNvdW50ZXIxLnNldCgyKTtcclxuY29uc29sZS5sb2coY291bnRlcjEuZ2V0KCkpO1xyXG5jb3VudGVyMS5pbmNyZW1lbnQoKTtcclxuY29uc29sZS5sb2coY291bnRlcjEuZ2V0KCkpO1xyXG5cclxuIl19
