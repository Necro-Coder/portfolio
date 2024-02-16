import {ModernCard} from "./ModernCard.jsx";

export const MainCard = ( {className} ) => {
    return (
        <section className={"content " + className}>
            <section className={"heading flex flex-col"}>
                <h2 className={"text-5xl heading font-bold"}>Projects</h2>
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