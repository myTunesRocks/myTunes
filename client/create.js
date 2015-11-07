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
    $('body').on('click','.blue' ,function(event){
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
          loadContent.init();
        },
        failure: function(data){

        },

      });
    });
  },

  submitArtist: function(){
    $('body').on('click','.submitForm', function(event){
      event.preventDefault();
      var artistData = {
        artistName: $('input[name="artistName"]').val(),
        artistImage: $('input[name="artistImage"]').val(),
        genreId: $('input[name="genreId"]').val()

        /// THESE ARE THE INPUT BOXES FOR GENRE FORM SUBMITTAL //
      };
      $.ajax({
        url: '/create-artist',
        method: 'POST',
        data: artistData,
        success: function(data){
          console.log('SUCCESS', data)
          $('input[name="artistName"]').val('')
        },
        failure: function(data){
          console.log('FAILURE', data)
        },
      });
    });
  },

  submitAlbum: function(){
    $('button').on('submit', function(){
      event.preventDefault();
      var artistData = {
        albumName: $('input[name="albumName"]').val(),
        albumImage: $('input[name="albumImage"]').val(),
        artistId: $('input[name="albumId"]').val()
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
