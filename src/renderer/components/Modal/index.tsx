import { PropsWithChildren } from 'react';
import styles from './styles.module.scss';
import Icon from '../Icon';

interface ModalProps {
  title: string;
  open?: boolean;
  onClose?: () => void;
  wide?: boolean;
}

export default function Modal({
  children,
  title,
  open,
  onClose,
  wide,
}: PropsWithChildren<ModalProps>) {
  return open ? (
    <>
      <div className={styles.blur} onClick={onClose} />
      <div
        className={styles.modalContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={styles.modal}
          style={{ width: wide ? '80%' : undefined }}
        >
          <div className={styles.modalHeader}>
            <div className={styles.modalTitle}>{title}</div>
            <div className={styles.modalClose} onClick={onClose}>
              <Icon.Close />
            </div>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </>
  ) : null;
}

Modal.Body = ({
  children,
  noPadding,
}: PropsWithChildren<{ noPadding?: boolean }>) => {
  return (
    <div
      style={{ padding: noPadding ? 0 : undefined }}
      className={styles.modalBody}
    >
      {children}
    </div>
  );
};

Modal.Footer = ({ children }: PropsWithChildren) => {
  return <div className={styles.modalFooter}>{children}</div>;
};
