import { AiFillDatabase, AiOutlineConsoleSql } from 'react-icons/ai';
import {
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiMongodb,
    SiSass,
    SiStyledcomponents,
    SiPostgresql,
    SiJest,
    SiTestinglibrary,
    SiInsomnia,
    SiPostman,
    SiFigma,
    SiAdobeillustrator,
    SiGit,
    SiGithub
} from 'react-icons/si';

export default function StackComponent() {
    return (
        <>
            <div>
                Construo aplicações Full-Stack com as seguintes tecnologias:
            </div>
            <div>
                <p>Linguagens:</p>
                <div>
                    <SiJavascript />
                    Javascript
                </div>
                <div>
                    <SiTypescript />
                    Typrescript
                </div>
            </div>
            <div>
                <p>Componentes</p>
                <div>
                    <SiReact />
                    React
                </div>
                <div>
                    <SiNextdotjs />
                    Next
                </div>
            </div>
            <div>
                <p>Estilos</p>
                <div>
                    <SiSass />
                    SASS
                </div>
                <div>
                    <SiStyledcomponents size={32} />
                    Styled-Components
                </div>
                <div>
                    <div>
                        <p>
                            <i>
                                Também utilizo outras bibliotecas de estilo
                                como: TailwindCSS, ReactBootstrap, MaterialUI,
                                NextUI. Conheço a metodologia
                                Block-Element-Modifier.
                            </i>
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <p> SGBD - Banco de Dados</p>
                <div>
                    <AiFillDatabase />
                    SQL e NoSql Databases
                </div>
            </div>
            <div>
                <p> Testes </p>
                <div>
                    <SiJest />
                    JEST
                </div>
                <div>
                    <SiTestinglibrary />
                    React Testing Library
                </div>
            </div>
            <div>
                <p> Versionamento </p>
                <div>
                    <SiGit />
                    Git
                </div>
                <div>
                    <SiGithub />
                    Github
                </div>
            </div>
            <div>
                <p> Outros </p>
                <div>
                    <SiInsomnia />
                    Insomnia
                </div>
                <div>
                    <SiPostman />
                    Postman
                </div>
                <div>
                    <SiFigma />
                    Figma
                </div>
                <div>
                    <SiAdobeillustrator />
                    Illustrator
                </div>
            </div>
        </>
    );
}
