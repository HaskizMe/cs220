  function dessert(Name,Topping,Price,Quantity){
    this.Name = Name;
    this.Topping = Topping;
    this.Price = Price;
    this.Quantity = Quantity;
  }
  var d1 = new dessert("Cookies n' cream","Peanuts","$5","2 scoops");

  document.getElementById('id').innerHTML = "Type of Ice Cream: " + d1.Name;
  document.getElementById('id1').innerHTML = "Type of topping: "+ d1.Topping;
  document.getElementById('id2').innerHTML = "Price: "+d1.Price;
  document.getElementById('id3').innerHTML = "Quantity: "+ d1.Quantity;
