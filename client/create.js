var createContent = {

  genreUrl: '/get-genre',
  artistUrl: '/get-artist',
  albumUrl: '/get-album',

  init: function(){
    createContent.events();
    createContent.styling();
  },

  events: function(){
    submitGenre();
    submitArtist();
    submitAlbum();
  },

  styling: function(){

  },

  submitGenre: function(){
    $('button').on('submit', function(){
      $.ajax({
        url: page.genreUrl,
        method: 'POST',
        success: function(data){

        },
        failure: function(data){

        },
      });
    });
  },

  submitArtist: function(){
    $('button').on('submit', function(){
      $.ajax({
        url: page.genreUrl,
        method: 'POST',
        success: function(data){

        },
        failure: function(data){

        },
      });
    });
  },

  submitAlbum: function(){
    $('button').on('submit', function(){
      $.ajax({
        url: page.albumUrl,
        method: 'POST',
        success: function(data){

        },
        failure: function(data){

        },
      });
    });
  },

};
