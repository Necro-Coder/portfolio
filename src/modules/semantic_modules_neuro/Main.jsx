import {useTranslation} from "react-i18next";
import {SocialCards} from "../components/util/SocialCards.jsx";
import {useRef, useState} from "react";
import {DefaultText} from "../components/util/DefaultText.jsx";
import {HeadingText} from "../components/util/HeadingText.jsx";

export const Main = () => {
    const {t} = useTranslation();
    const inputRef = useRef();
    const [copyClass, setCopyClass] = useState("hidden");
    const handleCopy = () => {
        const email = inputRef.current.value;
        navigator.clipboard.writeText(email);
        setCopyClass("shadow-inset-50 p-2 rounded mt-3 block");
        setTimeout(() => {
            setCopyClass("hidden");
        }, 5000);
    };
    return (
        <main className={"shadow-bright-50 w-screen m-8 rounded-md sm:w-full"}>
            <section id={"about-me"} className={"grid grid-cols-3 p-2 rounded-md"}>
                <section id={"description"} className={"flex flex-col place-items-center shadow-inset rounded-md m-3 p-2"}>
                    <div className={"rounded-full shadow-bright-50 border-8"}>
                        <img src={"../public/perfil.png"}
                             className={"rounded-full lg:size-44 shadow-inset"}
                             alt={"Profile"}/>
                    </div>

                    <DefaultText text={ t('Description') }/>
                </section>
                <section>
                    <section id={"personal-description"}
                             className={"flex flex-col place-items-center h-fit shadow-inset rounded-md my-3"}>
                        <HeadingText text={ t('About') }/>
                        <DefaultText text={ t('Description') }/>
                    </section>
                    <section id={"contact"}
                             className={"grid-cols-1 flex flex-wrap justify-center shadow-inset rounded-md p-4"}>
                        <section className={"flex w-full justify-around mb-3"}>
                            <SocialCards title={"Linkedin"} icon={"../public/linkedin.svg"} color={"bg-blue-300"}
                                         href={"https://www.linkedin.com/in/ruben-nu%C3%B1ez-cotano-b6a154278/"}/>
                            <SocialCards title={"Github"} icon={"../public/github.svg"} color={"bg-emerald-300"}
                                         href={"https://github.com/Necro-Coder"}/>
                        </section>
                        <section className={"flex justify-between w-full"}>
                            <input ref={inputRef} type={"text"} value={"nunezcotanoruben@gmail.com"}
                                   className={"shadow-inset rounded-md p-2 w-full"} readOnly/>
                            <button onClick={handleCopy} className={"shadow-bright-50 p-2 rounded my-2 mx-5"}>
                                <img src={"../public/copy.svg"} alt={"copy-button"}/>
                            </button>
                        </section>
                        <p className={copyClass}> {t('Copied')} </p>
                    </section>
                </section>
                <section id={"personal-description"}
                         className={"flex flex-col place-items-center h-fit shadow-inset rounded-md m-3 p-2"}>
                    <HeadingText text={t("Working")}/>
                    <DefaultText text={"At the moment I still working on:"} margin={"0"}/>
                </section>
            </section>
            <hr className={"h-2 shadow-inset m-3"}/>
            <section id={"projects"} className={"grid grid-cols-3"}>
                <section id={"project-1"} className={""}>
                    <p> Proyecto 1 </p>
                </section>
                <section id={"project-2"} className={""}>
                    <p> Proyecto 2 </p>
                </section>
                <section id={"project-3"} className={""}>
                    <p> Proyecto 3 </p>
                </section>
                <section id={"project-1"} className={""}>
                    <p> Proyecto 1 </p>
                </section>
                <section id={"project-2"} className={""}>
                    <p> Proyecto 2 </p>
                </section>
                <section id={"project-3"} className={""}>
                    <p> Proyecto 3 </p>
                </section>
                <section id={"project-1"} className={""}>
                    <p> Proyecto 1 </p>
                </section>
                <section id={"project-2"} className={""}>
                    <p> Proyecto 2 </p>
                </section>
                <section id={"project-3"} className={""}>
                    <p> Proyecto 3 </p>
                </section>
            </section>
        </main>
    )
}