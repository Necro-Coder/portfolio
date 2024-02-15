import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    "Language": "English",
                    'About': 'About Me',
                    'Projects': 'Projects',
                    'Description': 'Hi! I\'m Rubén, a full-stack developer from Spain',
                    'Copied': 'Copied!',
                    'Working': 'Work in progress'
                }
            },
            es: {
                translation: {
                    "Language": "Español",
                    'About': 'Sobre mí',
                    'Projects': 'Proyectos',
                    'Description': 'Hola! Soy Rubén, un desarrollador full-stack de España',
                    'Copied': 'Copiado!',
                    'Working': 'Trabajo en progreso'
                }
            }
        },
        lng: "en",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;