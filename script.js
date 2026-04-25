const btn = document.getElementById('magic-btn');
const surprise = document.getElementById('surprise-area');

btn.addEventListener('click', () => {
    const password = prompt("Enter cs to see da surpiseeee:");

    // .trim() removes spaces, .toLowerCase() ignores Capital Letters
    if (password && password.trim().toLowerCase() === 'lovey') { 
        surprise.classList.remove('hidden');
        document.body.style.backgroundColor = "#ffb3c1";
        btn.innerText = "💓💓💓!";
        btn.style.display = 'none'; 
    } else {
        alert("kinsa mani? Try again!");
    }
});