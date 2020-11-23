package com.Moviefy.moviefyrestapi.Controllers;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Moviefy.moviefyrestapi.domain.Movie;
import com.Moviefy.moviefyrestapi.service.MovieService;

@RestController
@RequestMapping("/movies")
public class MovieController {
	@Autowired
	private MovieService movieService;

	@GetMapping
	public Collection<Movie> findMovies() {
		return movieService.findMovies();
	}

	@GetMapping("{id}")
	public Movie findMovieById(@PathVariable Long id) {
		return movieService.findMovieById(id);
	}

	@PostMapping(consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public Movie save(@RequestBody Movie movie) {
		return movieService.save(movie);
	}

	@PutMapping(consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public Movie update(@RequestBody Movie movie) {
		return movieService.update(movie);
	}

	@DeleteMapping("{id}")
	public Movie deleteById(@PathVariable Long id) {
		return movieService.deleteById(id);
	}
}
