import React, {useState} from "react";
import en from '../../../../../public/locales/en/translation.json';
import ru from '../../../../../public/locales/ru/translation.json';



export const SwitchButton = ({changeLanguage}: any) => {
    const [active, setActive] = useState('en')

    const handleClick = (name:string) => {
        setActive(name)
        changeLanguage(name)
    }

    return (
        <div className="home__header-switch-btn">
            <button onClick={() => handleClick('ru')} className={active === 'ru' ? 'active' : ''}>RU</button>
            <button onClick={() => handleClick('en')} className={active === 'en' ? 'active' : ''}>EN</button>
        </div>
    )
}