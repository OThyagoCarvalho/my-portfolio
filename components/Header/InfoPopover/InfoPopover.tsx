import { Popover, Button, Text, User, Modal } from '@nextui-org/react';
import { useState } from 'react';
import StackComponent from '../../StackComponent/StackComponent';
import InfoModal from '../InfoModal/InfoModal';
import styles from './InfoPopover.module.scss';

export default function InfoPopover() {
    const [isOpen, setIsOpen] = useState(false);
    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => {
        setVisible(!visible);
        setIsOpen(false);
        console.log(visible);
    };

    // const handleCloseModal = () => {
    //     setVisible(false);
    // };

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
                    <Button onClick={toggleVisibility}> Stack </Button>
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
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Modal.Header>
                    <Text id="modal-title" size={18}>
                        Stack
                    </Text>
                </Modal.Header>
                <Modal.Body className={styles.modalBody}>
                    <StackComponent />
                </Modal.Body>
                <Modal.Footer>footer</Modal.Footer>
            </Modal>
        </>
    );
}
