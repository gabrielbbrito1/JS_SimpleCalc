/* Neste código utilizei o toFixed para amenizar os problemas de calculos precisos com decimais, apesar de não ser a melhor opção para correção
do problema, serve como forma de estudo e demonstração.*/

// função pra os clicks dos botoes
/* Cada botão possui um tipo e um valor, a ideia é que cada botão seja separado de acordo com a sua funcionalidade, os botões de ação ( +, -, * ,/, c, =)
realizaram as suas respectivas ações e os botões de valor serão adicionados a caixa de texto da calculadora. */
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
                let resultado = eval(document.getElementById('resultado').value)
                if (resultado % 1 !== 0) {
                    resultado = resultado.toFixed(2)
                }
                document.getElementById('resultado').value = resultado
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
// Função para o o click das teclas
/* A ideia da função é que apenas as teclas na lista allowedKeys possam ser digitadas, Caso a keyCode da tecla seja 8(backspace) ele vai realizar um slice na
ultima posição da string, caso seja 13(Enter), o resultado será avaliado(eval) e mostrado na caixa de texto, se nao for nenhuma das teclas permitidas
o preventDefault() será acionado, previnindo a passagem de qualquer caracter indesejado para a caixa de texto da calculadora */
const numPress = (evt) =>{
    let keyPressed = evt.key || evt.keyCode
    let allowedKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "*", "/","."]
    let currentValue = document.getElementById('resultado').value
    if (evt.keyCode === 8)
    {
        currentValue = currentValue.slice(0,-1);
    } else if (evt.keyCode === 13) {
        try {
            let resultado = eval(currentValue)
            if (parseFloat(resultado) % 1 !== 0) {
                resultado = resultado.toFixed(2)
            }
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