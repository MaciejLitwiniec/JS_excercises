function Pet () {
	this.animal = "";
	this.name = "";

	function setAnimal (animal) {
		this.animal = animal;
	};
	function setName (name) {
		this.name = name;
	};	
};

var pet1 = new Pet();
Pet.prototype.setGender = function(gender) {
	this.gender = gender;
};

//--------------------------------------------------