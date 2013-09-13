// JavaScript Document
$(document).ready(function(e) {
	//alert("Pagina Pronta");
	$("#codeName").text(navigator.appCodeName);
	$("#name").text(navigator.appName);
	$("#version").text(navigator.appVersion);
	$("#cookies").text(navigator.cookieEnabled);
	$("#platform").text(navigator.platform);
	$("#header").text(navigator.userAgent);
	$("#language").text(navigator.systemLanguage);
	
	var logos = {
		linux:   "img/linux.png",
		android: "img/android.jpg",
		windows: "img/windows.jpg",
		mac:     "img/apple.jpg"
	};
	var styles = {
		linux:   "css/linux.css",
		android: "css/android.css",
		windows: "css/windows.css",
		mac:     "css/apple.css"
	};
	
	var tmp = navigator.userAgent.split(")");
	//console.log("tmp: " + tmp);
	var target = tmp[0];
	//console.log("target: " + target);
	var pattern = /(android|linux|windows|mac)/gi;
	var os = target.match(pattern);
	//console.log("os: " + os);
	//console.log("logos[os[0].toLowerCase()]: " + logos[os[0].toLowerCase()]);
	//console.log("os.length: ", os.length);
	var css = document.createElement("link");
	css.setAttribute("rel", "stylesheet");
	css.setAttribute("type", "text/css");
	
	if (os.length == 1) {
		//alert(os[0]);
		$("#osLogo").attr("src", logos[os[0].toLowerCase()]);
		$("#osLogo").attr("alt", logos[os[0].toLowerCase()]);
		css.setAttribute("href", styles[os[0].toLowerCase()]);
		document.getElementsByTagName("head")[0].appendChild(css);
	}else {
		var osList = "";
		for (var i=0; i<os.length; i++) osList += " " + os[i];
		if ((/android/gi).test(osList)){
			$("#osLogo").attr("src", logos.android);
			$("#osLogo").attr("alt", logos.android);
			css.setAttribute("href", styles.android);
			document.getElementsByTagName("head")[0].appendChild(css);
		} else {
			alert("Rilevato sistema:" + osList);
		}
	}
});