// 浅拷贝的思路就是
// TODO 判断区分是引用类型或者不是引用类型，然后直接赋值就行了。是引用类型的话需要新创建一个
let obj = {
  name: "wupeixin",
};
let name1 = "beita";

function clone(obj) {
  if (obj === null) return;
  //TODO 判断是否是引用类型
  // 不是引用类型
  if (typeof obj !== "object") return obj;
  // 引用类型
  let newObj = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

const newObj = clone(obj);
const newName = clone(name1);
console.log(newName == name1);
