import {useEffect, useState} from "react";
import Cookies from 'js-cookie';

export const ToggleButtonNoIcon = ( className ) => {
    const [isLight, setIsLight] = useState(() => {
        const savedTheme = Cookies.get('theme');
        return savedTheme ? savedTheme === 'light' : !window.matchMedia('(prefers-color-scheme: dark)').matches;
    });
    const [theme, setTheme] = useState(isLight ? "toggle-switch" : "toggle-switch of");

    const toggleTheme = () => {
        setIsLight(!isLight);
        if (isLight) {
            setTheme("toggle-switch of");
            Cookies.set('theme', 'dark');
        } else {
            setTheme("toggle-switch");
            Cookies.set('theme', 'light');
        }
    };

    useEffect(() => {
        const body = document.body;
        if (isLight) {
            body.classList.add('light');
            body.classList.remove('dark');
        } else {
            body.classList.add('dark');
            body.classList.remove('light');
        }
    }, [isLight]);

    return (
        <section className={"place-items-center " + className}>
            <button id={"toggle"} className={ theme } onClick={toggleTheme}>
                <section className={"toggle-switch-circle"}/>
            </button>
        </section>
    )
}