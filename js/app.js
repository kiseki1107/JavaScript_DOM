// from data.js
var tableData = data;

// Creating the initial table:
// Get a reference to the table body
// to avoid selecting wrong 'tbody' if multiple tables exists
// first select relevant table that holds desired 'tbody'
var UFOtbody = d3.select("#ufo-table").select("tbody");
// Loop through tableData var
tableData.forEach((UFOdata) => {
    // Use d3 to append table row for each object
    var tRow = UFOtbody.append("tr");
    // Use Object.entries
    Object.entries(UFOdata).forEach(([key, value]) => {
        // Append a cell to the row for each value
        // in the UFOdata object
        var tData = tRow.append("td");
        tData.text(value);
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
    d3.select("#dataTable").remove();
    d3.select("#ufo-table").append("tbody").attr("id","dataTable");
    
    var UFOtbody_new = d3.select("#ufo-table").select("tbody");

    // Select the input element and get the raw HTML node
    var inputDateElement = d3.select("#datetime");
    // Get the value property of the input element
    var inputDateValue = inputDateElement.property("value");
    console.log(inputDateValue);
    
    var inputCityElement = d3.select("#city");
    var inputCityValue = inputCityElement.property("value");
    var inputStateElement = d3.select("#state");
    var inputStateValue = inputStateElement.property("value");
    var inputCountryElement = d3.select("#country");
    var inputCountryValue = inputCountryElement.property("value");
    var inputShapeElement = d3.select("#shape");
    var inputShapeValue = inputShapeElement.property("value");

    var filteredData = tableData.filter(UFOsighting => {
        if (inputDateValue != "") {
            UFOsighting.datetime === inputDateValue;
        }
        if (inputCityValue != "") {
            UFOsighting.city === inputCityValue;
        }
        if (inputStateValue != "") {
            UFOsighting.state === inputStateValue;
        }
        if (inputCountryValue != "") {
            UFOsighting.country === inputCountryValue;
        }        
        if (inputShapeValue != "") {
            UFOsighting.shape === inputShapeValue;
        }
    })
    console.log(filteredData);
    // Use the form input to filter the data by datetime
    
    // var filteredDate = tableData.filter(UFOsighting => UFOsighting.datetime === inputDateValue);
    // console.log(filteredDate);
    // //-------------------------------LEVEL 2 TESTING--------------------------------------------------------
    // City input
    // var inputCityElement = d3.select("#city");
    // var inputCityValue = inputCityElement.property("value");
    // console.log(inputCityValue)

    // var filteredCity = tableData.filter(UFOsighting => UFOsighting.city === inputCityValue);
    // console.log(filteredCity);
    // State input
    // var inputStateElement = d3.select("#state");
    // var inputStateValue = inputStateElement.property("value");
    // var filteredState = tableData.filter(UFOsighting => UFOsighting.state === inputStateValue);
    // Country input
    // var inputCountryElement = d3.select("#country");
    // var inputCountryValue = inputCountryElement.property("value");
    // // var filteredCountry = tableData.filter(UFOsighting => UFOsighting.country === inputCountryValue);
    // Shape input
    // var inputShapeElement = d3.select("#shape");
    // var inputShapeValue = inputShapeElement.property("value");
    // var filteredShape = tableData.filter(UFOsighting => UFOsighting.shape === inputShapeValue);
    //-------------------------------LEVEL 2 TESTING--------------------------------------------------------
    // for better user-experience:
    // this allows the user to input a value in the submit
    // and after completion, the field gets emptied for another input
    inputDateElement.property("value","");
    inputCityElement.property("value","");
    inputStateElement.property("value","");
    inputCountryElement.property("value","");
    inputShapeElement.property("value","");

    // Loop through filteredDate var
    filteredData.forEach((UFOsighting) => {
        // Use d3 to append table row for each object
        var tRow = UFOtbody_new.append("tr");
        // Use Object.entries
        Object.entries(UFOsighting).forEach(([newKey, newValue]) => {
            // Append a cell to the row for each value
            // in the UFOdata object
            var tData = tRow.append("td");
            tData.text(newValue);
        });
    });

//     // Loop through filteredDate var
//     filteredDate.forEach((newData) => {
//         // Use d3 to append table row for each object
//         var tRow = UFOtbody.append("tr");
//         // Use Object.entries
//         Object.entries(newData).forEach(([newKey, newValue]) => {
//             // Append a cell to the row for each value
//             // in the UFOdata object
//             var tData = tRow.append("td");
//             tData.text(newValue);
//         });
//     });
//     // Loop through filteredCity var
//     filteredCity.forEach((newData) => {
//         // Use d3 to append table row for each object
//         var tRow = UFOtbody.append("tr");
//         // Use Object.entries
//         Object.entries(newData).forEach(([newKey, newValue]) => {
//             // Append a cell to the row for each value
//             // in the UFOdata object
//             var tData = tRow.append("td");
//             tData.text(newValue);
//         });
//     });
//     // Loop through filteredState var
//     filteredState.forEach((newData) => {
//         // Use d3 to append table row for each object
//         var Rrow = UFOtbody.append("tr");
//         // Use Object.entries
//         Object.entries(newData).forEach(([newKey, newValue]) => {
//             // Append a cell to the row for each value
//             // in the UFOdata object
//             var tData = tRow.append("td");
//             tData.text(newValue);
//         });
//     });
//     // Loop through filteredCountry var
//     filteredCountry.forEach((newData) => {
//         // Use d3 to append table row for each object
//         var tRow = UFOtbody.append("tr");
//         // Use Object.entries
//         Object.entries(newData).forEach(([newKey, newValue]) => {
//             // Append a cell to the row for each value
//             // in the UFOdata object
//             var tData = tRow.append("td");
//             tData.text(newValue);
//         });
//     });
//     // Loop through filteredShape var
//     filteredShape.forEach((newData) => {
//         // Use d3 to append table row for each object
//         var tRow = UFOtbody.append("tr");
//         // Use Object.entries
//         Object.entries(newData).forEach(([newKey, newValue]) => {
//             // Append a cell to the row for each value
//             // in the UFOdata object
//             var tData = tRow.append("td");
//             tData.text(newValue);
//         });
//     });
});
