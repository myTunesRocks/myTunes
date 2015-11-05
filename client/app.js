$(document).ready(function(){
  loadContent.init();
});

var page = {

  ///TEMPLATES///

  genreTemplate: _.template($("#genreTmpl").html()),
  artistTemplate: _.template($("#artistTmpl").html()),
  albumTemplate: _.template($("#albumTmpl").html()),


  //GET ROUTES//

  genreUrl: '/get-genre',
  artistUrl: '/get-artist',
  albumUrl: '/get-album',

  genresUrl: '/get-genres',
  artistsUrl: '/get-artists',
  albumsUrl: '/get-albums',

  //POST ROUTES//


  init: function(){
    page.styles();
    page.events();
  },

  events: function(){
    createContent.events();
    loadContent.events();
  },

  styles: function(){
    page.loadGenre();
    page.loadArtist();
    page.loadAlbum();
  },

};
