$(document).ready(function(){
  page.init();
});

var page = {


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
    login.init();
  },
  showAndHide: function(){
    ////HAMBURGER BUTTON////
   $('.hamburger').click(function() {
   $(this).toggleClass('expanded').siblings('div').slideToggle();
   });
   $('body').on('click', '.addMusic', function(event){
     event.preventDefault();
     $('form').toggleClass('hidden');
     $('.container').toggle('hidden');
   });

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
      var genreID = $(this).data('index');
      console.log(genreID)
      loadContent.loadArtist(genreID);
      $('.artistPage').removeClass('hidden');
    });

    ///HIDE ARTIST ACCESS ALBUM///
    $('.artistPage').on('click', '.artistCol', function(event){
      console.log(this);
      $(this).parent('.artistPage').addClass('hidden');
      var artistID = $(this).data('index');
      console.log(artistID)
      loadContent.loadAlbum(artistID);
      $('.albumPage').removeClass('hidden');
    });

  },

};
