//  var elTitle = document.querySelector("h1") 
  
//   var date = new Date();
//   elTitle.textContent = `${date.getDay()}. ${date.getMonth() + 1}. ${date.getTime()}`
var elForm = document.querySelector(".form-js");
var carName = document.querySelector(".car-name");
var modelName = document.querySelector(".model-name");
var year = document.querySelector(".year-name");
var btn = document.querySelector(".btn");
var table = document.querySelector(".table-js");

btn.addEventListener("click", function(e){
    e.preventDefault();
   if(carName.value == "" && modelName.value == "" && year.value == ""){
    alert("Please, Fill the blanks in");
   }
   else{
    // const elRow = document.createElement("tr");
    // table.appendChild(elRow);
    // elRow.innerHTML = carName.value;
    // elRow.style.display = 'flex';

    // const elModel = document.createElement("tr");
    // table.appendChild(elModel);
    // elModel.innerHTML = modelName.value;
    // elModel.style.display = 'flex';
    
    
    // const elYear = document.createElement("tr");
    // table.appendChild(elYear);
    // elYear.innerHTML = year.value;
    // elYear.style.display = 'flex';
    
     const newRow = document.createElement("tr");

     const newCar = document.createElement("th");
     newCar.innerHTML = carName.value;
     newRow.appendChild(newCar);

     const newModel = document.createElement("th");
     newModel.innerHTML = modelName.value;
     newRow.appendChild(newModel);

     const dataDate = document.createElement("th");
     dataDate.innerHTML = year.value;
     newRow.appendChild(dataDate);

     table.appendChild(newRow);
     
     carName.value = "";
     modelName.value = "";
     year.value = "";
    }
})
