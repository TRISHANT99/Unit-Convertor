let cmbtn = document.getElementById("cm");
cmbtn.addEventListener('click', function () {
    let input = document.getElementById("input").value;
    document.getElementById("output").value = input*30.48 +" "+ "cm";
});