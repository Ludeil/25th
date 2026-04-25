const btn = document.getElementById('magic-btn');
const surprise = document.getElementById('surprise-area');

btn.addEventListener('click', () => {
    // Ask for a secret word
    const password = prompt("Enter cs to see da surprise:");

    // Replace 'Sanna' with whatever secret word you want
    if (password && password.toLowerCase() === 'Lovey') {
        surprise.classList.remove('hidden');
        document.body.style.backgroundColor = "#ffb3c1";
        btn.innerText = "You're Amazing!";
        btn.style.display = 'none'; // Optional: hide the button after success
    } else {
        alert("Kinsa mani? Try again!");
    }
});