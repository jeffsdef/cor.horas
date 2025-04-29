alert('Esse site muda de cor de acordo com a hora do dia!')

function carregar(){
    var msg = document.getElementById('msg')
    var data = new Date()
    var hora = data.getHours().toString().padStart(2, '0')
    var minutos = data.getMinutes().toString().padStart(2, '0')
    msg.innerHTML = `Agora são ${hora}:${minutos}`
    
    if (hora >= 0 && hora < 12){
        //Bom dia!
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18){
        //Boa Tarde!
        document.body.style.background = '#b9846f'
    } else {
        //Boa Noite!
        document.body.style.background = '#515154'
    }
}

function atualizarPagina() {
    location.reload()
}

window.onload = carregar
