import { FC, ReactNode } from "react";

type ModalProps = {
    children: ReactNode;
};

const Modal: FC<ModalProps> = ({ children }) => {
    return (
        <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-screen h-screen bg-white/20">
            {children}
        </div>
    );
};

export default Modal;
