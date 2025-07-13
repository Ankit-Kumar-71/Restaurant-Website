package com.api.security;

import java.nio.charset.StandardCharsets;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.crypto.SecretKey;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

@Component
public class JwtUtil {

    @Value("${SECRET-KEY}")
    private String secret;

    // Generate JWT Token
    public String generateToken(String email, String role) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("role", role);

        long expirationTimeMs = 24 * 60 * 60 * 1000; // 24 hours
        Date now = new Date();
        Date expiryDate = new Date(now.getTime() + expirationTimeMs);
        SecretKey key = Keys.hmacShaKeyFor(secret.getBytes(StandardCharsets.UTF_8));

        return Jwts.builder()
                .setClaims(claims)
                .setSubject(email)
                .setIssuedAt(now)
                .setExpiration(expiryDate)
                .signWith(key, SignatureAlgorithm.HS256)
                .compact();
    }

    // Extract all claims from JWT token
    private Claims extractAllClaims(String token) {
        SecretKey key = Keys.hmacShaKeyFor(secret.getBytes(StandardCharsets.UTF_8));

        return Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    // Extract Email
    public String extractEmail(String token) {
        try {
            String email = extractAllClaims(token).getSubject();
            if (email == null || email.isBlank()) {
                throw new IllegalArgumentException("Token does not contain a valid email");
            }
            return email;
        } catch (JwtException e) {
            throw new IllegalArgumentException("Invalid or expired JWT token", e);
        }
    }

    // Extract Username (same as email)
    public String extractUsername(String token) {
        return extractEmail(token);
    }

    // Extract Role
    public String extractRole(String token) {
        try {
            String role = extractAllClaims(token).get("role", String.class);
            if (role == null || role.isBlank()) {
                throw new IllegalArgumentException("Token does not contain a valid role");
            }
            return role;
        } catch (JwtException e) {
            throw new IllegalArgumentException("Invalid or expired JWT token", e);
        }
    }

    // Check if Token is Expired
    public boolean isTokenExpired(String token) {
        try {
            return extractAllClaims(token).getExpiration().before(new Date());
        } catch (JwtException e) {
            return true;
        }
    }

    // Validate Token
    public boolean validateToken(String token, String expectedEmail) {
        try {
            String email = extractEmail(token);
            return (email.equals(expectedEmail) && !isTokenExpired(token));
        } catch (JwtException | IllegalArgumentException ex) {
            return false;
        }
    }

}
