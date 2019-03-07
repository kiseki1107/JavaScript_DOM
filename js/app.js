// from data.js
var tableData = data;

// Creating the initial table:
// Get a reference to the table body
// to avoid selecting wrong 'tbody' if multiple tables exists
// first select relevant table that holds desired 'tbody'
var UFOtbody = d3.select("#ufo-table").select("tbody");
// Loop through tableData var
tableData.forEach((data) => {
    // Use d3 to append table row for each object
    var row = UFOtbody.append("tr");
    // Use Object.entries
    Object.entries(data).forEach(([key, value]) => {
        // Append a cell to the row for each value
        // in the UFOdata object
        var cell = UFOtbody.append("td");
        cell.text(value);
    });
});

// Format table for better viewing
d3.select("table").attr("class", "table table-striped table-bordered");

// Select the submit button
var filterButton = d3.select("#filter-btn");

// Complete the click handler for the form
filterButton.on("click", function() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // remove previous data table and re-add a fresh new table
    // NOTE: to remove the table element, an id called "dataTable"
    // was created in the <tbody> tag because the remove function requires element's ID
    d3.select("#dataTable").remove();
    d3.select("#ufo-table").append("tbody").attr("id","dataTable");
    var UFOtbody = d3.select("#ufo-table").select("tbody");

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    // Use the form input to filter the data by blood type
    var filteredData = tableData.filter(UFOsighting => UFOsighting.datetime === inputValue);
    console.log(filteredData);

    // for better user-experience:
    // this allows the user to input a value in the submit
    // and after completion, the value gets erased
    inputElement.property("value","");

    // Loop through filteredData var
    filteredData.forEach((newData) => {
        // Use d3 to append table row for each object
        var row = UFOtbody.append("tr");
        // Use Object.entries
        Object.entries(newData).forEach(([newKey, newValue]) => {
            // Append a cell to the row for each value
            // in the UFOdata object
            var cell = UFOtbody.append("td");
            cell.text(newValue);
        });
    });
});
