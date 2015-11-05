class Location {
	private lat : double;
	private lon : double;

	constructor(lat : double, lon  : double){
		this.lat = lat;
		this.lon = lon;
	}

	get lat() : double {
		return this.lat;
	}

	set lat(lat : double){
		this.lat = lat;
	}

	get lon() : double {
		return this.lon;
	}

	set lat(lon : double){
		this.lon = lon;
	}
}