document.getElementById('birthYearInput').addEventListener('input', function(event) {
    const input = event.target.value;
    event.target.value = input.replace(/\D/g, '');
});


document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const current_year = new Date().getFullYear();
    const birth_year_str = document.getElementById('birthYearInput').value.trim();
    const birth_year = parseInt(birth_year_str);

    if (birth_year_str === '') {
        return;
    }

    const age = current_year - birth_year;
    let result = '';
    let num = ''
    let mushel_age;
    let mushel_name = '';

    if (isNaN(age)) {
        result = 'Жарамды дерек енгізуіңізді сұраймыз!';
    } else if (age < 13 || age > 122) {
        result = `Егер адам ${birth_year} жылы туылса, ол «ер жете бастау» деп аталатын, бірінші мүшеліне ${birth_year + 13} жылы 13-ке толғанда кіреді де,<br><br>${birth_year + 14} жылы 14-ке толғанда шығады.`;
    } else if (age == 13) {
        num = 'бірінші';
        mushel_age = 13;
        mushel_name = 'Ер жете бастау';
    } else if (age == 25 || age > 13 && age < 25) {
        num = 'екінші';
        mushel_age = 25;
        mushel_name = 'Жігіттік шақ';
    } else if (age == 37 || age > 25 && age < 37) {
        num = 'үшінші';
        mushel_age = 37;
        mushel_name = 'Ақыл тоқтату';
    } else if (age == 49 || age > 37 && age < 49) {
        num = 'төртінші';
        mushel_age = 49;
        mushel_name = 'Орта жас';
    } else if (age == 61 || age > 49 && age < 61) {
        num = 'бесінші';
        mushel_age = 61;
        mushel_name = 'Егде жас';
    } else if (age == 73 || age > 61 && age < 73) {
        num = 'алтыншы';
        mushel_age = 73;
        mushel_name = 'Қарттық';
    } else if (age == 85 || age > 73 && age < 85) {
        num = 'жетінші';
        mushel_age = 85;
        mushel_name = 'Кәрілік';
    } else if (age == 97 || age > 85 && age < 97) {
        num = 'сегізінші';
        mushel_age = 97;
        mushel_name = 'Қалжырау';
    } else if (age == 109 || age > 97 && age < 109) {
        num = 'тоғызыншы';
        mushel_age = 109;
        mushel_name = 'Шөпшек сүю';
    } else if (age == 121 || age > 109 && age < 121) {
        num = 'оныншы';
        mushel_age = 121;
        mushel_name = 'Немене сүю';
    }
    
    if (age == mushel_age) {
        result = `Қазір сіз ${age} жастасыз.<br><br>Бұл сіздің ${num} мүшеліңіз, ол «${mushel_name}» деп аталады.<br><br>${current_year + ((mushel_age + 1) - age)} жылы ${mushel_age + 1} жасқа толғанда шығасыз.`

    } else if (age > (mushel_age - 12) && age < mushel_age) {
        result = `Сіз ${mushel_age - age} жылдан кейін, ${current_year + (mushel_age - age)} жылы ${mushel_age} жасқа толғанда<br><br> «${mushel_name}» деп аталатын ${num} мүшеліңізге кіріп,<br><br>${current_year + ((mushel_age + 1) - age)} жылы ${mushel_age + 1} жасыңызда шығасыз.
        `
    }

    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = result;
    resultContainer.classList.remove('hidden');
});

document.querySelectorAll('.question-text').forEach(question => {
    question.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            answer.style.display = 'block';
        }
    });
});
