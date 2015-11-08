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
    page.favorites();
  },
  showAndHide: function(){



    ////HAMBURGER BUTTON////
   $('.hamburger').click(function() {
     $(this).toggleClass('expanded').siblings('div').slideToggle();
   });
   $('body').on('click', '.addMusic', function(event){
     event.preventDefault();
     $('.addMusicForm').removeClass('hidden');
     $('.hamburger').toggleClass('expanded').siblings('div').slideToggle();
     $('.artistPage').addClass('hidden');
     $('.albumPage').addClass('hidden');
     $('.genrePage').addClass('hidden');

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


    ///////BACK BUTTON IN HAMBURGER //////
    $('body').on('click', '.backArtist', function(event){
      $('.artistPage').addClass('hidden');
      $('.genrePage').removeClass('hidden');
    });
    $('body').on('click', '.backAlbum', function(event){
      $('.artistPage').removeClass('hidden');
      $('.albumPage').addClass('hidden');
    });


    ///LOGIN///
    $('.landingPage').on('click', '.loginButton', function(event){
      event.preventDefault();
      $('.landingPage').addClass('hidden');
      $('.genrePage').removeClass('hidden');
      $('.genrePage').addClass('active');
      loadFavorites.init();
    });

    ///HIDE GENRE ACCESS ARTIST///
    $('.genrePage').on('click', '.genreCol', function(event){
      console.log(this);
      $(this).parent('.genrePage').addClass('hidden');

      var genreID = $(this).data('index');
      console.log(genreID)
      loadContent.loadArtist(genreID);
      $('.artistPage').removeClass('hidden');
      $('.artistPage').addClass('active')
    });

    ///HIDE ARTIST ACCESS ALBUM///
    $('.artistPage').on('click', '.artistCol', function(event){
      console.log(this);
      $(this).parent('.artistPage').addClass('hidden');
      $(this).parent('.artistPage').removeClass('active');
      var artistID = $(this).data('index');
      console.log(artistID)
      loadContent.loadAlbum(artistID);
      $('.albumPage').removeClass('hidden');
      $('.albumPage').addClass('active');
    });

  },

  favorites: function(){
    $('body').on('click', '.favorites', function(){

      $('.hamburger').toggleClass('expanded').siblings('div').slideToggle();
      $('.favoritesPage').removeClass('hidden');
      $('.addMusicForm').addClass('hidden');
      $('.artistPage').addClass('hidden');
      $('.albumPage').addClass('hidden');
      $('.genrePage').addClass('hidden');
    });
  },

};
