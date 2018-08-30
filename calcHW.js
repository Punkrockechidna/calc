function addFunction(inputOne, inputTwo) {
    var result = Number(inputOne.value) + Number(inputTwo.value);

    document.getElementById("result").innerHTML = result;
}

function subFunction(inputOne, inputTwo) {
    var result = Number(inputOne.value) - Number(inputTwo.value);

    document.getElementById("result").innerHTML = result;

}

function divFunction(inputOne, inputTwo) {
    var result = Number(inputOne.value) / Number(inputTwo.value);

    document.getElementById("result").innerHTML = result;
}

function multFunction(inputOne, inputTwo) {
    var result = Number(inputOne.value) * Number(inputTwo.value);

    document.getElementById("result").innerHTML = result;
}