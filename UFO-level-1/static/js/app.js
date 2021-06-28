// from data.js
var tableData = data;
console.log(tableData)

// Get a reference to the table body
var tbody = d3.select("tbody");

tableData.forEach(function(ufosightings) {
    console.log(ufosightings);
    var row = tbody.append("tr");

    Object.entries(ufosightings).forEach(function([key, value]) {
        console.log(key, value);

        var cell = row.append("td");

        cell.text(value);
      });
  });

var button = d3.select("#filter-btn");

button.on("click", function(){
    tbody.html("");
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime"); 
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    
    var filteredData = tableData.filter(ufosighting=>ufosighting.datetime === inputValue);

    console.log(filteredData);

    filteredData.forEach(function(filterselect){
        console.log(filterselect);
        var row = tbody.append("tr");

    Object.entries(filterselect).forEach(function([key, value]) {
        console.log(key, value);

        var cell = row.append("td");

        cell.text(value);
      });
    });
});