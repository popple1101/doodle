package com.example.doodle.domain;

import jakarta.persistence.*; // JPA 관련 어노테이션
import lombok.Getter;
import lombok.Setter;

@Entity // 이 클래스는 DB 테이블
@Getter @Setter

public class User {

    @Id // 기본 키(PK) 지정
    @GeneratedValue(strategy = GenerationType.IDENTITY) // ID 값을 자동으로 증가시키겠다는 설정
    private Long id;

    // 로그인에 필요한 필드(DB 컬럼이 됨)
    private String email; 
    private String password;
    
}
