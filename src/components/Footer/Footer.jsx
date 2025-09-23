import React from 'react'
import styles from './Footer.module.css'
import mascot from '../../assets/images/mascot.png';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.left}>
                <p className={styles.copyright}>copyright 2025 ©</p>
                <h2 className={styles.title}>areajobs.co</h2>
                <p className={styles.summary}>
                    Born from a belief that the job search should be simple, areajobs.co
                    was founded on a commitment to minimalism. We cut through the noise,
                    providing direct access to opportunities, because your next career
                    move shouldn’t be a puzzle.
                </p>
                </div>
                <div className={styles.right}>
                <img src={mascot} alt="areajobs.co mascot" width="214" height="320" />
                </div>
            </div>
        </footer>
    )
};

export default Footer;