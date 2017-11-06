let defaultParent;
function createTitle(titleStr) {
	document.title = titleStr;
}
function createNav() {
	let body = document.body;
	let div = document.createElement("div");
	div.id = "topNav";
	body.appendChild(div);

	let menuItem = document.createElement("a");
	menuItem.className = "menu";
	menuItem.innerHTML = "ADD";
	menuItem.href = "add.html";
	div.appendChild(menuItem);

	menuItem = document.createElement("a");
	menuItem.className = "menu";
	menuItem.innerHTML = "SEARCH";
	menuItem.href = "search.html";
	div.appendChild(menuItem);
}
function init() {
	createTitle("customer system");
	defaultParent = document.body;
	// createNav();	
}
function getParent(parentStr) {
	let parent;
	if (parentStr == "")
		parent = defaultParent;
	else
		parent = document.getElementById(parentStr);
	return parent;
}
function addDiv(idStr, parentStr = "") {

	let div = document.getElementById(idStr);
	if (div != null) {
		if (div == defaultParent)
			defaultParent = div.parentNode;
		div.parentNode.removeChild(div);
	}
	div = document.createElement("div");
	div.id = idStr;
	let parent = getParent(parentStr);
	parent.appendChild(div);
	defaultParent = div;
}
function setParent(idStr) {
	let parent = document.getElementById(idStr);
	defaultParent = parent;
}

function clearDiv(idStr) {
	let div = document.getElementById(idStr);
	div.innerHTML = "";
	defaultParent = div;
}
function addButton(nameStr, onclickFun = null, idStr="",parentStr = "") {
	let parent = getParent(parentStr);
	let button = document.createElement("button");
	button.innerHTML = nameStr;
	button.onclick = onclickFun;
	parent.appendChild(button);
	return button;
}
function addHead(nameStr, parentStr = "") {
	let parent = getParent(parentStr);
	let head = document.createElement("h3");
	head.innerHTML = nameStr;
	head.className = "pageHead";
	parent.appendChild(head);
	return head;
}

function addText(nameStr, parentStr = "") {
	let parent = getParent(parentStr);
	let head = document.createElement("p");
	head.innerHTML = nameStr;
	parent.appendChild(head);
	return head;
}
function addInput(nameStr = "", idStr = "", readonly = false, displayText = "", dateListArr = [], parentStr = "") {
	let parent = getParent(parentStr);
	if (nameStr != "") {
		let text = document.createTextNode(nameStr + " ");
		parent.appendChild(text);
	}
	let br = document.createElement("br");
	parent.appendChild(br);
	let input = document.createElement("input");
	input.type = "text";
	if (idStr != "")
		input.id = idStr;
	parent.appendChild(input);
	if (dateListArr.length != 0) {
		createDateList(parentStr, "adateList", dateListArr)
		input.setAttribute('list', "adateList");
	}
	input.readOnly = readonly;
	input.value = displayText;
	br=document.createElement("br");
	parent.appendChild(br);
}
function addBR(parentStr = "") {
	let parent = getParent(parentStr);
	let lineBreak = document.createElement("br");
	parent.appendChild(lineBreak);
}