import styled, { css, DefaultTheme } from 'styled-components';
import { Icon } from './Icon';

type variantTypes = 'primary' | 'dashed' | 'link' | 'text' | 'default';

type sizeTypes = 'small' | 'middle' | 'large';

interface ButtonProps {
  disabled?: boolean;
  variant?: variantTypes;
  size?: sizeTypes;
  children?: React.ReactNode;
  icon?: string;
}

const buttonVariants = (variant: variantTypes = 'primary', theme: DefaultTheme) => {
  const variantStyles = {
    primary: css`
      background-color: ${theme.colors.blue600};
      color: ${theme.colors.gray100};
      border: 1px solid;
      border-color: ${theme.colors.blue600};

      &:hover {
        background-color: ${theme.colors.blue500};
        border-color: ${theme.colors.blue500};
      }

      &:focus {
        background-color: ${theme.colors.blue500};
        border-color: ${theme.colors.blue500};
      }

      &:active {
        background-color: ${theme.colors.blue700};
        border-color: ${theme.colors.blue700};
      }

      &:disabled {
        background-color: ${theme.colors.gray300};
        color: ${theme.colors.gray600};
        border-color: ${theme.colors.gray500};
      }
    `,
    dashed: css`
      background-color: ${theme.colors.gray100};
      color: ${theme.colors.gray900};
      border: 1px dashed;
      border-color: ${theme.colors.gray500};

      &:hover {
        color: ${theme.colors.blue500};
      }

      &:focus {
        color: ${theme.colors.blue500};
      }

      &:active {
        color: ${theme.colors.blue700};
        border-color: ${theme.colors.blue700};
      }

      &:disabled {
        background-color: ${theme.colors.gray300};
        color: ${theme.colors.gray600};
      }
    `,
    link: css`
      background-color: transparent;
      color: ${theme.colors.blue600};
      border: none;
      border-color: transparent;

      &:hover {
        color: ${theme.colors.blue500};
      }

      &:focus {
        color: ${theme.colors.blue500};
      }

      &:active {
        color: ${theme.colors.blue700};
      }

      &:disabled {
        color: ${theme.colors.gray600};
      }
    `,
    text: css`
      background-color: transparent;
      color: ${theme.colors.gray900};
      border: none;
      border-color: transparent;

      &:hover {
        background-color: ${theme.colors.gray200};
      }

      &:focus {
        background-color: ${theme.colors.gray200};
      }

      &:active {
        background-color: ${theme.colors.gray300};
      }

      &:disabled {
        background-color: transparent;
        color: ${theme.colors.gray600};
      }
    `,
    default: css`
      background-color: ${theme.colors.gray100};
      color: ${theme.colors.gray900};
      border: 1px solid;
      border-color: ${theme.colors.gray500};

      &:hover {
        color: ${theme.colors.blue500};
      }

      &:focus {
        color: ${theme.colors.blue500};
      }

      &:active {
        color: ${theme.colors.blue700};
        border-color: ${theme.colors.blue700};
      }

      &:disabled {
        background-color: ${theme.colors.gray300};
        color: ${theme.colors.gray600};
      }
    `
  }

  return variantStyles[variant];
}

const buttonSizes = (size: sizeTypes = 'large', theme: DefaultTheme) => {
  const sizeStyles = {
    small: css`
      padding: ${theme.space.xSmall} ${theme.space.medium};
    `,
    middle: css`
      padding: ${theme.space.small} ${theme.space.large};
    `,
    large: css`
      padding: ${theme.space.medium} ${theme.space.large};
    `
  }

  return sizeStyles[size];
}

export const StyledButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  gap: ${({ theme }) => theme.space.xSmall};
  border-radius: ${({ theme }) => theme.radii.xSmall};
  ${({ size, theme }) => buttonSizes(size, theme)};
  ${({ variant, theme }) => buttonVariants(variant, theme)};
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`

export const Button = ({ disabled, variant, size, icon, children }: ButtonProps) => {
  return (
    <StyledButton
      disabled={disabled}
      variant={variant}
      size={size}
    >
      {icon && <Icon name={icon} height='20px' width='20px'/>}
      {children}
    </StyledButton>
  );
}
