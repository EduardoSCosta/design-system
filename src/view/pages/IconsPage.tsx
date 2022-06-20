import styled from 'styled-components';
import { Icon } from '../components/Icon';

const IconsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 150px;
  justify-items: center;
  margin-top: ${({ theme }) => theme.space.large};
  margin-bottom: ${({ theme }) => theme.space.xLarge};
`;

const IconsPage = () => {
  return (
    <>
      <h1>Icons</h1>
      <IconsContainer>
        <Icon name='mail' width='20px' height='20px' />
        <Icon name='sync' width='20px' height='20px' />
        <Icon name='save' width='20px' height='20px' />
      </IconsContainer>
    </>
  )
}

export default IconsPage;
