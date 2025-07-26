import { useEffect } from "react"
import "./doodle.css"

export default function Doodle() {
 useEffect(()=>{
    const loginLink = document.getElementById("loginLink")
    const loginModal = document.getElementById("loginmodal")
    const closebtn = document.querySelector(".closebtn")
    const loginbtn = document.getElementById("loginbtn")

    const signupLink = document.getElementById("signupLink")
    const signupModal = document.getElementById("signmodal")
    const closebtn2 = document.querySelector(".closebtn2")
    const signupbtn = document.getElementById("signupbtn")

    

const handleLogin = () =>{
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value

    fetch("http://localhost:8080/login",{
        method: "POST", headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({username, password})
    }
)
        .then((res)=>res.json())
        .then((data)=>{
            if(data.success){
                alert("로그인 성공")
            }else{
                alert("아이디, 비밀번호를 확인하세요")
            }
        })
        .catch((err)=>{
            console.error("에러 발생: ",err)
        })
    }
    const handleSignup = () => {
        const username = document.getElementById("signupusername").value
        const password = document.getElementById("signuppassword").value

        fetch("http//localHost:8080/signup",{
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body : JSON.stringify({username, password})
        })
            .then((res)=>res.json())
            .then((data)=>{
                if (data.success){
                    alert("회원가입 완료 되었습니다. 로그인 후 이용해주세요.")
                    signupModal.style.display = "none"
                }else{
                    alert("회원가입 실패: "+data.message)
                }
            })
                .catch((err)=>{
                    console.error("에러 발생: ",err)
                })
                if (loginbtn){
        loginbtn.addEventListener("click", handleLogin)
    }
    }
    if (loginLink && loginModal && closebtn){
        loginLink.addEventListener("click", (e)=>{
            e.preventDefault()
            loginModal.style.display = "block"
        })
        closebtn.addEventListener("click",()=>{
            loginModal.style.display="none"
        })
        window.addEventListener("click",(e)=>{
            if (e.target === loginModal){
                loginModal.style.display = "none"
            }
        })
    }
    if(signupLink && signupModal && closebtn2){
        signupLink.addEventListener("click",(e)=>{
            e.preventDefault()
            signupModal.style.display="block"
        })
        closebtn2.addEventListener("click",()=>{
            signupModal.style.display = "none"
        })
        window.addEventListener("click",(e)=>{
            if (e.target === signupModal){
                signupModal.style.display = "none"
            }
        })
    if (signupbtn) signupbtn.addEventListener("click",handleSignup)
    }
 },[])
  return (
    
    <div>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
    <link href="https://fonts.googleapis.com/css2?family=Itim&display=swap" rel="stylesheet"/>
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
        <div className="icon">
          <p><span className="D">D</span><span className="o1">o</span><span className="o2">o</span><span className="d">d</span><span className="l">l</span><span className="e">e</span></p>
          <input type="text" name="입력" id="inp" />
        </div>
        <div id="loginmodal" className="modal">
            <div className="modal-content">
                <span className="closebtn">&times;</span>
                <h2 className="madaltitle">로그인</h2>
                <input type="text" id="username" className="logininput" placeholder="아이디"/>
                <input type="password" id="password" className="logininput" placeholder="비밀번호"/>
                <button id="loginbtn" className="loginbtn">로그인</button>
            </div>
        </div>
        <div id="signmodal" className="modal">
            <div className="modal-content">
                <span className="closebtn2">&times;</span>
                <h2 className="madaltitle">회원가입</h2>
                <input type="text" id="signupusername" className="logininput" placeholder="아이디"/>
                <input type="password" id="signuppassword" className="logininput" placeholder="비밀번호"/>
                <button id="signupbtn" className="loginbtn">회원가입</button>
            </div>
        </div>
    </div>
  )
}
