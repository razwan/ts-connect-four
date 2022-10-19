import React from 'react';
import { theme } from '../../styles/Theme.style';
import { EmphasizedButton, PlainButton } from './Button.style';

export interface IButton {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent) => void;
  variant?: 'emphasized' | 'plain';
  backgroundColor?: string;
  alignment?: 'left' | 'center' | 'right';
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<IButton> = ({
  children,
  onClick,
  variant = 'emphasized',
  backgroundColor = theme.colors.white,
  alignment = 'center',
  disabled = false,
  className = ''
}) => {
  if (variant === 'plain') {
    return (
      <PlainButton
        backgroundColor={backgroundColor}
        alignment={alignment}
        disabled={disabled}
        onClick={onClick}
        className={className}
      >
        {children}
      </PlainButton>
    );
  } else {
    return (
      <EmphasizedButton
        backgroundColor={backgroundColor}
        alignment={alignment}
        disabled={disabled}
        onClick={onClick}
        className={className}
      >
        {children}
      </EmphasizedButton>
    );
  }
};

export default Button;