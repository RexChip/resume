let _circle = document.querySelectorAll('.circle')
let _requestBox = document.querySelector('.requestBox')

function getAjaxHtml() {
  axios({
    method: 'get',
    url: 'ajax/index.html',
    responseType: 'text'
  }).then((result) => {
    _requestBox.innerHTML = result.data
  })
}

setTimeout(() => {
  _circle.forEach(function (el) {
    let _radius = el.getAttribute('data-raidus')
    let _circumference = Math.PI * (_radius * 2)
    let _percent = el.getAttribute('data-percent')

    el.style.strokeDashoffset = ((100 - _percent) / 100) * _circumference
  })
}, 500);