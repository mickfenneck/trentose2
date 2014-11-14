/* Main Dicerool file */

$(document).ready(function(){  
    $(".dices li").hide();
    var num = 0;
    var dadi = 0;
	
    $(".btn-roll").click(function(event){
    	dadi = parseInt($(".ins").val());
        if(num===0) {
        	$(".ins").hide();
        } else {
            for(i = 0; i < 6; i++) {
                $(".table .dices li:eq(" + i + ")").hide();
            }
            
        }
        for (i=0; i<dadi; i++) { 
        //aggiungo i 3 dadi a random
        var n = Math.round(Math.random() * 5 + 1);
        $(".table .dices li:eq(" + n + ")").show();
    	}
        num++;
    });
        

});