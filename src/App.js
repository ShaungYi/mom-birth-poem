import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';
import { Couplet } from './components/Couplet';
import { Verse } from './components/Verse';
import { TransitionGroup } from 'react-transition-group';
import { FadeInAnimation } from './components/FadeInAnimation';
import { Content } from './components/Content';
import { EndScreen } from './components/EndScreen';
import ConfettiExplosion from 'react-confetti-explosion';


const couplets = [

  [
    'Every day you fight our fight.',
    'Bravely guard, a knight, our night.'
  ],
  [
    'Long and hard the war was fought.',
    'But gong(空) and mud was all for nought.'
  ],
  [
    'Yet despair not ever Habibi li-na.',
    'For none but we know how it will 끝나.'
  ],
  [
    'Know! Unending, we the three will daily nourish.',
    'Though unyielding be the cage, you will gaily flourish.'
  ],
  [
    'For not proud humanity’s highest member',
    'but the humble home’s greatest warrior we remember',
  ]

]


function App() {


  const [displayedCouplets, setDisplayedCouplets] = useState([])
  const coupletIndex = useRef(0)
  const [verseIndex, setVerseIndex] = useState(0)
  const [isEndScreen, setIsEndScreen] = useState(false)

  function isStartScreen() {
    return displayedCouplets.length === 0
  }

  function isLastCouplet(i) {
    return i === displayedCouplets.length - 1
  }

  function isFirstCouplet(i) {
    return i === 0
  }


  function reset(){
    setDisplayedCouplets([])
    coupletIndex.current = 0
    setVerseIndex(0)
    setIsEndScreen(false)
  }



  const onClick = () => {

    //when at the end of poem
    if (coupletIndex.current === couplets.length && verseIndex === 1) {
      console.log('end')
      setIsEndScreen(true)
    }
    //when going to next couplet
    else if (verseIndex === 1 || (verseIndex === 0 && isFirstCouplet(coupletIndex.current))) {

      if (coupletIndex.current < couplets.length) {
        coupletIndex.current++
      }

      setDisplayedCouplets(couplets.slice(0, coupletIndex.current))
      setVerseIndex(0)
    }
    //when going to next verse
    else {
      setVerseIndex(1)
    }

  }

  const content =
    <FadeInAnimation show={!isStartScreen()} animationType={'simple'}>
      <Content>
        <TransitionGroup>
          {displayedCouplets.map((couplet, i) => {
            return (
              <>
                <Couplet
                  couplet = {couplet}
                  highlighted={isLastCouplet(i)}
                  lineSpacing={!isFirstCouplet(i)}
                  verse1={<Verse
                    text={couplet[0]}
                    highlighted={verseIndex === 0 && isLastCouplet(i)}
                    animation={false} />}
                  verse2={<Verse
                    text={couplet[1]}
                    highlighted={verseIndex === 1 && isLastCouplet(i)}
                    show={verseIndex == 1 || !isLastCouplet(i)} />}
                />
                {/* {!isLastCouplet(i) && <br />} */}
              </>
            )
          })}
        </TransitionGroup>

      </Content>
    </FadeInAnimation>



  useEffect(() => {
    // const app = document.getElementById('App')

    // app.style.height = window.innerHeight + 'px'
    // app.style.width = window.innerWidth + 'px'
  })

  return (
    <>
      <div id='confettiContainer' />

      <div id="App" onClick={onClick}>

        {isStartScreen() &&
          <div className='startPrompt'>
            tap or click anywhere
          </div>
        }
        {!isEndScreen && content}
        {isEndScreen && <EndScreen couplets={couplets} reset = {reset}></EndScreen>}

      </div>
    </>

  );
}

export default App;
