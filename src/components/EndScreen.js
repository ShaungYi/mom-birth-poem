import { Content } from './Content'
import { Couplet } from './Couplet'
import ReactDOM from 'react-dom'
import styles from './EndScreen.module.css'
import { Verse } from './Verse'
import { useEffect, useRef, useState } from 'react'
import ConfettiExplosion from 'react-confetti-explosion'

export function EndScreen(props) {


    const title = useRef()
    const [titleText, setTitleText] = useState('محبوب (Beloved)')

    useEffect(() => {
        title.current.classList.add(styles.fadeInEnterActive)
    })

    return (
        <>


            {
                ReactDOM.createPortal(
                    <ConfettiExplosion
                        force={0.8}
                        duration={3000}
                        particleCount={250}
                        width={window.innerWidth * 2}
                        height={window.innerHeight * 2} />,

                    document.getElementById('confettiContainer')
                )
            }


            <Content>
                <div className={styles.fadeInEnter + ' ' + styles.title} ref={title}>{titleText}</div>

                {props.couplets.map((couplet, i) => {
                    return (
                        <>
                            <Couplet
                                couplet={couplet}
                                highlighted={true}
                                lineSpacing={true}
                                verse1={<Verse
                                    text={couplet[0]} />}
                                verse2={<Verse
                                    text={couplet[1]} />}
                            />
                        </>
                    )
                })}


            </Content>

            <button onClick={props.reset}>
                Restart
            </button>
        </>


    )
}