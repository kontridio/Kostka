const cube = document.getElementById('cube');
const mixBut = document.getElementById('play');
const result = document.getElementById('result');

let hod = 0;
let hody = [];
let timer = false;


function animace() {
    hod = (Math.ceil(Math.random() * 6));
    cube.src = `img/kostka${hod}.png`;
}

play.addEventListener('click', () => {

    if (!timer) {
        timer = setInterval(animace, 55);
        play.innerHTML = 'STOP';
    } else {
        clearInterval(timer);
        timer = false;
        play.innerHTML = 'HOD';
        hody.push(hod);
        console.log(hody);
        statistika();
        min();
        max();
    }

})

end.addEventListener('click', () => {

    hody.push(hod);
    console.log(hody);
    statistika();
    min();
    max();
})




/*
mixBut.addEventListener("click", Start);

function Start() {
    hod = (Math.ceil(Math.random() * 6));
    console.log("Started");
    mixBut.removeEventListener("click", Start);
    if (!timer) {
        timer = setInterval(animace, 50);
    } else {
        clearInterval(timer);
        timer = false;
        stop();
    }

    mixBut.addEventListener("click", Stop);
    mixBut.value = "Stop";
}
*/

function Stop() {
    cube.src = `img/kostka${hod}.png`;
    hody.push(hod);
    console.log(hody);
    statistika();
    min();
    max();
    console.log("Stopped");
    mixBut.removeEventListener("click", Stop);
    mixBut.addEventListener("click", Start);
    mixBut.value = "Start";
}

function suma() {
    let vysledek = 0;
    hody.forEach((value) => {
        vysledek += value;
    });
    return vysledek;
}

function min() {
    let min = 6;
    hody.forEach((value) => {
        if (value < min) min = value;
    });
    return min;
}

function max() {
    let max = 1;
    hody.forEach((value) => {
        if (value > max) max = value;
    });
    return max;
}

function statistika() {
    result.innerHTML = `<br>`;
    result.innerHTML = `<p class="alert alert-info">Aktu??ln?? hod: ${hod}</p>`;
    result.innerHTML += `<p class="alert alert-info">V??echny hody: ${hody}</p>`;
    result.innerHTML += `<p class="alert alert-info">Sou??et hod??: ${suma()}</p>`;
    result.innerHTML += `<p class="alert alert-info">Pr??m??r hod??: ${(suma() / hody.length).toFixed(2)}</p>`;
    result.innerHTML += `<p class="alert alert-info">Minim??ln?? hod: ${min()}</p>`;
    result.innerHTML += `<p class="alert alert-info">Maxim??ln?? hod: ${max()}</p>`;
}