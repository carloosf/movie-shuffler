function exibirMensagem(){
    const random = (min, max) => Math.floor(Math.random() * (max - min)+ min);
    var result = (lista[random(0, lista.length)])
    filme.innerHTML = result.toUpperCase()
    listwatch[14].innerHTML = result
    var adicionar = listwatch.unshift(result)
}
    

const listwatch = [document.getElementById('Filme1'), 
document.getElementById('Filme2'), 
document.getElementById('Filme3'),
document.getElementById('Filme4'),
document.getElementById('Filme5'),
document.getElementById('Filme6'),
document.getElementById('Filme7'),
document.getElementById('Filme8'),
document.getElementById('Filme9'),
document.getElementById('Filme10'),
document.getElementById('Filme11'),
document.getElementById('Filme12'),
document.getElementById('Filme13'),
document.getElementById('Filme14'),
document.getElementById('Filme15'),]

const lista = ['orgulho e preconceito',
'silencio dos inocentes',
'orgulho e preconteito e zumbi',
'marley e eu',
'Emma',
'logan',
'Meninas malvadas',
'beleza americana',
'O lado bom da vida',
'efeito borboleta',
'A vida é bela',
'questao de tempo',
'Aladin',
'projeto almanaque',
'Irmão Urso',
'tenet',
'Lilo e stitch',
'pulp fiction',
'Viva - a vida é uma festa',
'v de vingança',
'Cinderela',
'laranja mecanica',
'Barbie - a princesa e a plebeia',
'os sete crimes capitais',
'Encanto',
'interestellar',
'Não olhe para cima',
'batman cavalheiro das trevas',
'O poderoso chefão',
'joker'];
const click = 0
var filme = document.getElementById('txtfilm');
var btn = document.getElementById("button");
btn.addEventListener("click", exibirMensagem);
