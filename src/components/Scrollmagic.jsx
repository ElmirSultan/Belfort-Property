import React from 'react'
import "../components/css/scroll.css"
import homelogo from "../assets/images/homelogo.png"
import house from "../assets/images/housebg.png"
import Typed from 'react-typed';
import heart from "../assets/images/heart.png"
import flag from "../assets/images/flag.png"
import sprrw from "../assets/images/sprrw.png"
import magic from "../assets/images/magic.png"
import { Animator, batch, Fade, FadeIn, Move, MoveIn, MoveOut, ScrollContainer, ScrollPage, Sticky, StickyIn, Zoom, ZoomIn } from 'react-scroll-motion'
const FadeUp = batch(Fade(), Move())
const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn())
const Scrollmagic = () => {
  return (
    <ScrollContainer>
      <ScrollPage page={0}>
        <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -200))}>
          <img src={homelogo} alt="" />
        </Animator>
      </ScrollPage>

      <ScrollPage page={1}>
        <Animator animation={ZoomInScrollOut}>
          <div className='welcome-side'>
          <h1>BELFORT CITY-Ə XOŞ GƏLMİŞSİNİZ </h1>
          </div>
        </Animator>
      </ScrollPage>

      <ScrollPage page={2}>
      <div className='qarsilama'>
        <Animator animation={FadeUp}>
          
          <Typed className='type'
                strings={[
                    '<h1>BELFORT CITY SİZİ RAHAT HƏYAT TƏRZİ İLƏ TƏMİN EDİR... </h1>'
                ]}
                // onComplete={(self) => self.cursor.remove()}  
                    typeSpeed={50}
                    // backSpeed={20}
                    loop
                    showCursor={false}        
                     >

                </Typed>
          
        </Animator>
        </div>
      </ScrollPage>

      <ScrollPage page={3}>
        <div className='section-3'>
          <div className='text'>
          <h1>
            <Animator animation={MoveIn(-1000,0)}>XƏYALLARINIZDAKI EVƏ QOVUŞUN</Animator>
          </h1>
          </div>
          <div className='ev'>
          <Animator animation={MoveIn(1000,0)}><img src={house} alt="" /></Animator>
          </div>
          
        </div>
      </ScrollPage>

      <ScrollPage page={4}>
      
      <div className='section-4'>
      <Animator animation={batch(FadeIn(), ZoomIn())}>
        <h1>BELFORT İLƏ HƏR ŞEY DAHA RAHAT</h1>
      </Animator>
          <div className='yazilar'>
            <Animator animation={MoveIn(1000,0)}>AĞILLI EVLƏR</Animator>
            <Animator animation={MoveIn(-1000,0)}>ŞƏHƏRİN MƏRKƏZİNƏ YAXIN</Animator>
            <Animator animation={MoveOut(-1000,0)}>İDMAN MEYDANÇALARI</Animator>
            <Animator animation={MoveOut(1000,0)}>MƏKTƏB</Animator>
            <Animator animation={MoveIn(1000,0)}>UŞAQ BAĞÇASI</Animator>
            <Animator animation={MoveOut(-1000,0)}>BELFORT TİCARƏT MƏRKƏZLƏRİ</Animator>
          </div>
          
          
        
          
        </div>
        
      </ScrollPage>
    </ScrollContainer>
  )
}

export default Scrollmagic