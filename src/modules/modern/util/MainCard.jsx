import {ModernCard} from "./ModernCard.jsx";
import {useTranslation} from "react-i18next";

export const MainCard = ( {className} ) => {
    const {t} = useTranslation();
    return (
        <section className={"content " + className}>
            <section className={"heading flex flex-col"}>
                <h2 className={"text-5xl heading font-bold"}> {t("Projects")} </h2>
                <p className={"text-2xl"}>I am a web developer who loves to create beautiful and functional
                    websites</p>
            </section>
            <section className={"card-content"}>
                <ModernCard title={"About Me"}
                            text={"I am a web developer who loves to create beautiful and functional websites"}/>
                <ModernCard title={"About Me"}
                            text={"I am a web developer who loves to create beautiful and functional websites"}/>
                <ModernCard title={"About Me"}
                            text={"I am a web developer who loves to create beautiful and functional websites"}/>
                <ModernCard title={"About Me"}
                            text={"I am a web developer who loves to create beautiful and functional websites"}/>
                <ModernCard title={"About Me"}
                            text={"I am a web developer who loves to create beautiful and functional websites"}/>
                <ModernCard title={"About Me"}
                            text={"I am a web developer who loves to create beautiful and functional websites"}/>
                <ModernCard title={"About Me"}
                            text={"I am a web developer who loves to create beautiful and functional websites"}/>
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
    )
}