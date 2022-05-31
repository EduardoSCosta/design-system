import styled from 'styled-components';
import { MailIcon, SaveIcon, SyncIcon } from '../components/Icon';

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
        <MailIcon />
        <SaveIcon />
        <SyncIcon />
      </IconsContainer>
    </>
  )
}

export default IconsPage;
