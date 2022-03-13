var open = document.getElementById('btn-open');
var bg = document.getElementsByClassName('root-inner')[0]
var content = document.getElementsByClassName('content')[0]
// var img = document.getElementsByTagName('img')[0]
open.onclick = () => {
  bg.style.display = 'block'
}
// 点击图片以外就关闭弹窗
content.onclick = (event) => {
  console.log(event.target)
  if(event.target === content) {
    bg.style.display = 'none'
  }
}
