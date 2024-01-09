let arr = ["mohan", "shyam", "karan", "shubham", "kapil"]
document.getElementById('arrayCheck').addEventListener('click', function () {

    let arrayArea = document.getElementById('arrayArea');
    let elementString = arr.join(` , `);

    arrayArea.innerText = elementString;
})

document.getElementById('addElement').addEventListener('click', function () {
    let arrayArea = document.getElementById('arrayArea');
    let input1 = document.getElementById('input1').value;

    if (input1 === '') {
        arrayArea.innerText = `Please Enter Value !`

    } else {
        arr.push(input1);
        arrayArea.innerText = arr.join(' , ')

    }


})

document.getElementById('begaddElement').addEventListener('click', function () {
    let arrayArea = document.getElementById('arrayArea');
    let input1 = document.getElementById('input1').value;

    if (input1 === '') {
        arrayArea.innerText = `Please Enter Value !`
    } else {
        arr.unshift(input1);
        arrayArea.innerText = arr.join(' , ')
    }

})
document.getElementById('removeElement').addEventListener('click', function () {
    let arrayArea = document.getElementById('arrayArea');
    arr.pop();
    arrayArea.innerText = 'Last Element Was Deleted !'

})

document.getElementById('begremoveElement').addEventListener('click', function () {
    let arrayArea = document.getElementById('arrayArea');
    arr.shift();
    arrayArea.innerText = `First Element Was Deleted!`;


})

document.getElementById('arrayClear').addEventListener('click', function () {
    arr = [];
    let arrayArea = document.getElementById('arrayArea');
    arrayArea.innerText = `The Array is Cleared !`;
})




