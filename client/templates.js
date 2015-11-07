var templates = {

  genreTmpl: [

    '<div class="col-md-4 genreCol" data-index="<%= id %>"><p><%= genreName%></p><img class = "record" src ="<%= image %>">' + '</div>'
  ].join(""),

  artistTmpl: [
    '<div class="col-md-4 artistCol" data-genreId="<%= genreId %>" data-index="<%= id %>"><p class="artistPara"><%= artistName %><span class="glyphicon favorite glyphicon-star"></span></p> <img class = "record" src ="<%= image %>">' + '</div>'
  ].join(""),

  albumTmpl:[
    '<div class="col-md-4 albumCol" data-artistId="<%= artistId %>" data-index="<%= id %>"><p><%= albumName %></p> <img class = "record" src ="<%= image %>">' + '</div>'

  ].join(""),

  favTmpl:[

  ].join(""),



}
