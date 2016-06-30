$(function(){

	var lists=$(".list1");
	var downs=$(".tab_down");	
	for(var i=0;i<lists.length;i++){
		lists[i].index=i;
		lists[i].onmouseover=function(){
			downs[this.index].style.display="block";
		}
		lists[i].onmouseout=function(){
			for(var j=0;j<downs.length;j++){
				downs[j].style.display="none";
			}
		}
	}





	var box=$(".banner_img")[0];
	var imgs=$(".b_img");
	var yuans=$(".b_yuan");
	var btnR=$("#banner_btnR");
	var btnL=$("#banner_btnL");
	imgs[0].style.opacity=1;
	yuans[0].style.background="red";
	var num=0;
	var flag=true;
	var moveR=function(){
		num++;
		if(num==imgs.length){
			num=0;
		}
		for(var i=0;i<imgs.length;i++){
			// imgs[i].style.opacity=0;
			animate(imgs[i],{opacity:0});
			yuans[i].style.background="#eee";
			// animate(yuans[i],{background:"#eee"});
		}
		// imgs[num].style.opacity=1;
		animate(imgs[num],{opacity:1},function(){flag=true});
		yuans[num].style.background="red";
		// animate(yuans[num],{background:"red"},function(){flag=true;});
	}
	var moveL=function(){
		num--;
		if(num<0){
			num=imgs.length-1;
		}
		for(var i=0;i<imgs.length;i++){
			// imgs[i].style.opacity=0;
			animate(imgs[i],{opacity:0});
			yuans[i].style.background="#eee";
			// animate(yuans[i],{background:"#eee"});
		}
		// imgs[num].style.opacity=1;
		animate(imgs[num],{opacity:1},function(){flag=true});
		yuans[num].style.background="red";
		// animate(yuans[num],{background:"red"},function(){flag=true;});
	}
	btnR.onclick=function(){
		if(flag){
			flag=false;
			moveR();
		}	
	}
	btnL.onclick=function(){
		if(flag){
			flag=false;
			moveL();
		}
			
	}
	
	box.onmouseover=function(){
		clearInterval(t);
	}
	box.onmouseout=function(){
		t=setInterval(moveR,1000);
	}
 
	for(var j=0;j<yuans.length;j++){
		yuans[j].index=j;
		yuans[j].onclick=function(){
			for(var k=0;k<imgs.length;k++){
				// imgs[k].style.opacity=0;
				animate(imgs[k],{opacity:0});
				//imgs[k].style.zIndex=0;
				yuans[k].style.background="#eee";
				// animate(yuans[k],{background:"#eee"},0,Tween.Linear);
			}
			animate(imgs[this.index],{opacity:1});
			// imgs[this.index].style.opacity=1;
			//imgs[this.index].style.zIndex=1;
			yuans[this.index].style.background="red";
			// animate(yuans[this.index],{background:"red"},0,Tween.Linear);
			num=this.index;
		}
	}
	
	
	var t=setInterval(moveR,1500);
// *********************************************节点轮播**********************************************
var win=$(".rmxg")[0];
var box = $(".rmxg1")[0];
var img1s=$(".img1",box);
console.log(imgs)
var len = img1s.length;
var imgW = parseInt(getStyle(img1s[0], "width"));
box.style.width = imgW * len + "px";
// var flag = true;
var t= setInterval(move, 1000);;
function move() {
    // if (!flag) {
    //     return;
    // }
    // flag = false;
    animate(box, {left: -imgW}, function () {
        var first = firstChild(box);
         box.appendChild(first);
        box.style.left = 0;
       

        // flag = true;
    })
}

// function mover() {
//     if (!flag) {
//         return;
//     }
//     flag = false;
//     var first = firstChild(box);
//     var last = lastChild(box);
//     box.style.left = -imgW + "px";
//     box.insertBefore(last, first);
//     animate(box, {left: imgW}, function () {
//     	flag = true;
//         })
// }
win.onmouseover = function () {
    clearInterval(t);
}
win.onmouseout = function () {
    t = setInterval(move, 1000);
}
})