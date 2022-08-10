import Link from 'next/link';
import styles from './Header.module.scss';
import { useTheme, Dropdown, User } from '@nextui-org/react';
import { AiOutlineMenu } from 'react-icons/ai';

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
                <Dropdown placement="bottom-left">
                    <Dropdown.Trigger>
                        <User
                            src="/profile.webp"
                            name="Thyago"
                            description="sobre mim"
                            size="md"
                            bordered
                            color="success"
                            style={{ padding: '0' }}
                        />
                    </Dropdown.Trigger>
                    <Dropdown.Menu aria-label="Static Actions" color="success">
                        <Dropdown.Item key="stack">Stack</Dropdown.Item>
                        <Dropdown.Item key="curriculum">
                            Currículo
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
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
                                    <AiOutlineMenu />
                                </a>
                            </Dropdown.Trigger>
                            <Dropdown.Menu
                                aria-label="Static Actions"
                                color="success"
                            >
                                <Dropdown.Item key="home">
                                    <li>
                                        <Link href="/">Home</Link>
                                    </li>
                                </Dropdown.Item>
                                <Dropdown.Item key="blog">
                                    <li>
                                        <Link href="/blog">Blog</Link>
                                    </li>
                                </Dropdown.Item>
                                <Dropdown.Item key="utilities">
                                    <li>
                                        <Link href="/">Utilidades</Link>
                                    </li>
                                </Dropdown.Item>
                                <Dropdown.Item key="portfolio">
                                    <li>
                                        <Link href="/">Portfólio</Link>
                                    </li>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </nav>
            </div>
        </header>
    );
}
