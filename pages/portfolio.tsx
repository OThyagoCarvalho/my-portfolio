import styles from '../styles/Portfolio.module.scss';
import { Collapse, Text, Grid, Avatar, Link } from '@nextui-org/react';
import { BsGlobe2, BsGithub } from 'react-icons/bs';
import Image from 'next/image';

export default function Portfolio() {
    return (
        <main>
            <div className="maxContentContainer">
                <div className={styles.projectsContainer}>
                    <Collapse.Group shadow>
                        <div className={styles.projectImageMobile}>
                            <Image
                                width={300}
                                height={185}
                                src="/dink-hero.webp"
                                alt="DInk Tattoo Studio landing page"
                            />
                        </div>
                        <Collapse
                            title={<Text h4> {`D'Ink Tattoo Studio`} </Text>}
                            subtitle={
                                <p className={styles.projectSubtitle}>
                                    Landing Page/ Web page -
                                    <span>
                                        <a
                                            href="https://dinktattoostudiomain.gatsbyjs.io/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <BsGlobe2
                                                style={{
                                                    margin: '0 0.5rem',
                                                    height: '1.25rem',
                                                    width: '1.25rem'
                                                }}
                                                className={styles.icon}
                                            />
                                        </a>
                                        <a
                                            href="https://github.com/OThyagoCarvalho/dink-tattoo-studio"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <BsGithub
                                                style={{
                                                    margin: '0 0.5rem',
                                                    height: '1.25rem',
                                                    width: '1.25rem'
                                                }}
                                                className={styles.icon}
                                            />
                                        </a>
                                    </span>
                                </p>
                            }
                            contentLeft={
                                <div className={styles.projectImageDesktop}>
                                    <Image
                                        width={300}
                                        height={185}
                                        src="/dink-hero.webp"
                                        alt="DInk Tattoo Studio landing page"
                                        className={styles.projectImage}
                                    />
                                </div>
                            }
                        >
                            <Text>
                                Landing page responsiva desenvolvida com
                                ReactJs, Gatsby.js, Styled Components e com
                                elementos dinâmicos,
                                <i>{`"Accordion/Collapsible" e Carrossel`}</i>,
                                importados da MUI (Antigo Material UI).
                            </Text>
                        </Collapse>
                        <div className={styles.projectImageMobile}>
                            <Image
                                width={300}
                                height={185}
                                src="/mon-menu-example.jpeg"
                                alt="DInk Tattoo Studio landing page"
                                className={styles.projectImage}
                            />
                        </div>
                        <Collapse
                            title={
                                <Text h4>
                                    Mon Menu - Criador de Menus QrCode
                                </Text>
                            }
                            subtitle={
                                <div className={styles.projectSubtitle}>
                                    <p className={styles.subtitleText}>
                                        Dashboard/ SaaS{' '}
                                    </p>
                                    <p className={styles.tag}>
                                        em desenvolvimento
                                    </p>
                                    <a
                                        href="https://github.com/OThyagoCarvalho/mon-menu"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <BsGithub
                                            style={{
                                                margin: '0 0.5rem',
                                                height: '1.25rem',
                                                width: '1.25rem'
                                            }}
                                            className={styles.icon}
                                        />
                                    </a>
                                </div>
                            }
                            contentLeft={
                                <div className={styles.projectImageDesktop}>
                                    <Image
                                        width={300}
                                        height={185}
                                        src="/mon-menu-example.jpeg"
                                        alt="DInk Tattoo Studio landing page"
                                        className={styles.projectImage}
                                    />
                                </div>
                            }
                        >
                            <Text>
                                Meu mais recente e mais ambicioso projeto, uma
                                plataforma SaaS completa, com fluxo de
                                autenticação, funções de CRUD, dashboard com
                                alguns elementos de Data Visualization e mais.
                                Desenvolvida com React.js, Next.js, SASS,
                                Postgres, Prisma ORM, Next OAuth, API de Gateway
                                de Pagamento, testes com Jest e React Testing
                                Library, CI/CD com Vercel e Github actions, e
                                mais.
                            </Text>
                        </Collapse>
                    </Collapse.Group>
                </div>
            </div>
        </main>
    );
}
