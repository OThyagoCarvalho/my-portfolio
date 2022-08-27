import { Modal, useModal, Button, Text } from '@nextui-org/react';
import { useState } from 'react';

interface InfoModalProps {
    link: string;
    isModalOpen?: boolean;
}

export default function InfoModal({ link }: InfoModalProps) {
    const [visible, setVisible] = useState(false);
    
    const toggleVisibility = () => {
        setVisible(!visible);
    };

    return (
        <>
            <Button onClick={toggleVisibility}>{link}</Button>
            <Modal
                css={{ zIndex: '999' }}
                scroll
                fullScreen
                onClose={() => toggleVisibility}
                onCloseButtonClick={toggleVisibility}
                open={visible}
                closeButton
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Modal.Header>
                    <Text id="modal-title" size={18}>
                        {link}
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <Text id="modal-description">
                        Cras mattis consectetur purus sit amet fermentum.
                    </Text>
                </Modal.Body>
                <Modal.Footer>footer</Modal.Footer>
            </Modal>
        </>
    );
}
