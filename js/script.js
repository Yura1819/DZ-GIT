let toggleTheme = document.getElementById('toggleTheme')


toggleTheme.onclick = () => {
    if (document.documentElement.hasAttribute('theme')) {
        document.documentElement.removeAttribute('theme')
    }
    else {
        document.documentElement.setAttribute('theme', 'dark')
    }
}


document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
});