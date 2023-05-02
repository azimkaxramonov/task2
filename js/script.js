let form = document.querySelector('form')
let input = document.querySelector('input')
let date = new Date
let time = date.getHours() + ':' + date.getMinutes()
let mass = []
let modal_window = document.querySelector('.modal_window')
let forms_edit = document.forms.get
let input_edit = forms_edit.querySelector('input')
let edit_close = document.querySelector('#edit_img')
console.log(edit_close);

function reload(params) {

    let container = document.querySelector('.reminder_container')

    let box = document.createElement('div')
    let reminder_cont = document.createElement('div')
    let reminder_box = document.createElement('div')
    let reminder = document.createElement('h2')
    let close_box = document.createElement('div')
    let close = document.createElement('img')
    let hours = document.createElement('span')
    let minuts = document.createElement('span')
    let dates = document.createElement('div')
    let edit_btn = document.createElement('button')



    edit_btn.classList.add('edit_btn')
    box.classList.add('box')
    reminder_cont.classList.add('reminder_cont')
    close_box.classList.add('close_box')
    reminder_box.classList.add('reminder_box')
    reminder.classList.add('reminder')
    close.classList.add('close')
    hours.classList.add('hours')
    minuts.classList.add('minuts')
    dates.classList.add('dates')

    hours.innerHTML = date.getHours()
    minuts.innerHTML = ':' + (date.getMinutes())
    reminder.innerHTML = input.value
    edit_btn.innerHTML = 'edit'


    close.src = "img/Group 14.png"
    container.append(box)
    box.append(reminder_box, close_box)
    reminder_box.append(reminder_cont, dates)
    reminder_cont.append(reminder)
    dates.append(hours)
    hours.append(minuts)
    close_box.append(close, edit_btn)

    close.onclick = () => {
        box.style.display = 'none'
    }

    edit_btn.onclick = () => {
        modal_window.style.display = 'flex'

    }
    edit_close.onclick = () => {

        modal_window.style.display = 'none'

    }

    forms_edit.onsubmit = (event) => {
        event.preventDefault();
        if (input_edit.value.length === 0) {
            err = true
        }
        if (err === false) {

            let newTitle = input_edit.value
            mass = newTitle
            reminder.innerHTML = newTitle

           
            // reminder.innerHTML = input_edit.value
        }
        console.log(reminder);
    }

    reminder.onclick = () => {
        mass.isDone = !item.isDone
        if (mass.isDone) {
            reminder.style.textDecoration = "line-through"
        } else {
            reminder.style.textDecoration = "none"
        }
    }


}



let err = false

form.onsubmit = (event) => {
    event.preventDefault();
    if (input.value.length === 0) {
        err = true
    }
    if (err === false) {
        submit()
    }
}

function submit() {
    reload()
    mass = {
        id: Math.random(),
        time: time
    }

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        mass[key] = value
    })

    console.log(mass);

}


