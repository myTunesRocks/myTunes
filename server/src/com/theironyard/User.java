package com.theironyard;

import java.util.ArrayList;

/**
 * Created by earlbozarth on 11/6/15.
 */
public class User {
    int id;
    String userName;
    String password;
    ArrayList<Favorite> favoriteArrayList;

    public ArrayList<Favorite> getFavoriteArrayList() {
        return favoriteArrayList;
    }

    public int getId() {
        return id;
    }

    public String getUserName() {
        return userName;
    }

    public String getPassword() {
        return password;
    }
}
