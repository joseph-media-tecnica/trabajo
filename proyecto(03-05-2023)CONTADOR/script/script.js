let incremento = 0;

let show = document.querySelector(`.show`);
let cuerpo = document.querySelector(`.contenedor`);

document.addEventListener(`click`, (e) => {


    if (e.target.matches(`#decreser`)) {
        incremento--
        show.innerHTML = incremento
        cuerpo.style.backgroundColor = `rgba(100,45,67)`
        document.querySelector(`img`).src = `../img/img4.jpg`
    } else if (e.target.matches(`#resetear`)) {
        incremento = 0
        show.innerHTML = incremento
        cuerpo.syle.backgroundColor = ` rgba(108, 52, 131)`
        document.querySelector(`img`).src = `../img/img1.jpg`
    } else if (e.target.matches(`#crecer`)) {
        incremento++
        show.innerHTML = incremento
        cuerpo.style.backgroundColor = `rgba(45,65,123)`
        document.getElementById(`img`).src = `../img/img3.jpg`
    } else { }

})

