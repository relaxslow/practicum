
// build css style with javascript
var css = '#title { background: red; }',
	head = document.head || document.getElementsByTagName('head')[0],
	style = document.createElement('style');

style.type = 'text/css';
if (style.styleSheet) {
	style.styleSheet.cssText = css;
} else {
	style.appendChild(document.createTextNode(css));
}

head.appendChild(style);

//open a Url file
var oRequest = new XMLHttpRequest();
var sURL = "http://" + self.location.hostname + "/faq/requested_file.htm";

oRequest.open("GET", sURL, false);
oRequest.setRequestHeader("User-Agent", navigator.userAgent);
oRequest.send(null)

if (oRequest.status == 200) alert(oRequest.responseText);
else alert("Error executing XMLHttpRequest call!");

//---------------------------------------------------
document.querySelector("#myLink").addEventListener(
	"click", function (event) {
		event.preventDefault();
		var file = document.getElementById("myLink").getAttribute("href");
		console.log(file)
		var rawFile = new XMLHttpRequest();
		rawFile.open("GET", file, false);
		rawFile.onreadystatechange = function () {
			if (rawFile.readyState === 4) {
				if (rawFile.status === 200 || rawFile.status === 0) {
					var allText = rawFile.responseText;
					console.log(allText);
				}
			}
		}
		rawFile.send(null);
	}, false);

//----------------------------
function getText() {
	// read text from URL location
	var request = new XMLHttpRequest();
	request.open('GET', 'http://www.puzzlers.org/pub/wordlists/pocket.txt', true);
	request.send(null);
	request.onreadystatechange = function () {
		if (request.readyState === 4 && request.status === 200) {
			var type = request.getResponseHeader('Content-Type');
			if (type.indexOf("text") !== 1) {
				return request.responseText;
			}
		}
	}
}

//--------------------
var blob = null;
var xhr = new XMLHttpRequest(); 
xhr.open("GET", "/favicon.png"); 
xhr.responseType = "blob";//force the HTTP response, response-type header to be blob
xhr.onload = function() 
{
    blob = xhr.response;//xhr.response is now a blob object
}
xhr.send();
//If the blob is representing a binary file then you need to copy the content of the blob into a ArrayBuffer and then analyze it.
var myReader = new FileReader();
myReader.readAsArrayBuffer(blob)
myReader.addEventListener("loadend", function(e)
{
        var buffer = e.srcElement.result;//arraybuffer object
});

//If the blob is representing a text file then you can retrieve its content as a string and analyze it.
var myReader = new FileReader(); 
myReader.addEventListener("loadend", function(e){
    var str = e.srcElement.result;
});
myReader.readAsText(blob);

//------------------------------------------------------
function reqListener () {
	console.log(this.responseText);
  }
  
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener);
  oReq.open("GET", "http://www.example.org/example.txt");
  oReq.send();

// send to server
  function sendText(txt) {
	var xhr = new XMLHttpRequest();
	xhr.open('POST', "https://drive.google.com/uc?export=download&id=1umRqu3I0Rl64g73Cht_FXk9UdewcRKff", true);
	xhr.onload = function (e) {
		if (this.status == 200) {
			console.log(this.responseText);
		}
	};

	xhr.send(txt);
}