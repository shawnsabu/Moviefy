package com.Moviefy.moviefyrestapi.domain;

public class Movie {
	
	private Long id;
	private String title;
	private String genre;
	private int rating;
	private String runningLength;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getGenre() {
		return genre;
	}
	public void setGenre(String genre) {
		this.genre = genre;
	}
	public int getRating() {
		return rating;
	}
	public void setRating(int rating) {
		this.rating = rating;
	}
	public String getRunningLength() {
		return runningLength;
	}
	public void setRunningLength(String runningLength) {
		this.runningLength = runningLength;
	}
	

}
