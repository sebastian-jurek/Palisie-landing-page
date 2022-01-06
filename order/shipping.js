const shippingOptions = document.querySelector("#shipping");
shippingOptions.addEventListener("click", function () {
  shippingOptions.style = "";
});

const paczkomatMap = document.querySelector("#paczkomatMap");

shippingOptions.addEventListener("change", (event) => {
  const selectedPaczkomat = document.querySelector("#paczkomat");
  if (event.target.value == 8.99) {
    selectedPaczkomat.style = "display: block";
    paczkomatMap.style = "display:block";
    selectedPaczkomat.required = true;
  } else {
    selectedPaczkomat.style = "display: none";
    paczkomatMap.style = "display: none";
    selectedPaczkomat.required = false;
  }
});
