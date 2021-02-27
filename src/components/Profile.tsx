import styles from '../styles/components/Profile.module.css'

export function Profile(){
    return(
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/49081951?s=460&amp;u=1bfd58323b57ce2012241b0cace173de42594229&amp" alt="Bárbara Xavier"/>
            <div>
                <strong>Barbara Xavier</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                </p>
            </div>
        </div>
    );
}