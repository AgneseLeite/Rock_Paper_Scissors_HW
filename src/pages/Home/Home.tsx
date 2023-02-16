import '../../App.css';
import { GiStoneBlock } from 'react-icons/gi';
import { HiScissors, HiOutlineNewspaper } from 'react-icons/hi';
import { useTranslation } from "react-i18next";
import styles from './Home.module.css';

const Home = () => {

    const { t } = useTranslation();

    return (
        <div>
            <h1 className={styles.heading}>
                {t('ROCK PAPER SCISSORS')}
            </h1>
            <div className={styles.infoContainer}>
                <p>{t('Rock paper scissors is a game recognizible by other orderings of the three items.')}</p>
                <p>{t('It is also known as Rochambeau, roshambo, or ro-sham-bo.')}</p>
                <p>{t('It is a hand game, usually played between two people, in which each player simultaneously forms one of three shapes with an outstretched hand.')}</p>
                <p>{t('These shapes are -rock- (a closed fist), -paper- (a flat hand), and -scissors- (a fist with the index finger and middle finger extended, forming a V).')}</p>
                <p>{t('The earliest form of -rock paper scissors-style game originated in China and was imported into Japan, where it reached its modern standardized form, before being spread throughout the world in the early 20th century.')}</p>
                <div className={styles.iconContainer}>
                    <div className={styles.icon}>
                    <GiStoneBlock size={60} className={styles.img}/>
                    {t('Rock')}
                    </div>
                    <div className={styles.icon}>
                    <HiOutlineNewspaper size={60} className={styles.img}/>
                    {t('Paper')}
                    </div>
                    <div className={styles.icon}>
                    <HiScissors size={60} className={styles.img}/>
                    {t('Scissors')}
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default Home;
