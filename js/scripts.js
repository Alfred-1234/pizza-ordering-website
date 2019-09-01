//BUSINESS LOGIC
//Objects
function Customer(name){
  this.name = name;
  this.order = []; //Array of pizza(s)
  this.orderCost = 0; //Sum of pizza cost(s)
}

function Pizza(size, toppings){
  this.size = size;
  this.toppings = toppings;
  this.numberOfToppings;
  this.cost;
}

//Prototypes
Pizza.prototype.countToppings = function () {
  this.numberOfToppings = this.toppings.length;
}

Pizza.prototype.singlePieCost = function () {
  if (this.size === "small"){
    this.cost = 12 + this.numberOfToppings;
  } else if (this.size === "medium"){
    this.cost = 15 + this.numberOfToppings;
  } else {
    this.cost = 18 + this.numberOfToppings;
  }
}

//UI LOGIC
$(document).ready(function(){
  //Add Another Pizza
  $("#add-pizza-button").click(function(){
    $(".additional-pizzas").append('<div class="new-pizza">'
                                  + '<div class="form-group">'
                                  + '<h5> Choose Your Size: </h5>'
                                  +'<select class="pizza-size-input">'
                                  +'<option value = "small">Small</option>'
                                  +'<option value = "medium">Medium</option>'
                                  +'<option value = "large">Large</option>'
                                  +'</select>'
                                  +'</div><br>'
                                  +'<div class="pizza-toppings" class="form-group">'
                                  +'<h5>Choose Your Toppings (All pies include tomato sauce and mozzerella cheese for no extra cost): </h5>'
                                  +'<input type="checkbox" name="topping" value="bell-peppers">  Bell Peppers<br>'
                                  +'<input type="checkbox" name="topping" value="mushrooms">  Mushrooms<br>'
                                  +'<input type="checkbox" name="topping" value="spinach">  Spinach<br>'
                                  +'<input type="checkbox" name="topping" value="artichokes">  Artichokes<br>'
                                  +'<input type="checkbox" name="topping" value="chicken">  Chicken<br>'
                                  +'<input type="checkbox" name="topping" value="pepperoni">  Pepperoni<br>'
                                  +'<input type="checkbox" name="topping" value="sausage">  Sausage<br>'
                                  +'<input type="checkbox" name="topping" value="pesto">  Pesto<br>'
                                  +'<input type="checkbox" name="topping" value="bbq-sauce">  BBQ Sauce<br>'
                                  +'<input type="checkbox" name="topping" value="feta-cheese">  Feta Cheese<br>'
                                  +'</div><hr>'
                                  + '</div>');
