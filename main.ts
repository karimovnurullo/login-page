const container = document.body;
const modes = document.querySelectorAll('.mode')!;
const modeIcon = document.querySelectorAll('.mode-icon')!;
const switchLoginFormBtn = document.querySelector<HTMLDivElement>('.login-btn')!;
const switchRegisterFormBtn = document.querySelector<HTMLDivElement>('.create-btn')!;
const loginForm = document.querySelector<HTMLFormElement>('.login-form')!;
const registerForm = document.querySelector<HTMLFormElement>('.sign-form')!;


// =========================================

const loginNumber = document.querySelector<HTMLInputElement>('.login-number')!;
const loginPassword = document.querySelector<HTMLInputElement>('.login-password')!;
const registerFirsname = document.querySelector<HTMLInputElement>('.sign-firsname')!;
const registerLastname = document.querySelector<HTMLInputElement>('.sign-lastname')!;
const registerNumber = document.querySelector<HTMLInputElement>('.sign-number')!;
const registerPassword = document.querySelector<HTMLInputElement>('.sign-password')!;

// =========================================


(function darkMode() {
   if (localStorage.getItem('mode') === 'dark') {
      container.classList.add('dark');
      modeIcon.forEach(icon => icon.classList.replace('uil-moon', 'uil-sun'));
   }
   modes.forEach(mode => {
      mode.addEventListener('click', () => {
         modeIcon.forEach(icon => {
            const { classList } = icon;
            ['uil-moon', 'uil-sun'].forEach(cls => classList.toggle(cls));
         });
         container.classList.toggle('dark');
         if (container.classList.contains('dark')) {
            localStorage.setItem('mode', 'dark');
         } else {
            localStorage.removeItem('mode');
         }
      });
   });
}());
function switchForm(hide: any, show: any) {
   hide.classList.add('hide');
   show.classList.remove('hide');
}
switchRegisterFormBtn.addEventListener('click', () => switchForm(loginForm, registerForm));
switchLoginFormBtn.addEventListener('click', () => switchForm(registerForm, loginForm));
