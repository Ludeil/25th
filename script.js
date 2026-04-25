const btn = document.getElementById('magic-btn');
const surprise = document.getElementById('surprise-area');

btn.addEventListener('click', () => {
    surprise.classList.toggle('hidden');
    document.body.style.backgroundColor = "#ffb3c1";
    btn.innerText = "You're Amazing!";
});