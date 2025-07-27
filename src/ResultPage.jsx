import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function ResultPage() {
    const REST_API_KEY = "69273c6213f7e4766b730652ca06d5a0"
    const location = useLocation()
    const query = new URLSearchParams(location.search).get("query")
    const [result, setResult] = useState([])

    useEffect(()=>{
        if (!query) return
        fetch(`https://dapi.kakao.com/v2/search/web.json?query=${encodeURIComponent(query)}`,{
            headers:{
                 Authorization: `KakaoAK ${REST_API_KEY}`,
            },
        })
        .then((res)=>res.json())
    .then((data)=>setResult(data.documents))
    },[query])
    
  return (
    <div>
         <div className="resultbox">
          {result.map((item, idx)=>(
            <div key={idx} className="resultitem">
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {item.title.replace(/<[^>]+>/g,"")} {/*태그 제거*/}
              </a>
            </div>
          ))}
        </div>
    </div>
  )
}
