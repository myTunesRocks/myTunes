$(document).ready(function(){
  page.init();
});

var page = {

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
