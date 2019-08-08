var sizes= ["small", "medium", "large"]
$(document).ready(function(){
  var Amount = 0;
  $("#order").click(function(){
    var checkVal = $("input[name=Yes]:checked").val();
    if(checkVal === "yes") {
      Amount = 1000;
      var getLocation = prompt("What is your location?");
      alert("Your oder will be delivered at " +  getLocation  +  "  you will pay an extra 1000 RWF for delivery fee.");
    }
  })
  $("#order").click(function(){
    var Size = parseFloat(document.getElementById("sort").value);
    var Crust = parseFloat(document.getElementById("crusty").value);
    var Topping = parseFloat(document.getElementById("toppings").value);
    var Quantity = parseFloat(document.getElementById("num").value);
    var Total = ((Size + Crust + Topping) * Quantity + Amount);
    alert("You will pay " + Total + " RWF amount of money.")
    document.getElementById("getsize").innerHTML = Size;
    document.getElementById("getcrust").innerHTML = Crust;
    document.getElementById("gettopping").innerHTML = Topping;
    document.getElementById("sum").innerHTML = Total;
    $(".the-order").show();
   
  })
})