$(document).ready(function(){
  page.init();
});

var page = {
  genreUrl: '/get-genre',
  artistUrl: '/get-artists',
  albumUrl: '/get-album',

  init: function(){
    page.styles();
    page.events();
  },

  events: function(){
    page.submitGenre();
    page.submitArtist();
    page.submitAlbum();
  },

  styles: function(){
    page.loadGenre();
    page.loadArtist();
    page.loadAlbum();
  },

  loadGenre: function(){
    $.ajax({
      url: page.genreUrl,
      method: 'GET',
      success: function(data){

      },
      failure: function(data){

      }
    });
  },

  loadArtist: function(){
    $.ajax({
      url: page.artistUrl,
      method: 'GET',
      success: function(data){

      },
      failure: function(data){

      }
  },

  loadAlbum(){
    $.ajax({
      url: page.albumUrl,
      method: 'GET',
      success: function(data){

      },
      failure: function(data){

      }
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
  },

};
