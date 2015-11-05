$(document).ready(function(){
  page.init();
});

var genreData;

var page = {

  genreUrl: '/get-genre',
  artistUrl: '/get-artist',
  albumUrl: '/get-album',

  init: function(){
    page.loadGenre();
  },
  styling: function(){

  },
  events: function(){

  },

  loadGenre: function(){
    $.ajax({
      url: '/get-genre',
      method: 'GET',
      success: function(data){
        console.log('SUCCESS', data);
      },
      failure: function(data){
        console.log('FAILURE', data)
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

};
