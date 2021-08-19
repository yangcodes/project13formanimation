const labels = document.querySelectorAll(".form-control label");

/*map ---> defined function ----> defined array ---->defined function grabs item from the defined array
 --->the the map creates a new array with those items */
labels.forEach(function (label) {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, index) =>
        `<span style="transition-delay: ${index * 150}ms">${letter}</span>`
    )
    .join("");
});
