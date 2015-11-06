$(document).ready(function(){
  page.init();
});

var page = {
  // genreTemplate: _.template($("#genreTmpl").html()),
  // artistTemplate: _.template($("#artistTmpl").html()),
  // albumTemplate: _.template($("#albumTmpl").html()),
  init: function(){
    page.styling();
    page.events();
  },
  styling: function(){
    loadContent.init();
  },
  events: function(){
    createContent.init();
    page.showAndHide();
  },
  showAndHide: function(){
    ///LOGIN///
    $('.landingPage').on('click', '.loginButton', function(event){
      event.preventDefault();
      $('.landingPage').addClass('hidden');
      $('.genrePage').removeClass('hidden');
    });

    ///HIDE GENRE ACCESS ARTIST///
    $('.genrePage').on('click', '.genreCol', function(event){
      console.log(this);
      $(this).parent('.genrePage').addClass('hidden');
      $('.artistPage').removeClass('hidden');
    });

    ///HIDE ARTIST ACCESS ALBUM///
    $('.artistPage').on('click', '.artistCol', function(event){
      $(this).parent('.artistPage').addClass('hidden');
      $('.albumPage').removeClass('hidden');
    });


  },

};
