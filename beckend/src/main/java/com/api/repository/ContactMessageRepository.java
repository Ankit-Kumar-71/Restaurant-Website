package com.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.api.entities.ContactMessage;

public interface ContactMessageRepository extends JpaRepository<ContactMessage, Long> {
}