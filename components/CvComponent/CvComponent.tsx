import styles from './CvComponent.module.scss';

export default function CvComponent() {
    return (
        <>
            <h4 className={styles.category}>Meu Perfil</h4>
            <div className={styles.container}>
                <div className={styles.description}>
                    Tenho interesse em tecnologia e finanças, gosto de trabalhar
                    em ambientes que me possibilitem aprender. Aprendi a ser
                    disciplinado e diligente e gosto de abordar as situações de
                    maneira estratégica e planejada, talvez como consequência da
                    minha formação em Administração. Gosto de trabalhar em
                    equipe e com metas, resultado da minha passagem no Banco do
                    Brasil S.A. Tenho uma boa autogestão, resultante da minha
                    experiência trabalhando Full Remote no Judiciário Federal.
                    Considero que possuo uma formação transversal e abrangente.
                </div>
            </div>
            <h4 className={styles.category}>Educação</h4>
            <div className={styles.container}>
                <p className={styles.title}>
                    Análise e Desenvolvimento de Sistemas (Tecnologia)
                </p>
                <p className={styles.description}>
                    Centro Universitário Senac - 10/2021 - 04/2024 (previsão)
                </p>

                <p className={styles.title}>
                    Finanças e Mercado Financeiro (MBA)
                </p>
                <p className={styles.description}>
                    Faculdade Descomplica - 1/2020 - 12/2020
                </p>

                <p className={styles.title}>Administração (Bacharelado)</p>
                <p className={styles.description}>
                    Universidade Federal Fluminense - 06/2013 - 06/2017
                </p>
            </div>
            <h4 className={styles.category}>Experiência</h4>
            <div className={styles.container}>
                <p className={styles.title}> Justiça Federal (100% Remote)</p>
                <p className={styles.description}> 2018 - presente</p>
                <p className={styles.title}> Banco do Brasil S.A.</p>
                <p className={styles.description}> 2014 - 2015</p>
            </div>
        </>
    );
}
