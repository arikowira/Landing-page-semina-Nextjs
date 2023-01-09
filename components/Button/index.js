import React from 'react';

export default function Button({ action, children, variant, disabled }) {
  return (
    <button
      type='button'
      className={variant}
      onClick={action}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
