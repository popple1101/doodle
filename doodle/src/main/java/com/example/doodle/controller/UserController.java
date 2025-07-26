package com.example.doodle.controller;

import com.example.doodle.domain.User;
import com.example.doodle.dto.LoginRequest;
import com.example.doodle.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@CrossOrigin(origins = "http://localhost:3000") // 프론트 연결 대비
@RestController // JSON 응답을 주는 컨트롤러
@RequestMapping("/api")

public class UserController {
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/login") //
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        Optional<User> userOpt = userRepository.findByEmail(request.getEmail());

        if (userOpt.isEmpty()) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("이메일 없음");
        }

        User user = userOpt.get();
        if(!user.getPassword().equals(request.getPassword())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("비밀번호 틀림");
        }

        Map<String, Object> response = new HashMap<>();
        response.put("message", "로그인 성공");
        response.put("userId", user.getId());

        return ResponseEntity.ok(response);
    }
}
