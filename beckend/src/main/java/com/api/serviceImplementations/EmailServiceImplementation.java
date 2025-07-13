package com.api.serviceImplementations;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import com.api.services.EmailService;

@Service
public class EmailServiceImplementation implements EmailService {

    private JavaMailSender mailSender;

    public EmailServiceImplementation(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    @Override
    public void sendAutoReply(String toEmail, String name, String userMessage) {
        String subject = "Thank you for contacting us!";
        String body = String.format("""
                Hello %s,

                Thank you for reaching out to us.

                We have received your message:
                "%s"

                Our team will get back to you shortly.

                Regards,
                Admin Team
                """, name, userMessage);

        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("jeetkashyap20224@gmail.com");
        message.setTo(toEmail);
        message.setSubject(subject);
        message.setText(body);

        mailSender.send(message);
    }

}
