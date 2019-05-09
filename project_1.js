$(function(){


	TweenMax.staggerFrom($('.card'),1,{top:100,opacity:0},0.4);
	/*thoi gian chuyen dong=1s, hieu ung chuyen dong tu dưới lên mỗi phần tử lần lượt xuất hiện cách nhau 0.4s*/

	// xu li click chuot btn
	// cach 1: dung jquery
	$(function(){
		$('.btn_1').on('click',function(event){
			//$('html,body').animate({scrollTop: $('.lehoi').offset().top},1400,"easeOutBounce");
			event.preventDefault();
			
			$('html,body').animate({scrollTop:$('.home-order').offset().top},1200,"easeOutBounce");
		})
	})
    // search tu khoa 
	$('.tukhoa').keypress(function(event){
		if(event.keyCode == "13"){
			tu1=$('.tukhoa').val();
			if(tu1 == "bun bo"){
				alert("co "+tu1+" trong menu");
			}
			else alert("well.ko co "+tu1+" trong menu");
		}
	})

})
	// cach 2 : dung js
function setup1(){
		alert("Hiện tại admin Bắc chưa cập nhật mời bạn quay lại sau nhóe.hihi!!");
	}