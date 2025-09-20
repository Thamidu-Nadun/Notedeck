import {createRoot} from 'react-dom/client';
import {CheckCircle, XCircle, Info, AlertTriangle, Bell, X} from 'lucide-react';
import './Toast.css';

const icons = {
  success: CheckCircle,
  error: XCircle,
  info: Info,
  warning: AlertTriangle,
  default: Bell,
};

const colors = {
  success: 'bg-green-100 text-green-800 border-green-300',
  error: 'bg-red-100 text-red-800 border-red-300',
  info: 'bg-blue-100 text-blue-800 border-blue-300',
  warning: 'bg-yellow-100 text-yellow-800 border-yellow-300',
  default: 'bg-gray-100 text-gray-800 border-gray-300',
};

const positionMap = {
  tr: 'top-4 right-4',
  tl: 'top-4 left-4',
  br: 'bottom-4 right-4',
  bl: 'bottom-4 left-4',
};

/**
 * 
 * @param {string} title - Title of the toast
 * @param {string} desc - Description of the toast
 * @param {string} type - Type of the toast: 'success', 'error', 'info', 'warning', 'default'
 * @param {number} duration - Duration in milliseconds before auto-dismiss
 * @param {function} onClose - Callback when toast is dismissed 
 * @returns {JSX.Element}
 */
const Toast = ({title, desc, type = 'default', duration = 3000, onClose}) => {
  const Icon = icons[type] || icons.default;
  const color = colors[type] || colors.default;

  // Auto dismiss
  setTimeout (() => {
    onClose ();
  }, duration);

  return (
    <div
      className={`max-w-sm w-full border rounded-md shadow-lg px-4 py-3 flex gap-3 items-start fadeInUp ${color}`}
    >
      <Icon className="w-6 h-6 mt-1 shrink-0" />
      <div className="flex-1">
        {title && <strong className="block font-semibold">{title}</strong>}
        {desc && <p className="text-sm">{desc}</p>}
      </div>
      <button onClick={onClose}>
        <X className="w-4 h-4 opacity-60 hover:opacity-90" />
      </button>
    </div>
  );
};

const showToast = (
  title,
  desc,
  type = 'default',
  duration = 3000,
  position = 'br'
) => {
  const pos = positionMap[position] || positionMap['br'];

  const container = document.createElement ('div');
  container.className = `fixed z-50 ${pos} toast-container pointer-events-none`;
  document.body.appendChild (container);

  const root = createRoot (container);

  const cleanup = () => {
    root.unmount ();
    container.remove ();
  };

  root.render (
    <div className="pointer-events-auto">
      <Toast
        title={title}
        desc={desc}
        type={type}
        duration={duration}
        onClose={cleanup}
      />
    </div>
  );
};

// 🔥 Export utility functions
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

export default Toast;
