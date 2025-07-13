package com.api.controllers;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.api.entities.ContactMessage;
import com.api.repository.ContactMessageRepository;
import com.api.services.EmailService;

@RestController
@RequestMapping("/api/contact")
public class ContactController {

    private ContactMessageRepository repository;

    private EmailService emailService;

    public ContactController(ContactMessageRepository repository, EmailService emailService) {
        this.repository = repository;
        this.emailService = emailService;
    }

    @PostMapping("/send")
    public ResponseEntity<String> receiveMessage(@RequestBody ContactMessage contact) {
        repository.save(contact);

        emailService.sendAutoReply(contact.getEmail(), contact.getName(), contact.getMessage());

        return ResponseEntity.ok("Message received and Reply sent");
    }

    @GetMapping("/get")
    public List<ContactMessage> getAllMessages() {
        return repository.findAll();
    }
}