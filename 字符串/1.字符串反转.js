var str = "beita0527";
function reverseString(s) {
  // TODO 定义两个指针，分别从头部和尾部向中间遍历，并交换位置
  let left = 0;
  let right = s.length - 1;
  for (let i = 0; i < s.length; i++) {
    while (left < right) {
      [s[left], s[right]] = [s[right], s[left]]
      left++;
      right--;
    }
  }
  return s;
}

console.log(str.split('').reverse().join(''))
