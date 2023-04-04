import React from 'react'
import { Link } from 'react-router-dom'
import "../components/css/blog.css"
const Blogcard = ({blogShekli,blogAd,blogHaqqinda,category}) => {
  return (
    <div className='blog-card' data-aos="fade-up">
        <div className="top-side">
            <img src={blogShekli} alt="" />
            <p>{category}</p>
        </div>
        <div className="bottom-side">
            <h3>{blogAd}</h3>
            <p>{blogHaqqinda}</p>
            <Link to={"/about-us"}>DAHA ƏTRAFLI</Link>
        </div>
    </div>
  )
}

export default Blogcard