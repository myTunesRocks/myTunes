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
    $('body').on('click','.sampleBtn' ,function(event){
      event.preventDefault();
        var genreData = {
          genreName: $('input[name="name"]').val(),
          genreImage: $('input[name="image"]').val()
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
    $('body').on('click','.sampleBtn', function(event){
      event.preventDefault();
      var artistData = {

        artistName: $('input[name="name"]').val(),
        artistImage: $('input[name="image"]').val()
        /// THESE ARE THE INPUT BOXES FOR GENRE FORM SUBMITTAL //
      };
      $.ajax({
        url: '/create-artist',
        method: 'POST',
        data: artistData,
        success: function(data){
          console.log('SUCCESS', data)

        },
        failure: function(data){
          console.log('FAILURE', data)
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
