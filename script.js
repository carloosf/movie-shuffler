function exibirMensagem()
{
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
    const random = (min, max) => Math.floor(Math.random() * (max - min)+ min);
    var result = (lista[random(0, lista.length)])
    filme.innerHTML = result.toUpperCase()
}

var filme = document.getElementById('txtfilm');
var btn = document.getElementById("button");
btn.addEventListener("click", exibirMensagem);