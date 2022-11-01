import { Table } from '@nextui-org/react';
import styles from './Portfolio.module.scss';
import { BiLinkExternal } from 'react-icons/bi';
import  { FaGithubSquare } from 'react-icons/fa';

const projects = [
    {
        client: "D'Ink Tattoo Studio",
        category: 'Landing Page',
        github: 'https://github.com/OThyagoCarvalho/dink-tattoo-studio',
        link: 'http://dinktattoostudiomain.gatsbyjs.io/'
    },
    {
        client: 'WWM Contabilidade',
        category: 'Landing Page',
        github: 'https://github.com/OThyagoCarvalho/wm-accounting',
        link: 'http://wmaccountingmain.gatsbyjs.io'
    }
];

export default function Portfolio() {
    return (
        <section className={styles.portfolioSection}>
            <div className={styles.maxContentContainer}>
                <Table
                    className={styles.table}
                    aria-label="Portfolio projects"                  
                >
                    <Table.Header>
                        <Table.Column>CLIENTE</Table.Column>
                        <Table.Column>TIPO</Table.Column>
                        <Table.Column>PREVIEW</Table.Column>
                    </Table.Header>
                    <Table.Body>
                        {projects.map((project, index) => (
                            <Table.Row key={index}>
                                <Table.Cell>{project.client}</Table.Cell>
                                <Table.Cell>{project.category}</Table.Cell>
                                <Table.Cell>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className={styles.link}
                                    >
                                        <BiLinkExternal className={styles.icon} />
                                    </a>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className={styles.link}
                                    >
                                        <FaGithubSquare className={styles.icon} />
                                    </a>
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </div>
        </section>
    );
}
