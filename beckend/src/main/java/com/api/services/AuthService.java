package com.api.services;

import java.io.IOException;

import org.springframework.web.multipart.MultipartFile;

import com.api.dto.SignupRequest;
import com.api.dto.loginRequest;

public interface AuthService {

    public String login(loginRequest request);

    public String register(SignupRequest request, MultipartFile image) throws IOException;

}
