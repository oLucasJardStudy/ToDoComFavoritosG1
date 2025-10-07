import { useEffect } from 'react';
import { useTasks } from '../context/TodoContext';

const Notification = () => {
  const { notification, setNotification } = useTasks();

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification('');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [notification, setNotification]);

  if (!notification) {
    return null;
  }

  const notificationStyle = {
    position: 'fixed' as const,
    top: '20px',
    right: '20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '12px 20px',
    borderRadius: '4px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
    zIndex: 1000,
    fontSize: '14px',
    fontWeight: 'bold'
  };

  return <div style={notificationStyle}>{notification}</div>;
};

export default Notification;
