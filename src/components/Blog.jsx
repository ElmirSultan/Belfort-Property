import React , {useState , useRef} from 'react'
import "../components/css/blog.css"
import pp from "../assets/images/pp.png"
import qutu1 from "../assets/images/qutu1.jpg"
import qutu2 from "../assets/images/qutu2.jpg"
import qutu3 from "../assets/images/qutu3.jpg"
import Button from './Button'
import Blogcard from './Blogcard'
import blogJson from "../components/json/blog.json"
import emailjs from '@emailjs/browser';

const Blog = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
      };

      const filteredBoxes = selectedCategory
    ? blogJson.filter((blogqutu) => blogqutu.category === selectedCategory)
    : blogJson;


    const formFillRef = useRef();
    const service_Id = "service_p41pjkn"
    const template_Id = "template_krx4yep"
    const public_Key = "3usssEuW5DEkQJdTz"

    const sendEmail = (e) => {
        e.preventDefault();



        emailjs.sendForm(service_Id, template_Id, formFillRef.current, public_Key)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        formFillRef.current.reset();
    };

    return (
        <section className='blog'>
            <div className="blog-box">
                <div className="left-side">
                    {
                        filteredBoxes.map(blogqutu=>(
                            <Blogcard key={blogqutu.id}
                            blogShekli={blogqutu.blogShekli}
                            blogAd={blogqutu.blogAd}
                            blogHaqqinda={blogqutu.blogHaqqinda}
                            category = {blogqutu.category}/>
                        ))
                    }
                </div>
                <div className="right-side">
                    <div className="profile-box" data-aos="fade-up">
                        <div className="top-side">
                            <img src={pp} alt="profile-photo" />
                        </div>
                        <div className="bottom-side">
                            <p>Məqsədimiz insanların daha rahat və əlverişli mənzillərimizdən yararlanmasıdır.</p>
                            <div className="icons">
                                <a href="#"><i className="bi bi-facebook"></i></a>
                                <a href="#"><i className="bi bi-instagram"></i></a>
                                <a href="#"><i className="bi bi-twitter"></i></a>
                                <a href="#"><i className="bi bi-pinterest"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="categories" data-aos="fade-up">
                        <h3>KATEGORİYALAR</h3>
                        <p onClick={() => handleCategoryClick("hadise")}>Hadisələr</p>
                        <p onClick={() => handleCategoryClick("evler")}>Evlər</p>
                        <p onClick={() => handleCategoryClick("xeberler")}>Xəbərlər</p>
                        <p onClick={() => handleCategoryClick("dizayn")}>Dizayn</p>
                    </div>

                    <div className="recent-posts" data-aos="fade-up">
                        <h3>ƏN SON YENİLİKLƏR</h3>
                         <div className="qutu">
                            <div className="left">
                             <img src={qutu1} alt="qutu" />
                            </div>
                            <div className="right">
                                <p>AĞILLI YAŞAM</p>
                                <span>10 Yanvar. 2023</span>
                            </div>
                         </div>

                         <div className="qutu">
                            <div className="left">
                             <img src={qutu2} alt="qutu" />
                            </div>
                            <div className="right">
                                <p>EV VƏ MƏNZİLLƏR</p>
                                <span>10 Yanvar. 2023</span>
                            </div>
                         </div>

                         <div className="qutu">
                            <div className="left">
                             <img src={qutu3} alt="qutu" />
                            </div>
                            <div className="right">
                                <p>MƏTBƏX ÜÇÜN 5 MÜKƏMMƏL İDEA</p>
                                <span>10 Yanvar. 2023</span>
                            </div>
                         </div>
                    </div>

                    <div className="mektub" onSubmit={sendEmail} data-aos="fade-up">
                        <h3>MƏKTUB</h3>
                        <form className="input-box" ref={formFillRef}>
                            <input type="text" placeholder='Adınız' required name='name' />
                            <input type="email" placeholder='E-mail ünvanınız' name='email' required />

                            <Button butonYazisi={"Təsdiqlə"}/>
                        </form>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog