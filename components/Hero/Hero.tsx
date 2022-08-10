import { Text } from '@nextui-org/react';
import { useTheme } from '@nextui-org/react';
import styles from './Hero.module.scss';

export default function Hero() {
    const { theme } = useTheme();
    return (
        <section className={styles.heroSection}>
            <div className={styles.maxContentContainer}>                
                <Text
                    className={styles.heroText}
                    h1
                    css={{
                        textGradient: '10deg, $success 30%, $green700 50%',
                        lineHeight: theme?.lineHeights.xs.value,
                        textAlign: 'justify',                                          
                        padding: theme?.space[2].value
                    }}
                >
                    Sou Thyago e este é meu espaço para compartilhar
                    ideias, conhecimentos, projetos e experiências.
                </Text>
            </div>
        </section>
    );
}
