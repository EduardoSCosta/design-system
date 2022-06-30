import styled from 'styled-components';
import { Checkbox } from '../components/Checkbox';

const CheckboxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 200px;
  justify-items: left;
  margin-top: ${({ theme }) => theme.space.large};
  margin-bottom: ${({ theme }) => theme.space.xLarge};
  gap: 10px;
`;

const CheckboxPage = () => {
  return (
    <>
      <h1>Checkbox</h1>
      <CheckboxContainer>
        <Checkbox id="checkbox1" />
        <Checkbox id="checkbox2" checked />

        <Checkbox id="checkbox3" disabled />
        <Checkbox id="checkbox4" checked disabled />

        <Checkbox id="checkbox5">Label</Checkbox>
        <Checkbox id="checkbox6" checked >Label</Checkbox>

        <Checkbox id="checkbox7" disabled >Label</Checkbox>
        <Checkbox id="checkbox8" checked disabled >Label</Checkbox>
      </CheckboxContainer>
    </>
  )
}

export default CheckboxPage;
