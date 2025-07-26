package com.example.doodle.dto;

public class SignupRequest {
    private String email;
    private String password;

    // 기본 생성자 (필수)
    public SignupRequest() {}

    // Getter/Setter
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

