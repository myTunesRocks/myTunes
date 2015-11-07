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
        $('#selectGenre').html('');
        loadGenreData = '';
        var genreTemplate = _.template(templates.genreTmpl);
        _.each(newData, function(el, idx, array){
          $('#selectGenre').append('<option data-index= ' + el.id + '>' + el.genreName + '</option>')
          console.log(el.image)
          if(el.image === ''){
            el.image = 'record_with_needle_darkGreen.png'
          }
          loadGenreData += genreTemplate(el);
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

  loadArtist: function(genreID){
    $.ajax({
      url: '/get-artists',
      method: 'GET',
      success: function(data){
        console.log('SUCCESS LOAD ARTIST', JSON.parse(data));
        newData = JSON.parse(data);
        $('#selectArtist').html('');
        _.each(newData, function(el){

          $('#selectArtist').append('<option data-index=' + el.id +'>' + el.artistName + '</option>');
        });
        var artistTemplate = _.template(templates.artistTmpl);
        loadArtistData = '';
        var artistsWithGenre = _.filter(newData, function(el){
          return el.genreId === genreID
        });

        _.each(artistsWithGenre, function(el, idx, arr){
          $('#selectArtist').append('<option>' + el.image + '</option>');
          if(el.image === ''){
            el.image = 'record_with_needle_darkGreen.png'
          }
          loadArtistData += artistTemplate(el);
          console.log(el)
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

  loadAlbum(artistID){
    $.ajax({
      url: '/get-albums',
      method: 'GET',
      success: function(data){
        console.log('SUCCESS LOAD ALBUM', JSON.parse(data));
        newData = JSON.parse(data);
        var albumTemplate = _.template(templates.albumTmpl);
        loadAlbumData = '';
        var albumWithArtist = _.filter(newData, function(el){
          return el.artistId === artistID
        });
        _.each(albumWithArtist, function(el, idx, arr){
          if(el.image === ''){
            el.image = 'record_with_needle_darkGreen.png'
          }
          loadAlbumData += albumTemplate(el);
          console.log(el)
          ///THIS IS WHERE THE ALBUM TEMPLATE GOES //
        });
        $('.albumPage').html('');
        $('.albumPage').append('<h1>ALBUMS</h1>' + loadAlbumData);
        ///GREEN === ALBUM PAGE //
      },
      failure: function(data){
        console.log('FAILURE', JSON.parse(data))
      }
  });
  },

}
