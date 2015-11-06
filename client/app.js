$(document).ready(function(){
  page.init();
});

var page = {
  genreTemplate: _.template($("#genreTmpl").html()),
  artistTemplate: _.template($("#artistTmpl").html()),
  albumTemplate: _.template($("#albumTmpl").html()),

  init: function(){
    page.styling();
    page.events();
  },
  styling: function(){
    loadContent.init();
  },
  events: function(){
    createContent.init();
  },

};
