package com.theironyard;

/**
 * Created by earlbozarth on 11/5/15.
 */
public class Album {
    int id;
    String albumName;
    int artistId;
    String image;

    public String getImage() {
        return image;
    }

    public int getArtistId() {
        return artistId;
    }

    public int getId() {
        return id;
    }

    public String getAlbumName() {
        return albumName;
    }
}
