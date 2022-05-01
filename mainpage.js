
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

//교재 9-8 실습 문제 활용
var ret = null; 
window.onclick = function(e)
{
    if(e.target.tagName.toLowerCase() != "li")
    	return;
    else{
		e.target.style.fontSize = "1.2em";
		e.target.style.color = "#63cfa7";
		}
    
    if(ret != null)
    {
        ret.style.fontSize = "1em";
		ret.style.color = "black";
    }
    ret = e.target;
}