var zones = {"United States":"1", "Mexico":"1", "Canada":"1",
             "United Kingdom":"2", "France":"2", "Germany":"2",
             "Brazil":"3", "Argentina":"3", "Colombia":"3"};
var weightsClasses = {"0 to 25 lbs":1.5, "26 to 50 lbs":2.1, "+51 lbs":2.9};
var basePrices = {"11":10, "12":20, "13":50, "22":18, "23":47, "33":15};

$(document).ready(function() {

  var newPackage = {totalCost: function(){
    if (this.countryFrom === "" || this.countryTo === "" || this.totalWeight === ""){
      alert("Please make a selection for all fields");
    } else {
      var combinedRegion = [zones[this.countryFrom], zones[this.countryTo]].sort().join("");
      var cost = basePrices[combinedRegion] * weightsClasses[this.totalWeight];
      return cost.toFixed(2);
    }
   }
  }

  $("#countryFrom-drop-down").change(function(){
    newPackage["countryFrom"] = $("#countryFrom-drop-down option:selected").text();
  });

  $("#countryTo-drop-down").change(function(){
    newPackage["countryTo"] = $("#countryTo-drop-down option:selected").text();
  });

  $("#weight-drop-down").change(function(){
    newPackage["totalWeight"] = $("#weight-drop-down option:selected").text();
  });

  $("#shipping-info").submit(function(){
    event.preventDefault();

    alert(newPackage.totalCost());
    if (newPackage.totalCost() > 0){
     newPackage.calculatedCost = newPackage.totalCost();
     $("#final-cost").show();
     $("#origin").text(newPackage.countryFrom);
     $("#destination").text(newPackage.countryTo);
     $("#cost").text(newPackage.calculatedCost);
     $("#list-of-packages").show();
     $("#previous-packages-list").append("<li>" + newPackage + "</li>");
    }
  });

});
