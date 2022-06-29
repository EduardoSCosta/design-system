import styled from 'styled-components';
import { Checkbox } from '../components/Checkbox';

const CheckboxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  width: 50px;
  justify-items: left;
  margin-top: ${({ theme }) => theme.space.large};
  margin-bottom: ${({ theme }) => theme.space.xLarge};
`;

const CheckboxPage = () => {
  return (
    <>
      <h1>Checkbox</h1>
      <CheckboxContainer>
        <Checkbox id="checkbox1" checked={true} disabled={true}/>
        <Checkbox id="checkbox2">Label</Checkbox>
        <Checkbox id="checkbox3" />
      </CheckboxContainer>
    </>
  )
}

export default CheckboxPage;
