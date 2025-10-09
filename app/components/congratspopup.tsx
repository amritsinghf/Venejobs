import React from 'react';
import './congratspopup.css';

interface PopupModalProps {
  title: string;
  description: string;
  buttonText?: string;
  onClose: () => void;
}

export default function CongratsPopup({
  title,
  description,
  buttonText = 'Continuar',
  onClose,
}: PopupModalProps) {
  return (
    <div className="popup-backdrop">
      <div className="popup-modal">
        <button className="popup-close" onClick={onClose}>×</button>
        <div className="popup-icon">🎉</div>
        <h2 className="popup-title">{title}</h2>
        <p className="popup-description">{description}</p>
        <button className="popup-button" onClick={onClose}>{buttonText}</button>
      </div>
    </div>
  );
}
