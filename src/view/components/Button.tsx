import styled from 'styled-components';

interface ButtonProps {
  disabled?: boolean;
  variant?: 'primary' | 'dashed' | 'link' | 'text' | 'default';
  size?: 'small' | 'middle' | 'large';
}

type variantTypes = 'primary' | 'dashed' | 'link' | 'text' | 'default';

type sizeTypes = 'small' | 'middle' | 'large';

const buttonVariants = (variant: variantTypes = 'default', theme: any) => {
  const variantStyles = {
    primary: {
      backgroundColor: theme.colors.blue600,
      color: theme.colors.gray100,
      border: '1px solid',
      borderColor: theme.colors.blue600,
      hoveredBackgroundColor: theme.colors.blue500,
      hoveredColor: theme.colors.gray100,
      hoveredBorderColor: theme.colors.blue500,
      pressedBackgroundColor: theme.colors.blue700,
      pressedColor: theme.colors.gray100,
      pressedBorderColor: theme.colors.blue700,
      disabledBackgroundColor: theme.colors.gray300,
      disabledColor: theme.colors.gray600,
      disabledBorderColor: theme.colors.gray500
    },
    dashed: {
      backgroundColor: theme.colors.gray100,
      color: theme.colors.gray900,
      border: '1px dashed',
      borderColor: theme.colors.gray500,
      hoveredBackgroundColor: theme.colors.gray100,
      hoveredColor: theme.colors.blue500,
      hoveredBorderColor: theme.colors.gray500,
      pressedBackgroundColor: theme.colors.gray100,
      pressedColor: theme.colors.blue700,
      pressedBorderColor: theme.colors.blue700,
      disabledBackgroundColor: theme.colors.gray300,
      disabledColor: theme.colors.gray600,
      disabledBorderColor: theme.colors.gray500
    },
    link: {
      backgroundColor: 'transparent',
      color: theme.colors.blue600,
      border: 'none',
      borderColor: 'transparent',
      hoveredBackgroundColor: 'transparent',
      hoveredColor: theme.colors.blue500,
      hoveredBorderColor: 'transparent',
      pressedBackgroundColor: 'transparent',
      pressedColor: theme.colors.blue700,
      pressedBorderColor: 'transparent',
      disabledBackgroundColor: 'transparent',
      disabledColor: theme.colors.gray600,
      disabledBorderColor: 'transparent'
    },
    text: {
      backgroundColor: 'transparent',
      color: theme.colors.gray900,
      border: 'none',
      borderColor: 'transparent',
      hoveredBackgroundColor: theme.colors.gray200,
      hoveredColor: theme.colors.gray900,
      hoveredBorderColor: 'transparent',
      pressedBackgroundColor: theme.colors.gray200,
      pressedColor: theme.colors.gray900,
      pressedBorderColor: 'transparent',
      disabledBackgroundColor: 'transparent',
      disabledColor: theme.colors.gray600,
      disabledBorderColor: 'transparent'
    },
    default: {
      backgroundColor: theme.colors.gray100,
      color: theme.colors.gray900,
      border: '1px solid',
      borderColor: theme.colors.gray500,
      hoveredBackgroundColor: theme.colors.gray100,
      hoveredColor: theme.colors.blue500,
      hoveredBorderColor: theme.colors.gray500,
      pressedBackgroundColor: theme.colors.gray100,
      pressedColor: theme.colors.blue700,
      pressedBorderColor: theme.colors.blue700,
      disabledBackgroundColor: theme.colors.gray300,
      disabledColor: theme.colors.gray600,
      disabledBorderColor: theme.colors.gray500
    }
  }

  return variantStyles[variant];
}

const buttonSizes = (size: sizeTypes = 'large', theme: any) => {
  const sizeStyles = {
    small: {
      padding: `${theme.space.xSmall} ${theme.space.medium}`
    },
    middle: {
      padding: `${theme.space.small} ${theme.space.large}`
    },
    large: {
      padding: `${theme.space.medium} ${theme.space.large}`
    }
  }

  return sizeStyles[size];
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  gap: ${({ theme }) => theme.space.xSmall};
  padding: ${({ size, theme }) => buttonSizes(size, theme).padding};
  background-color: ${({ variant, theme }) => buttonVariants(variant, theme).backgroundColor};
  color: ${({ variant, theme }) => buttonVariants(variant, theme).color};
  border: ${({ variant, theme }) => buttonVariants(variant, theme).border};
  border-radius: ${({ theme }) => theme.radii.xSmall};
  border-color: ${({ variant, theme }) => buttonVariants(variant, theme).borderColor};
  cursor: pointer;

  &:hover {
    background-color: ${({ variant, theme }) => buttonVariants(variant, theme).hoveredBackgroundColor};
    color: ${({ variant, theme }) => buttonVariants(variant, theme).hoveredColor};
    border-color: ${({ variant, theme }) => buttonVariants(variant, theme).hoveredBorderColor};
  }

  &:focus {
    background-color: ${({ variant, theme }) => buttonVariants(variant, theme).hoveredBackgroundColor};
    color: ${({ variant, theme }) => buttonVariants(variant, theme).hoveredColor};
    border-color: ${({ variant, theme }) => buttonVariants(variant, theme).hoveredBorderColor};
  }

  &:active {
    background-color: ${({ variant, theme }) => buttonVariants(variant, theme).pressedBackgroundColor};
    color: ${({ variant, theme }) => buttonVariants(variant, theme).pressedColor};
    border-color: ${({ variant, theme }) => buttonVariants(variant, theme).pressedBorderColor};
  }

  &:disabled {
    background-color: ${({ variant, theme }) => buttonVariants(variant, theme).disabledBackgroundColor};
    color: ${({ variant, theme }) => buttonVariants(variant, theme).disabledColor};
    border-color: ${({ variant, theme }) => buttonVariants(variant, theme).disabledBorderColor};
    cursor: not-allowed;
  }
`
