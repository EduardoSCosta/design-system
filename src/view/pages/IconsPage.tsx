import styled from 'styled-components';
import { MailIcon, SaveIcon, SyncIcon } from '../components/Icon';

const IconsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: ${({ theme }) => theme.sizes[3]};
  margin: ${({ theme }) => theme.space[3]};
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
