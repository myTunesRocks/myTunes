var loadFavorites = {
  init: function(){
    loadFavorites.events();
    loadFavorites.styling();
  },

  //////POSTING FAVORITES/////
  events: function(artistID){
    $.ajax({
      url: '/get-favorites',
      method: 'GET',
      success: function(data){
        console.log('SUCCESS LOAD FAVORITES', JSON.parse(data));
        newData = JSON.parse(data);
        var favoritesTemplate = _.template(templates.favTmpl);
        loadFavoritesData = '';
        _.each(newData, function(el, idx, arr){
          if(el.image === ''){
            el.image = 'record_with_needle_darkGreen.png';
            console.log('blue', el)
          }
          loadFavoritesData += favoritesTemplate(el);
          console.log('ALBUM DATA', favoritesTemplate(el))
          ///THIS IS WHERE THE ALBUM TEMPLATE GOES //
        });
        $('.favoritesPage').html('');
        $('.favoritesPage').append('<h1>Favorites</h1>' + "<div class = 'backAlbum'><span class='glyphicon glyphicon-music'></span>Back</div>" + loadFavoritesData);
        ///GREEN === ALBUM PAGE //
      },
      failure: function(data){
        console.log('FAILURE', JSON.parse(data))
      }
  });
    // $.ajax({
    //   url: '/get-favorites',
    //   method: 'GET',
    //   success: function(data){
    //     newData = JSON.parse(data)
    //     console.log('SUCCESS GET FAVORITES', newData);
    //     $('.favoritesPage').html('');
    //     loadFavoritesData = '';
    //     var favoritesTemplate = _.template(templates.favTmpl);
    //     _.each(newData, function(el, idx, array){
    //       console.log(el);
    //       loadFavoritesData += favoritesTemplate(el);
    //       $('.favoritesPage').html(loadFavoritesData)
    //     });
    //     console.log("FAVORITES", loadFavoritesData)
    //   },
    //   failure: function(data){
    //     console.log('FAILURE', newData)
    //   },
    // });
  //   $.ajax({
  //     url: '/get-favorites',
  //     method: 'GET',
  //     success: function(data){
  //       newData = JSON.parse(data);
  //       console.log('SUCCESS LOAD FAVORITES', newData);
  //       $('.favoritesPage').html('');
  //
  //       var favoritesTemplate = _.template(templates.favTmpl);
  //       loadFavoritesData = '';
  //       var favoritesWithArtists = _.filter(newData, function(el){
  //         return el.artistId === artistID
  //
  //       });
  //         console.log('BLUIE', favoritesWithArtists)
  //       _.each(favoritesWithArtists, function(el, idx, arr){
  //         $('.favoritesPage').append('<option>' + el.artistId + '</option>');
  //         if(el.image === ''){
  //           el.image = 'record_with_needle_darkGreen.png'
  //         }
  //         loadFavoritesData += favoritesTemplate(el);
  //         console.log(el)
  //           ///THIS IS WHERE THE ARTIST TEMPLATE GOES //
  //       });
  //
  //       $('.favoritesPage').html('');
  //       $('.favoritesPage').append('<h1>ARTISTS</h1>'+ "<div class = 'backArtist'><span class='glyphicon glyphicon-music'></span>Back</div>" + loadFavoritesData);
  //         ///ORANGE === ARTIST PAGE //
  //     },
  //     failure: function(data){
  //       console.log('FAILURE', JSON.parse(data));
  //     }
  // });
  },
  /////GETTING FAVORTIES/////
  styling: function(){
    // $.ajax({
    //   url: '/create-favorite',
    //   method: 'POST',
    //   success: function(data){
    //     newData = JSON.parse(data);
    //     console.log('SUCCESS CREATE FAV', newData);
    //   },
    //   failure: function(data){
    //     console.log('FAILURE CREATE FAV', newData);
    //   },
    // });
  },



}
