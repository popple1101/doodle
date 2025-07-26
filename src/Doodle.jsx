import { useEffect } from "react";
import "./doodle.css";

export default function Doodle() {
  useEffect(() => {
    const API_BASE = "http://localhost:8080";

    const loginLink = document.getElementById("loginLink");
    const loginModal = document.getElementById("loginmodal");
    const closebtn = document.querySelector(".closebtn");
    const loginbtn = document.getElementById("loginbtn");

    const signupLink = document.getElementById("signupLink");
    const signupModal = document.getElementById("signmodal");
    const closebtn2 = document.querySelector(".closebtn2");
    const signupbtn = document.getElementById("signupbtn");

    // 로그인: id + password 기반
    const handleLogin = () => {
      const email = document.getElementById("loginemail").value;
      const password = document.getElementById("password").value;

      fetch(`${API_BASE}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })
        .then((res) => {
          if (!res.ok) {
            return res.text().then((text) => {
              throw new Error(text);
            });
          }
          return res.json();
        })
        .then((data) => {
          alert("로그인 성공! 유저 ID: " + data.userId);
          loginModal.style.display = "none";
        })
        .catch((err) => {
          alert("로그인 실패: " + err.message);
        });
    };

    // 회원가입: id, username, password 모두 입력
    const handleSignup = () => {
      const email = document.getElementById("signupemail").value;
      const password = document.getElementById("signuppassword").value;

      if (!email || !password) {
        alert("모든 값을 입력해 주세요!");
        return;
      }

      fetch(`${API_BASE}/api/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })
        .then((res) => {
          if (!res.ok) {
            return res.text().then((text) => {
              throw new Error(text);
            });
          }
          return res.json();
        })
        .then((data) => {
          alert("회원가입 완료! 유저 ID: " + data.userId);
          signupModal.style.display = "none";
        })
        .catch((err) => {
          alert("회원가입 실패: " + err.message);
        });
    };

    if (loginLink && loginModal && closebtn) {
      loginLink.addEventListener("click", (e) => {
        e.preventDefault();
        loginModal.style.display = "block";
      });

      closebtn.addEventListener("click", () => {
        loginModal.style.display = "none";
      });

      window.addEventListener("click", (e) => {
        if (e.target === loginModal) {
          loginModal.style.display = "none";
        }
      });

      if (loginbtn) loginbtn.addEventListener("click", handleLogin);
    }

    if (signupLink && signupModal && closebtn2) {
      signupLink.addEventListener("click", (e) => {
        e.preventDefault();
        signupModal.style.display = "block";
      });

      closebtn2.addEventListener("click", () => {
        signupModal.style.display = "none";
      });

      window.addEventListener("click", (e) => {
        if (e.target === signupModal) {
          signupModal.style.display = "none";
        }
      });

      if (signupbtn) signupbtn.addEventListener("click", handleSignup);
    }
  }, []);

  return (
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Itim&display=swap"
        rel="stylesheet"
      />

      {/* 네비게이션 */}
      <div className="nav">
        <ul className="ul">
          <li className="li">
            <a href="#" className="a">
              Doodle 개발자 소개
            </a>
          </li>
          <li className="li">
            <a href="#" className="a">
              Doodle 후원
            </a>
          </li>
        </ul>
      </div>
      <div className="nav2">
        <ul className="ul2">
          <li className="li2">
            <a href="#" className="a" id="loginLink">
              로그인
            </a>
          </li>
          <li className="li2">
            <a href="#" className="a" id="signupLink">
              회원가입
            </a>
          </li>
        </ul>
      </div>

      {/* 로고 */}
      <div className="icon">
        <p>
          <span className="D">D</span>
          <span className="o1">o</span>
          <span className="o2">o</span>
          <span className="d">d</span>
          <span className="l">l</span>
          <span className="e">e</span>
        </p>
        <input type="text" name="입력" id="inp" />
      </div>

      {/* 로그인 모달 */}
      <div id="loginmodal" className="modal">
        <div className="modal-content">
          <span className="closebtn">&times;</span>
          <h2 className="madaltitle">로그인</h2>
          <input
            type="email"
            id="loginemail"
            className="logininput"
            placeholder="아이디 (숫자)"
          />
          <input
            type="password"
            id="password"
            className="logininput"
            placeholder="비밀번호"
          />
          <button id="loginbtn" className="loginbtn">
            로그인
          </button>
        </div>
      </div>

      {/* 회원가입 모달 */}
      <div id="signmodal" className="modal">
        <div className="modal-content">
          <span className="closebtn2">&times;</span>
          <h2 className="madaltitle">회원가입</h2>
          <input
            type="email"
            id="signupemail"
            className="logininput"
            placeholder="이메일"
          />
          <input
            type="password"
            id="signuppassword"
            className="logininput"
            placeholder="비밀번호"
          />
          <button id="signupbtn" className="loginbtn">
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
}
