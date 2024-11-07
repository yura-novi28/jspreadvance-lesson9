let elemsInput = [...document.querySelectorAll('.form-left__input-txt')];
let editUserBtn = document.querySelector('#editUser');
let addUserBtn = document.querySelector('#addUser');
let arrValues = [];
function addUser() {
    let arr = [];
    elemsInput.forEach(elem => arr.push(elem.value));
    let obj = {};
    obj['login'] = arr[0];
    obj['password'] = arr[1];
    obj['email'] = arr[2];
    arrValues.push(obj);
    elemsInput.forEach(elem => elem.value = '');
    render(arrValues);
}
function render(arr) {
    let blockRigthCont = document.querySelector('.block-rigth-container');
    blockRigthCont.innerHTML = '';
    for (let i = 0; i < arr.length; i++) {
        let content = document.createElement('div');
        content.classList.add('content-rigth');
        let p1 = document.createElement('p');
        p1.classList.add('content-rigth__text');
        let p2 = document.createElement('p');
        p2.classList.add('content-rigth__text');
        let p3 = document.createElement('p');
        p3.classList.add('content-rigth__text');
        let p4 = document.createElement('p');
        p4.classList.add('content-rigth__text');
        let input1 = document.createElement('input');
        input1.classList.add('content-rigth__btn');
        input1.value = 'Edit';
        input1.type = 'button';
        let input2 = document.createElement('input');
        input2.classList.add('content-rigth__btn', 'content-rigth__btn--red');
        input2.value = 'Delete';
        input2.type = 'button';
        p1.textContent = `${i + 1}`;
        p2.textContent = `${arr[i].login}`;
        p3.textContent = `${arr[i].password}`;
        p4.textContent = `${arr[i].email}`;
        blockRigthCont.append(content);
        content.append(p1);
        content.append(p2);
        content.append(p3);
        content.append(p4);
        content.append(input1);
        content.append(input2);
    }
}
let userIndex;
function deleteUser(event) {
    event.preventDefault();
    if (event.target.classList.contains('content-rigth__btn')) {
        if (event.target.value === 'Delete') {
            userIndex = event.target.closest('.content-rigth').firstElementChild.textContent;
            arrValues.splice(userIndex - 1, 1);
            render(arrValues);
        }
    }
}
function editUser(event) {
    event.preventDefault();
    if (event.target.classList.contains('content-rigth__btn')) {
        if (event.target.value === 'Edit') {
            userIndex = event.target.closest('.content-rigth').firstElementChild.textContent;
            elemsInput[0].value = arrValues[userIndex - 1].login;
            elemsInput[1].value = arrValues[userIndex - 1].password;
            elemsInput[2].value = arrValues[userIndex - 1].email;
            editUserBtn.style.display = 'block';
            addUserBtn.style.display = 'none';
        }
    }
}
function saveEditUser() {
    arrValues[userIndex - 1].login = elemsInput[0].value;
    arrValues[userIndex - 1].password = elemsInput[1].value;
    arrValues[userIndex - 1].email = elemsInput[2].value;
    elemsInput.forEach(elem => elem.value = '');
    editUserBtn.style.display = 'none';
    addUserBtn.style.display = 'block';
    render(arrValues);
}
document.querySelector('#addUser').addEventListener('click', addUser);
document.querySelector('#editUser').addEventListener('click', saveEditUser);
document.querySelector('.block-rigth-container').addEventListener('click', deleteUser);
document.querySelector('.block-rigth-container').addEventListener('click', editUser);
