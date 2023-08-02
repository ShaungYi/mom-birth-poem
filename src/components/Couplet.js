import { getTextWidth } from '../Util'
import styles from './Couplet.module.css'
import { FadeInAnimation } from './FadeInAnimation'

export function Couplet(props) {

    const verse1Length = props.couplet[0]
    const verse2Length = props.couplet[1]

    const longestText = verse1Length >= verse2Length ? verse1Length : verse2Length
    return (
        <FadeInAnimation show={true} height='2.4em' width = {getTextWidth(longestText)}>
                <div>
                    {props.lineSpacing && <br></br>}

                    <div className={props.highlighted ? styles.highlighted : styles.regular}>
                        {props.verse1}
                        {props.verse2}
                    </div>
                </div> 
        </FadeInAnimation>

    )
}

