import styles from './Content.module.css'


export function Content(props){
    return (
        <div className={styles.content}>
                {props.children}
        </div>
    )
}