// DB에서 User를 조회/저장/삭제 (특히 이메일로 찾기)

package com.example.doodle.repository;

import com.example.doodle.domain.User;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}
