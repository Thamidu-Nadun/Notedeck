import {createRoot} from 'react-dom/client';
import Toast from './Toast';

const positionMap = {
  tr: 'top-4 right-4',
  tl: 'top-4 left-4',
  br: 'bottom-4 right-4',
  bl: 'bottom-4 left-4',
};

function showToast (
  title,
  desc,
  type = 'default',
  duration = 3000,
  position = 'br'
) {
  const container = document.createElement ('div');
  container.className = `fixed z-50 ${positionMap[position] || positionMap.br} pointer-events-none`;
  document.body.appendChild (container);

  const root = createRoot (container);

  const close = () => {
    root.unmount ();
    container.remove ();
  };

  root.render (
    <div className="pointer-events-auto">
      <Toast title={title} desc={desc} type={type} onClose={close} />
    </div>
  );

  setTimeout (close, duration);
}

export const success = (title, desc, duration = 3000, position = 'br') =>
  showToast (title, desc, 'success', duration, position);

export const error = (title, desc, duration = 3000, position = 'br') =>
  showToast (title, desc, 'error', duration, position);

export const info = (title, desc, duration = 3000, position = 'br') =>
  showToast (title, desc, 'info', duration, position);

export const warning = (title, desc, duration = 3000, position = 'br') =>
  showToast (title, desc, 'warning', duration, position);

export const toast = (title, desc, duration = 3000, position = 'br') =>
  showToast (title, desc, 'default', duration, position);
