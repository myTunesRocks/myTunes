package com.theironyard;

import jodd.json.JsonSerializer;
import spark.Spark;

import java.sql.*;
import java.util.ArrayList;

public class Main {

    public static void createTables(Connection connection) throws SQLException{
        Statement statement = connection.createStatement();
        statement.execute("CREATE TABLE IF NOT EXISTS genres (id IDENTITY, genre_name VARCHAR, genre_image VARCHAR)");
        statement.execute("CREATE TABLE IF NOT EXISTS artists (id IDENTITY, artist_name VARCHAR, genre_id INT, artist_image VARCHAR)");
        statement.execute("CREATE TABLE IF NOT EXISTS albums (id IDENTITY, artist_id INT, album_name VARCHAR, album_image VARCHAR)");
    }//End of createTables


    public static void insertEntry(Connection connection, String genreName, String genreImage,
                                   String artistName,String artistImage, String albumName, String albumImage)throws SQLException{
        int genreId = insertGenre(connection, genreName, genreImage);
        int artistId = insertArtist(connection, artistName, genreId, artistImage);
        insertAlbum(connection, albumName, artistId, albumImage);
    }


    public static int insertGenre(Connection connection, String genreName, String genreImage) throws SQLException{
        PreparedStatement statement = connection.prepareStatement("INSERT INTO genres VALUES (Null, ?, ?)");
        statement.setString(1, genreName);
        statement.setString(2, genreImage);
        statement.execute();

        PreparedStatement stmt = connection.prepareStatement("SELECT * FROM genres WHERE genre_name = ?");
        stmt.setString(1, genreName);
        ResultSet results = stmt.executeQuery();
        if(results.next()){
            return results.getInt("id");
        }
        return 0;
    }//End of insertGenre

    public static int insertArtist(Connection connection, String artistName, int genreId, String artistImage) throws SQLException {
        PreparedStatement statement = connection.prepareStatement("INSERT INTO artists VALUES (NULL, ?, ?, ?)");
        statement.setString(1, artistName);
        statement.setInt(2, genreId);
        statement.setString(3, artistImage);
        statement.execute();

        PreparedStatement stmt = connection.prepareStatement("SELECT * FROM artists WHERE artist_name = ?");
        stmt.setString(1, artistName);
        ResultSet results = stmt.executeQuery();
        if(results.next()){
            return results.getInt("id");
        }
        return 0;
    }//End of insertArtist

    public static void insertAlbum(Connection connection, String albumName, int artistId, String albumImage) throws SQLException {
        PreparedStatement statement = connection.prepareStatement("INSERT INTO albums VALUES (NULL, ?, ?, ?)");
        statement.setString(2, albumName);
        statement.setInt(1, artistId);
        statement.setString(3, albumImage);
        statement.execute();
    }//End of insertAlbum

    public static Genre selectGenre(Connection connection, int id) throws SQLException {
        Genre tempGenre = null;
        PreparedStatement statement = connection.prepareStatement("SELECT * FROM genres WHERE id = ?");
        statement.setInt(1, id);
        ResultSet genreResults = statement.executeQuery();
        while(genreResults.next()){
            tempGenre = new Genre();
            tempGenre.id = genreResults.getInt("id");
            tempGenre.genreName = genreResults.getString("genre_name");
        }
        return tempGenre;
    }//End of selectGenre (One Genre)

    public static ArrayList<Genre> selectGenres(Connection connection) throws SQLException {
        ArrayList<Genre> genreArrayList = new ArrayList<>();
        PreparedStatement stmt = connection.prepareStatement("SELECT * FROM genres");
        ResultSet genresResults = stmt.executeQuery();
        while (genresResults.next()) {
            Genre tempGenre = new Genre();
            tempGenre.id = genresResults.getInt("id");
            tempGenre.genreName = genresResults.getString("genre_name");
            genreArrayList.add(tempGenre);
        }
        return genreArrayList;
    }//End of selectCountries (Get ALL Genres)

    public static Artist selectArtist(Connection connection, int id) throws SQLException {
        Artist tempArtist = new Artist();
        PreparedStatement statement = connection.prepareStatement("SELECT * FROM artists WHERE id = ?");
        statement.setInt(1, id);
        ResultSet artistResults = statement.executeQuery();
        while(artistResults.next()){
            tempArtist.id = artistResults.getInt("id");
            tempArtist.artistName = artistResults.getString("artist_name");
            tempArtist.genreId = artistResults.getInt("genre_id");
        }
        return tempArtist;
    }//End of selectArtist (One Artist)

    public static ArrayList<Artist> selectArtists(Connection connection)throws SQLException{
        ArrayList<Artist> artistArrayList = new ArrayList<>();
        PreparedStatement statement = connection.prepareStatement("SELECT * FROM artists");
        ResultSet artistsResults = statement.executeQuery();
        while(artistsResults.next()){
            Artist tempArtist = new Artist();
            tempArtist.id = artistsResults.getInt("id");
            tempArtist.artistName = artistsResults.getString("artist_name");
            tempArtist.genreId = artistsResults.getInt("genre_id");
            artistArrayList.add(tempArtist);
        }
        return artistArrayList;
    }//End of selectArtists (Get ALL Artists)

    public static Album selectAlbum(Connection connection, int id) throws SQLException {
        Album tempAlbum = new Album();
        PreparedStatement statement = connection.prepareStatement("SELECT * FROM albums WHERE id = ?");
        statement.setInt(1, id);
        ResultSet artistResults = statement.executeQuery();
        while(artistResults.next()){
            tempAlbum.id = artistResults.getInt("id");
            tempAlbum.albumName = artistResults.getString("album_name");
            tempAlbum.artistId = artistResults.getInt("artist_id");
        }
        return tempAlbum;
    }//End of Select Album (One Album)

    public static ArrayList<Album> selectAlbums(Connection connection) throws SQLException{
        ArrayList<Album> albumArrayList = new ArrayList();
        PreparedStatement statement = connection.prepareStatement("SELECT * FROM albums");
        ResultSet albumsResults = statement.executeQuery();
        while(albumsResults.next()){
            Album tempAlbum = new Album();
            tempAlbum.id = albumsResults.getInt("id");
            tempAlbum.albumName  = albumsResults.getString("album_name");
            tempAlbum.artistId = albumsResults.getInt("artist_id");
            albumArrayList.add(tempAlbum);
        }
        return albumArrayList;
    }//End of Select Album (Select ALL Albums)


    //////////////////////////////////////////////////////////////////////////////////////////

    public static void main(String[] args) throws SQLException {
        Connection connection = DriverManager.getConnection("jdbc:h2:./main");
        createTables(connection);


        Spark.externalStaticFileLocation("client");
        Spark.init();

        Spark.get(
                "/get-genres",
                ((request, response) -> {
                    JsonSerializer serializer = new JsonSerializer();
                    String json = serializer.serialize(selectGenres(connection));
                    return json;
                })
        );//End of Spark.get() /get-genres (Get ALL Genres)

        Spark.get(
                "/get-genre",
                ((request, response) -> {
                    String id = request.queryParams("id");
                    try {
                        int idNum = Integer.valueOf(id);
                        JsonSerializer serializer = new JsonSerializer();
                        String json = serializer.serialize(selectGenre(connection, idNum));
                        return json;
                    } catch (Exception e) {

                    }
                    return "";
                })
        );//End of Spark.get() /get-genre (Get ONE Genre)

        Spark.get(
                "/get-artists",
                ((request, response) -> {
                        JsonSerializer serializer = new JsonSerializer();
                        String json = serializer.serialize(selectArtists(connection));
                        return json;
                })
        );//End of Spark.get() /get-artists (Get ALL Artists)

        Spark.get(
                "/get-artist",
                ((request, response) -> {
                    String id = request.queryParams("id");
                    try{
                        int idNum = Integer.valueOf(id);
                        JsonSerializer serializer = new JsonSerializer();
                        String json = serializer.serialize(selectArtist(connection, idNum));
                        return json;
                    }
                    catch (Exception e){

                    }
                    return "";
                })
        );//End of Spark.get() /get-artist (Get ONE artist)

        Spark.get(
                "/get-albums",
                ((request, response) -> {
                    JsonSerializer serializer = new JsonSerializer();
                    String json = serializer.serialize(selectAlbums(connection));
                    return json;
                })
        );//End of Spark.get() /get-albums (Get ALL Albums)

        Spark.get(
                "/get-album",
                ((request, response) -> {
                    String id = request.queryParams("id");
                    try{
                        int idNum = Integer.valueOf(id);
                        JsonSerializer serializer = new JsonSerializer();
                        String json = serializer.serialize(selectAlbum(connection, idNum));
                        return json;
                    }
                    catch (Exception e){

                    }
                    return "";
                })

        );//End of Spark.get() /get-album (Get ONE Album)

        Spark.post(
                "/create-genre",
                ((request, response) -> {
                    String genreName = request.queryParams("genreName");
                    String genreImage = request.queryParams("genreImage");
                    if (genreName == null) {
                        Spark.halt(403);
                    }
                    insertGenre(connection, genreName, genreImage);
                    return "";
                })
        );//End of Spark.post() /create-genre (Create one genre)

        Spark.post(
                "/create-artist",
                ((request, response) -> {
                    String genreId = request.queryParams("genreId");
                    String artistName = request.queryParams("artistName");
                    String artistImage = request.queryParams("artistImage");
                    try{
                        int genreIdNum = Integer.valueOf(genreId);
                        insertArtist(connection, artistName, genreIdNum,artistImage);
                    }catch (Exception e){

                    }
                    return "";
                })
        );//End of Spark.post() /create-artist (Create ONE artist)

        Spark.post(
                "/create-album",
                ((request, response) -> {
                    String artistId =  request.queryParams("artistId");
                    String albumName = request.queryParams("albumName");
                    String albumImage = request.queryParams("albumImage");
                    try{
                        int artistIdNum = Integer.valueOf(artistId);
                        insertAlbum(connection, albumName, artistIdNum, albumImage);
                    }
                    catch(Exception e){

                    }
                    return "";
                })
        );//End of Spark.post() /create-album (Create One Album)

        Spark.post(
                "/create-entry",
                ((request, response) -> {
                    String genre = request.queryParams("genreName");
                    String genreImage = request.queryParams("genreImage");
                    String artist = request.queryParams("artistName");
                    String artistImage = request.queryParams("artistImage");
                    String album = request.queryParams("albumName");
                    String albumImage = request.queryParams("albumImage");
                    insertEntry(connection, genre, genreImage, artist, artistImage, album, albumImage);
                    return "";
                })
        );//End of Spark.post() /create-entry (ALL FIELDS AT ONCE)

    }//End of Main Method

}//End of Main Method
