"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 范型
 */
var jquery_1 = require("jquery");
// 类的定义
var User = (function () {
    function User() {
    }
    return User;
}());
//jquery和class 的应用
function getUsers(cb) {
    jquery_1.default.ajax({
        url: '/api/users',
        method: 'POST',
        success: function (data) {
            cb(data.items);
        },
        error: function (error) {
            cb(null);
        }
    });
}
//调用getUsers函数后执行传入的参数
getUsers(function (users) {
    for (var i = 0; users.length; i++) {
        console.log(users[i].name);
    }
});
// 类的定义
var Order = (function () {
    function Order() {
    }
    return Order;
}());
function getOrders(cb) {
    jquery_1.default.ajax({
        url: '/api/users',
        method: 'POST',
        success: function (data) {
            cb(data.items);
        },
        error: function (error) {
            cb(null);
        }
    });
}
//调用getOrder函数后执行传入的参数
getOrders(function (orders) {
    for (var i = 0; orders.length; i++) {
        console.log(orders[i].name);
    }
});
// 范型的用法
function getEntities(url, cb) {
    jquery_1.default.ajax({
        url: url,
        method: 'POST',
        success: function (data) {
            cb(data.items);
        },
        error: function (error) {
            cb(null);
        }
    });
}
getEntities('/api/users', function (users) {
    for (var i = 0; users.length; i++) {
        console.log(users[i].name);
    }
});
getEntities('/api/orders', function (orders) {
    for (var i = 0; orders.length; i++) {
        console.log(orders[i].name);
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy8wMV9mdW5jdGlvbi8wMV8wMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOztHQUVHO0FBQ0gsaUNBQXNCO0FBRXRCLE9BQU87QUFDUDtJQUFBO0lBSUEsQ0FBQztJQUFELFdBQUM7QUFBRCxDQUpBLEFBSUMsSUFBQTtBQUVELGtCQUFrQjtBQUNsQixrQkFBbUIsRUFBNkI7SUFDNUMsZ0JBQUMsQ0FBQyxJQUFJLENBQUM7UUFDSCxHQUFHLEVBQUMsWUFBWTtRQUNoQixNQUFNLEVBQUUsTUFBTTtRQUNkLE9BQU8sRUFBRSxVQUFTLElBQUk7WUFDbEIsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixDQUFDO1FBQ0QsS0FBSyxFQUFDLFVBQVMsS0FBSztZQUNoQixFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDYixDQUFDO0tBRUosQ0FBQyxDQUFBO0FBQ04sQ0FBQztBQUNELHNCQUFzQjtBQUN0QixRQUFRLENBQUMsVUFBUyxLQUFjO0lBQzVCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFBO0FBRUYsT0FBTztBQUNQO0lBQUE7SUFJQSxDQUFDO0lBQUQsWUFBQztBQUFELENBSkEsQUFJQyxJQUFBO0FBR0QsbUJBQW9CLEVBQStCO0lBQy9DLGdCQUFDLENBQUMsSUFBSSxDQUFDO1FBQ0gsR0FBRyxFQUFDLFlBQVk7UUFDaEIsTUFBTSxFQUFFLE1BQU07UUFDZCxPQUFPLEVBQUUsVUFBUyxJQUFJO1lBQ2xCLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsQ0FBQztRQUNELEtBQUssRUFBQyxVQUFTLEtBQUs7WUFDaEIsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2IsQ0FBQztLQUVKLENBQUMsQ0FBQTtBQUNOLENBQUM7QUFDRCxzQkFBc0I7QUFDdEIsU0FBUyxDQUFDLFVBQVMsTUFBZ0I7SUFDL0IsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUE7QUFHRixRQUFRO0FBRVIscUJBQXdCLEdBQVksRUFBRSxFQUF5QjtJQUMzRCxnQkFBQyxDQUFDLElBQUksQ0FBQztRQUNILEdBQUcsRUFBRSxHQUFHO1FBQ1IsTUFBTSxFQUFFLE1BQU07UUFDZCxPQUFPLEVBQUUsVUFBUyxJQUFJO1lBQ2xCLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsQ0FBQztRQUNELEtBQUssRUFBQyxVQUFTLEtBQUs7WUFDaEIsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2IsQ0FBQztLQUVKLENBQUMsQ0FBQTtBQUNOLENBQUM7QUFFRCxXQUFXLENBQU8sWUFBWSxFQUFDLFVBQVMsS0FBYztJQUNsRCxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQztBQUVILFdBQVcsQ0FBUSxhQUFhLEVBQUMsVUFBUyxNQUFnQjtJQUN0RCxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiIwMV8wMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDojIPlnotcclxuICovIFxyXG5pbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCJcclxuXHJcbi8vIOexu+eahOWumuS5iVxyXG5jbGFzcyBVc2VyIHtcclxuICAgIC8v5a6a5LmJ5bGe5oCnXHJcbiAgICBuYW1lIDogc3RyaW5nO1xyXG4gICAgYWdlIDogbnVtYmVyOyAgIFxyXG59XHJcblxyXG4vL2pxdWVyeeWSjGNsYXNzIOeahOW6lOeUqFxyXG5mdW5jdGlvbiBnZXRVc2VycyggY2IgOiAodXNlcnMgOiBVc2VyW10pID0+IHZvaWQpIDogdm9pZCB7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDonL2FwaS91c2VycycsXHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgIGNiKGRhdGEuaXRlbXMpOyAgXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjpmdW5jdGlvbihlcnJvcil7XHJcbiAgICAgICAgICAgIGNiKG51bGwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KVxyXG59XHJcbi8v6LCD55SoZ2V0VXNlcnPlh73mlbDlkI7miafooYzkvKDlhaXnmoTlj4LmlbBcclxuZ2V0VXNlcnMoZnVuY3Rpb24odXNlcnMgOiBVc2VyW10pe1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IHVzZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codXNlcnNbaV0ubmFtZSk7XHJcbiAgICB9XHJcbn0pXHJcblxyXG4vLyDnsbvnmoTlrprkuYlcclxuY2xhc3MgT3JkZXIge1xyXG4gICAgLy/lrprkuYnlsZ7mgKdcclxuICAgIG5hbWUgOiBzdHJpbmc7XHJcbiAgICBhZ2UgOiBudW1iZXI7ICAgXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBnZXRPcmRlcnMoIGNiIDogKG9yZGVycyA6IE9yZGVyW10pID0+IHZvaWQpIDogdm9pZCB7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDonL2FwaS91c2VycycsXHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgIGNiKGRhdGEuaXRlbXMpOyAgXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjpmdW5jdGlvbihlcnJvcil7XHJcbiAgICAgICAgICAgIGNiKG51bGwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KVxyXG59XHJcbi8v6LCD55SoZ2V0T3JkZXLlh73mlbDlkI7miafooYzkvKDlhaXnmoTlj4LmlbBcclxuZ2V0T3JkZXJzKGZ1bmN0aW9uKG9yZGVycyA6IE9yZGVyW10pe1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IG9yZGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG9yZGVyc1tpXS5uYW1lKTtcclxuICAgIH1cclxufSlcclxuXHJcblxyXG4vLyDojIPlnovnmoTnlKjms5VcclxuXHJcbmZ1bmN0aW9uIGdldEVudGl0aWVzPFQ+KHVybCA6IHN0cmluZywgY2IgOiAobGlzdCA6IFRbXSkgPT4gdm9pZCkgOiB2b2lkIHtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgIGNiKGRhdGEuaXRlbXMpOyAgXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjpmdW5jdGlvbihlcnJvcil7XHJcbiAgICAgICAgICAgIGNiKG51bGwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KVxyXG59XHJcblxyXG5nZXRFbnRpdGllczxVc2VyPignL2FwaS91c2VycycsZnVuY3Rpb24odXNlcnMgOiBVc2VyW10pe1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IHVzZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codXNlcnNbaV0ubmFtZSk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZ2V0RW50aXRpZXM8T3JkZXI+KCcvYXBpL29yZGVycycsZnVuY3Rpb24ob3JkZXJzIDogT3JkZXJbXSl7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgb3JkZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cob3JkZXJzW2ldLm5hbWUpO1xyXG4gICAgfVxyXG59KTsiXX0=
