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
     $('.hamburger').toggleClass('expanded').siblings('div').slideToggle();
     $('.genrePage').addClass('hidden');
     $('.artistPage').addClass('hidden');
     $('.albumPage').addClass('hidden');
   });
   ////LOGO CLICK LINK //////
   $('.logo').on('click', function(){
     $('.genrePage').removeClass('hidden');
     $('.albumPage').addClass('hidden');
     $('.artistPage').addClass('hidden');
     $('.addMusicForm').addClass('hidden');
   });

    /////NEW FORM BUTTONS//////
    $('.newGenreButton').on('click', function(){
      $('.hideGenreForm').toggleClass('hidden');
      $('.newGenreButton').addClass('hidden');
      $("#selectGenre").addClass('hidden');
    });
    $('.newArtistButton').on('click', function(){
      $('.hideArtistForm').toggleClass('hidden');
      $('.newArtistButton').addClass('hidden');
      $('#selectArtist').addClass('hidden');
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
