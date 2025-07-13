package com.api.controllers;

import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.api.dto.UserResponse;
import com.api.entities.User;
import com.api.services.UserService;

@RestController
@RequestMapping("/api/users")
public class UserController {

	private final UserService userService;

	public UserController(UserService userService) {
		this.userService = userService;
	}

	@GetMapping("/")
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<List<User>> getAllUser() {
		return ResponseEntity.status(HttpStatus.OK).body(this.userService.getAllUser());
	}

	@GetMapping("/me")
	public ResponseEntity<UserResponse> getCurrentUser(Authentication authentication) {
		return ResponseEntity.status(HttpStatus.OK).body(this.userService.getCurrentUser(authentication));
	}

}
