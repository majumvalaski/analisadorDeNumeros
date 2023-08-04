let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
    }else{
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value=''
    num.focus()
    
}

function isNumero(n){
    if (Number(n)<1 || Number(n)>100){
        return false
    }else{
        return true
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function finalizar(){
    if (valores.length== 0){
        window.alert('Adicione valores antes de finalizar')
    }else{
        let tot = valores.length
        let menor = Math.min(...valores)
        let maior = Math.max(...valores)
        let soma = 0
        for (let i=0; i<valores.length;i++){
            soma+=valores[i]
        } 
        let media = soma/ valores.length

        res.innerHTML = ''
        res.innerHTML= `<p>Ao todo, temos ${tot} números cadastrados.<p>
                        O menor valor é ${menor}<p>
                        O maior valor é ${maior}<p>
                        A soma de todos os valores é ${soma}<p>
                        A média de todos os valores é ${media}<p>`
    }
}