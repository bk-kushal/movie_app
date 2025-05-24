package com.example.Movie_App;

public class Movie {
    private String title;
    private int releaseYear;
    private String rating;
    private String review;

    public Movie(String title, int releaseYear) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.rating = "";
        this.review = "";
    }

    public Movie(String title, int releaseYear, String rating, String review) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.rating = rating;
        this.review = review;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getReleaseYear() {
        return releaseYear;
    }

    public void setReleaseYear(int releaseYear) {
        this.releaseYear = releaseYear;
    }

    public String getRating() {
        return rating;
    }

    public void setRating(String rating) {
        this.rating = rating;
    }

    public String getReview() {
        return review;
    }

    public void setReview(String review) {
        this.review = review;
    }
}