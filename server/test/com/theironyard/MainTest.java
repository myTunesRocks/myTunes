package com.theironyard;

import org.junit.Test;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

import static org.junit.Assert.*;

/**
 * Created by earlbozarth on 11/5/15.
 */
public class MainTest {
    public Connection startConnection() throws SQLException {
        Connection conn = DriverManager.getConnection("jdbc:h2:./test");
        Main.createTables(conn);
        return conn;
    }//End of startConnection

    public void endConnection(Connection conn) throws SQLException {
        Statement stmt = conn.createStatement();
        stmt.execute("DROP TABLE genres");
        stmt.execute("DROP TABLE artists");
        stmt.execute("DROP TABLE albums");
        stmt.execute("DROP TABLE favorites");
        conn.close();
    }

    @Test
    public void testGenre() throws SQLException {
        Connection conn = startConnection();
        Main.insertGenre(conn, "Metal", "Image link here");
        Genre genre1 = Main.selectGenre(conn, 1);
        endConnection(conn);
        assertTrue(genre1 != null);
    }//End of testGenre (One Genre)

    @Test
    public void testArtist()throws SQLException{
        Connection conn = startConnection();
        Main.insertGenre(conn, "Metal", "Image link here");
        Main.insertArtist(conn, "Slipknot", 1, "Slipknot PIC GOES HERE");
        Artist artist1 = Main.selectArtist(conn, 1);
        endConnection(conn);
        assertTrue(artist1 != null);
    }//End of testArtist (one Artist)

    @Test
    public void testAlbum() throws SQLException{
        Connection conn = startConnection();
        Main.insertGenre(conn, "Metal", "Image link here");
        Main.insertArtist(conn, "Slipknot", 1, "Slipknot PIC GOES HERE");
        Main.insertAlbum(conn, "Iowa", 1, "Iowa Album Image Here");
        Album album1 = Main.selectAlbum(conn, 1);
        endConnection(conn);
        assertTrue(album1 != null);
    }//End of testAlbum (One Album)

    @Test
    public void testGenres() throws SQLException{
        Connection connection = startConnection();
        Main.insertGenre(connection, "Metal", "Metal Image");
        Main.insertGenre(connection, "Country", "Country Image");
        Main.insertGenre(connection, "Pop", "Pop Image");
        ArrayList<Genre> tempGenreList = Main.selectGenres(connection);
        endConnection(connection);
        assertTrue(tempGenreList.size() > 0);
    }//End of testGenres (All Genres)

    @Test
    public void testArtists()throws SQLException{
        Connection connection = startConnection();
        Main.insertGenre(connection, "Metal", "Metal Image");
        Main.insertGenre(connection, "Country", "Country Image");
        Main.insertGenre(connection, "Pop", "Pop Image");

        Main.insertArtist(connection, "Slipknot", 1, "Slipknot Image");
        Main.insertArtist(connection, "Taylor Swift", 2, "Taylor Swift Image");
        Main.insertArtist(connection, "Blake Shelton", 3, "Black Shelton from The Voice");
        ArrayList<Artist> tempArtistList = Main.selectArtists(connection);
        endConnection(connection);
        assertTrue(tempArtistList.size() > 0 );
    }//End of testArtists (All Artists)

    @Test
    public void testAlbums()throws SQLException{
        Connection connection = startConnection();
        Main.insertGenre(connection, "Metal", "Metal Image");
        Main.insertGenre(connection, "Country", "Country Image");
        Main.insertGenre(connection, "Pop", "Pop Image");

        Main.insertArtist(connection, "Slipknot", 1, "Slipknot Image");
        Main.insertArtist(connection, "Taylor Swift", 2, "Taylor Swift Image");
        Main.insertArtist(connection, "Blake Shelton", 3, "Black Shelton from The Voice");

        Main.insertAlbum(connection, "Iowa", 1, "Iowa Album Image");
        Main.insertAlbum(connection, "1989", 2, "1989 Album Image");
        Main.insertAlbum(connection, "Bring back the Sunshine", 3, "Sunshine Album");
        ArrayList<Album> tempAlbumList = Main.selectAlbums(connection);
        endConnection(connection);
        assertTrue(tempAlbumList.size() > 0);
    }//End of testAlbums (All Albums)

    @Test
    public void testEntry()throws SQLException{
        Connection connection = startConnection();
        Main.insertEntry(connection, "Metal", "Metal Image", "Slipknot", "Slipknot Image", "Iowa", "Iowa Image");
        endConnection(connection);
    }//End of testEntry (Create ONE Entry with all Fields Filled In)


    @Test
    public void testUser() throws SQLException {
        Connection conn = startConnection();
        Main.insertUser(conn, "Alice", "");
        User user = Main.selectUser(conn, "Alice");
        endConnection(conn);

        assertTrue(user != null);
    }//End of testUser

    @Test
    public void testFavorites() throws SQLException{
        Connection connection = startConnection();
        Main.insertUser(connection, "Duke", "password");
        User user = Main.selectUser(connection, "Duke");
        Main.insertEntry(connection, "Metal;", "http://logonoid.com/images/dethklok-logo.png", "Slipknot", "http://rocketdock.com/images/screenshots/Slipknot_Logo.png", "Iowa", "http://vignette4.wikia.nocookie.net/slipknot/images/2/28/Iowa_(White_Cover).jpg/revision/latest?cb=20101227004932");
        Main.insertFavorite(connection, 1, 1, "Slipknot", "http://rocketdock.com/images/screenshots/Slipknot_Logo.png");
        ArrayList<Favorite> tempList =  Main.selectFavorites(connection, 1);
        endConnection(connection);

        assertTrue(tempList.size() > 0);
    }

}//End of TEST MAIN