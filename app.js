// from data.js
var tableData = data;
//console.log(tableData);

// Select table
let table = d3.select("table");

//Select the table body
let tbody = d3.select("tbody");

//Function to create table
function createTable(ufoRecord){
    //console.log(ufoRecord);
    let row = tbody.append("tr");

    Object.entries(ufoRecord).forEach(function([key,value]) {
    //console.log(key, value);
        let cell = row.append("td");
        cell.text(value);
        //tbody.html("");
    });    
};

//Clear all previous data in table
tbody.html("");

//Create table of all UFO data
tableData.forEach(createTable);

//Code to Filter Table Data

//Select the button. User must press button to filter table
let submit = d3.select("#filter-btn");

submit.on("click", function() {

    //No page refresh
    d3.event.preventDefault();

    //Select input element to filter on
    let inputElement = d3.select("#datetime");

    //Get the value property of the input element
    let inputValue = inputElement.property("value");

    //console.log(inputValue);

    //Filtered data based on user inputValue
    let filteredTableData = tableData.filter(ufoRecord => ufoRecord.datetime === inputValue);

    //console.log(filteredTableData);

    //Clear all previous data in table.
    tbody.html(""); 

    //Create filtered table based on datetime user input
    filteredTableData.forEach(createTable);


});