let obj1 = {
  name: "wupeixin",
  age: 20,
  address: {
    city: "guangzhou",
  },
  arr: [1, 2, 3, 4],
};
function deepClone(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }
  let result = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    // 防止遍历到原型对象那边的属性去
    if (obj.hasOwnProperty(key)) {
      result[key] = deepClone(obj[key]);
    }
  }
  return result;
}

let obj2 = deepClone(obj1);
obj2.address.city = "beijing";
console.log(obj1.address.city);
