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
        var genreTemplate = _.template(templates.genreTmpl);
        _.each(newData, function(el, idx, array){
          loadGenreData += genreTemplate(el);
          console.log(loadGenreData)
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
        var artistTemplate = _.template(templates.artistTmpl);
        loadArtistData = '';
        _.each(newData, function(el, idx, arr){
          loadArtistData += artistTemplate(el);
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
        var albumTemplate = _.template(templates.albumTmpl);
        loadAlbumData = '';
        _.each(newData, function(el, idx, arr){
          loadAlbumData += albumTemplate(el);
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
