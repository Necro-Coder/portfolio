import {useState} from "react";
import { useTranslation } from 'react-i18next';
import {DefaultText} from "./DefaultText.jsx";
export const Banner = () => {
    const { t, i18n } = useTranslation();

    const [activeButtons, setActiveButtons] = useState({
        "translate-button": true,
        "about-button": false,
        "projects-button": true
    });
    function changeLanguage() {
        let newLanguage = i18n.language === 'en' ? 'es' : 'en';
        i18n.changeLanguage(newLanguage);
    }

    function onClick() {
        changeLanguage();
        addClass('translate-button');
    }

    const [buttonsClass, setButtonsClass] = useState({
        "translate-button": "rounded-md shadow-bright-50 p-2 transition-all cursor-pointer " +
            "text-gray-500",
        "about-button": "rounded-md shadow-inset p-2 transition-all cursor-pointer " +
            "text-yellow-500 shadow-gradient",
        "projects-button": "rounded-md shadow-inset p-2 transition-all cursor-pointer " +
            "text-yellow-500 shadow-gradient"
    });

    function addClass(buttonId) {
        setActiveButtons(prevState => ({
            ...prevState,
            [buttonId]: !prevState[buttonId]
        }));

        setButtonsClass(prevState => ({
            ...prevState,
            [buttonId]: changeClass(buttonId)
        }));
    }

    function changeClass(buttonId) {
        let className = "";
        if (activeButtons[buttonId]) {
            className = "rounded-md shadow-inset p-2 transition-all cursor-pointer " +
                "text-yellow-500 shadow-gradient";
        } else {
            className = "group rounded-md shadow-bright-50 p-2 transition-all cursor-pointer " +
                "text-gray-500";
        }
        return className;
    }

    return (
        <section className={"bg-dark-neo rounded-md p-4 shadow-bright drop-shadow-dark w-full mx-8 lg:w-1/4 lg:m-0 xs:m-0"}>
            <section id={"header-links-container"}
                     className={"flex flex-col sm:flex-row gap-5 justify-between"}>
                <section id={"translate-button"} className={"group"}>
                    <button className={buttonsClass['translate-button']} onClick={() => onClick()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-translate size-5 " viewBox="0 0 16 16">
                            <path
                                d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286zm1.634-.736L5.5 3.956h-.049l-.679 2.022z"/>
                            <path
                                d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm7.138 9.995q.289.451.63.846c-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6 6 0 0 1-.415-.492 2 2 0 0 1-.94.31"/>
                        </svg>
                    </button>
                    <p className={"rounded-md shadow-inset p-2 text-gray-500 mt-4 transition-all" +
                        "group-hover:shadow-bright-50 text-xs hidden xs:block"}>
                        <DefaultText text={ t("Language") } margin={"1"}/>
                    </p>
                </section>
                <section id={"about-button"} className={"group"}>
                    <button className={buttonsClass['about-button']} onClick={() => addClass('about-button')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-file-person-fill size-5" viewBox="0 0 16 16">
                            <path
                                d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2m-1 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-3 4c2.623 0 4.146.826 5 1.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1.245C3.854 11.825 5.377 11 8 11"/>
                        </svg>
                    </button>
                    <p className={"rounded-md shadow-inset p-2 text-gray-500 mt-4 transition-all" +
                        "group-hover:shadow-bright-50 text-xs hidden xs:block"}>
                        <DefaultText text={ t("About") } margin={"1"}/>
                    </p>
                </section>
                <section id={"projects-button"} className={"group"}>
                    <button className={buttonsClass['projects-button']} onClick={() => addClass('projects-button')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-cast size-5" viewBox="0 0 16 16">
                            <path
                                d="m7.646 9.354-3.792 3.792a.5.5 0 0 0 .353.854h7.586a.5.5 0 0 0 .354-.854L8.354 9.354a.5.5 0 0 0-.708 0"/>
                            <path
                                d="M11.414 11H14.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h3.086l-1 1H1.5A1.5 1.5 0 0 1 0 10.5v-7A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v7a1.5 1.5 0 0 1-1.5 1.5h-2.086z"/>
                        </svg>
                    </button>
                    <p className={"rounded-md shadow-inset p-2 text-gray-500 mt-4 transition-all" +
                        "group-hover:shadow-bright-50 text-xs hidden xs:block"}>
                        <DefaultText text={ t("Projects") } margin={"1"}/>
                    </p>
                </section>

            </section>
        </section>
    )
}