var sizes= ["small", "medium", "large"]
$(document).ready(function(){
  var amount = 0;
  $("#order").click(function(){
    var checkVal = $("input[name=Yes]:checked").val();
    if(checkVal === "yes") {
      Amount = 1000;
      var getLocation = prompt("What is your location?");
      alert("Your oder will be delivered at " + getLocation + "you will pay an extra 1000 RWF for delivery fee.");
    }
  })
  $("#order").click(function(event){
    var size = parseFloat(document.getElementById("sort").value);
    var crust = parseFloat(document.getElementById("crusty").value);
    var topping = parseFloat(document.getElementById("topping").value);
    var quantity = parseFloat(document.getElementById("num").value);
    var total = ((size + crust + topping) * quantity + Amount);

    document.getElementById("getsize").innerHTML = size;
    document.getElementById("getcrust").innerHTML = crust;
    document.getElementById("gettopping").innerHTML = topping;
    document.getElementById("sum").innerHTML = total;
    $(".the-order").show();
    event.preventDefault();
  })
})