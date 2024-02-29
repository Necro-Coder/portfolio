import {useTranslation} from "react-i18next";

export const TradButton = () => {
    const {t, i18n} = useTranslation();
    function changeLanguage() {
        let newLanguage = i18n.language === 'en' ? 'es' : 'en';
        i18n.changeLanguage(newLanguage);
    }
    return (
        <button className={"trad-button"} onClick={changeLanguage}>
            { t('Language') }
        </button>
    )
}