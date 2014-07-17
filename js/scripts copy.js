var zones = {"United States":"1", "Mexico":"1", "Canada":"1",
             "United Kingdom":"2", "France":"2", "Germany":"2",
             "Brazil":"3", "Argentina":"3", "Colombia":"3"};
var weightsClasses = {"0 to 25 lbs":1.5, "26 to 50 lbs":2.1, "+51 lbs":2.9};
var basePrices = {"11":10, "12":20, "13":50, "22":18, "23":47, "33":15};

var calculateCosts = function(origin, destination, weight){
  if (origin === "" || destination === "" || weight === ""){
      alert("Please make a selection for all fields");
  } else {
    var combinedRegion = [zones[origin], zones[destination]].sort().join("");
    var totalCost = basePrices[combinedRegion] * weightsClasses[weight];

    return totalCost.toFixed(2);
  }
}

$(document).ready(function() {
  var countryFrom = "";
  var countryTo = "";
  var totalWeight = "";
  var newPackage = {};

  $("#countryFrom-drop-down").change(function(){
    countryFrom = $("#countryFrom-drop-down option:selected").text();
  });

  $("#countryTo-drop-down").change(function(){
    countryTo = $("#countryTo-drop-down option:selected").text();
  });

  $("#weight-drop-down").change(function(){
    totalWeight = $("#weight-drop-down option:selected").text();
  });

  $("#shipping-info").submit(function(){
    event.preventDefault();
    var result = calculateCosts(countryFrom, countryTo, totalWeight)
    if (result !== undefined){
      $("#final-cost").show();
      $("#origin").text(countryFrom);
      $("#destination").text(countryTo);
      $("#cost").text(result);
    }
  });

});
