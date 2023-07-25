let addBtn = document.querySelector('#addBtn');
let taskList = document.querySelector('.taskList');

function showTask(){
    let task = document.querySelector('#taskInput');
    if (task.value.trim() == ""){
        alert('Task cannot be empty.');
    }else{
    let li = document.createElement('li');
    li.innerText = task.value;
    taskList.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    }
    task.value = "";
    saveData();
}

addBtn.addEventListener('click', function(){
    showTask();
});

document.querySelector('.taskList').addEventListener('click', function(e){
    e.target.classList.toggle('checked');
    if (e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
    }
    saveData();
})

function saveData(){
    localStorage.setItem("data", taskList.innerHTML);
}

function showData(){
    taskList.innerHTML = localStorage.getItem("data");
}

showData();


