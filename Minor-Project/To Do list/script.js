let addtodo = document.getElementById("addtodo");
let addtolist = document.getElementById("list");
let inputField = document.getElementById('inputField');

addtodo.addEventListener('click', function () {
    var list = document.createElement('p');
    list.classList.add('input-task');
    list.innerText = inputField.value;
    addtolist.appendChild(list);
    inputField.value = '';

    list.addEventListener('click', function () {
        list.style.textDecoration = 'line-through';
    })

    list.addEventListener('dblclick', function () {
        addtolist.removeChild(list);
    })
})