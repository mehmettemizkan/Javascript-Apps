let passwordEl = document.getElementById('password')

let generateButtonEl = document.getElementById('generateButton');
generateButtonEl.addEventListener('click', function () {
        passwordEl.textContent = ''
        const passwordLength = 12;
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?";

        for (let i = 0; i < passwordLength; i++) {
                let randomNumber = Math.floor(Math.random() * charset.length)
                passwordEl.textContent += charset[randomNumber];
        }

})

