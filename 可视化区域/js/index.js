var showFlag = false;
// $('.open').click(() => {
//   console.log('ok')
//   if (!showFlag) {
//     $('.nav').css({
//       transform: 'translateX(-200px)',
//       transition: 'all 1s'
//     })
//     $('.open').css({
//       transform: 'translateX(-200px)',
//       transition: 'all 1s'
//     })
//     showFlag = true
//   } else {
//     $('.nav').css({
//       transform: 'translateX(0px)',
//       transition: 'all 1s'
//     })
//     $('.open').css({
//       transform: 'translateX(0px)',
//       transition: 'all 1s'
//     })
//     showFlag = false
//   }
// })
function openNav() {
  if (!showFlag) {
    $('.nav').css({
      transform: 'translateX(-200px)',
      transition: 'all 1s'
    })
    $('.open').css({
      transform: 'translateX(-200px)',
      transition: 'all 1s'
    })
    showFlag = true
  } else {
    $('.nav').css({
      transform: 'translateX(0px)',
      transition: 'all 1s'
    })
    $('.open').css({
      transform: 'translateX(0px)',
      transition: 'all 1s'
    })
    showFlag = false
  }
}