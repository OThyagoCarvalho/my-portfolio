import { useTheme } from '@nextui-org/react';
import styles from './Footer.module.scss';
import { BsFillArrowUpSquareFill } from 'react-icons/bs';

export default function Footer() {
    const { theme } = useTheme();
    return (
        <footer
            className={styles.footer}
            style={{
                backgroundColor: theme?.colors.black.value,
                color: theme?.colors.white.value
            }}
        >
            <div className={styles.maxContentContainer}>
                <div className={styles.credits}>
                <p> thyago carvalho - 2022.</p>
                <p> othyagocarvalho@outlook.com</p>
                </div>
                <a href="#top">
                    <BsFillArrowUpSquareFill
                        className={styles.backToTop}
                        style={{
                            color: theme?.colors.success.value,
                            border: `1px solid ${theme?.colors.success.value}`,
                            backgroundColor: theme?.colors.white.value,
                            borderRadius: '15%',
                            fontSize: '32px'
                        }}
                    />
                </a>
            </div>
        </footer>
    );
}
