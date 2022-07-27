import styled from 'styled-components';

interface CheckboxProps {
  checked?: boolean;
  id: string;
  onChange?: () => void;
  value?: string;
  children?: React.ReactNode;
  disabled?: boolean;
}

export const StyledCheckbox = styled.input.attrs({
  type: 'checkbox'
}) <CheckboxProps>`
  display: none;

  &+label:before {
    content: '';
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 1px solid ${({ theme }) => theme.colors.gray500};
    border-radius: 2px;
    margin-right: ${({ theme }) => theme.space.medium};

    &:hover {
      border-color: ${({ theme }) => theme.colors.blue600};
    }
  }

  &+label:hover:before,
  &+label:active:before {
      border-color: ${({ theme }) => theme.colors.blue600};
  }

  &:disabled {
    +label{
      color: ${({ theme }) => theme.colors.gray600};
      cursor: not-allowed;
    }

    +label:before {
      background-color: ${({ theme }) => theme.colors.gray300};
      border-color: ${({ theme }) => theme.colors.gray500};
      cursor: not-allowed;
    }
  }

  &:checked+label:before {
    content: '\\2713';
    display: flex;
    justify-content: center;
    align-items: start;
    color: ${({ theme }) => theme.colors.gray100};
    font-size: 12px;
    font-weight: bold;
    background-color: ${({ theme }) => theme.colors.blue600};
  }

  &:checked:disabled+label:before{
    background-color: ${({ theme }) => theme.colors.gray300};
    color: ${({ theme }) => theme.colors.gray600};
  }
`

export const StyledLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray900};
`

export const Checkbox = ({ checked, onChange, id, disabled, value, children }: CheckboxProps) => {
  return (
    <div>
      <StyledCheckbox
        checked={checked}
        onChange={onChange}
        id={id}
        value={value}
        disabled={disabled} />
      <StyledLabel htmlFor={id}>{children}</StyledLabel>
    </div>
  );
}
