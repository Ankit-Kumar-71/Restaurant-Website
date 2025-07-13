package com.api.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.api.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {
   Optional<User> findByEmail(String email);
   boolean existsByRole(String role);
}