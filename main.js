const form = document.getElementById('form');
const valorA = document.getElementById('valorA')
const valorB = document.getElementById('valorB')

function validaBMaiorQueA(a , b) {
    if (a < b) {
        return true;
    } else{
        return false;
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const mensagemSucesso = `O valor B: <b>${valorB.value}</b> é maior que o valor A: <b>${valorA.value}</b>`;

    if (validaBMaiorQueA(valorA.value, valorB.value)) {
        
        const MensagemSucesso = document.querySelector('.successMessage');
        document.querySelector('.successMessage').innerHTML = mensagemSucesso;
        MensagemSucesso.style.display = 'block';
        form.reset();
    } else {
        valorB.style.border = '1px solid red';
        document.querySelector('.errorMessage').style.display = 'block';
    }
})



