$(document).ready(function(){
	$('[action-type="industry-type"]').children().mouseover(function(){
		$test=$(this).children().attr('action-data');
		$test_type="background: #2D2D2D "+$test+" no-repeat left top;";
		$(this).children().attr("style",$test_type);
	});
	$('[action-type="industry-type"]').children().mouseout(function(){
		$test=$(this).children().attr('action-data');
		$test_type="background:"+$test+" no-repeat left bottom;";
		$(this).children().attr("style",$test_type);
	});
	/*
	 * 以下为首页ajax调用产品的代码
	$('[action-type="industry-type"]').children().click(function(){
		var $index_data=$(this).attr("action-data");
		$.ajax({
			type:'post',
			url:"/index.php/index/index_ajax",
			data:$index_data,
			dataType:'json',
			success:function($log)
			{
				if($log['code']==1)
				{
					//$('[action-type="product_html"]').children().remove();
					$('[action-type="product_html"]').html($log.html);
				}
				else
				{
					alert("没有更多数据。。。");
					$('[action-type="product_html"]').html('');
					return false;
				}
			}
		});
	});
	*/
});