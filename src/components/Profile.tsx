import styles from '../styles/components/Profile.module.css'

export function Profile(){
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/PauloRRRRR.png" alt="Paulo Ricardo" />
            <div>
                <strong>Paulo Ricardo</strong>
                <p>
                    <img src="icons/level.svg" alt="" />                
                    Level 1
                </p>
            </div>
        </div>
    );
}