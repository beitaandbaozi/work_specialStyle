// 阻止表单默认提交
var form = document.getElementsByTagName('form')[0]
form.addEventListener('submit', function (e) {
  e.preventDefault();
});

// Ajax提交  (需要处理跨域)
const params = {
  username: $('#username').val(),
  password: $('#password').val(),
}
$('#submit-btn').click(function () {
  $.ajax({
    url: 'http://www.baidu.com',
    type: 'POST',
    data: JSON.stringify(params),
    contentType: "application/json", // 默认以formdata形式发送给后台
    dataType: "json",
    success: function (res) {
      console.log(res)
    }
  })
})