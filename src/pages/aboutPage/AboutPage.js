import React from 'react';
import styles from  './aboutPage.module.css'

const AboutPage = ({text}) => {
    return (
        <div className={styles.text}>
            <p>{text.title}</p>
            <p>{text.descr}</p>
        </div>
    );
};

export default AboutPage;