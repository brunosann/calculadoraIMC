document.querySelector('#btn').addEventListener('click', e => {
    event.preventDefault();

    var altura = document.getElementById('alt')
    var peso = document.getElementById('pes')
    var a = Number(altura.value)
    var p = Number(peso.value)
    var res = document.getElementById('res')
    var calt = a * a
    var img = document.createElement('img')
    var imc = p / calt

    if (!altura.value == "" || !peso.value == "") {
        if (imc < 18.5) {
            res.innerHTML = `<p>Seu (Índice de Massa Corporal) é ${imc.toFixed(2)} </p>`
            res.innerHTML += 'Abaixo do Peso <br>'
            res.appendChild(img)
            img.setAttribute('src', 'magro.png')
        }
        else if (imc >= 18.5 && imc <= 24.99) {
            res.innerHTML = `<p>Seu (Índice de Massa Corporal) é ${imc.toFixed(2)} </p>`
            res.innerHTML += 'Peso Normal<br>'
            res.appendChild(img)
            img.setAttribute('src', 'normal.png')
        }
        else if (imc >= 25 && imc <= 29.9) {
            res.innerHTML = `<p>Seu (Índice de Massa Corporal) é ${imc.toFixed(2)} </p>`
            res.innerHTML += 'Sobrepeso<br>'
            res.appendChild(img)
            img.setAttribute('src', 'aa.png')

        }
        else if (imc >= 30 && imc <= 34.9) {
            res.innerHTML = `<p>Seu (Índice de Massa Corporal) é ${imc.toFixed(2)} </p>`
            res.innerHTML += 'Obesidade Grau 1<br>'
            res.appendChild(img)
            img.setAttribute('src', 'aa.png')
        }
        else if (imc >= 35 && imc <= 39.9) {
            res.innerHTML = `<p>Seu (Índice de Massa Corporal) é ${imc.toFixed(2)} </p>`
            res.innerHTML += 'Obesidade Grau 2<br>'
            res.appendChild(img)
            img.setAttribute('src', 'acima.png')
        }
        else {
            res.innerHTML = `<p>Seu (Índice de Massa Corporal) é ${imc.toFixed(2)} </p>`
            res.innerHTML += 'Obesidade Grau 3 <br>'
            res.appendChild(img)
            img.setAttribute('src', 'acima.png')
        }
    }
    else {
        alert('Preencha os campos!!!')
    }


})

// function calcular() {
//     var altura = document.getElementById('alt')
//     var peso = document.getElementById('pes')
//     var a = Number(altura.value)
//     var p = Number(peso.value)
//     var res = document.getElementById('res')
//     var calt = a * a
//     var img = document.createElement('img')
//     var imc = p/calt
//     if (imc < 18.5) {
//         res.innerHTML = `<p>Seu (Índice de Massa Corporal) é ${imc.toFixed(2)} </p>`
//         res.innerHTML += 'Abaixo do Peso <br>'
//         res.appendChild(img)
//         img.setAttribute('src','magro.png')
//     } else if (imc >=18.5 && imc <= 24.99) {
//         res.innerHTML = `<p>Seu (Índice de Massa Corporal) é ${imc.toFixed(2)} </p>`
//         res.innerHTML += 'Peso Normal<br>'
//         res.appendChild(img)
//         img.setAttribute('src','normal.png')
//     } else if ( imc >=25 && imc <=29.9) {
//         res.innerHTML = `<p>Seu (Índice de Massa Corporal) é ${imc.toFixed(2)} </p>`
//         res.innerHTML += 'Sobrepeso<br>'
//         res.appendChild(img)
//         img.setAttribute('src','ss.png')

//     } else if (imc >=30 && imc <=34.9) {
//         res.innerHTML = `<p>Seu (Índice de Massa Corporal) é ${imc.toFixed(2)} </p>`
//         res.innerHTML += 'Obesidade Grau 1<br>'
//         res.appendChild(img)
//         img.setAttribute('src','aa.png')
//     } else if (imc >=35 && imc <=39.9) {
//         res.innerHTML = `<p>Seu (Índice de Massa Corporal) é ${imc.toFixed(2)} </p>`
//         res.innerHTML += 'Obesidade Grau 2<br>'
//         res.appendChild(img)
//         img.setAttribute('src','acima.png')
//     } else {
//         res.innerHTML = `<p>Seu (Índice de Massa Corporal) é ${imc.toFixed(2)} </p>`
//         res.innerHTML += 'Obesidade Grau 3 <br>'
//         res.appendChild(img)
//         img.setAttribute('src','acima.png')
//     }

// }
//res.innerHTML = imc.toFixed(2) mostra so duas casa decimal apos a virgula