(function(win){

	var document = win.document;

//-----------------------------------------------按钮事件代理------------------------------------------------------------//
	$(document).delegate('[role="button"]','click',function(){
        		var btnid =  $(this).attr("id");
				var url = "http://127.0.0.1:";
				var port = "8080";
				switch(btnid){
				case 'getActionButton':
     				var action = url + port +"/rest/restlet/getdemo";
				    Server.agent("GET","",action);
				break;
				case 'postActionButton':
     				var action = url + port +"/rest/restlet/postdemo";
				    var data = '{"'+$('#key1').val()+'":"'+ $('#value1').val()+'","'+ $('#key2').val()+'":"'+ $('#value2').val()+'"}';
				    Server.agent("POST",data,action);
				break;
				case 'displayGetAction':
     				 $('#getActionButton').attr('style','display:block');
				     $('#postActionButton').attr('style','display: none');
				     $('#postActionKeyValue').attr('style','display: none');
					  $("#txtReceive").val("");
			    break;
				case 'displayPostAction':
     				$('#postActionButton').attr('style','display:block');
				    $('#postActionKeyValue').attr('style','display:block');
				    $('#getActionButton').attr('style','display: none');
					$("#txtReceive").val("");
				break;
				case 'addKeyValueRow':
     				alert("未实现...");
				break;
				default:
					$(this).parent().parent().parent().hide();
		}
		})
	

//--------------------------------------------------- Server -----------------------------------------------------//
	var  Server = {
		 parentPath : '/',
         agent:function(type,data,urls){
			 $.ajax({
					 type: type,
					 contentType: "application/json;charset=utf-8",
					 url: urls,
					 data: data,
					 success: function (data,textStatus) {
								if("success"===textStatus){ 
										var results = $('#receiver');
										results.attr('style','display:block');
								        $("#txtReceive").val(data);
									    alert("数据获取成功！" );
										
						        }
					 },
					 error:function(XMLHttpRequest, textStatus, errorThrown){
					            alert( "访问错误"  );
					}
			});	
	 }
	}
})(window)