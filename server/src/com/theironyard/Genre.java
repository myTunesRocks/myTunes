package com.theironyard;

import java.util.ArrayList;

/**
 * Created by earlbozarth on 11/5/15.
 */
public class Genre {
    int id;
    String genreName;
    ArrayList<Artist> artistArrayList;
    String image;

    public int getId() {
        return id;
    }

    public String getGenreName() {
        return genreName;
    }

    public ArrayList<Artist> getArtistArrayList() {
        return artistArrayList;
    }

    public String getImage() {
        return image;
    }
}
