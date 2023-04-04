import React from 'react'
import "../components/css/comments.css"
const Comments = () => {
  return (
    <div className="comments" data-aos="fade-up">
                <p>Rəylər</p>
                <h1>İNSANLARIN BELFORT RESİDENCE <br />
                    HAQQINDA DÜŞÜNCƏLƏRİ</h1>
                <div className="box-container">
                    <div className="comment-box">
                        <div className="star">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                        </div>
                        <p>"Buranın yaşayış imkanları və yerləşdiyi yer şərait bir sözlə mükəmməldi..."</p>
                        <span>Burxan Həsənli</span>
                    </div>
                    <div className="comment-box">
                        <div className="star">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                        </div>
                        <p>"Buranın yaşayış imkanları və yerləşdiyi yer şərait bir sözlə mükəmməldi..."</p>
                        <span>Mehemmed Bulut</span>
                    </div>
                    <div className="comment-box">
                        <div className="star">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                        </div>
                        <p>"Buranın yaşayış imkanları və yerləşdiyi yer şərait bir sözlə mükəmməldi..."</p>
                        <span>Yunis Aslanov</span>
                    </div>
                </div>
            </div>
  )
}

export default Comments