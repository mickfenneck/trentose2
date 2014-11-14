var tmpl = "<li>" + 
               "<div class='preview'> " +
               "    <img class='logo' src='img/package.png'> " +
               "</div>" +
               "<div class='details'>" +
               "  <a>TITLE</a>" +
               "</div>"+
            "</li>";


$( document ).ready(function() {
    
     $(".btn-add").click(function(){
         var product = $("#product").val();
         $(".items").append(tmpl.replace("TITLE", product));
     });
        
    
    $( ".items" ).on( "click", "li", function(event) {
      $(event.currentTarget).remove();
    });    

});