package com.api.services;

import java.util.List;

import org.springframework.security.core.Authentication;

import com.api.dto.UserResponse;
import com.api.entities.User;

public interface UserService {
	
	List<User> getAllUser();
	
	UserResponse getCurrentUser(Authentication authentication);

}
