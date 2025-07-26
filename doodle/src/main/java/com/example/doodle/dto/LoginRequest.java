// 프론트에서 받은 로그인 데이터(email, password) 저장

package com.example.doodle.dto;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter

public class LoginRequest {
    private String email;
    private String password;
}

public class SignupRequest {
    private String email;
    private String password;
}