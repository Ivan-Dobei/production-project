import React, {ReactNode, useCallback, useEffect, useRef, useState} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Modal.module.scss';
import {Portal} from 'shared/ui/Portal/Portal';
import {useTheme} from "app/providers/ThemeProvider";

interface ModalProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {

   const {
      children,
      className,
      isOpen,
      onClose,
   } = props;

   const [isModalClose, setIsModalClose] = useState(false);
   const timeRef = useRef<ReturnType<typeof setTimeout>>();

   const closeHandler = useCallback(() => {
      if (onClose) {
         setIsModalClose(true);
         timeRef.current = setTimeout(() => {
            onClose();
            setIsModalClose(false);
         }, ANIMATION_DELAY);
      }
   }, [onClose]);

   const onKeyDown = useCallback((e: KeyboardEvent) => {
      if (e.key === 'Escape') {
         closeHandler();
      }
   }, [closeHandler]);

   useEffect(() => {
      window.addEventListener('keydown', onKeyDown);

      return () => {
         window.removeEventListener('keydown', onKeyDown);
         clearTimeout(timeRef.current);
      };
   }, [onKeyDown]);

   const onModalClick = (e: React.MouseEvent) => {
      e.stopPropagation();
   };

   const mods:Record<string, boolean> = {
      [cls.open]: isOpen,
      [cls.close]: isModalClose,
   };

   return (
      <Portal>
         <div className={classNames(cls.Modal, mods, [className])}>
            <div
               className={cls.overlay}
               onClick={closeHandler}
            >
               <div
                  className={cls.content}
                  onClick={onModalClick}
               >
                  {children}
               </div>
            </div>
         </div>
      </Portal>
   );
};
