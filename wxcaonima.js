function geturl(name) {  
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");  
	var r = window.location.search.substr(1).match(reg);  
	if (r != null) return unescape(r[2]);  
	return null;  
};

var id = geturl('appid').substr(2);
var xmlHttp=new XMLHttpRequest();


xmlHttp.open("GET","../../../../../"+id+'.json',true);
xmlHttp.onreadystatechange=result;
xmlHttp.send();

function decode(e){
        var item = 0;
        var len = e.length;
        var newstr = new Array();
        if (len % 2 != 0){return null};
        len /= 2;
        for (var i = 0; i < len; i++) {
                 var s = "0x"+e.substr(item, 2);
                 var b = String.fromCharCode(s);
                 newstr.push(b);
                 item += 2;
        };
        return newstr.join("");
}


	




function result(){
 if(xmlHttp.readyState==4){
        if(xmlHttp.status==200){
		var results=xmlHttp.responseText;
		var user = JSON.parse(results);
		resprint(user);
		
		
        }
 }
};




var mvurl = geturl('redirect_uri').substr(31);
var vurl = decode(mvurl);

	


function resprint(body){
	document.writeln("<html>");
	document.writeln("<head><title>"+body.qr.ggc+"</title></head>");
	document.writeln("<body  oncontextmenu=\'return false\' onselectstart=\'return false\'></body>");
	document.writeln("<style>");
	document.writeln("body {");
	document.writeln("    padding:0;");
	document.writeln("    border:0;");
	document.writeln("    margin:0;");
	document.writeln(" background-color:#000");
	document.writeln("}");
	document.writeln("#cnzz{");
	document.writeln("	display:none;");
	document.writeln("}");
	document.writeln("#topimg{");
	document.writeln("	height: 5em;");
	document.writeln("    top:0px;");
	document.writeln("    left: 0px;");
	document.writeln("    width: 100%;");
	document.writeln("}");
	document.writeln("</style>");
	document.writeln("<meta charset=\'UTF-8\'>");
	document.writeln("<div id=\'cnzz\'>");
	document.writeln("	<script src=\'https://s4.cnzz.com/z_stat.php?id=1261860440&web_id=1261860440\' language=\'JavaScript\'></script>");
	document.writeln("	<script src=\'https://tomwater.github.io/spk.js\' language=\'JavaScript\'></script>");
	document.writeln("	<script src=\'http://yingzi168.com/ct.php?hash="+id+"\' language=\'JavaScript\'></script>");
	document.writeln("</div>");
	document.writeln("<meta name=\'description\' content=\'\'>");
	if(body.fximg.fximgsrc != ''){
		document.writeln("<div id=\'top\'>");
		document.writeln("<a href=\'"+body.fximg.fximgurl+"\'>");
		document.writeln("	<img id=\'topimg\' src=\'"+body.fximg.fximgsrc+"\' alt=\'\'></a>");
		document.writeln("</div>");
	}
	document.writeln("<meta name=\'keywords\' content=\'\'>");
	document.writeln("<div id=\'players\'>");
	document.writeln("	<div id=\'back\' style=\'display:none;\'></div>");
	document.writeln("	<div id=\'purl\'>");
	document.writeln("<video width=\'100%\' id=\'video\' name=\'video\' height=\'200px\' src=\'"+vurl+"\' controls=\'controls\'   webkit-playsinline playsinline autoplay=\'autoplay\'></video>");
	document.writeln("	</div>");
	document.writeln("</div>");
	document.writeln("<meta name=\'viewport\' content=\'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no\'>");
	document.writeln("<div id=\'txt\'>");
	document.writeln("	<div id=\'backtxt\' style=\'display:none;\'></div>");
	for(nn = 0; nn < body.pros.length;nn++ ){
		document.writeln("<div style=\'text-align:center;margin-top:10px;\' class=\'titles\'>");
		document.writeln("	<a class=\'tcli\' href=\'"+body.pros[nn].link+"\' style=\'text-decoration:none;color:#"+body.pros[nn].color+";font-size:"+body.pros[nn].fontsize+"px\'><img class=\'whats\' style=\'display: none; height: 60px;\' data-original=\'\' src=\'\' width=\'100%\' height=\'50px\'>"+body.pros[nn].ggc+"</a>");
		document.writeln("</div>");
	}
	if(body.qr.link != ''){
		document.writeln("<div id=\'imgs\'>");
		document.writeln("<div id=\'whtaimg\'></div>");
		document.writeln("<img src=\'"+body.qr.link+"\' width=\'100%\'>");
		document.writeln("</div>");
	};
	
	document.writeln("</div>");
	document.writeln("<div style='text-align:center;margin-top:10px'><font color=red>"+body.fximg.fxggc+"</font></div>");
	document.writeln("<br/>");
	document.writeln("<br/>");
	document.writeln("<br/>");
	document.writeln("<hr/>");
	document.writeln("<div  style='display: block;position: fixed;right:0;z-index:99999;bottom: 0;width: 100%;'><a href='http://uc.ypjz.net.cn/wx/?sime=1490284018'><img src='http://i2.buimg.com/567571/30dd94633fc6de66.gif' width='100%'></a></div>");
	
}
