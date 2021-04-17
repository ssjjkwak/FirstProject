function add(char) {
    var display = document.getElementById('display');

    display.value = display.value + char;

}
function calculate() {
    var display = document.getElementById('display');
    var result = eval(display.value);
    document.getElementById('result').value = result;
    document.getElementById('memory').value = result;

}

// EnterKey를 누르면 똑같이 계산이 적용되게 하려했으나 잘 몰라서 실패했다.
// function enterkey() {
//     if (window.event.keyCode == 13) {
//         var display = document.getElementById('display');
//         var result = eval(display.value);
//         document.getElementById('result').value = result;
//     }
// }

function reset() {
    document.getElementById('display').value = "";
    document.getElementById('result').value = "";
}

function backSpace() {
    var result = document.getElementById('result')
    document.getElementById('display').value =
        document.getElementById('display').value.substring(0, document.getElementById('display').value.length -1);
}

function memory() {
    var display = document.getElementById('display');
    var result = eval(display.value);
    document.getElementById('result').value = result;

}


// 메모리 부분을 만들고 만약 memory의 값이 result의 값과 다르다면 새로운 값을 memory2칸에 보여주는 기능을 만들고 싶었으나 실패했다.
// 또한 memory에 display(계산 식) 과 result(계산 결과)를 둘다 나타내고 싶었으나 실패했다.

// function memory2() {
//     var display = document.getElementById('display');
//     var result = eval(display.value);
//     if (memory2.value != memory().value)
//     document.getElementById('result').value = result;
// }
//
// function memory3() {
//     var display = document.getElementById('display');
//     var result = eval(display.value);
//     if (memory3.value != memory2().value)
//     document.getElementById('result').value = result;
//
// }
// function memory4() {
//     var display = document.getElementById('display');
//     var result = eval(display.value);
//     if (memory4.value != memory3().value)
//     document.getElementById('result').value = result;
//
// }
// function memory5() {
//     var display = document.getElementById('display');
//     var result = eval(display.value);
//     if (memory5.value != memory4().value)
//     document.getElementById('result').value = result;
//
// }