
var run = false;
var obj = $("#regfrm").attr("action")

function send()
{
	if(run==true)
		return ;
	run  = true;
	$.post(obj, {sids: "125729" } );
	run = false;
}
setInterval("send()",300);