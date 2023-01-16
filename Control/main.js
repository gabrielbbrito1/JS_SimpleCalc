// função pra os clicks dos botoes
const Calcular = (tipo, valor) =>
{
    try {
        if(tipo === 'acao')
        {
            if (valor === 'c'){
                document.getElementById('resultado').value = ''
            }else if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.')
            {
                document.getElementById('resultado').value += valor
            }
            else
            {
                let resultado = eval(document.getElementById('resultado').value).toFixed(2)
                document.getElementById('resultado').value = resultado
                console.log(resultado)
            }  
        }
        else if(tipo === 'valor')
        {   
            if(document.getElementById('resultado').value != 'Error')
            {
                document.getElementById('resultado').value += valor
            }else{
                document.getElementById('resultado').value = valor
            }
        }
    } catch (error) {
        document.getElementById('resultado').value = 'Error'
    }
   
}
// Função para o click das teclas do teclado
const numPress = (evt) =>{
    let keyPressed = evt.key || evt.keyCode
    let allowedKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "*", "/","."]
    let currentValue = document.getElementById('resultado').value
    if (evt.keyCode === 8)
    {
        currentValue = currentValue.slice(0,-1);
    } else if (evt.keyCode === 13) {
        try {
            let resultado = eval(currentValue).toFixed(2)
            document.getElementById('resultado').value = resultado
        } catch (e) {
            document.getElementById('resultado').value = 'Error'
            console.log(e.message)
        }
    }
    else if (isNaN(parseInt(keyPressed)) && !allowedKeys.includes(keyPressed)) {
        evt.preventDefault();
    
    } else{
        currentValue = 'Error'
    }
}