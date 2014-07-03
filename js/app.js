
var app = {};
	
app.iniciar = function(){
    var canchas = ['33_1024.jpg','46_1024.jpg','52_1024.jpg'];
    var balones = [33,46,52];
    var random = Math.floor((Math.random() * 3) + 1)-1;
	var respuesta = 0;
	var bolas = balones[random];
	console.log('random'+random);
	console.log('bolas'+bolas);
	$('#page3').css('background',"url('css/images/"+canchas[random]+"') no-repeat top center transparent");
	var acierto = false;

	$("#npage2").on('tap',function() {
		$.mobile.changePage( "#page2", {
			
			});
	});

	$("#npage3").on('tap',function() {
		

		$.mobile.changePage( "#page3", {
			
			});
	});

	$( "#page3" ).on( "pageshow", function( event ) { 
 		

 		$('#countdown_clock').circularCountdown({
        strokeDaysBackgroundColor:'rgba(0,0,0,0.10)',
        strokeDaysColor:'rgba(199,101,74,0.8)',
        strokeHoursBackgroundColor:'rgba(0,0,0,0.10)',
        strokeHoursColor:'rgba(235,136,90,0.8)',
        strokeMinutesBackgroundColor:'rgba(0,0,0,0.10)',
        strokeMinutesColor:'rgba(255,175,103,0.8)',
        strokeSecondsBackgroundColor:'rgba(0,0,0,0.10)',
        strokeSecondsColor:'rgba(255,229,145,0.8)',
        strokeWidth:23,
        strokeBackgroundWidth:23,
        countdownEasing:'easeOutBounce',
        countdownTickSpeed:'slow',
        backgroundShadowColor: 'rgba(0,0,0,0.2)',
        backgroundShadowBlur: 0,
        strokeShadowColor: 'rgba(0,0,0,0.2)',
        strokeShadowBlur: 0
    	});

	 });


	$("#fin").on('tap',function() {
        
        respuesta = $('#nelementos').val();

        if (respuesta == bolas){

        	acierto = true;
        	console.log(acierto);
        	$('#page5').css('background',"url('css/images/win1.jpg') no-repeat top center transparent");

        }else{

        	acierto = false;
        	$('#page5').css('background',"url('css/images/gracias.jpg') no-repeat top center transparent");

        }

		$.mobile.changePage( "#page5", {
			
			});
	});


	$("#page5").on( "pageshow", function( event ) { 
     


	});
	
}

app.reiniciar = function() {

	respuesta = 0;
    bolas = 40;

    $('#countdown_clock').circularCountdown({
        strokeDaysBackgroundColor:'rgba(0,0,0,0.10)',
        strokeDaysColor:'rgba(199,101,74,0.8)',
        strokeHoursBackgroundColor:'rgba(0,0,0,0.10)',
        strokeHoursColor:'rgba(235,136,90,0.8)',
        strokeMinutesBackgroundColor:'rgba(0,0,0,0.10)',
        strokeMinutesColor:'rgba(255,175,103,0.8)',
        strokeSecondsBackgroundColor:'rgba(0,0,0,0.10)',
        strokeSecondsColor:'rgba(255,229,145,0.8)',
        strokeWidth:23,
        strokeBackgroundWidth:23,
        countdownEasing:'easeOutBounce',
        countdownTickSpeed:'slow',
        backgroundShadowColor: 'rgba(0,0,0,0.2)',
        backgroundShadowBlur: 0,
        strokeShadowColor: 'rgba(0,0,0,0.2)',
        strokeShadowBlur: 0
    	});
	
}







$(document).ready(function(){

app.iniciar();

});