
let curPos = 0;
let postion = 0;

let cursor; // 커서 이미지를 가진 <div> 객체
function makeCursor() {
	cursor = document.getElementById("cursor");
	document.onmousemove = function (e) {
		cursor.style.left = e.pageX + "px";
		cursor.style.top =e.pageY+7+"px";
		
		
	}
}

const slideDelay = 2000;
const dynamicSlider = document.getElementById("slider");

      var curSlide = 0;
      window.setInterval(()=>{
        curSlide++;
        if (curSlide === dynamicSlider.childElementCount) {
          curSlide = 0;
        }
        dynamicSlider.firstElementChild.style.setProperty("margin-left", "-" + curSlide + "00%");
      }, slideDelay);

