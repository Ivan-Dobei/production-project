import {memo, Suspense} from 'react';
import {Modal} from 'shared/ui/Modal/Modal';
import {LoginFormAsync} from '../LoginForm/LoginForm.async';
import {Loader} from 'shared/ui/Loader/Loader';

interface LoginModalProps {
    className?: string;
    isOpen?: boolean;
    onClose?: () => void;
}

export const LoginModal = memo((props: LoginModalProps) => {
   const {
      isOpen,
      onClose,
   } = props;

   return (
      <Modal
         isOpen={isOpen}
         onClose={onClose}
      >
         <Suspense fallback={<Loader/>}>
            <LoginFormAsync onSuccess={onClose}/>
         </Suspense>
      </Modal>
   );
});
