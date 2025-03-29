let img1 = document.getElementById("1")
let img2 = document.getElementById("2") //pega as imagens do html pro js
let img3 = document.getElementById("3")
let images = ["https://static.itdg.com.br/images/640-400/3b03a942ab534200a0a80eb324828ccb/246606-postprocess-71802381-1893-4fbe-b302-726bfca18774.jpg", 
    "https://static.itdg.com.br/images/360-240/e3bde312e7e27c8f8b3982c74ba4819c/318292-original.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7o1l44BemMrW-EoTGsX5ZiGkTQAwfoI6Nug&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1ftrX1WMXpVTIZuelEYK3nxsa-2gXec_HBg&s",
    "https://receitatodahora.com.br/wp-content/uploads/2022/05/bolo-de-chocolate-recheado.jpg"] // array/vetor contendo todas as imagens 

let pos1 = 0
let pos2 = 1 //posição das imagens (a "img1", vai ficar com a primeira imagem do vetor (0), a segunda com a segunda (1)...)
let pos3 = 2
let quant = images.length //pega o tamanha do vetor/
attimg()

function direita()
{   
    pos1 = pos2
    pos2 = (pos2 + 1) % quant /*adciona 1 pra cada posição e checa se passou da quantidade de elementos, o % pega o resto de uma divisão, se uma das igual a quantidade
                                vai pegar o resto de quant/quant, que no caso é 0, tive que só usar o pos2 pra colocar os valores por que tava dando uns bug estranho*/
    pos3 = (pos2 + 1) % quant
    attimg()
}
function esquerda()
{
    pos3 = pos2
    pos2 = (pos2 - 1)
    if(pos2 < 0) {pos2 = quant-1} //remove 1 pra cada posição e checa se passou da quantidade de elementos/
    pos1 = (pos2 - 1) 
    if(pos1 < 0) {pos1 = quant-1}
    attimg()
}

function attimg()
{
    console.log(pos1,pos2,pos3)
    img1.src = images[pos1]
    img2.src = images[pos2] /* atualiza o src das imagens, colocando as imagens das posições de cada uma nelas */
    img3.src = images[pos3]
}