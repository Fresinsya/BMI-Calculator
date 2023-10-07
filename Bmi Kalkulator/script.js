function formdata () {
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;

    return {
        weight,
        height
    }
}

function calculateBMI (weight, height) {
    return weight / (height / 100) ** 2;
}

function formatnumber (number) {
    let formatted = number.toFixed(2);

    if (formatted.endsWith(".0")) {
        formatted = formatted.slice(0, -2);
    }

    return formatted;
}

function category(num) {
    if (num < 18.5) {
        category = "Kurus";
    } else if (num >= 18.5 && num <= 24.9) {
        category = "Normal";
    } else if (num >= 25 && num <= 29.9) {
        category = "Gemuk";
    } else {
        category = "Obesitas";
    }
}


function submit () {
    const result = document.querySelector(".result");
    const kategori = document.getElementById("category");
    const nilai = document.getElementById("nilai");

    let data = formdata();

    let bmi = calculateBMI(data.weight, data.height);
    let category = category(bmi);

    nilai.innerHTML = formatnumber(bmi);
    kategori.innerHTML = num;
}

const form = document.querySelector(".form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    submit();
});