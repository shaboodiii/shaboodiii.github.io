//Variables

var number = 5;

var thisMakesSenseSoFar = true;

var thisMakesSenseSoFarString = "true";

var array = [1, 2, 3, 4, 5];

//Objects

var fruit = {
	kind: "grape",
	color: "red",
	quantity: 12,
	tasty: true
};

//fruit.kind returns "grape" osv.

 var fruitArray = [
	 {
	 	kind: "banana",
	 	color: "yellow",
	 	quantity: 12,
	 	tasty: true
	 }, 
	 {
	 	kind: "orange",
	 	color: "orange",
	 	quantity: 10,
	 	tasty: true
	 }
 ];

 //fruit[0].color == "yellow"


//JSON er hurtigere at parse med js end xml og bedre til d3
 var jsonFruit = {
 	"kind": "grape",
 	"color": "red",
 	"quantity": 12,
 	"tasty": true
 };

if(3 < 5){
	console.log("3 is less than 5");
}

var calculateGratuity = function(bill){
	return bill * 0.2;
};

