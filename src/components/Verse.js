import styles from './Verse.module.css'
import { FadeInAnimation } from './FadeInAnimation'
import { useRef } from 'react'
import { getTextWidth } from '../Util'

export function Verse(props) {



    const content = useRef()


    const addPulsingClass = props.highlighted ?
        () => {
            try {
                content.current.classList.add(styles.pulsing)
            } catch (err) {
                console.log(err)
            }
        }
        :
        () => { }

    const removePulsingClass = () => content.current.classList.remove(styles.pulsing)

    return (
        <FadeInAnimation
            show={props.show}
            onEnter={removePulsingClass}
            onEntered={addPulsingClass}
            animationType={props.animationType}
            height='1.2em'
            width={getTextWidth(props.text)}>
            <div className={props.highlighted ? styles.highlighted + ' ' + styles.pulsing : ''} ref={content}>
                {props.text}
            </div>
        </FadeInAnimation>
    )
}


Verse.defaultProps = {
    show: true,
    animation: true
}