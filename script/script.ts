class locations{
	public visited : string;
	public name : string;
	public image : string;
	public address : string;

	constructor(name, image, visited, address){
		this.name = name;
		this.image = image;
		this.visited = visited;
		this.address = address;
	}
	render(){
		return `
			<div class="card col-lg-3 col-md-6 col-sm-12">
				<div class="cardName">
					<h3>${this.name}</h3>
				</div>
				<div class="cardImage">
					<img src="${this.image}">
				</div>
				<div class="cardDescription">
				<div class="visit">
					<p><i class="fas fa-eye"></i>${this.visited}</p>	
				</div>
					<p><i class="fas fa-map-marker-alt"></i>${this.address}</p>	
		`
	}
}

class place extends locations{
	private price : string;

	constructor(name, image, visited, address, price){
		super(name, image, visited, address);
		this.price = price;
	}
	placeoutput(){
		return `
					${super.render()}
					<p><i class="fas fa-euro-sign"></i>${this.price}</p>
				</div>
			</div>
		</div>
		`
	}	
}

let allplaces = new Array();
	allplaces[0] = new place("St. Charles Church", "img/church.jpg","01.24.2019", "Karlsplatz 1, 1010 Vienna", "8,00€");
	allplaces[1] = new place("Zoo Schönbrunn", "img/schönbrunn.jpg", "01.27.2019", "Maxingstraße 13b, 1130 Wien", "20,00€");
	allplaces[2] = new place("Prater", "img/prater.jpg", "01.03.2019", "1020 Wien", "Free entrance");
	allplaces[3] = new place("Albertina", "img/albertina.jpg", "02.27.2019", "Albertinaplatz 1, 1010 Wien", "14,00€");

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

	constructor(name, image, visited, address, food, openinghours, phone, webaddress){
		super(name, image, , visited, address);
		this.food = food;
		this.openinghours = openinghours;
		this.phone = phone;
		this.webaddress = webaddress;
	}
	restaurantoutput(){
		return `
					${super.render()}
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
	allrestaurants[0] = new restaurant("Lemon Leaf Thai", "img/lemon.png", "03.03.2019", "Kettenbrückengasse 19, 1050 Vienna", "Thai", "11:00 - 15:00 & 17:30 - 23:00", "+43(1)5812308", "http://www.lemonleaf.at");
	allrestaurants[1] = new restaurant("SIXTA", "img/sixta.png", "01.17.2019", "1050 Wien, Schönbrunner Straße 21", "Traditional", "18:00 - 24:00", "+43 1 585 28 56", "http://www.sixta-restaurant.at");
	allrestaurants[2] = new restaurant("Asia Jasmin", "img/jasmin.jpg", "04.23.2019", "Breitenleerstrasse 102, 1220 Wien", "Asian", "11:00 - 15:00 & 17:00 - 22:30", "01/734 3550", "http://www.asia-jasmin.at");
	allrestaurants[3] = new restaurant("Rinderwahn", "img/rinderwahn.jpg", "04.28.2019", "Naschmarkt 1, 1060 Wien", "Burgers", "11:30 - 23:00", "+43 1 51 20 996", "https://www.rinderwahn.at");

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

	constructor(name, image, visited, address, time, ticketprice, webaddress){
		super(name, image, visited, address);
		this.time = time;
		this.ticketprice = ticketprice;
		this.webaddress = webaddress;
	}
	eventoutput(){
		return `
					${super.render()}
					<p><i class="fas fa-clock"></i>${this.time}</p>
					<p><i class="fas fa-ticket-alt"></i>${this.ticketprice}</p>
					<p><i class="fas fa-globe-europe"></i><a target="_blank" href="${this.webaddress}">${this.webaddress}</a></p>
				</div>
			</div>
		`
	}
}

let allevents = new Array();
	allevents[0] = new events("Kris Kristofferson", "img/kristofferson.jpg", "11.15.2019", "Wiener Stadthalle, Halle F, Roland Rainer Platz 1, 1150 Wien", "Fr., 15.11.2019. 20:00", "58,50€", "http://kriskristofferson.com");
	allevents[1] = new events("Lenny Kravitz", "img/kravitz.jpg", "12.09.2019", "Wiener Stadthalle - Halle D, Roland Rainer Platz 1, 1150 Wien", "Sat, 09.12.2019 - 19:30", "47,80€", "http://www.lennykravitz.com");
	allevents[2] = new events("Masters of Dirt", "img/mod.jpg", "03.15.2019", "Wiener Stadthalle - Halle D, Roland Rainer Platz 1, 1150 Wien", "Fr, 15.03.19, 20:00", "90€", "https://www.mastersofdirt.com");
	allevents[3] = new events("BeSt³", "img/best.jpg", "07.03.2019", "Wiener Stadthalle, Roland Rainer Platz 1, 1150 Wien", "Do, 07.03.2019 - So, 10.03.2019", "Free entrance", "https://bestinfo.at/de");

let c = document.createElement("div");
c.setAttribute("class", "row");
c.setAttribute("id", "events");
document.getElementById("mainContent").append(c);

document.getElementById("events").innerHTML += `<div class="headings"><h1>Events</h1></div><hr>`

for(let value in allevents){
	document.getElementById("events").innerHTML += allevents[value].eventoutput();
}

//get dates to array

var arr = new Array();

for(let value in allplaces){
	arr.push(allplaces[value].visited);
}

for(let value in allrestaurants){
	arr.push(allrestaurants[value].visited);
}

for(let value in allevents){
	arr.push(allevents[value].visited);
}

for(let value in arr){
	var date = new Date(arr[value]);
}
	arr.sort(function(a, b){return a[0]-b[0]});

console.log(arr);