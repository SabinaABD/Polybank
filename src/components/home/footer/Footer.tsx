import Scroll_down from "../../../images/Scroll_down.svg";
import landingIconAppStore from "../../../images/landingIconAppStore.svg";
import landingIconGooglePlay from "../../../images/landingIconGooglePlay.svg";
import {useTranslation} from "react-i18next";

export const Footer = () => {
    const { t } = useTranslation();
    return (
        <div className="home__footer">
            <img src={Scroll_down} alt="switch" className="home__footer-switch-down"/>
            <div className="home__footer-stores">
                <div className="home__footer-stores-title">{t('footer.apps-title')}</div>
                <div className="home__footer-stores-btns">
                    <a href='https://play.google.com/store'> <img src={landingIconGooglePlay} alt="google play" className="home__footer-stores-btn"/></a>
                    <a href='https://apps.apple.com/ru/'><img src={landingIconAppStore} alt="app store" className="home__footer-stores-btn"/></a>
                </div>
            </div>
        </div>
    )
}