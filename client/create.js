var createContent = {

  init: function(){
    createContent.events();
  },

  styling: function(){
  },

  events: function(){
    createContent.submitGenre();
    createContent.submitArtist();
    createContent.submitAlbum();
  },

  submitGenre: function(){
    $('body').on('click','.submitGenreButton' ,function(event){
      event.preventDefault();
        var genreData = {
          genreName: $('input[name="genreName"]').val(),
          genreImage: $('input[name="genreImage"]').val()
          /// THESE ARE THE INPUT BOXES FOR GENRE FORM SUBMITTAL //
        };
        $.ajax({
        url: '/create-genre',
        method: 'POST',
        data: genreData,
        success: function(data){
          console.log('SUCCESS', data)
          $('input[name="genreName"]').val('');
          $('input[name="genreImage"]').val('');
          $('.hideGenreForm').addClass('hidden');
          $('.newGenreButton').removeClass('hidden');
          $('#selectGenre').removeClass('hidden');
          loadContent.init();
        },
        failure: function(data){

        },

      });
    });
  },

  submitArtist: function(){
    $('body').on('click','.submitArtistButton', function(event){
      event.preventDefault();
      var artistData = {
        artistName: $('input[name="artistName"]').val(),
        artistImage: $('input[name="artistImage"]').val(),
        genreId: $('#selectGenre option:selected').data('index')
        /// THESE ARE THE INPUT BOXES FOR GENRE FORM SUBMITTAL //
      };
      $.ajax({
        url: '/create-artist',
        method: 'POST',
        data: artistData,
        success: function(data){
          console.log('SUCCESS', data)
          $('input[name="artistName"]').val('');
          $('input[name="artistImage"]').val('');
          $('.hideArtistForm').addClass('hidden');
          $('.newArtistButton').removeClass('hidden');
          $('#selectArtist').removeClass('hidden');
          loadContent.init();
        },
        failure: function(data){
          console.log('FAILURE', data)
        },
      });
    });
  },

  submitAlbum: function(){
    $('body').on('click', '.submitAlbumButton', function(){
      event.preventDefault();
      var albumData = {
        albumName: $('input[name="albumName"]').val(),
        albumImage: $('input[name="albumImage"]').val(),
        artistId: $('#selectArtist option:selected').data('index')
      }
      $.ajax({
        url: '/create-album',
        method: 'POST',
        data: albumData,
        success: function(data){
          console.log('SUCCESS', data);
          $('input[name="albumName"]').val('');
          $('input[name="albumImage"]').val('');
          $('input[name="albumId"]').val('');
        },
        failure: function(data){
          console.log('FAILURE', data)
        },
      });
    });
  },


};
