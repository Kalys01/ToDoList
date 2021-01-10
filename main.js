var btn = document.getElementById('btn');
// let star = document.querySelector('.fa-star');
var inpt = document.querySelector('.input-text');

// let msg = [];

// Добавление через кнопку "Добавить"
btn.onclick = function(){
    if(empty(inpt.value)){
        add(inpt);
        dataTime();
    }
    inpt.value = '';
}

// Добавление через клавишу Enter
document.querySelector('.input-text').addEventListener('keydown', function(e){
    if(e.keyCode === 13){
        if(empty(this.value)){
            // let a = this.value.replace(/ +/g, ' ').trim(); // Убираем лишние пробелы
            // console.log(a);
            add(this);
            dataTime();
        }
        this.value = '';
    }
})

// Дата и время
function dataTime(){
    let date = new Date();
    let data = document.querySelector('.dataTime');
    var h = date.getHours();
    var m = date.getMinutes();
    data.innerHTML = (date.getFullYear() + "." + (("0" + date.getMonth() + 1)).slice(-2) + "." + ("0" + date.getDate()).slice(-2) + " | " + ("0" + h).slice(-2) + ":" + ("0" + m).slice(-2));
}

// Проверяем на пустоту
function empty(s){
    if(s.trim() !== '')
        return true;
    return false;
}

// Отмечаем на важность заметки
function starImp(){
    this.closest('.fa-star').classList.toggle('gold');
}

// Отмечаем на завершении заметки
function done(){
    this.closest('.todo-block').classList.toggle('done');
}

// Удаляем блок
function deleteTodo(){
    this.closest('.todo-block').remove();
}
// ----------------------------------------------------------------------------

function add(inpt){
    var fieldValue = inpt.value;
    var todoList = document.querySelector('.block-note2');
    var elements = {
        block: document.createElement('div'),
        header: document.createElement('div'),
        faCheck: document.createElement('i'),
        // checkbox: document.createElement('input').type = "checkbox",
        title: document.createElement('h4'),
        footer: document.createElement('div'),
        dataTime: document.createElement('p'),
        buttons: document.createElement('div'),
        faStar: document.createElement('i'),
        faTrash: document.createElement('i'),
    };

    //Присваиваем элементам нужные классы
    elements.block.classList.add('todo-block');
    elements.header.classList.add('todo-header');
    elements.faCheck.classList.add('fa', 'fa-check', 'crossed-out');
    // elements.checkbox.classList.add('checkbox');
    elements.title.classList.add('title');
    elements.footer.classList.add('todo-footer');
    elements.dataTime.classList.add('dataTime');
    elements.buttons.classList.add('action-button');
    elements.faStar.classList.add('fa', 'fa-star', 'star');
    elements.faTrash.classList.add('fa', 'fa-trash', 'deleteTodo');

    elements.title.innerHTML = elements.title.innerHTML + fieldValue;
    elements.block.appendChild(elements.header);
    elements.header.appendChild(elements.faCheck);
    // elements.header.appendChild(elements.checkbox);
    elements.header.appendChild(elements.title);
    elements.block.appendChild(elements.footer);
    elements.footer.appendChild(elements.dataTime);
    elements.footer.appendChild(elements.buttons);
    elements.buttons.appendChild(elements.faStar);
    elements.buttons.appendChild(elements.faTrash);

    todoList.insertBefore(elements.block, todoList.firstChild);

    document.querySelector('.star').addEventListener('click', starImp);
    document.querySelector('.deleteTodo').addEventListener('click', deleteTodo);
    document.querySelector('.crossed-out').addEventListener('click', done);
}