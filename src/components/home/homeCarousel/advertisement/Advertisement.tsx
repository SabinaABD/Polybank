import {useTranslation} from "react-i18next";
import '../../../../styles/advertisement.scss'

export const Advertisement = ({page}:any) => {
    const { t } = useTranslation();

    return(
    <div className={`ad-${page}`}>
        <div className="ad-container">
            <div className="ad-title">
                {t('ad.app')} <br/>{t('ad.name')}
            </div>
            <div className="ad-subtitle">
                {t('ad.subtitle')}
            </div>
            <button className="ad-btn">
                {t('ad.button-text')}
            </button>
        </div>
    </div>


    )
}