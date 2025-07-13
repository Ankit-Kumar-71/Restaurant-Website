package com.api.services;

public interface EmailService {

    public void sendAutoReply(String toEmail, String name, String userMessage);
}
