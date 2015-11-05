///<reference path='Location.ts'/>

class FoodVendor {
	
	private id : string;
	private address : string;
	private name : string;
	private location : Location;
	private description : string;
	private status : string;

	constructor(id : string, key : string, address : string, name : string, location : Location, description : string, status : string){
		this.id : string;
		this.address = address;
		this.name = name;
		this.location = location;
		this.description = description;
		this.status = status;		
	}

	get id() : string {
		return this.id;
	}

	set id(id : string){
		this.lon = lon;
	}

	get address() : string {
		return this.address;
	}

	set address(address : string){
		this.address = address;
	}

	get name() : string {
		return this.name;
	}

	set name(name : string){
		this.name = name;
	}

	get location() : Location {
		return this.location;
	}

	set location(location : Location){
		this.location = location;
	}

	get description() : string {
		return this.description;
	}

	set description(description : string){
		this.description = description;
	}

	get status() : string {
		return this.status;
	}

	set status(status : string){
		this.status = status;
	}
}