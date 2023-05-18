var container = document.body;
var modes = document.querySelectorAll('.mode');
var modeIcon = document.querySelectorAll('.mode-icon');
var switchLoginFormBtn = document.querySelector('.login-btn');
var switchRegisterFormBtn = document.querySelector('.create-btn');
var loginForm = document.querySelector('.login-form');
var registerForm = document.querySelector('.sign-form');
(function darkMode() {
    if (localStorage.getItem('mode') === 'dark') {
        container.classList.add('dark');
        modeIcon.forEach(function (icon) { return icon.classList.replace('uil-moon', 'uil-sun'); });
    }
    modes.forEach(function (mode) {
        mode.addEventListener('click', function () {
            modeIcon.forEach(function (icon) {
                var classList = icon.classList;
                ['uil-moon', 'uil-sun'].forEach(function (cls) { return classList.toggle(cls); });
            });
            container.classList.toggle('dark');
            if (container.classList.contains('dark')) {
                localStorage.setItem('mode', 'dark');
            }
            else {
                localStorage.removeItem('mode');
            }
        });
    });
}());
function switchForm(hide, show) {
    hide.classList.add('hide');
    show.classList.remove('hide');
}
switchRegisterFormBtn.addEventListener('click', function () { return switchForm(loginForm, registerForm); });
switchLoginFormBtn.addEventListener('click', function () { return switchForm(registerForm, loginForm); });
