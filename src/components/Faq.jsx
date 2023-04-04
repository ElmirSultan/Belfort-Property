import React, {useState} from 'react'
import "../components/css/faq.css"
const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    // array of questions and answers
    const faqs = [
      {
        question: 'Hansı materiallardan istifadə olunur?',
        answer: 'Evlərin tikilməsində Türkiyə Almaniya Kanada istehsalı tikinti resurslarından istifadə olunmuşdur'
      },
      {
        question: 'Necə ala bilərəm?',
        answer: 'Səhifəmizdən bəyəndiyiniz evi seçib bizimlə əlaqə saxlayıb ofisimizə görüş təyin edə bilərsiniz.Sonra isə ofisimzdə sənədləşməni yerinə yetirmək mümkündür.'
      },
      {
        question: 'Avropada filialımız varmı?',
        answer: 'Hal-hazırda Azərbaycan içində fillialarımız fəaliyyət göstərməktədir.Gələcək 1 il içində Kanada və Almaniya filiallarımızda açılacagdır.'
      },
      {
        question:'Fazisiz plan təklif edirsiniz?',
        answer:'Faizsiz plan təklifimiz hələdə keçərlidir.'
      },
      {
        question:'Necə görüş təyin edə bilərəm?',
        answer:'Səhifəmizdə mövcud olan əlaqə hissəsindən görüş təyin edib və yaxud əlaqə nömrəmiz ilə əlaqə saxlayıb ofisimizə yaxınlaşa bilərsiz'
      }
    ];
  
    // function to toggle the active question
    function toggleActive(index) {
      setActiveIndex(activeIndex === index ? null : index);
    }
    
    
    
  return (
    <section className='faq'  data-aos="fade-up">
        <h1>TEZ-TEZ SORUŞULAN <br />
         SUALLAR</h1>
         <div className="faq-table" data-aos-duration="2000" data-aos="fade-down">
         {faqs.map((faq, index) => (
        <div key={index} className="sual">
          <div className="top-side"  onClick={() => toggleActive(index)}>
          <h3 className={activeIndex === index ? 'active' : ''}>{faq.question}</h3>
          <i className="bi bi-caret-down-fill"></i>
          </div>
          <div className="bottom-side" >
          {activeIndex === index && <p>{faq.answer}</p>}
          </div>
        </div>
      ))}
         </div>
    </section>
  )
}

export default Faq