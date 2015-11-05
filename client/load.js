var loadContent = {

  genreUrl: '/get-genre',
  artistUrl: '/get-artist',
  albumUrl: '/get-album',

  init: function(){
    loadContent.events();
    loadContent.styling();
  },
  styling: function(){
    loadContent.loadGenre();
    loadContent.loadArtist();
    loadContent.loadAlbum();
  },
  events: function(){

  },

  loadGenre: function(){
    $.ajax({
      url: loadContent.genreUrl,
      method: 'GET',
      success: function(data){

      },
      failure: function(data){

      }
  });
},

  loadArtist: function(){
    $.ajax({
      url: loadContent.artistUrl,
      method: 'GET',
      success: function(data){

      },
      failure: function(data){

      }
  });
},

  loadAlbum(){
    $.ajax({
      url: loadContent.albumUrl,
      method: 'GET',
      success: function(data){

      },
      failure: function(data){

      }
  });
},

}
