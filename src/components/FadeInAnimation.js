import styles from './FadeInAnimation.module.css'
import { CSSTransition } from 'react-transition-group'
import styled, { keyframes } from "styled-components";



const FadeInAnimationRoot = styled.div`

.fadeInEnter{
    opacity: 0;
}

.fadeInEnterActive{
    opacity: 1;
    animation: ${props => fadeInAnimation(props)} 0.6s ease-in-out;
}

`
const fadeInAnimation = props => keyframes`

    0%{
        height: 0px;
        width: 0px;
        opacity: 0;
    }
    70%{

        height: ${props.height};
        width: ${props.width};
        opacity: 0;
    }
    100%{
        opacity: 1;
    }


`


export function FadeInAnimation(props) {

    let enter, enterActive

    if (props.animationType === 'growIn') {
        enter = styles.growInEnter
        enterActive = styles.growInEnterActive
    }
    else if (props.animationType === 'simple') {
        console.log('simple')
        enter = styles.simpleEnter
        enterActive = styles.simpleEnterActive
    }
    else {
        enter = 'fadeInEnter'
        enterActive = 'fadeInEnterActive'
    }


    console.log(props.children)

    return (
        <FadeInAnimationRoot height={props.height} width={props.width}>
            <CSSTransition
                mountOnEnter
                unmountOnExit
                onEnter={props.onEnter}
                onEntered={props.onEntered}
                in={props.show}
                timeout={600}
                classNames={{
                    enter,
                    enterActive
                }}>

                {props.children}
            </CSSTransition>
        </FadeInAnimationRoot>

    )
}



