import { notification } from 'antd';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

const Notification = (type: NotificationType, title: string, description: string) => {
  notification[type]({
    message: title,
    description,
    duration: 1
  });
};

export default Notification;