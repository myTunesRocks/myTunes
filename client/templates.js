var templates = {

  genreTmpl: [
    '<div class="col-md-4 genreCol" data-index="<%= id %>"><%= genreName%> <img src = "<%= image %>">' + '</div>'
  ].join(""),

  artistTmpl: [
    '<div class="col-md-4 artistCol" data-index="<%= id %>"><%= artistName %> <img src = "<%= image %>">' + '</div>'
  ].join(""),

  albumTmpl:[
    '<div class="col-md-4 albumCol" data-index="<%= id %>"><%= albumName %> <img src = "<%= image %>">' + '</div>'

  ].join(""),

  favTmpl:[

  ].join(""),



}
