function showAbout() {
    document.getElementById("about").style.display = "block"
    document.getElementById("config").style.display = "none"
}

function showConfig() {
    document.getElementById("about").style.display = "none"
    document.getElementById("config").style.display = "block"
}

function darktheme() {
    document.body.classList.remove('violettheme');
    document.body.classList.toggle('darktheme')
}
function violettheme() {
    document.body.classList.remove('darktheme');
    document.body.classList.toggle('violetheme')
}
