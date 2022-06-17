const button = document.querySelector('#btn-notif');
const divNotif = document.querySelector('#block-notif');

button.addEventListener('click', event => {
    let hidden = divNotif.classList.contains('hidden');
    if (hidden == false) {
        divNotif.classList.add("hidden");
    } else {
        divNotif.classList.remove("hidden");
    }
});