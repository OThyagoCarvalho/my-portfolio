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
                        color: "$green800",
                        // textGradient: '360deg, $green700 -20%, $green900 90%',
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
