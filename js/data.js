// Milestone 1 Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.
// Milestone 2 Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
// Milestone 3 Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.

// alert('che minchia guaddi?')

const animals = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

// const ciccio = document.getElementById('fava');

// animals.forEach((element,cicc,bagoncghi) => {
	
// ciccio.innerHTML += `${element.color} `;
	
// });


// for(let i = 0 ; i<animals.length;i++){
// 	const destr=animals[i];
// 	const { name, prefix, type, family, color} = destr;
	
// 	ciccio.innerHTML+=prefix;
// }

const zoo = document.querySelector('.zoo');
const choose = document.getElementById('selectCards');
const asBtn = document.querySelector('.asBtn');

asBtn.addEventListener("click", function () {

	zoo.innerHTML = '';
	
	let chooseAmong = choose.value;
	console.log(chooseAmong);

	Cards(howMany(chooseAmong));
	
	debugger;
 });


function Cards(value) {
   
	for (let i = 0; i < value; i++) {
	   
	   
	   const square = SquareMaster(zoo);
	   
	   square.className = ('square');
	   
	  
	  	//    for (let i = 0; i < animals.length; i++){
		 
	// 	square.innerHTML+=`
	// 	<div class="icon">
	// 		<i class="${animals[i].family} ${animals[i].prefix + animals[i].name}"></i>
	// 	</div>
	// 	<div class="text">
	// 		<span>${animals[i].name}</span>
	// 	</div>`;
	   
	   //aggiungo la classe allo square dopo aver controllato il livello di difficoltá
	   switch (value) {
		  case 16:
			 square.classList.add('todos');
			 break;
		  case 8:
			 square.classList.add('beasts');
			 break; 
		  case 4:
			 square.classList.add('veggy');
			 break;

		  case 4:
			 square.classList.add('user');
			 break;
		  
	   }
	   
	}
 }


function SquareMaster(create) {
   
	const square = document.createElement('div');
	create.append(square);
	return square;
 }


function howMany(rank) {
   
	if (rank == 'todos') {
 
	   return 16;
	} else if (rank == 'beasts') {
	   
	   return 8;
	}else if(rank == 'veggy'){

		return 4;
	}else if(rank == 'user'){
		return 4;
	}
 
	
 }
