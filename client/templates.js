var templates = {

  genreTmpl: [

    '<div class="col-md-4 genreCol" data-index="<%= id %>"><p><%= genreName%></p><img class="record" src="record_with_needle_darkGreen.png">' + '</div>'
  ].join(""),

  artistTmpl: [
    '<div class="col-md-4 artistCol" data-genreId="<%= genreId %>" data-index="<%= id %>"><p><%= artistName %></p> <img src ="<%= image %>">' + '</div>'
  ].join(""),

  albumTmpl:[
    '<div class="col-md-4 albumCol" data-artistId="<%= artistId %>" data-index="<%= id %>"><p><%= albumName %></p> <%= image %>' + '</div>'

  ].join(""),

  favTmpl:[

  ].join(""),



}
