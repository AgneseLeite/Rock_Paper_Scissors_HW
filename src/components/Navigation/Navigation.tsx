import '../../App.css';
import { Routes, Route, NavLink, Link } from "react-router-dom"; 
// import i18n from '../../i18next';
import { useEffect } from 'react';
import { useTranslation, initReactI18next } from "react-i18next";
import i18next from 'i18next';
import styles from './Navigation.module.css'


const Navigation = () => {

    const { i18n } = useTranslation();

    const handleClick = (lang: any) => {
         i18n.changeLanguage(lang);
    }
  
    const active = {
        fontWeight: "bold",
    };
      
    type AddStyle = {
      isActive: boolean,
      isPending: boolean
    }
      
    const addStyle = ({isActive}: AddStyle) => {
      return isActive ? active : undefined;
    }

    return (

        <div className={styles.navContainer}>
            <nav className={styles.nav}>
            <div className={styles.linkGroup}>
                <NavLink to="/" style={addStyle}>Home</NavLink>
                <NavLink to="/game" style={addStyle}>Game</NavLink>
            </div>

            <div className={styles.languageGroup}>
                <img 
                src="https://cdn-icons-png.flaticon.com/512/555/555417.png" 
                className={styles.flag}
                onClick={() => handleClick('en')}
                />
                <img 
                src="https://cdn-icons-png.flaticon.com/512/555/555647.png" 
                className={styles.flag} 
                onClick={() => handleClick('lv')}
                />
                <img 
                src="https://cdn-icons-png.flaticon.com/512/206/206789.png" 
                className={styles.flag} 
                onClick={() => handleClick('jp')}
                />
            </div>
            </nav>
    </div>
)

}

export default Navigation;
