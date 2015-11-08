var loadFavorites = {
  init: function(){
    loadFavorites.events();
    loadFavorites.styling();

  },

  //////POSTING FAVORITES/////
  events: function(){
    $.ajax({
      url: '/GET-favorites',
      method: 'GET',
      success: function(data){
        console.log('SUCCESS', data);
        newData = JSON.parse(data);
        loadFavoritesData = '';
        var favoritesTemplate = _.template(templates.favTmpl);
          _.each(newData, function(el, idx, array){
            loadFavoritesData += favoritesTemplate(el);
          };
          $('.favoritesPage').html('');
          $('.favoritesPage').append('<h1>YOUR FAVORITES</h1>' + loadGenreData);
      },
      failure: function(data){
        console.log('SUCCESS', data)
      },
    })
  },
  /////GETTING FAVORTIES/////
  styling: function(){
    $.ajax({
      url: '/favorites',
      method: 'POST',
      success: function(data){
        console.log('SUCCESS', data)
      },
      failure: function(data){
        console.log('SUCCESS', data)
      },
    });
  },



}
