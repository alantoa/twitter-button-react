import React, { Component } from 'react'
import style from './likeButton.module.css'
import gsap, { TimelineLite,Power1,Power3,  } from 'gsap'
const svg = {
    position: 'absolute',
    zIndex: '2',
    pointerEvents: 'none',
    enableBackground: 'new 0 0 131.5 131.5'
}
const disable = {
  'pointerEvents':'none'
}
class LikeButton extends Component {
  constructor(props) {
    super(props)
    this.tl = new TimelineLite({ paused: true })
    this.state = {
      clicked: false
    }
  }
  changeBtn(){
      this.setState({
        clicked : !this.state.clicked
      })
      if(this.state.clicked){
        gsap.to("#btnOff", 0, {background: "#3a273b", opacity: 1});
        gsap.to("#btnOff", 0, {delay: .3, background: "#2d2837"});
        this.tl.play();
        gsap.to("#btnOn", 0, {delay: 1.2, pointerEvents: "all"})
      }else{
        this.tl.progress(0);
        this.tl.pause();
        gsap.to(".st0", .15, {stroke: "#8799A4", ease: Power1.easeOut});
        gsap.to("#btnOff", 0, {opacity: 0, pointerEvents: "all"});
        gsap.to("#btnOn", 0, {pointerEvents: "none"})
      }
  }

  componentDidMount() {
    gsap.set(
      '#outer-circles, #inner-circles, #inner-circle, #inner-circle-morph, #inner-circles-morph, #outer-circles-morph',
      { opacity: 0 }
    )
    gsap.set('#heart', {
      transform: 'scale(.8)',
      transformOrigin: 'center',
      y: 3
    })
    gsap.set('#inner-1', { y: -2 })
    this.tl = new TimelineLite({ paused: true })
      .to('#heart', 0.15, {
        scale: 0,
        transformOrigin: 'center',
        stroke: 'transparent',
        ease: Power1.easeOut
      })
      .to('#inner-circle, #inner-circles, #outer-circles', 0.15, {
        delay: -0.15,
        opacity: 1,
        
      })
      .to('#outer-1', 0.6, { delay: -0.3, morphSVG: '#outer-1-morph', ease: Power3.easeOut })
      .to('#outer-2', 0.6, { delay: -0.6, morphSVG: '#outer-2-morph', ease: Power3.easeOut })
      .to('#outer-3', 0.6, { delay: -0.6, morphSVG: '#outer-3-morph', ease: Power3.easeOut })
      .to('#outer-4', 0.6, { delay: -0.6, morphSVG: '#outer-4-morph', ease: Power3.easeOut })
      .to('#outer-5', 0.6, { delay: -0.6, morphSVG: '#outer-5-morph', ease: Power3.easeOut })
      .to('#outer-6', 0.6, { delay: -0.6, morphSVG: '#outer-6-morph', ease: Power3.easeOut })
      .to('#outer-7', 0.6, { delay: -0.6, morphSVG: '#outer-7-morph', ease: Power3.easeOut })
      .to('#inner-1', 0.6, { delay: -0.6, morphSVG: '#inner-1-morph', ease: Power3.easeOut })
      .to('#inner-2', 0.6, { delay: -0.6, morphSVG: '#inner-2-morph', ease: Power3.easeOut })
      .to('#inner-3', 0.6, { delay: -0.6, morphSVG: '#inner-3-morph', ease: Power3.easeOut })
      .to('#inner-4', 0.6, { delay: -0.6, morphSVG: '#inner-4-morph', ease: Power3.easeOut })
      .to('#inner-5', 0.6, { delay: -0.6, morphSVG: '#inner-5-morph', ease: Power3.easeOut })
      .to('#inner-6', 0.6, { delay: -0.6, morphSVG: '#inner-6-morph', ease: Power3.easeOut })
      .to('#inner-7', 0.6, { delay: -0.6, morphSVG: '#inner-7-morph', ease: Power3.easeOut })
      .to(
        '#outer-1, #outer-2, #outer-3, #outer-4, #outer-5, #outer-6, #outer-7',
        0.3,
        { delay: -0.3, scale: 0, transformOrigin: 'center' }
      )
      .to(
        '#inner-1, #inner-2, #inner-3, #inner-4, #inner-5, #inner-6, #inner-7',
        0.3,
        { scale: 0, transformOrigin: 'center' }
      )
      .to('#inner-circle', 0.6, {
        delay: -0.9,
        morphSVG: '#inner-circle-morph',
        stroke: '#d090ef',
        fill: 'transparent',
        strokeWidth: 2,
        transformOrigin: 'center',
        ease: Power1.easeOut
      })
      .to('#inner-circle', 0.6, { delay: -0.6, opacity: 0, strokeWidth: 0 ,ease: Power1.easeOut})
      .to('#heart', 0.6, {
        delay: -0.6,
        scale: 0.8,
        transformOrigin: 'center',
        fill: '#df255d',
        ease: 'back.out(3)'
      })
      .pause()
  }

  render() {
    return (
      <div className={style.like}>
        <svg
          version='1.1'
          id='Layer_1'
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          x='0px'
          y='0px'
          viewBox='0 0 131.5 131.5'
          style={svg}
          xmlSpace='preserve'
        >
          <style
            type='text/css'
            dangerouslySetInnerHTML={{
              __html:
                '\n\t.st0{fill:none;stroke:#8799A4;stroke-width:3;stroke-miterlimit:10;}\n\t.st1{fill:#94D0F7;}\n\t.st2{fill:#CF90EE;}\n\t.st3{fill:#90E4C3;}\n\t.st4{fill:#EF90B2;}\n\t.st5{fill:none;stroke:#D090EF;stroke-miterlimit:10;}\n  '
            }}
          />
          <g>
            <path
              id='heart'
              className='st0'
              d='M75.1,44.3c-4,0-6.7,3-9,5.7c-0.2,0.2-0.5,0.2-0.7,0c-2.4-2.8-5.6-5.7-9.8-5.7
      c-5.8,0-10.7,4.9-11.8,11.1C41.4,68.7,57.3,82,63.4,86.5c1.4,1,3.2,1,4.6,0c5.7-4.2,19.9-15.9,19.9-28.3
      C87.9,50.5,82.2,44.3,75.1,44.3L75.1,44.3z'
            />
          </g>
          <g id='outer-circles'>
            <path
              id='outer-1'
              className='st1'
              d='M65.4,50.2c-2.4,0-4.3-1.9-4.3-4.3c0-2.4,1.9-4.3,4.3-4.3s4.3,1.9,4.3,4.3
      C69.7,48.3,67.8,50.2,65.4,50.2z'
            />
            <path
              id='outer-2'
              className='st2'
              d='M81.6,57.8c-2.4,0-4.3-1.9-4.3-4.3c0-2.4,1.9-4.3,4.3-4.3c2.4,0,4.3,1.9,4.3,4.3
      C85.9,55.9,84,57.8,81.6,57.8z'
            />
            <path
              id='outer-3'
              className='st3'
              d='M85.9,75.4c-2.4,0-4.3-1.9-4.3-4.3s1.9-4.3,4.3-4.3c2.4,0,4.3,1.9,4.3,4.3
      S88.3,75.4,85.9,75.4z'
            />
            <path
              id='outer-4'
              className='st4'
              d='M74.9,89.9c-2.4,0-4.3-1.9-4.3-4.3s1.9-4.3,4.3-4.3s4.3,1.9,4.3,4.3S77.3,89.9,74.9,89.9z'
            />
            <path
              id='outer-5'
              className='st1'
              d='M56.9,89.9c-2.4,0-4.3-1.9-4.3-4.3s1.9-4.3,4.3-4.3s4.3,1.9,4.3,4.3S59.2,89.9,56.9,89.9z'
            />
            <path
              id='outer-6'
              className='st2'
              d='M45.6,76.6c-2.4,0-4.3-1.9-4.3-4.3c0-2.4,1.9-4.3,4.3-4.3c2.4,0,4.3,1.9,4.3,4.3
      C49.9,74.7,48,76.6,45.6,76.6z'
            />
            <path
              id='outer-7'
              className='st3'
              d='M49.3,58.8c-2.4,0-4.3-1.9-4.3-4.3c0-2.4,1.9-4.3,4.3-4.3s4.3,1.9,4.3,4.3
      C53.6,56.9,51.7,58.8,49.3,58.8z'
            />
          </g>
          <g id='inner-circles'>
            <path
              id='inner-1'
              className='st1'
              d='M65.5,59.8c-1,0-1.8-0.8-1.8-1.8c0-1,0.8-1.8,1.8-1.8c1,0,1.8,0.8,1.8,1.8
      C67.3,59,66.5,59.8,65.5,59.8z'
            />
            <path
              id='inner-2'
              className='st2'
              d='M72.2,62.9c-1,0-1.8-0.8-1.8-1.8c0-1,0.8-1.8,1.8-1.8c1,0,1.8,0.8,1.8,1.8
      C74,62.1,73.2,62.9,72.2,62.9z'
            />
            <path
              id='inner-3'
              className='st3'
              d='M74,70.3c-1,0-1.8-0.8-1.8-1.8s0.8-1.8,1.8-1.8s1.8,0.8,1.8,1.8S75,70.3,74,70.3z'
            />
            <path
              id='inner-4'
              className='st4'
              d='M69.4,76.3c-1,0-1.8-0.8-1.8-1.8s0.8-1.8,1.8-1.8s1.8,0.8,1.8,1.8S70.4,76.3,69.4,76.3z'
            />
            <path
              id='inner-5'
              className='st1'
              d='M61.9,76.3c-1,0-1.8-0.8-1.8-1.8s0.8-1.8,1.8-1.8c1,0,1.8,0.8,1.8,1.8S62.9,76.3,61.9,76.3z'
            />
            <path
              id='inner-6'
              className='st2'
              d='M57.3,70.8c-1,0-1.8-0.8-1.8-1.8s0.8-1.8,1.8-1.8c1,0,1.8,0.8,1.8,1.8S58.3,70.8,57.3,70.8z'
            />
            <path
              id='inner-7'
              className='st3'
              d='M58.8,63.4c-1,0-1.8-0.8-1.8-1.8c0-1,0.8-1.8,1.8-1.8c1,0,1.8,0.8,1.8,1.8
      C60.6,62.6,59.8,63.4,58.8,63.4z'
            />
          </g>
          <path
            id='inner-circle'
            className='st4'
            d='M65.5,71.1c-2.4,0-4.3-1.9-4.3-4.3s1.9-4.3,4.3-4.3c2.4,0,4.3,1.9,4.3,4.3
    S67.9,71.1,65.5,71.1z'
          />
          <path
            id='inner-circle-morph'
            className='st5'
            d='M65.8,102.5C45.5,102.5,29,86,29,65.8S45.5,29,65.8,29s36.7,16.4,36.7,36.7
    S86,102.5,65.8,102.5z'
          />
          <g id='outer-circles-morph'>
            <path
              id='outer-1-morph'
              className='st1'
              d='M64.9,22.7c-0.6,0-1.1-0.5-1.1-1.1s0.5-1.1,1.1-1.1c0.6,0,1.1,0.5,1.1,1.1
      S65.6,22.7,64.9,22.7z'
            />
            <path
              id='outer-2-morph'
              className='st2'
              d='M100.8,39.7c-0.6,0-1.2-0.5-1.2-1.2s0.5-1.2,1.2-1.2s1.2,0.5,1.2,1.2
      S101.4,39.7,100.8,39.7z'
            />
            <path
              id='outer-3-morph'
              className='st3'
              d='M111.2,78.7c-0.6,0-1.2-0.5-1.2-1.2s0.5-1.2,1.2-1.2c0.6,0,1.2,0.5,1.2,1.2
      S111.8,78.7,111.2,78.7z'
            />
            <path
              id='outer-4-morph'
              className='st4'
              d='M86.4,109.8c-0.6,0-1.1-0.5-1.1-1.1s0.5-1.1,1.1-1.1s1.1,0.5,1.1,1.1
      S87.1,109.8,86.4,109.8z'
            />
            <path
              id='outer-5-morph'
              className='st1'
              d='M46.6,110.9c-0.6,0-1.1-0.5-1.1-1.1c0-0.6,0.5-1.1,1.1-1.1c0.6,0,1.1,0.5,1.1,1.1
      C47.7,110.4,47.2,110.9,46.6,110.9z'
            />
            <path
              id='outer-6-morph'
              className='st2'
              d='M20.3,81.4c-0.6,0-1.1-0.5-1.1-1.1c0-0.6,0.5-1.1,1.1-1.1s1.1,0.5,1.1,1.1
      C21.5,80.9,20.9,81.4,20.3,81.4z'
            />
            <path
              id='outer-7-morph'
              className='st3'
              d='M28.1,41.3c-0.6,0-1.2-0.5-1.2-1.2c0-0.6,0.5-1.2,1.2-1.2s1.2,0.5,1.2,1.2
      C29.2,40.8,28.7,41.3,28.1,41.3z'
            />
          </g>
          <g id='inner-circles-morph'>
            <path
              id='inner-1-morph'
              className='st1'
              d='M72.5,18.9c-1.2-0.2-2-1.3-1.9-2.4s1.3-2,2.4-1.9c1.2,0.2,2,1.3,1.9,2.4
      C74.8,18.2,73.7,19,72.5,18.9z'
            />
            <path
              id='inner-2-morph'
              className='st2'
              d='M110.3,43c-1.2-0.2-2-1.3-1.9-2.4c0.2-1.2,1.3-2,2.4-1.9c1.2,0.2,2,1.3,1.9,2.4
      C112.6,42.3,111.5,43.2,110.3,43z'
            />
            <path
              id='inner-3-morph'
              className='st3'
              d='M114.2,88.3c-1.2-0.2-2-1.2-1.9-2.4s1.2-2,2.4-1.9s2,1.2,1.9,2.4S115.4,88.5,114.2,88.3
      z'
            />
            <path
              id='inner-4-morph'
              className='st4'
              d='M81.7,119.3c-1.2-0.2-2-1.3-1.9-2.4c0.2-1.2,1.3-2,2.4-1.9c1.2,0.2,2,1.3,1.9,2.4
      C84,118.6,82.9,119.5,81.7,119.3z'
            />
            <path
              id='inner-5-morph'
              className='st1'
              d='M35.5,113.1c-1.2-0.2-2-1.2-1.9-2.4c0.2-1.2,1.2-2,2.4-1.9c1.2,0.2,2,1.2,1.9,2.4
      C37.8,112.4,36.7,113.3,35.5,113.1z'
            />
            <path
              id='inner-6-morph'
              className='st2'
              d='M14,75.5c-1.2-0.2-2-1.3-1.9-2.4c0.2-1.2,1.3-2,2.4-1.9c1.2,0.2,2,1.3,1.9,2.4
      C16.3,74.8,15.2,75.6,14,75.5z'
            />
            <path
              id='inner-7-morph'
              className='st3'
              d='M29.3,33.6c-1.2-0.2-2-1.3-1.9-2.4c0.2-1.2,1.3-2,2.4-1.9c1.2,0.2,2,1.3,1.9,2.4
      C31.6,32.9,30.5,33.7,29.3,33.6z'
            />
          </g>
        </svg>
        <div
          id='btnOff'
          className={style.btnOff}
          style={this.state.clicked ? disable : null}
          onClick={()=>this.changeBtn()}
        ></div>
        <div
          id='btnOn'
          className={style.btnOn}
          style={this.state.clicked ? null : disable}
          onClick={()=>this.changeBtn()}
        ></div>
      </div>
    )
  }
}

export default LikeButton
