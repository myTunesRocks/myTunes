var loadFavorites = {
  init: function(){
    loadFavorites.events();
    loadFavorites.styling();
  },

  //////POSTING FAVORITES/////
  events: function(){
    $.ajax({
      url: '/get-favorites',
      method: 'GET',
      success: function(data){
        console.log('SUCCESS LOAD FAVORITES', JSON.parse(data));
        newData = JSON.parse(data);
        $('.favoritesPage').html('');

      },
      failure: function(data){
        console.log('FAILURE', data)
      }
  });
    $.ajax({
      url: '/get-favorites',
      method: 'GET',
      success: function(data){
        newData = JSON.parse(data);
        console.log('SUCCESS GET FAVORITES', newData);
      },
      failure: function(data){
        console.log('FAILURE', newData)
      },
    });
  },
  /////GETTING FAVORTIES/////
  styling: function(){
    $.ajax({
      url: '/create-favorite',
      method: 'POST',
      success: function(data){
        newData = JSON.parse(data);
        console.log('SUCCESS CREATE FAV', newData);
      },
      failure: function(data){
        console.log('FAILURE CREATE FAV', newData);
      },
    });
  },



}
