function exibirMensagem(){
    const random = (min, max) => Math.floor(Math.random() * (max - min)+ min);
    var result = (lista[random(0, lista.length)])
    filme.innerHTML = result.toUpperCase()
    listwatch[29].innerHTML = result.toUpperCase()
    var adicionar = listwatch.unshift(result)
    var removed = lista.indexOf(result)
    lista.splice(removed, 1)
    click++
    if (click > 1){
        
    }

    
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
document.getElementById('Filme15'),
document.getElementById('Filme16'),
document.getElementById('Filme17'),
document.getElementById('Filme18'),
document.getElementById('Filme19'),
document.getElementById('Filme20'),
document.getElementById('Filme21'),
document.getElementById('Filme22'),
document.getElementById('Filme23'),
document.getElementById('Filme24'),
document.getElementById('Filme25'),
document.getElementById('Filme26'),
document.getElementById('Filme27'),
document.getElementById('Filme28'),
document.getElementById('Filme29'),
document.getElementById('Filme30'),
]


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
