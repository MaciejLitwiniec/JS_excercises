var myNewObject = new Object();
myNewObject.info = "information about object"

function myFunc () {
	alert(this.info);
}

myNewObject.showInfo = myFunc;




//-----------------------------------------------

var nextObject = new Object();
nextObject.info = "tekst opisujacy";

function myNewFunction () {
	alert(this.info);
}

nextObject.showInformation = myNewFunction;



//funkcja anonimowa
myNewObject.showInfo = function(){
	alert(this.info);
};

//==============instancjonowanie poprzez konstruktor==========================
function myObjectType () {
	this.info = "new object";

	function showInfo () {
		alert(this.info);
	};

	function setInfo (newInfo) {
		this.info = newInfo;
	};

};


var evenNextObject = new myObjectType();
