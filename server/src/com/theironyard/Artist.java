package com.theironyard;

import java.util.ArrayList;

/**
 * Created by earlbozarth on 11/5/15.
 */
public class Artist {
    int id;
    String artistName;
    int genreId;
    String image;
    ArrayList<Album> albumArrayList;


    public String getImage() {
        return image;
    }


    public int getGenreId() {
        return genreId;
    }

    public int getId() {
        return id;
    }

    public String getArtistName() {
        return artistName;
    }

    public ArrayList<Album> getAlbumArrayList() {
        return albumArrayList;
    }
}
