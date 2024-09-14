document.getElementById('generate').addEventListener('click', function() {
    const length = parseInt(document.getElementById('length').value, 10);
    const includeUppercase = document.getElementById('include-uppercase').checked;
    const includeLowercase = document.getElementById('include-lowercase').checked;
    const includeNumbers = document.getElementById('include-numbers').checked;
    const includeSpecial = document.getElementById('include-special').checked;
    
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const special = '!@#$%^&*()_+[]{}|;:,.<>?';
    
    let characters = '';
    if (includeUppercase) characters += upper;
    if (includeLowercase) characters += lower;
    if (includeNumbers) characters += numbers;
    if (includeSpecial) characters += special;
    
    if (characters.length === 0) {
        alert('En az bir karakter türü seçmelisiniz.');
        return;
    }
    
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    
    document.getElementById('password').textContent = password;
});

document.getElementById('copy').addEventListener('click', function() {
    const passwordText = document.getElementById('password').textContent;
    navigator.clipboard.writeText(passwordText).then(() => {
        alert('Şifre panoya kopyalandı!');
    });
});

document.getElementById('language').addEventListener('change', function() {
    const lang = this.value;
    if (lang === 'tr') {
        document.getElementById('title').textContent = 'Gelişmiş Şifre Oluşturucu';
        document.getElementById('length-label').textContent = 'Şifre Uzunluğu:';
        document.getElementById('uppercase-label').textContent = 'Büyük Harfler';
        document.getElementById('lowercase-label').textContent = 'Küçük Harfler';
        document.getElementById('numbers-label').textContent = 'Rakamlar';
        document.getElementById('special-label').textContent = 'Özel Karakterler';
        document.getElementById('generate').textContent = 'Şifre Oluştur';
        document.getElementById('copy').textContent = 'Kopyala';
    } else {
        document.getElementById('title').textContent = 'Advanced Password Generator';
        document.getElementById('length-label').textContent = 'Password Length:';
        document.getElementById('uppercase-label').textContent = 'Uppercase Letters';
        document.getElementById('lowercase-label').textContent = 'Lowercase Letters';
        document.getElementById('numbers-label').textContent = 'Numbers';
        document.getElementById('special-label').textContent = 'Special Characters';
        document.getElementById('generate').textContent = 'Generate Password';
        document.getElementById('copy').textContent = 'Copy';
    }
});

document.getElementById('theme').addEventListener('change', function() {
    const theme = this.value;
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
        document.querySelector('.container').classList.add('dark-mode');
        document.querySelector('#copy').classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
        document.querySelector('.container').classList.remove('dark-mode');
        document.querySelector('#copy').classList.remove('dark-mode');
    }
});
