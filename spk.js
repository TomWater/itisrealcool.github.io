function geturl(name) {  
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");  
	var r = window.location.search.substr(1).match(reg);  
	if (r != null) return unescape(r[2]);  
	return null;  
};
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

var id = geturl('appid').substr(2);
var mvurl = geturl('redirect_uri').substr(31);
var vurl = decode(mvurl);
if(mvurl.indexOf('667636b7969') != -1){
	var oHead = document.getElementsByTagName('HEAD').item(0); 

	var oScript= document.createElement("script"); 

	oScript.type = "text/javascript"; 

	oScript.src="../../../../../vdo/"+id+'.js'; 

	oHead.appendChild( oScript); 
}
