$(document).ready(function(){
  page.init();
});

var page = {
  genreUrl: '/get-genres',
  artistUrl: '/get-artist',
  albumUrl: '/get-album',

  init: function(){
    page.styling();
    page.events();
  },
  styling: function(){
    page.loadGenre();
    page.loadArtist();
    page.loadAlbum();
  },
  events: function(){
    page.submitGenre();
    page.submitArtist();
    page.submitAlbum();
  },

  loadGenre: function(){
    $.ajax({
      url: page.genreUrl,
      method: 'GET',
      success: function(data){
        newData = JSON.parse(data);
        console.log('SUCCESS LOAD GENRE', newData);
        _.each(newData, function(dog, idx, array){

          $('.blue').append(
              dog.genreName
              + ' '
              + idx
              + '<img src = ' + dog.image + '>'
              + ' <br>'


          )
        })
        // $('.blue').html(newData[0].genreName)
      },
      failure: function(data){
        console.log('FAILURE', data)
      }
  });
  },

  loadArtist: function(){
    $.ajax({
      url: '/get-artists',
      method: 'GET',
      success: function(data){
        console.log('SUCCESS LOAD ARTIST', JSON.parse(data));
      },
      failure: function(data){

      }
  });
  },

  loadAlbum(){
    $.ajax({
      url: '/get-albums',
      method: 'GET',
      success: function(data){
        console.log('SUCCESS LOAD ALBUM', JSON.parse(data));

      },
      failure: function(data){

      }
  });
  },

    submitGenre: function(){
      $('body').on('click','.sampleBtn' ,function(event){
        event.preventDefault();
          var genreData = {
            genreName: $('input[name="name"]').val(),
            genreImage: $('input[name="image"]').val()
          };
          $.ajax({
          url: '/create-genre',
          method: 'POST',
          data: genreData,
          success: function(data){
            console.log('SUCCESS', data)

          },
          failure: function(data){

          },
        });
      });
    },

    submitArtist: function(){
      $('button').on('submit', function(){
        $.ajax({
          url: '/create-artist',
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
          url: '/create-album',
          method: 'POST',
          success: function(data){

          },
          failure: function(data){

          },
        });
      });
    },

};
