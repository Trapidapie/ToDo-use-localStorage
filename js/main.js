const taskList = document.querySelector(`.list`)
const deleteTask = document.querySelector(`#contactChoice4`)
const importantBtn = document.querySelector(`#contactChoice1`)

btnNum = localStorage.length
console.log(localStorage.length)
document.forms.publish.onsubmit = function (){
    let message = this.message.value;
    if (importantBtn.checked) {
        localStorage.setItem(`task${btnNum}`, `
            <div class="task__wrapper ${btnNum}"><div class="red">${message}</div>
            <button class="btnD" id=${btnNum}>del</button></div>
            `)
    } else {
        localStorage.setItem(`task${btnNum}`, `
            <div class="task__wrapper ${btnNum}"><div>${message}</div>
            <button class="btnD" id=${btnNum}>del</button></div>
            `)
    }
    taskList.innerHTML += localStorage.getItem(`task${btnNum}`)
    btnNum++
    DelTask()
    return false
};


deleteTask.addEventListener( 'click', () => {
    localStorage.clear();
    taskList.innerHTML = ``
    return false;
    });

for (let i = 0; i < btnNum; i++) {
    let z = localStorage.getItem(`task${i}`)
    if (typeof (z) === 'string'){
        console.log(typeof (z))
        taskList.innerHTML += localStorage.getItem(`task${i}`)
    } else {
        btnNum++
    }
}

function DelTask() {
    let btnArr = document.querySelectorAll(`.btnD`)
    btnArr.forEach((btn) => {
        btn.addEventListener('click', () => {
            console.log(localStorage.getItem(`task${btn.id}`))
            localStorage.setItem(`task${btn.id}`, ``)
            document.getElementById(btn.id).parentNode.classList.add("none");
            btnNum--
        })
    })
}

DelTask()
