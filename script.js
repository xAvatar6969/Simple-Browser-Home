let search

window.onload = function() {
    search = document.getElementById('search')
    setTimeout(() => {
        document.body.style.display = 'block'
        document.getElementById('search').focus()
    }, 100)
}

function handle(e) {
    if(e.key == 'Enter') {
        if(search.value == 't') {
            window.location.href = 'https://translate.google.it/?hl=it'
        } else {
            window.location.href = 'https://google.com/search?q=' + search.value
        }
    }
}


function reg() {
    window.location.href = 'https://axiositalia.it/accesso-registro-elettronico/'
}

function cr() {
    window.location.href = 'https://classroom.google.com/u/1/h'
}

function ml() {
    window.location.href = 'https://mail.google.com/mail/u/1/#inbox'
}

function nw() {
    window.location.href = 'https://news.google.com/foryou?hl=it&gl=IT&ceid=IT%3Ait'
}

function git() {
    window.location.href = 'https://github.com/'
}