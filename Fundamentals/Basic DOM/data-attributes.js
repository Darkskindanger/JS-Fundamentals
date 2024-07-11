// Accessing data attributes

let dataContainer = document.querySelector("#data-container");
let dataContainerName = document.querySelector("#data-container");

console.log(dataContainer.dataset);

// Change a specific data attribute
dataContainer.dataset.name = "Jake";

console.log(dataContainer.dataset.name);

// Delete a dataset
delete dataContainer.dataset.name;

console.log(dataContainer.dataset);
