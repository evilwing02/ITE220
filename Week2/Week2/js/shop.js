
var hr = new Date().getHours();
var greet ="";

if (hr < 12)
{
	greet ='Good Morning!';
}
else if (hr >= 12 && hr <= 18) 
{
	greet ='Good Afternoon!';
}
else if (hr >18 && hr <= 24) 
{
	greet ='Good Evening!';
}
else 
{
	greet ='Good Night!';

}

var greetElement = document.getElementById("Greeting");
greetElement.innerHTML = greet;
var products = ["Brooklyn T-Shirt White",
			"Brooklyn T-Shirt Black",
			"Apple Watch",
			"Android Phone"];
var price = [10, 10, 199, 159];
var productsText ="";
var productsElement = document.getElementById("product-list");

productsText += "<li class='list-group-item'><span class='badge'>S"+price[0]+"</span>" + products[0]+"</li>";
productsText += "<li class='list-group-item'><span class='badge'>S"+price[1]+"</span>" + products[1]+"</li>";
productsText += "<li class='list-group-item'><span class='badge'>S"+price[2]+"</span>" + products[2]+"</li>";
productsText += "<li class='list-group-item'><span class='badge'>S"+price[3]+"</span>" + products[3]+"</li>";


productsElement.innerHTML = productsText;

var customerName="Jeffrey";
var totalPrice= 0;
var discount= 0;
totalPrice = price[0] + price[1] + price[2] + price[3];
discount= totalPrice * 0.25
var totalPriceElement = document.getElementById("total-price");
totalPriceElement.textContent = totalPrice;

var customerElement = document.getElementById("customer-name");
customerElement.textContent = customerName;
var customerElement = document.getElementById("price");

