var str = "abccba";
function isEequStr(str) {
  // TODO 将字符串转成数组进行翻转，再和之前的判断是否相等即可
  // 统一转成小写
  str = str.toLowerCase();
  if (!str.length) return;
  let reverseStr = str.split("").reverse().join("");
  return reverseStr == str;
}

function isEequStr(str) {
  // TODO 使用双指针，分别从头部和尾部向中间遍历，一边遍历一边进行判断即可
  str = str.toLowerCase();
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    // 如果相等则更改比较的索引
    if (str[left] === str[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
}
console.log(isEequStr(str));
