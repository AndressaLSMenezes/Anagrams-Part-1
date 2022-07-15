
function alphabetize(a) {
    return a.toLowerCase().split("").sort().join("").trim();
}

function getAnagramsOf(input) {
    //codigo vai aqui
    let anagramas = []

    let palavraInput = alphabetize(input)

    for (let i = 0; i < palavras.length; i++) {
        let palavrasPalavras = alphabetize(palavras[i])
        if (palavrasPalavras == palavraInput) {
            anagramas.push(palavras[i])
        }
    }

    return anagramas
}
//Ação que aconteçara quando clicar o button

const button = document.getElementById("findButton");
button.addEventListener("click", function () {

    let typedText = document.getElementById("input").value;
    const body =  document.querySelector('body')
    
    const p = document.createElement('p')
    p.textContent = getAnagramsOf(typedText);

    body.appendChild(p)
    
    return body

});

