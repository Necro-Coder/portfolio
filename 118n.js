import i18n from "i18next";
import {initReactI18next} from "react-i18next";

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
                    'Working': 'Work in progress',
                    'CV Button': 'Click to see my CV',
                    'CV': '../public/cv-english.pdf',
                    'Personal Description': 'I`m full stack developer, I specialize in web and android, using languages ' +
                        'like css, dart, javascript and java. I`m passionate about backend and databases, ' +
                        'and I also have experience in the front end. I like to learn new ' +
                        'technologies, like Node.js, and contribute to open source.',
                    'Footer Content': 'This website was made with React, Vite, TailwindCSS and CSS native.',
                    'Repository': 'GitHub Repository',
                    'Translate': 'Translate',
                }
            },
            es: {
                translation: {
                    "Language": "Español",
                    'About': 'Sobre mí',
                    'Projects': 'Proyectos',
                    'Description': 'Hola! Soy Rubén, un desarrollador full-stack de España',
                    'Copied': 'Copiado!',
                    'Working': 'Trabajo en progreso',
                    'CV Button': 'Haz click para ver mi CV',
                    'CV': '../public/cv-spanish.pdf',
                    'Personal Description': 'Desarrollador full stack, me especializo en web y android, usando lenguajes ' +
                        'como css, dart, javascript y java. Me apasiona el backend y las bases de datos, ' +
                        'y también tengo experiencia en el front end. Me gusta aprender nuevas' +
                        'tecnologías, como Node.js, y contribuir al open source.',
                    'Footer Content': 'Esta web fue creada con React, Vite, TailwindCSS y CSS nativo.',
                    'Repository': 'Repositorio de GitHub',
                    'Translate': 'Traducir',
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