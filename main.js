"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alertFunction = void 0;
var container = document.body;
var modes = document.querySelectorAll('.mode');
var modeIcon = document.querySelectorAll('.mode-icon');
var switchLoginFormBtn = document.querySelector('.login-btn');
var switchRegisterFormBtn = document.querySelector('.create-btn');
var loginForm = document.querySelector('.login-form');
var registerForm = document.querySelector('.sign-form');
// =========================================
var loginNumber = document.querySelector('.login-number');
var loginPassword = document.querySelector('.login-password');
var registerFirsname = document.querySelector('.sign-firsname');
var registerLastname = document.querySelector('.sign-lastname');
var registerNumber = document.querySelector('.sign-number');
var registerPassword = document.querySelector('.sign-password');
// =========================================
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
function alertFunction(text, color) {
    var alertElement = document.querySelector('.alert-element');
    alertElement.style.display = "flex";
    alertElement.textContent = text;
    alertElement.style.background = color ? "green" : "red";
    alertElement.style.color = color ? "#fff" : "#fff";
    setTimeout(function () {
        alertElement.style.display = "none";
    }, 1500);
}
exports.alertFunction = alertFunction;
