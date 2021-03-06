// call apply bind
// 所有的函数都从Function.prototype中继承了call、apply、bind方法。可以通过这些方法来设置函数内部this的值。
// call和apply的主要区别
// apply：以数组的形式接受传递给函数的参数
// call：以单个分开参数
var PersonClass = (function () {
    function PersonClass(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    PersonClass.prototype.greet = function (city, country) {
        var msg = this.name + this.surname + city + country;
        console.log(msg);
    };
    return PersonClass;
}());
var person = new PersonClass('remo', 'jansen');
person.greet('dalian', 'liaoning');
// 使用call apply调用greet方法，需要将第一个参数指定为person对象，这是因为，我们希望greet方法的内部this执行对象person。如果指定person，那么greet中的this.name和this.surname是undefined
person.greet.call(person, 'dalian', 'liaoning');
person.greet.apply(person, ['dalian', 'liaoning']);
// call和apply只在希望函数内的this操作符指向其他值时才有意义
// bind方法可以为我们设置this的值，但不执行它 ，一旦使用bind方法为一个函数内的this进行绑定，就不能再次覆盖它
var person = new PersonClass('remo', 'jansen');
var greet = person.greet.bind(person);
var valueOfthis = { name: 'tom', surname: 'file' };
var greet = person.greet.bind(valueOfthis);
greet.call(valueOfthis, 'dalian', 'liaoning'); //remo jansen dalian liaoning
greet.apply(valueOfthis, ['dalian', 'liaoning']); //remo jansen dalian liaoning
/**
 * 原型
 */
// 通过prototyped的方式为类（函数）添加方法、属性的方式，称之为原型声明

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy8wM19ydW50aW1lLzAzXzAxLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFrQjtBQUVsQix3RUFBd0U7QUFFeEUsa0JBQWtCO0FBQ2xCLHlCQUF5QjtBQUN6QixlQUFlO0FBRWY7SUFJSSxxQkFBWSxJQUFhLEVBQUUsT0FBZ0I7UUFDdkMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDM0IsQ0FBQztJQUVNLDJCQUFLLEdBQVosVUFBYSxJQUFhLEVBQUUsT0FBZ0I7UUFDeEMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksR0FBRyxPQUFPLENBQUM7UUFDcEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQWJBLEFBYUMsSUFBQTtBQUVELElBQUksTUFBTSxHQUFHLElBQUksV0FBVyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztBQUMvQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUVuQyxtSUFBbUk7QUFDbkksTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUMvQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUMsQ0FBQyxRQUFRLEVBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztBQUNqRCxzQ0FBc0M7QUFFdEMsZ0VBQWdFO0FBQ2hFLElBQUksTUFBTSxHQUFHLElBQUksV0FBVyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztBQUMvQyxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUV0QyxJQUFJLFdBQVcsR0FBRyxFQUFDLElBQUksRUFBRyxLQUFLLEVBQUUsT0FBTyxFQUFHLE1BQU0sRUFBQyxDQUFDO0FBQ25ELElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBRTNDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFBLDZCQUE2QjtBQUMxRSxLQUFLLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBQyxDQUFDLFFBQVEsRUFBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUEsNkJBQTZCO0FBRzVFOztHQUVHO0FBQ0gsMENBQTBDIiwiZmlsZSI6IjAzX3J1bnRpbWUvMDNfMDEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjYWxsIGFwcGx5IGJpbmRcclxuXHJcbi8vIOaJgOacieeahOWHveaVsOmDveS7jkZ1bmN0aW9uLnByb3RvdHlwZeS4ree7p+aJv+S6hmNhbGzjgIFhcHBseeOAgWJpbmTmlrnms5XjgILlj6/ku6XpgJrov4fov5nkupvmlrnms5XmnaXorr7nva7lh73mlbDlhoXpg6h0aGlz55qE5YC844CCXHJcblxyXG4vLyBjYWxs5ZKMYXBwbHnnmoTkuLvopoHljLrliKtcclxuLy8gYXBwbHnvvJrku6XmlbDnu4TnmoTlvaLlvI/mjqXlj5fkvKDpgJLnu5nlh73mlbDnmoTlj4LmlbBcclxuLy8gY2FsbO+8muS7peWNleS4quWIhuW8gOWPguaVsFxyXG5cclxuY2xhc3MgUGVyc29uQ2xhc3Mge1xyXG4gICAgcHVibGljIG5hbWUgOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgc3VybmFtZSA6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lIDogc3RyaW5nLCBzdXJuYW1lIDogc3RyaW5nKXtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuc3VybmFtZSA9IHN1cm5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdyZWV0KGNpdHkgOiBzdHJpbmcsIGNvdW50cnkgOiBzdHJpbmcpe1xyXG4gICAgICAgIHZhciBtc2cgPSB0aGlzLm5hbWUgKyB0aGlzLnN1cm5hbWUgKyBjaXR5ICsgY291bnRyeTtcclxuICAgICAgICBjb25zb2xlLmxvZyhtc2cpO1xyXG4gICAgfVxyXG59XHJcblxyXG52YXIgcGVyc29uID0gbmV3IFBlcnNvbkNsYXNzKCdyZW1vJywgJ2phbnNlbicpO1xyXG5wZXJzb24uZ3JlZXQoJ2RhbGlhbicsICdsaWFvbmluZycpO1xyXG5cclxuLy8g5L2/55SoY2FsbCBhcHBseeiwg+eUqGdyZWV05pa55rOV77yM6ZyA6KaB5bCG56ys5LiA5Liq5Y+C5pWw5oyH5a6a5Li6cGVyc29u5a+56LGh77yM6L+Z5piv5Zug5Li677yM5oiR5Lus5biM5pybZ3JlZXTmlrnms5XnmoTlhoXpg6h0aGlz5omn6KGM5a+56LGhcGVyc29u44CC5aaC5p6c5oyH5a6acGVyc29u77yM6YKj5LmIZ3JlZXTkuK3nmoR0aGlzLm5hbWXlkox0aGlzLnN1cm5hbWXmmK91bmRlZmluZWRcclxucGVyc29uLmdyZWV0LmNhbGwocGVyc29uLCdkYWxpYW4nLCAnbGlhb25pbmcnKTtcclxucGVyc29uLmdyZWV0LmFwcGx5KHBlcnNvbixbJ2RhbGlhbicsJ2xpYW9uaW5nJ10pO1xyXG4vLyBjYWxs5ZKMYXBwbHnlj6rlnKjluIzmnJvlh73mlbDlhoXnmoR0aGlz5pON5L2c56ym5oyH5ZCR5YW25LuW5YC85pe25omN5pyJ5oSP5LmJXHJcblxyXG4vLyBiaW5k5pa55rOV5Y+v5Lul5Li65oiR5Lus6K6+572udGhpc+eahOWAvO+8jOS9huS4jeaJp+ihjOWugyDvvIzkuIDml6bkvb/nlKhiaW5k5pa55rOV5Li65LiA5Liq5Ye95pWw5YaF55qEdGhpc+i/m+ihjOe7keWumu+8jOWwseS4jeiDveWGjeasoeimhuebluWug1xyXG52YXIgcGVyc29uID0gbmV3IFBlcnNvbkNsYXNzKCdyZW1vJywgJ2phbnNlbicpO1xyXG52YXIgZ3JlZXQgPSBwZXJzb24uZ3JlZXQuYmluZChwZXJzb24pO1xyXG5cclxudmFyIHZhbHVlT2Z0aGlzID0ge25hbWUgOiAndG9tJywgc3VybmFtZSA6ICdmaWxlJ307XHJcbnZhciBncmVldCA9IHBlcnNvbi5ncmVldC5iaW5kKHZhbHVlT2Z0aGlzKTtcclxuXHJcbmdyZWV0LmNhbGwodmFsdWVPZnRoaXMsJ2RhbGlhbicsICdsaWFvbmluZycpOy8vcmVtbyBqYW5zZW4gZGFsaWFuIGxpYW9uaW5nXHJcbmdyZWV0LmFwcGx5KHZhbHVlT2Z0aGlzLFsnZGFsaWFuJywnbGlhb25pbmcnXSk7Ly9yZW1vIGphbnNlbiBkYWxpYW4gbGlhb25pbmdcclxuXHJcblxyXG4vKipcclxuICog5Y6f5Z6LXHJcbiAqL1xyXG4vLyDpgJrov4dwcm90b3R5cGVk55qE5pa55byP5Li657G777yI5Ye95pWw77yJ5re75Yqg5pa55rOV44CB5bGe5oCn55qE5pa55byP77yM56ew5LmL5Li65Y6f5Z6L5aOw5piOXHJcbiJdfQ==
