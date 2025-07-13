package com.api.serviceImplementations;

import java.io.IOException;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.api.dto.SignupRequest;
import com.api.dto.loginRequest;
import com.api.entities.CustomUserDetails;
import com.api.entities.User;
import com.api.repository.UserRepository;
import com.api.security.JwtUtil;
import com.api.services.AuthService;

@Service
public class AuthServiceImplementaion implements AuthService {

    private final JwtUtil jwtUtil;

    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    private final FileStorageUtil fileStorageUtil;

    private final AuthenticationManager authManager;

    public AuthServiceImplementaion(UserRepository userRepository, JwtUtil jwtUtil, PasswordEncoder passwordEncoder,
            FileStorageUtil fileStorageUtil, AuthenticationManager authManager) {
        this.userRepository = userRepository;
        this.jwtUtil = jwtUtil;
        this.passwordEncoder = passwordEncoder;
        this.fileStorageUtil = fileStorageUtil;
        this.authManager = authManager;
    }

    @Override
    public String login(loginRequest request) {
        Authentication authentication = authManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));

        CustomUserDetails userDetails = (CustomUserDetails) authentication.getPrincipal();
        User user = userDetails.getUser();

        String token = jwtUtil.generateToken(user.getEmail(), user.getRole());

        return token;

    }

    @Override
    public String register(SignupRequest request, MultipartFile image) throws IOException {

        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            throw new RuntimeException("Email already exists");
        }

        if ("ROLE_ADMIN".equalsIgnoreCase(request.getRole()) && userRepository.existsByRole("ROLE_ADMIN")) {
            throw new IllegalStateException("Admin already exists");
        }

        String imagePath = fileStorageUtil.store(image);

        User user = new User();
        user.setRole(request.getRole());
        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setImage(imagePath);
        userRepository.save(user);
        return "User Created Successfully";
    }

}
