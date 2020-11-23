package com.Moviefy.moviefyrestapi.service;

import java.util.Collection;

import com.Moviefy.moviefyrestapi.domain.Movie;

public interface MovieService {
	Collection<Movie> findMovies();
	Movie findMovieById(Long id);
	Movie save(Movie movie);
	Movie update(Movie movie);
	Movie deleteById(Long id);
}
