class locations{
	public name : string;
	public image : string;
	public address : string;

	constructor(name, image, address){
		this.name = name;
		this.image = image;
		this.address = address;
	}
	output(){
		return `
			<div class="card col-lg-3 col-md-6 col-sm-12">
				<div class="cardName">
					<h3>${this.name}</h3>
				</div>
				<div class="cardImage">
					<img src="${this.image}">
				</div>
				<div class="cardDescription">
					<p><i class="fas fa-map-marker-alt"></i>${this.address}</p>	
		`
	}
}

class place extends locations{
	private price : string;

	constructor(name, image, address, price){
		super(name, image, address);
		this.price = price;
	}
	placeoutput(){
		return `
					${super.output()}
					<p><i class="fas fa-euro-sign"></i>${this.price}</p>
				</div>
			</div>
		</div>
		`
	}
}
let allplaces = new Array();
	allplaces[0] = new place("St. Charles Church", "img/church.jpg", "Karlsplatz 1, 1010 Vienna", "8,00€");
	allplaces[1] = new place("Zoo Schönbrunn", "img/schönbrunn.jpg", "Maxingstraße 13b, 1130 Wien", "20,00€");
	allplaces[2] = new place("Prater", "img/prater.jpg", "1020 Wien", "Free entrance");
	allplaces[3] = new place("Albertina", "img/albertina.jpg", "Albertinaplatz 1, 1010 Wien", "14,00€");

let a = document.createElement("div");
a.setAttribute("class", "row");
a.setAttribute("id", "places");
document.getElementById("mainContent").append(a);

document.getElementById("places").innerHTML += `<div class="headings"><h1>Places</h1></div><hr>`

for(let value in allplaces){
	document.getElementById("places").innerHTML += allplaces[value].placeoutput();
}

class restaurant extends locations{
	private food : string;
	private openinghours : string;
	private webaddress : string;
	private phone : string;

	constructor(name, image, address, food, openinghours, phone, webaddress){
		super(name, image, address);
		this.food = food;
		this.openinghours = openinghours;
		this.phone = phone;
		this.webaddress = webaddress;
	}
	restaurantoutput(){
		return `
					${super.output()}
					<p><i class="fas fa-utensils"></i>${this.food}</p>
					<p><i class="fas fa-clock"></i>${this.openinghours}</p>
					<p><i class="fas fa-phone"></i>${this.phone}</p>
					<p><i class="fas fa-globe-europe"></i><a target="_blank" href="${this.webaddress}">${this.webaddress}</a></p>
				</div>
			</div>
		`
	}
}
let allrestaurants = new Array();
	allrestaurants[0] = new restaurant("Lemon Leaf Thai", "img/lemon.png", "Kettenbrückengasse 19, 1050 Vienna", "Thai", "11:00 - 15:00 & 17:30 - 23:00", "+43(1)5812308", "http://www.lemonleaf.at");
	allrestaurants[1] = new restaurant("SIXTA", "img/sixta.png", "1050 Wien, Schönbrunner Straße 21", "Traditional", "18:00 - 24:00", "+43 1 585 28 56", "http://www.sixta-restaurant.at");
	allrestaurants[2] = new restaurant("Asia Jasmin", "img/jasmin.jpg", "Breitenleerstrasse 102, 1220 Wien", "Asian", "11:00 - 15:00 & 17:00 - 22:30", "01/734 3550", "http://www.asia-jasmin.at");
	allrestaurants[3] = new restaurant("Rinderwahn", "img/rinderwahn.jpg", "Naschmarkt 1, 1060 Wien", "Burgers", "11:30 - 23:00", "+43 1 51 20 996", "https://www.rinderwahn.at");

let b = document.createElement("div");
b.setAttribute("class", "row");
b.setAttribute("id", "restaurant");
document.getElementById("mainContent").append(b);

document.getElementById("restaurant").innerHTML += `<div class="headings"><h1>Restaurants</h1></div><hr>`

for(let value in allrestaurants){
	document.getElementById("restaurant").innerHTML += allrestaurants[value].restaurantoutput();
}

class events extends locations{
	private time : string;
	private ticketprice : string;
	private webaddress : string;

	constructor(name, image, address, time, ticketprice, webaddress){
		super(name, image, address);
		this.time = time;
		this.ticketprice = ticketprice;
		this.webaddress = webaddress;
	}
	eventoutput(){
		return `
					${super.output()}
					<p><i class="fas fa-clock"></i>${this.time}</p>
					<p><i class="fas fa-ticket-alt"></i>${this.ticketprice}</p>
					<p><i class="fas fa-globe-europe"></i><a target="_blank" href="${this.webaddress}">${this.webaddress}</a></p>
				</div>
			</div>
		`
	}
}
let allevents = new Array();
	allevents[0] = new events("Kris Kristofferson", "img/kristofferson.jpg", "Wiener Stadthalle, Halle F, Roland Rainer Platz 1, 1150 Wien", "Fr., 15.11.2019. 20:00", "58,50€", "http://kriskristofferson.com");
	allevents[1] = new events("Lenny Kravitz", "img/kravitz.jpg", "Wiener Stadthalle - Halle D, Roland Rainer Platz 1, 1150 Wien", "Sat, 09.12.2019 - 19:30", "47,80€", "www.lennykravitz.com");
	allevents[2] = new events("Masters of Dirt", "img/mod.jpg", "Wiener Stadthalle - Halle D, Roland Rainer Platz 1, 1150 Wien", "Fr, 15.03.19, 20:00", "90€", "https://www.mastersofdirt.com");
	allevents[3] = new events("BeSt³", "img/best.jpg", "Wiener Stadthalle, Roland Rainer Platz 1, 1150 Wien", "Do, 07.03.2019 - So, 10.03.2019", "Free entrance", "https://bestinfo.at/de");

let c = document.createElement("div");
c.setAttribute("class", "row");
c.setAttribute("id", "events");
document.getElementById("mainContent").append(c);

document.getElementById("events").innerHTML += `<div class="headings"><h1>Events</h1></div><hr>`

for(let value in allevents){
	document.getElementById("events").innerHTML += allevents[value].eventoutput();
}
