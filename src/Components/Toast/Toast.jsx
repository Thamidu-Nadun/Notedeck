import {X} from 'lucide-react';
import {CheckCircle, XCircle, Info, AlertTriangle, Bell} from 'lucide-react';

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

const Toast = ({title, desc, type = 'default', onClose}) => {
  const Icon = icons[type] || icons.default;
  const color = colors[type] || colors.default;

  return (
    <div
      className={`toast-animate ${color} border-l-4 shadow-lg p-4 mb-4 w-96 max-w-full flex items-start justify-between rounded-md`}
    >
      <div className="flex items-start">
        <Icon className="w-6 h-6 mt-1 mr-3 shrink-0" />
        <div>
          <h4 className="font-bold text-lg">{title}</h4>
          {desc && <p className="text-sm mt-1">{desc}</p>}
        </div>
      </div>
      <button
        onClick={onClose}
        className="ml-4 text-gray-500 hover:text-gray-700"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Toast;
