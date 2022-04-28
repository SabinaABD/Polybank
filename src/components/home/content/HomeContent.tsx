import {useTranslation} from "react-i18next";
export const HomeContent = () => {
    const { t } = useTranslation();

    return (
        <div className="home__content">
            <div className="home__content-form">
                Форма от  Алмаза
            </div>
        </div>
    )
}