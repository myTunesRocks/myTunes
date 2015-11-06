var templates = {

  genreTmpl: [
    '<div class="col-md-4" data-index="'+ data.id + '">' + data.genreName + data.image + '</div>'
  ].join("");

  artistTmpl: [
    '<div class="col-md-4" data-genre="' + data.genreId + '" data-index="'+ data.id + '">' + data.artistName + data.image + '</div>'
  ].join("");

  albumTmpl:[
    '<div class="col-md-4" data-artist="' + data.artistId + '" data-index="'+ data.id + '">' + data.albumName + data.image + '</div>'
  ].join("");

  favTmpl:[

  ].join("");



}
