let img1 = document.getElementById("1")
let img2 = document.getElementById("2") //pega as imagens do html pro js
let img3 = document.getElementById("3")
let images = ["https://guiadacozinha.com.br/wp-content/uploads/2020/11/Torta-de-frango-de-liquidificador.jpg", 
    "https://www.sabornamesa.com.br/media/k2/items/cache/8d967de4fb0deac392e6fc1838a87d15_XL.jpg",
    "https://catracalivre.com.br/wp-content/uploads/2023/11/torta-frango.jpg",
    "https://cknj.com.br/teste/wp-content/uploads/2019/10/torta-de-frango-4-1800x1350.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXI5Cyk8II_z7KgWFZRkpG9U6WztymwRK5gw&s"] // array/vetor contendo todas as imagens 

let pos1 = 0
let pos2 = 1 //posição das imagens (a "img1", vai ficar com a primeira imagem do vetor (0), a sengunda com a segunda (1)...)
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