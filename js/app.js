// from data.js
var tableData = data;

// Creating the initial table:
// Get a reference to the table body
// to avoid selecting wrong 'tbody' if multiple tables exists
// first select relevant table that holds desired 'tbody'
var UFOtbody = d3.select("#ufo-table").select("#UFOdata");
// Loop through tableData var
tableData.forEach((data) => {
    // Use d3 to append table row for each object
    var tRow = UFOtbody.append("tr");
    // Use Object.entries
    Object.entries(data).forEach(([key, value]) => {
        // Append a cell to the row for each value
        // in the UFOdata object
        var cell = tRow.append("td");
        cell.text(value);
    });
});

// Select the submit button
var filterButton = d3.select("#filter-btn");

// Complete the click handler for the form
filterButton.on("click", function() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // remove previous data table and re-add a fresh new table
    // NOTE: to remove the table element, an id called "dataTable"
    // was created in the <tbody> tag because the remove function requires element's ID
    var newUFOtbody = d3.select("#UFOdata");
    newUFOtbody.selectAll("tr").remove();
 
    // Select the input element and get the raw HTML node
    var inputDateElement = d3.select("#datetime");
    // Get the value property of the input element
    var inputDateValue = inputDateElement.property("value");
    if (inputDateValue !== "") {
        console.log(inputDateValue);
    }
    //-----LEVEL 2 FORM TESTING-----------------------------------------------------------
    var inputCityElement = d3.select("#city");
    var inputCityValue = inputCityElement.property("value");
    if (inputCityValue !== "") {
        console.log(inputCityValue);
    }
    var inputStateElement = d3.select("#state");
    var inputStateValue = inputStateElement.property("value");
    if (inputStateValue !== "") {
        console.log(inputStateValue);
    }
    var inputCountryElement = d3.select("#country");
    var inputCountryValue = inputCountryElement.property("value");
    if (inputCountryValue !== "") {
        console.log(inputCountryValue);
    }
        var inputShapeElement = d3.select("#shape");
    var inputShapeValue = inputShapeElement.property("value");
    if (inputShapeValue !== "") {
        console.log(inputShapeValue);
    }
    // Use the form input to filter the data by datetime
    var filteredData = tableData.filter(UFOsighting => {
        // Create a testing variable to match user input to tableData datasets
        var filteredResults = true
        // Create an if statement for user input
        if (inputDateValue !== "") {
            // Collect ONLY true statements where input = dataset
            // Update the filteredResults and append to the variable if other filters are needed
            filteredResults = filteredResults && UFOsighting.datetime === inputDateValue;
        }
        if (inputCityValue !== "") {
            filteredResults = filteredResults && UFOsighting.city === inputCityValue;
        }
        if (inputStateValue !== "") {
            filteredResults = filteredResults && UFOsighting.state === inputStateValue;
        }
        if (inputCountryValue !== "") {
            filteredResults = filteredResults && UFOsighting.country === inputCountryValue;
        }        
        if (inputShapeValue !== "") {
            filteredResults = filteredResults && UFOsighting.shape === inputShapeValue;
        }
        // Return the final filtered results
        return filteredResults;
    })
    
    // for better user-experience:
    // this allows the user to input a value in the submit
    // // and after completion, the value gets erased
    inputDateElement.property("value","");
    inputCityElement.property("value","");
    inputStateElement.property("value","");
    inputCountryElement.property("value","");
    inputShapeElement.property("value","");

    // Loop through filteredData var
    filteredData.forEach((UFOsighting) => {
        // Use d3 to append table row for each object
        var tRow = newUFOtbody.append("tr");
        // Use Object.entries
        Object.entries(UFOsighting).forEach(([newKey, newValue]) => {
            // Append a cell to the row for each value
            // in the UFOdata object
            var tData = tRow.append("td");
            tData.text(newValue);
        });
    });
});