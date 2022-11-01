import { Navbar, Button, Link, Text } from '@nextui-org/react';
import { Link as NextLink } from '@nextui-org/react';
import InfoPopover from '../Header/InfoPopover/InfoPopover';
import styles from './Navbar.module.scss';

export default function NavbarComponent() {
    const collapseItems = ['Home', 'Blog', 'Utilidades', 'Portfólio'];

    return (
        <Navbar variant="static">
            <div className={styles.maxContentContainer}>
                <Navbar.Brand>
                    <InfoPopover />
                </Navbar.Brand>
                <Navbar.Toggle
                    color="success"
                    showIn="xs"
                    aria-label="acionar navegação"
                />
                <Navbar.Content
                    activeColor={'success'}
                    enableCursorHighlight
                    hideIn="xs"
                    variant="underline-rounded"
                >
                    <Navbar.Link href="/" isActive>
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="/blog">Blog</Navbar.Link>
                    <Navbar.Link href="/portfolio">Portfólio</Navbar.Link>
                </Navbar.Content>
                <Navbar.Collapse>
                    <Navbar.CollapseItem>
                        <Link
                            color="success"
                            css={{
                                minWidth: '100%'
                            }}
                            href="/"
                        >
                            Home
                        </Link>
                    </Navbar.CollapseItem>
                    <Navbar.CollapseItem>
                        <Link
                            color="success"
                            css={{
                                minWidth: '100%'
                            }}
                            href="/blog"
                        >
                            Blog
                        </Link>
                    </Navbar.CollapseItem>
                    <Navbar.CollapseItem>
                        <Link
                            color="success"
                            css={{
                                minWidth: '100%'
                            }}
                            href="/portfolio"
                        >
                            Portfólio
                        </Link>
                    </Navbar.CollapseItem>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}
