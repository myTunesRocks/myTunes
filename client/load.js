var loadContent = {

  init: function(){
    loadContent.styling();
  },

  styling: function(){
    loadContent.loadGenre();
    loadContent.loadArtist();
    loadContent.loadAlbum();
  },

  loadGenre: function(){
    $.ajax({
      url: '/get-genres',
      method: 'GET',
      success: function(data){
        console.log('SUCCESS LOAD GENRE', JSON.parse(data));
        newData = JSON.parse(data);
        loadGenreData = '';
        _.each(newData, function(data, idx, array){
          loadGenreData += '<div data-id="'+ data.id +'"class="genreCol col-md-4">' + data.genreName + '<br>' + '<img src =' + data.image + '>' + '</div class="genreCol col-md-4">'
            ///THIS IS WHERE THE GENRE TEMPLATE GOES //
        });
        $('.genrePage').html('');
        $('.genrePage').append('<h1>GENRES</h1>' + loadGenreData);
            ///BLUE === GENRE PAGE //
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
        newData = JSON.parse(data);
        loadArtistData = '';
        _.each(newData, function(data, idx, arr){
          loadArtistData += '<div class="artistCol col-md-4">' + data.artistName + '<img src =' + data.image + '>' + '</div class="artistCol col-md-4">'
            ///THIS IS WHERE THE ARTIST TEMPLATE GOES //
        });
        $('.artistPage').html('');
        $('.artistPage').append('<h1>ARTISTS</h1>' + loadArtistData);
          ///ORANGE === ARTIST PAGE //
      },
      failure: function(data){
        console.log('FAILURE', JSON.parse(data));
      }
  });
  },

  loadAlbum(){
    $.ajax({
      url: '/get-albums',
      method: 'GET',
      success: function(data){
        console.log('SUCCESS LOAD ALBUM', JSON.parse(data));
        newData = JSON.parse(data);
        loadAlbumData = '';
        _.each(newData, function(data, idx, arr){
          loadAlbumData += data.albumName
          ///THIS IS WHERE THE ALBUM TEMPLATE GOES //
        });
        $('.albumPage').html('');
        $('.albumPage').append(loadAlbumData);
        ///GREEN === ALBUM PAGE //
      },
      failure: function(data){
        console.log('FAILURE', JSON.parse(data))
      }
  });
  },

}
