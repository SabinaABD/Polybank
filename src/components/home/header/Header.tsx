import Logo_Icon from "../../../images/Logo_Icon.svg";
import location_on from "../../../images/location_on.svg";
import monetization_on from "../../../images/monetization_on.svg";
import phone_android from "../../../images/phone_android.svg";
import {useTranslation} from "react-i18next";
import React from "react";
import {SwitchButton} from "./switchButton/SwitchButton";

export const Header = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (language:string) => {
        i18n.changeLanguage(language)
        localStorage.setItem("language", language)
    }

    return (
        <div className="home__header">
            <div className="home__header-logo">
                <img src={Logo_Icon} alt="Logo"/>
                Affinity bank
            </div>
            <div className="home__header-links">
                <div className="home__header-links-item">
                    <img src={location_on} alt="location"/>
                    {t("header.places")}
                </div>
                <div className="home__header-links-item">
                    <img src={monetization_on} alt="exchange"/>
                    {t("header.exchange")}
                </div>
                <div className="home__header-links-item">
                    <img src={phone_android} alt="contacts"/>
                    {t("header.contact")}
                </div>
            </div>
            <SwitchButton changeLanguage={changeLanguage}/>
        </div>
    )
}