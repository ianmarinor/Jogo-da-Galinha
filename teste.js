let click = 0

function start() {


    // FOTO ITENS
    var resultado = document.getElementById('resultado')
    var comum = document.getElementById('comum')
    var raro = document.getElementById('raro')
    // FUNDO
    var bgcomum = document.getElementById('bgcomum')
    var bgraro = document.getElementById('bgraro')
    var bgunusual = document.getElementById('bgunusual')
    var frame = document.getElementById('frame')

    //CLICK COUNTER
    click += 1
    document.getElementById("click").innerHTML = click
    if (click > 35 && click < 69){
        document.getElementById("click").style.color = 'yellow' 
    } else if (click > 70){
        document.getElementById("click").style.color = 'red' 
    }
     
     
    
    

    if ( 1 > 0 ){
        rng()
    }

}



//RNG
function rng(){

    // escolhe um numero de 0 a 9
    let crateKey = Math.floor(Math.random() * 10);
    
    
    if (crateKey > 0 && crateKey <= 2) {
        raro()
    } else if (crateKey == 0) {
        unusual()
    }
    else {
        comum()
    }


}

//  UNUSUAL CHANGES
function unusual() {
    let cu = Math.floor(Math.random() * 10)
    console.log(cu)

    cu == 0 ? show() : comum()

    function show() {
        //imagem
        resultado.className = 'unusual'
        //fundo
        
        
    
    }
}
// COMUM
function comum() {

    //imagem
    resultado.className = 'comum'
    //fundo
    
    
}
// RARO
function raro() {
    //imagem
    resultado.className = 'raro'
    //fundo
    
}




