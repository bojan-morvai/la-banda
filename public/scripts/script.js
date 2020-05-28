document.addEventListener("DOMContentLoaded", () =>{
	$("body").fadeIn(2000);
});

jQuery(function($){
	$(".rvs-container").rvslider();
});

// Zbog fonta u naslovu
const naslov = document.getElementsByClassName('naslov-ucitavanje')[0];
naslov.classList.remove('naslov-ucitavanje');

lightbox.option({
	'wrapAround': true,
	'alwaysShowNavOnTouchDevices':false,
	'albumLabel': "%1 of %2"
  })


//audio

const songs = [{name: 'La Banda - Male slatke stvari', src:'/public/audio/La-Banda-Male-slatke-stvari.mp3'},{name: 'La Banda - U mom zagrljaju', src:'/public/audio/La-Banda-U-mom-zagrljaju.mp3'}, {name: 'La Banda - Osmeh za kraj - tambura edition', src:'/public/audio/La-Banda-Osmeh-za-kraj-tambura.mp3'}, {name:'La Banda - Osmeh za kraj', src:'/public/audio/La-Banda-Osmeh-za-kraj.mp3'}];

const audio      = document.createElement('audio');
audio.id       = 'player';
audio.controls = 'controls';
audio.name 	   = 'La Banda - Male slatke stvari';
audio.number   = 0;
audio.maxNumber = 3;
audio.src      = '/public/audio/La-Banda-Male-slatke-stvari.mp3';
audio.preload  = 'none'
audio.type     = 'audio/mpeg';
document.getElementById('audio-player').appendChild(audio);

document.getElementById('now-playing').innerText = audio.name;

$('#next-song').click( ()=>{
	if(audio.number===audio.maxNumber){
		audio.number = -1;
	}
	audio.number+=1;
	audio.src = songs[audio.number].src;	
	audio.name = songs[audio.number].name;
	document.getElementById('now-playing').innerText = audio.name;
});

$('#prev-song').click(() => {
	if(audio.number===0){
		audio.number = 4;
	}
	audio.number-=1;
	audio.src = songs[audio.number].src;
	audio.name = songs[audio.number].name;
	document.getElementById('now-playing').innerText = audio.name;
});