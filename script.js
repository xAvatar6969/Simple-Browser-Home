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
        window.location.href = 'https://google.com/search?q=' + search.value
    }
}


function r1() {
    window.location.href = ''
}

function r2() {
    window.location.href = ''
}

function r3() {
    window.location.href = ''
}

function r4() {
    window.location.href = ''
}

function r5() {
    window.location.href = ''
}
