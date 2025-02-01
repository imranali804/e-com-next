import { toast } from 'react-hot-toast';

export const successToast = (message: string) => toast.success(message, {
  position: 'bottom-right',
  style: {
    background: '#4BB543',
    color: '#fff',
  }
});

export const errorToast = (message: string) => toast.error(message, {
  position: 'bottom-right',
  style: {
    background: '#ff4444',
    color: '#fff',
  }
});