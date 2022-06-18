document.getElementById('name-btn').addEventListener('click', function(){
    const inputField = document.getElementById('input-field');
    const myFieldName = inputField.value;
    const myName = document.getElementById('my-name');
    myName.innerText = myFieldName;
    inputField.value = '';
})

function usingFunction(){
    const myName = document.getElementById('my-name');
    myName.style.backgroundColor = 'gold';
    myName.style.height = '200px';
    myName.style.width = '400px';
    myName.style.lineHeight = '200px'
    myName.style.textAlign = 'center';
    myName.style.fontSize = '30px';
    myName.style.fontWeight = '800';  
}

document.getElementById('direct-addEventListener').addEventListener('click', function(){
    const myName = document.getElementById('my-name');
    myName.style.border = '5px solid cyan';
    myName.style.borderRadius = '5px';
})