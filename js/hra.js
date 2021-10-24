const cube = document.getElementById('cube');
const play = document.getElementById('play');
const result = document.getElementById('result');

let hod = 0;
let hody = [];

play.addEventListener('click', ()=>{
    hod = (Math.ceil(Math.random() * 6));
    cube.src = `img/kostka${hod}.png`;
    hody.push(hod);
    console.log(hody);
    statistika();
    min();
    max();
})

function suma() {
    let vysledek = 0;
    hody.forEach((value) => {
        vysledek +=  value;
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
    result.innerHTML = `<p class="alert alert-info">Aktuální hod: ${hod}</p>`;
    result.innerHTML += `<p class="alert alert-info">Všechny hody: ${hody}</p>`;
    result.innerHTML += `<p class="alert alert-info">Součet hodů: ${suma()}</p>`;
    result.innerHTML += `<p class="alert alert-info">Průměr hodů: ${(suma()/hody.length).toFixed(2)}</p>`;
    result.innerHTML += `<p class="alert alert-info">Minimální hod: ${min()}</p>`;
    result.innerHTML += `<p class="alert alert-info">Maximální hod: ${max()}</p>`;
}