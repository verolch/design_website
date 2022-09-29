   $(function() {
     $("audio + a").click(function(e) {
       e.preventDefault();
       var song = $(this).prev('audio').get(0);
       
       if (song.paused) {
         song.play();
//         $(this).text("❙❙");
         $(this).addClass("pause");
         $(this).removeClass("play");
       } 
       else {
         song.pause();
//         $(this).text("▶");
         $(this).addClass("play");
         $(this).removeClass("pause");
       }
     });
   });