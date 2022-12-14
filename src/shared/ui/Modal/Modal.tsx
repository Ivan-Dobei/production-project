import React, {lazy, MutableRefObject, ReactNode, useCallback, useEffect, useRef, useState} from 'react';
import {classNames, Mods} from 'shared/lib/classNames/classNames';
import cls from './Modal.module.scss';
import {Portal} from 'shared/ui/Portal/Portal';

interface ModalProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {

   const {
      children,
      className,
      isOpen,
      onClose,
      lazy,
   } = props;

   const [isMounted, setIsMounted] = useState(false);
   const [isModalClose, setIsModalClose] = useState(false);
   const timeRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

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
      if (isOpen) {
         setIsMounted(true);
      }
   }, [isOpen]);

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

   const mods: Mods = {
      [cls.open]: isOpen,
      [cls.close]: isModalClose,
   };

   if (lazy && !isMounted) {
      return null;
   }

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
