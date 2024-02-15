import {Header} from "../modules/semantic_modules_neuro/Header.jsx";
import {Main} from "../modules/semantic_modules_neuro/Main.jsx";
import {Footer} from "../modules/semantic_modules_neuro/Footer.jsx";

export const NeuroScreen = () => {
    return (
        <section>
            <Header/>
            <section className={"flex justify-center flex-wrap h-full"}>
                <Main/>
                <Footer/>
            </section>
        </section>
    )
}