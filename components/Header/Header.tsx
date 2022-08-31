import Link from 'next/link';
import styles from './Header.module.scss';
import { useTheme, Dropdown, User } from '@nextui-org/react';
import { AiOutlineMenu } from 'react-icons/ai';
import InfoPopover from './InfoPopover/InfoPopover';
import InfoModal from './InfoModal/InfoModal';

export default function Header() {
    const { theme } = useTheme();
    return (
        <header
            id="top"
            className={styles.header}
            style={{
                backgroundColor: theme?.colors.background.value,
                color: theme?.colors.text.value,
                fontSize: theme?.fontSizes.base.value,
                boxShadow: theme?.shadows.sm.value
            }}
        >
            <div className={styles.maxContentContainer}>
                <InfoPopover />

                <nav>
                    <ul className={styles.navLinksContainer}>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link href="/">Utilidades</Link>
                        </li>
                        <li>
                            <Link href="/">Portfólio</Link>
                        </li>
                    </ul>
                    <div className={styles.mobileMenu}>
                        <Dropdown placement="bottom-right">
                            <Dropdown.Trigger>
                                <a>
                                    <AiOutlineMenu size="24px" />
                                </a>
                            </Dropdown.Trigger>
                            <Dropdown.Menu
                                className={styles.mobileMenuOpenContainer}
                                // aria-label="Static Actions"
                                color="success"
                            >
                                <Dropdown.Item textValue="home" key="home">
                                    <Link
                                        className={styles.mobileMenuLink}
                                        href="/"
                                    >
                                        Home
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item textValue="blog" key="blog">
                                    <Link
                                        className={styles.mobileMenuLink}
                                        href="/blog"
                                    >
                                        Blog
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item textValue="utilidades" key="utilidades">
                                    <Link
                                        className={styles.mobileMenuLink}
                                        href="/"
                                    >
                                        Utilidades
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item textValue="portfolio" key="portfolio">
                                    <Link
                                        className={styles.mobileMenuLink}
                                        href="/"
                                    >
                                        Portfólio
                                    </Link>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </nav>
            </div>
        </header>
    );
}
