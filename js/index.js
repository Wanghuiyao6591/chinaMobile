$(function(){
	//                 ************************************************选项卡*************************************************
	var list=$(".list1");
	var down=$(".tab_down")
	var dian=function(i){
		list[i].onmouseover=function(){
			down[i].style.display="block";
		}
		down[i].onmouseover=function(){
			down[i].style.display="block";
		}
		down[i].onmouseout=function(){
			down[i].style.display="none";
		}
		list[i].onmouseout=function(){
			down[i].style.display="none";
		}		
	}
	for(var i=0;i<list.length;i++){
		dian(i);
	}
	// for(var i=0;i<list.length;i++){
	// 	list[i].num=i;
	// 	list[i].onmouseover=function(){
	// 		down[this.num].style.display="block";
	// 	}
	// 	//this代表的就是当前的对象
	// 	down[i].onmouseover=function(){
	// 		down[this.num].style.display="block";
	// 	}
	// 	down[i].onmouseout=function(){
	// 		for(var j=0;j<down.length;j++){
	// 			down[j].style.display="none";
	// 		}
	// 	}
	// 	list[i].onmouseout=function(){
	// 		for(var j=0;j<down.length;j++){
	// 			down[j].style.display="none";
	// 		}
	// 	}
	// }

	//                 ************************************************轮播图*************************************************
	// var imgs=$(".b_img");
	// var yuans=$(".b_yuan");
	// imgs[0].style.zIndex=1;
	// yuans[0].style.background="red";
	// var num=0;
	// //自动轮播
	// setInterval(function(){
	// 	//更新下标
	// 	num++;
	// 	if(num==imgs.length){
	// 		num=0;
	// 	}
	// 	//所有图片层级下降，当前图片层级上升
	// 	for(var i=0;i<imgs.length;i++){
	// 		imgs[i].style.zIndex=0;
	// 		yuans[i].style.background="#eee";
	// 	}
	// 	imgs[num].style.zIndex=1;
	// 	yuans[num].style.background="red";
	// },1000)


	var imgs=$(".b_img");
	var yuans=$(".b_yuan");
	var box=$(".banner_img")[0];
	var btnL=$("#banner_btnL");
	var btnR=$("#banner_btnR");
	imgs[0].style.zIndex=1;
	yuans[0].style.background="red";
	var num=0;
	//右轮播
	var moveR=function(){
		num++;
		if(num==imgs.length){
				num=0;
			}
		for(var i=0;i<imgs.length;i++){
			imgs[i].style.zIndex=0;
			yuans[i].style.background="#eee";
		}
		imgs[num].style.zIndex=1;
		yuans[num].style.background="red";
	}
	//左轮播
	var moveL=function(){
		num--;
		if(num==0){
			num=imgs.length;
			}
		for(var i=0;i<imgs.length;i++){
			imgs[i].style.zIndex=0;
			yuans[i].style.background="#eee";
		}
		imgs[num].style.zIndex=1;
		yuans[num].style.background="red";
	}
	var t=setInterval(moveR,1000);
	box.onmouseover=function(){
		clearInterval(t);
	}
	box.onmouseout=function(){
		t=setInterval(moveR,800);
	}
	btnR.onclick=function(){
		moveR();
	}
	btnL.onclick=function(){
		moveL();
	}
	for(var j=0;j<yuans.length;j++){
		yuans[j].index=j;
		yuans[j].onclick=function(){
			for(var k=0;k<imgs.length;k++){
				imgs[k].style.zIndex=0;
				yuans[k].style.background="#eee";
			}
			yuans[this.index].style.background="red";
			imgs[this.index].style.zIndex=1;
			num=this.index;
		}
	}
	
	
	
	
})