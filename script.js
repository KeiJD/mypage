
//  <div>현재 서울의 날씨 : <span id="temp">20</span>도</div>

// document 가 불러오지면 ready 된다는 함수임.. 자동실행!!
$(document).ready(function () {
    fetch("http://spartacodingclub.shop/sparta_api/weather/seoul").then(res => res.json()).then(data => {
        // console.log(data)
        let tempo = data['temp']
        $('#temp').empty() 
        let text_html = `${tempo} 도`
        $('#temp').text(text_html)
    })
})