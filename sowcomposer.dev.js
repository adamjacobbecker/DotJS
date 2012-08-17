$(function(){

  if ($(".anbu").length > 0) {
    $(".anbu").hide();

    $(document).bind("keydown", function(e) {
      if (e.which == 192) {
        $(".anbu").toggle()
      }
    });
  }

});