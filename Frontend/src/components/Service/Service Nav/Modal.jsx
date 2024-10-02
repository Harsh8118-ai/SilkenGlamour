// components/Modal.jsx
import React from 'react';

const Modal = ({ isOpen, title, message, onConfirm, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-BGColorYellow p-4 rounded-lg shadow-lg max-w-md w-full space-y-4">
        <h2 className="text-lg font-bold text-center">{title}</h2>
        <div className="whatsapp-message" style={{ backgroundColor: '#C6B198', padding: '10px', borderRadius: '5px', whiteSpace: 'pre-line', fontFamily: 'Helvetica, Arial, sans-serif' }}>
          {message.split('\n').map((line, index) => (
            <p key={index} style={{ margin: 0 }}>{line}<br></br></p>
          ))}
        </div>
        <div className="flex justify-around">
          <button
            onClick={onConfirm}
            className="bg-green-500 hover:bg-green-500 text-gray-100 font-bold py-2 px-4 rounded"
          >
            Confirm
          </button>
          <button
            onClick={onClose}
            className="bg-red-500 hover:bg-red-500 text-gray-100 font-bold py-2 px-4 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
