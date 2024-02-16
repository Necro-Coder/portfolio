import {useEffect, useRef, useState} from "react";
import {ModernCard} from "../modules/modern/util/ModernCard.jsx";
import {SocialCard} from "../modules/modern/util/SocialCard.jsx";
import {ToggleButton} from "../modules/modern/util/ToggleButton.jsx";
import {useTranslation} from "react-i18next";

export const ModernScreen = () => {
    const { t, i18n } = useTranslation();
    const [activeContent, setActiveContent] = useState("about");
    const [copyContent, setCopyContent] = useState(<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        fill="currentColor" className="bi bi-copy" viewBox="0 0 16 16">
        <path fillRule="evenodd"
              d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
    </svg>);
    const [copyEmail, setCopyEmail] = useState(<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
        <path
            d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
    </svg>);
    const inputRef = useRef();
    const [activeClass, setActiveClass] = useState("active-content");
    function changeLanguage() {
        let newLanguage = i18n.language === 'en' ? 'es' : 'en';
        i18n.changeLanguage(newLanguage);
    }

    useEffect(() => {
        const handleMouseMove = e => {
            document.body.style.setProperty('--x', `${e.clientX}px`);
            document.body.style.setProperty('--y', `${e.clientY}px`);
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const handleCopy = () => {
        const email = inputRef.current.value;
        navigator.clipboard.writeText(email);
        setCopyContent("Copied!");
        setCopyEmail("Copied!");
        setTimeout(() => {
            setCopyContent(<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="bi bi-copy" viewBox="0 0 16 16">
                <path fillRule="evenodd"
                      d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
            </svg>);
            setCopyEmail(<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                              className="bi bi-envelope" viewBox="0 0 16 16">
                <path
                    d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
            </svg>);
        }, 2000);
    };

    function changeContent(content) {
        setActiveContent(content);
        setTimeout(() => {
            setActiveClass(prevState => prevState + " translate-x-0");
        }, 1000);
    }

    return (
        <main className={"modern-container"}>
            <aside className={"aside-container"}>
                <section className={"menu"}>
                    <section className={"menu-item flex flex-col place-items-center gap-3 group"}>
                        <button className={"link-text"} onClick={() => changeContent("about")}> {t("About")}
                        </button>
                        <hr className={"link-bar group-hover:w-40"}/>
                    </section>
                    <section className={"menu-item flex flex-col place-items-center gap-3 group"}>
                        <button className={"link-text"} onClick={() => changeContent("projects")}> PROJECTS
                        </button>
                        <hr className={"link-bar group-hover:w-40"}/>
                    </section>
                </section>
                <section className={"contact-general"}>
                    <section className={"social-container"}>
                        <section className={"flex place-items-center gap-3"}>
                            <SocialCard href={"https://github.com/Necro-Coder"} icon={
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                     fill="currentColor" className="" viewBox="0 0 16 16">
                                    <path
                                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                                </svg>
                            }
                            />
                            <p className={"social-text mr-2"}> Necro-Coder </p>
                        </section>
                        <section className={"flex place-items-center gap-3"}>
                            <SocialCard href={"https://linkedin.com/in/ruben-nuñez-cotano-b6a154278/"} icon={
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-linkedin" viewBox="0 0 16 16">
                                    <path
                                        d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                                </svg>
                            }
                            />
                            <p className={"social-text"}> Rubén </p>
                        </section>
                        <button className={"copy-button-contact"} onClick={handleCopy}>
                            {copyEmail}
                        </button>
                        <section className={"flex flex-col"}>
                            <section className={"email-container flex gap-3 place-items-center justify-between"}>
                                <input ref={inputRef} type={"text"} className={"email-input"}
                                       value={"nunezcotanoruben@gmail.com"} readOnly/>
                                <button className={"copy-button"} onClick={handleCopy}>
                                    {copyContent}
                                </button>
                            </section>
                        </section>
                    </section>
                    <section>
                        <ToggleButton className={"toggle-social"}/>
                        <section className={"footer-text text-xs"}>
                            <hr className={"my-3 opacity-50"}/>
                            This website was made with React and TailwindCSS. <br/> <span
                            className={"font-bold"}>
                        <a onClick={changeLanguage} className={"repository-text cursor-pointer"}>
                            Github Repository
                        </a>
                    </span>
                        </section>

                    </section>
                </section>
            </aside>
            <section className={"main-content flex flex-row"}>
                <section
                    className={"content " + (activeContent === "about" ? activeClass : "non-active-content")}>
                    <section className={"heading flex justify-between place-items-center"}>
                        <h2 className={"text-5xl heading font-bold"}>About Me</h2>
                        <p> Rubén Núñez Cotano</p>
                    </section>
                    <section className={"card-content"}>
                        <p> A full-stack developer that working with so many technologies and leaning more and more </p>
                        <p> A full-stack developer that working with so many technologies and leaning more and more </p>
                        <p> A full-stack developer that working with so many technologies and leaning more and more </p>
                        <p> A full-stack developer that working with so many technologies and leaning more and more </p>
                        <p> A full-stack developer that working with so many technologies and leaning more and more </p>
                        <p> A full-stack developer that working with so many technologies and leaning more and more </p>
                        <p> A full-stack developer that working with so many technologies and leaning more and more </p>
                        <p> A full-stack developer that working with so many technologies and leaning more and more </p>
                        <p> A full-stack developer that working with so many technologies and leaning more and more </p>
                        <p> A full-stack developer that working with so many technologies and leaning more and more </p>
                        <p> A full-stack developer that working with so many technologies and leaning more and more </p>
                        <p> A full-stack developer that working with so many technologies and leaning more and more </p>
                        <p> A full-stack developer that working with so many technologies and leaning more and more </p>
                        <p> A full-stack developer that working with so many technologies and leaning more and more </p>
                        <p> A full-stack developer that working with so many technologies and leaning more and more </p>
                        <p> A full-stack developer that working with so many technologies and leaning more and more </p>
                        <p> A full-stack developer that working with so many technologies and leaning more and more </p>
                        <p> A full-stack developer that working with so many technologies and leaning more and more </p>
                        <p> A full-stack developer that working with so many technologies and leaning more and more </p>
                        <p> A full-stack developer that working with so many technologies and leaning more and more </p>
                        <p> A full-stack developer that working with so many technologies and leaning more and more </p>
                        <p> A full-stack developer that working with so many technologies and leaning more and more </p>
                        <p> A full-stack developer that working with so many technologies and leaning more and more </p>
                        <p> A full-stack developer that working with so many technologies and leaning more and more </p>
                        <p> A full-stack developer that working with so many technologies and leaning more and more </p>
                        <p> A full-stack developer that working with so many technologies and leaning more and more </p>
                        <p> A full-stack developer that working with so many technologies and leaning more and more </p>
                        <p> A full-stack developer that working with so many technologies and leaning more and more </p>
                        <p> A full-stack developer that working with so many technologies and leaning more and more </p>
                        <p> A full-stack developer that working with so many technologies and leaning more and more </p>
                        <p> A full-stack developer that working with so many technologies and leaning more and more </p>
                        <p> A full-stack developer that working with so many technologies and leaning more and more </p>
                        <p> A full-stack developer that working with so many technologies and leaning more and more </p>
                        <p> A full-stack developer that working with so many technologies and leaning more and more </p>
                        <p> A full-stack developer that working with so many technologies and leaning more and more </p>
                        <p> A full-stack developer that working with so many technologies and leaning more and more </p>
                        <h2 className={"text-5xl heading font-bold"}>Working On</h2>
                        <ModernCard title={"About Me"}
                                    text={"I am a web developer who loves to create beautiful and functional websites"}/>
                        <ModernCard title={"About Me"}
                                    text={"I am a web developer who loves to create beautiful and functional websites"}/>
                        <ModernCard title={"About Me"}
                                    text={"I am a web developer who loves to create beautiful and functional websites"}/>
                        <ModernCard title={"About Me"}
                                    text={"I am a web developer who loves to create beautiful and functional websites"}/>
                    </section>
                </section>
                <section
                    className={"content " + (activeContent === "projects" ? activeClass : "non-active-content")}>
                    <section className={"heading flex justify-between place-items-center"}>
                        <h2 className={"text-5xl heading font-bold"}>Projects</h2>
                        <p> Rubén Núñez Cotano</p>
                    </section>
                    <p className={"text-2xl"}>I am a web developer who loves to create beautiful and functional
                        websites</p>
                    <section className={"card-content"}>
                        <ModernCard title={"About Me"}
                                    text={"I am a web developer who loves to create beautiful and functional websites"}/>
                        <ModernCard title={"About Me"}
                                    text={"I am a web developer who loves to create beautiful and functional websites"}/>
                        <ModernCard title={"About Me"}
                                    text={"I am a web developer who loves to create beautiful and functional websites"}/>
                        <ModernCard title={"About Me"}
                                    text={"I am a web developer who loves to create beautiful and functional websites"}/>
                    </section>
                </section>
            </section>
            <ToggleButton className={"toggle-out"}/>
        </main>
    )
}