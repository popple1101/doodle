import { useEffect, useState } from "react";
import "./doodle.css";
import { useNavigate } from "react-router-dom";

export default function Doodle() {
  const REST_API_KEY = "69273c6213f7e4766b730652ca06d5a0";
  const [result, setResult] = useState([]);
  const navigate = useNavigate();
  const [keyword, setkeyword] = useState("");

  const searchPlace = (keyword) => {
    fetch(`https://dapi.kakao.com/v2/search/web.json?query=${encodeURIComponent(keyword)}`, {
      method: "GET",
      headers: {
        Authorization: `KakaoAK ${REST_API_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("검색 결과: ", data.documents);
        setResult(data.documents);
      })
      .catch((err) => {
        console.error("에러 발생: ", err);
      });
  };

  const handleSearch = (e) => {
    if (e.key === "Enter" && keyword.trim()) {
      navigate(`/result?query=${encodeURIComponent(keyword)}`);
    }
  };

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

    const handleLogin = () => {
      const id = document.getElementById("loginid").value;
      const password = document.getElementById("password").value;

      fetch(`${API_BASE}/users?id=${id}&password=${password}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.length > 0) {
            alert("로그인 성공");
            loginModal.style.display = "none";
            document.getElementById("loginid").value = "";
            document.getElementById("password").value = "";
          } else {
            alert("아이디 또는 비밀번호를 확인하세요");
          }
        })
        .catch((err) => {
          console.error("에러 발생: ", err);
        });
    };

    const handleSignup = () => {
      const id = document.getElementById("signupid").value;
      const username = document.getElementById("signupusername").value;
      const password = document.getElementById("signuppassword").value;

      if (!id || !username || !password) {
        alert("모든 값을 입력해 주세요!");
        return;
      }

      fetch(`${API_BASE}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, username, password }),
      })
        .then((res) => res.json())
        .then(() => {
          alert("회원가입 완료! 로그인 해주세요.");
          signupModal.style.display = "none";
          document.getElementById("signupid").value = "";
          document.getElementById("signupusername").value = "";
          document.getElementById("signuppassword").value = "";
        })
        .catch((err) => {
          console.error("회원가입 에러: ", err);
          document.getElementById("signupid").value = "";
          document.getElementById("signupusername").value = "";
          document.getElementById("password").value = "";
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
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Itim&display=swap" rel="stylesheet" />

      {/* 네비게이션 */}
      <div className="nav">
        <ul className="ul">
          <li className="li"><a href="#" className="a">Doodle 개발자 소개</a></li>
          <li className="li"><a href="#" className="a">Doodle 후원</a></li>
        </ul>
      </div>
      <div className="nav2">
        <ul className="ul2">
          <li className="li2"><a href="#" className="a" id="loginLink">로그인</a></li>
          <li className="li2"><a href="#" className="a" id="signupLink">회원가입</a></li>
        </ul>
      </div>

      {/* 중앙 정렬된 로고/입력창 */}
      <div className="container">
        <p><span className="D">D</span><span className="o1">o</span><span className="o2">o</span><span className="d">d</span><span className="l">l</span><span className="e">e</span></p>
        <input
          type="text"
          name="입력"
          id="inp"
          onChange={(e) => setkeyword(e.target.value)}
          onKeyDown={handleSearch}
          value={keyword}
        />
      </div>

      {/* 로그인 모달 */}
      <div id="loginmodal" className="modal">
        <div className="modal-content">
          <span className="closebtn">&times;</span>
          <h2 className="madaltitle">로그인</h2>
          <input type="text" id="loginid" className="logininput" placeholder="아이디" />
          <input type="password" id="password" className="logininput" placeholder="비밀번호" />
          <button id="loginbtn" className="loginbtn">로그인</button>
        </div>
      </div>

      {/* 회원가입 모달 */}
      <div id="signmodal" className="modal">
        <div className="modal-content">
          <span className="closebtn2">&times;</span>
          <h2 className="madaltitle">회원가입</h2>
          <input type="text" id="signupid" className="logininput" placeholder="ID" />
          <input type="text" id="signupusername" className="logininput" placeholder="사용자 이름" />
          <input type="password" id="signuppassword" className="logininput" placeholder="비밀번호" />
          <button id="signupbtn" className="loginbtn">회원가입</button>
        </div>
      </div>
    </div>
  );
}
