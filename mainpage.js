
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

   var counter = 1;
    setInterval(function(){
      document.getElementById('radio' + counter).checked = true;
      counter++;
      if(counter > 4){
        counter = 1;
      }
    }, 2000);