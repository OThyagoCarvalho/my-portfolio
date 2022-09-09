import { Popover, Button, Text, User, Modal } from '@nextui-org/react';
import { useState } from 'react';
import CvComponent from '../../CvComponent/CvComponent';
import StackComponent from '../../StackComponent/StackComponent';
import InfoModal from '../InfoModal/InfoModal';
import styles from './InfoPopover.module.scss';

export default function InfoPopover() {
    const [isOpen, setIsOpen] = useState(false);
    const [visible, setVisible] = useState(false);
    const [cvVisible, setCvVisible] = useState(false);

    const toggleVisibility = () => {
        setVisible(!visible);
        setIsOpen(false); // workaround to avoid overlapping
    };

    const toggleCvVisibility = () => {
        setCvVisible(!cvVisible);
        setIsOpen(false); // workaround to avoid overlapping
    };

    return (
        <>
            <Popover
                isOpen={isOpen}
                onOpenChange={setIsOpen}
                placement="bottom-left"
            >
                <Popover.Trigger>
                    <User
                        src="/profile.webp"
                        name="Thyago"
                        description="sobre mim"
                        size="md"
                        bordered
                        color="success"
                        style={{ padding: '0' }}
                    />
                </Popover.Trigger>
                <Popover.Content>
                    <div className={styles.popoverOpenContentContainer}>
                        <button
                            className={styles.popoverButton}
                            onClick={toggleVisibility}
                        >
                            {' '}
                            Stack{' '}
                        </button>
                        <button
                            className={styles.popoverButton}
                            onClick={toggleCvVisibility}
                        >
                            {' '}
                            Currículo{' '}
                        </button>
                    </div>
                </Popover.Content>
            </Popover>

            <Modal
                css={{ zIndex: '999' }}
                scroll
                blur
                className={styles.modal}
                open={visible}
                onClose={() => setVisible(false)}
                closeButton
                aria-labelledby="stack"
                aria-describedby="skills"
            >
                <Modal.Header>
                    <Text id="modal-title" size={18}>
                        Stack
                    </Text>
                </Modal.Header>
                <Modal.Body className={styles.modalBody}>
                    <StackComponent />
                </Modal.Body>
                {/* <Modal.Footer>footer</Modal.Footer> */}
            </Modal>

            <Modal
                css={{ zIndex: '999' }}
                scroll
                blur
                className={styles.modal}
                open={cvVisible}
                onClose={() => setCvVisible(false)}
                closeButton
                aria-labelledby="stack"
                aria-describedby="skills"
            >
                <Modal.Header>
                    <Text id="modal-title" size={18}>
                        Currículo
                    </Text>
                </Modal.Header>
                <Modal.Body className={styles.modalBody}>
                    <CvComponent />
                </Modal.Body>
                {/* 
                // in case I want to add a footer: uncomment the following line
                <Modal.Footer>footer</Modal.Footer> 
                */}
            </Modal>
        </>
    );
}
