
		alert(1);
		$( document ).ready(function() {
			alert(2);
		$('body').doubletap(function() {
			alert('doubletap'); 
    		window.open('index.html','_self');
			 
		  });
		  
		  $('body').tap(function() {
			alert('doubletap'); 
    		window.open("google.com", '_blank','EnableViewPortScale=yes,location=no,closebuttoncaption=Home');
			 
		  });
		});
		
		
