import styled from 'styled-components';
import { Button } from '../components/Button';
import { MailIcon } from '../components/Icon';

const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
  justify-items: center;
  margin-top: ${({ theme }) => theme.space.large};
  margin-bottom: ${({ theme }) => theme.space.xLarge};
`;

const ButtonsPage = () => {
  return (
    <>
      <h1>Buttons</h1>
      <ButtonsContainer>
        <Button variant='primary' size='large'>Button</Button>
        <Button variant='default' size='large'>Button</Button>
        <Button variant='dashed' size='large'>Button</Button>
        <Button variant='text' size='large'>Button</Button>
        <Button variant='link' size='large'>Button</Button>

        <Button variant='primary' size='large' disabled>Button</Button>
        <Button variant='default' size='large' disabled>Button</Button>
        <Button variant='dashed' size='large' disabled>Button</Button>
        <Button variant='text' size='large' disabled>Button</Button>
        <Button variant='link' size='large' disabled>Button</Button>

        <Button variant='primary' size='middle'>Button</Button>
        <Button variant='default' size='middle'>Button</Button>
        <Button variant='dashed' size='middle'>Button</Button>
        <Button variant='text' size='middle'>Button</Button>
        <Button variant='link' size='middle'>Button</Button>

        <Button variant='primary' size='middle' disabled>Button</Button>
        <Button variant='default' size='middle' disabled>Button</Button>
        <Button variant='dashed' size='middle' disabled>Button</Button>
        <Button variant='text' size='middle' disabled>Button</Button>
        <Button variant='link' size='middle' disabled>Button</Button>

        <Button variant='primary' size='small' >Button</Button>
        <Button variant='default' size='small' >Button</Button>
        <Button variant='dashed' size='small' >Button</Button>
        <Button variant='text' size='small' >Button</Button>
        <Button variant='link' size='small' >Button</Button>

        <Button variant='primary' size='small' disabled>Button</Button>
        <Button variant='default' size='small' disabled>Button</Button>
        <Button variant='dashed' size='small' disabled>Button</Button>
        <Button variant='text' size='small' disabled>Button</Button>
        <Button variant='link' size='small' disabled>Button</Button>
      </ButtonsContainer>

      <ButtonsContainer>
        <Button variant='primary' size='large'><MailIcon /> Button</Button>
        <Button variant='default' size='large'><MailIcon /> Button</Button>
        <Button variant='dashed' size='large'><MailIcon /> Button</Button>
        <Button variant='text' size='large'><MailIcon /> Button</Button>
        <Button variant='link' size='large'><MailIcon /> Button</Button>

        <Button variant='primary' size='large' disabled><MailIcon /> Button</Button>
        <Button variant='default' size='large' disabled><MailIcon /> Button</Button>
        <Button variant='dashed' size='large' disabled><MailIcon /> Button</Button>
        <Button variant='text' size='large' disabled><MailIcon /> Button</Button>
        <Button variant='link' size='large' disabled><MailIcon /> Button</Button>

        <Button variant='primary' size='middle'><MailIcon /> Button</Button>
        <Button variant='default' size='middle'><MailIcon /> Button</Button>
        <Button variant='dashed' size='middle'><MailIcon /> Button</Button>
        <Button variant='text' size='middle'><MailIcon /> Button</Button>
        <Button variant='link' size='middle'><MailIcon /> Button</Button>

        <Button variant='primary' size='middle' disabled><MailIcon /> Button</Button>
        <Button variant='default' size='middle' disabled><MailIcon /> Button</Button>
        <Button variant='dashed' size='middle' disabled><MailIcon /> Button</Button>
        <Button variant='text' size='middle' disabled><MailIcon /> Button</Button>
        <Button variant='link' size='middle' disabled><MailIcon /> Button</Button>

        <Button variant='primary' size='small' ><MailIcon /> Button</Button>
        <Button variant='default' size='small' ><MailIcon /> Button</Button>
        <Button variant='dashed' size='small' ><MailIcon /> Button</Button>
        <Button variant='text' size='small' ><MailIcon /> Button</Button>
        <Button variant='link' size='small' ><MailIcon /> Button</Button>

        <Button variant='primary' size='small' disabled><MailIcon /> Button</Button>
        <Button variant='default' size='small' disabled><MailIcon /> Button</Button>
        <Button variant='dashed' size='small' disabled><MailIcon /> Button</Button>
        <Button variant='text' size='small' disabled><MailIcon /> Button</Button>
        <Button variant='link' size='small' disabled><MailIcon /> Button</Button>
      </ButtonsContainer>

      <ButtonsContainer>
        <Button variant='primary' size='large'><MailIcon /> </Button>
        <Button variant='default' size='large'><MailIcon /> </Button>
        <Button variant='dashed' size='large'><MailIcon /> </Button>
        <Button variant='text' size='large'><MailIcon /> </Button>
        <Button variant='link' size='large'><MailIcon /> </Button>

        <Button variant='primary' size='large' disabled><MailIcon /> </Button>
        <Button variant='default' size='large' disabled><MailIcon /> </Button>
        <Button variant='dashed' size='large' disabled><MailIcon /> </Button>
        <Button variant='text' size='large' disabled><MailIcon /> </Button>
        <Button variant='link' size='large' disabled><MailIcon /> </Button>

        <Button variant='primary' size='middle'><MailIcon /> </Button>
        <Button variant='default' size='middle'><MailIcon /> </Button>
        <Button variant='dashed' size='middle'><MailIcon /> </Button>
        <Button variant='text' size='middle'><MailIcon /> </Button>
        <Button variant='link' size='middle'><MailIcon /> </Button>

        <Button variant='primary' size='middle' disabled><MailIcon /> </Button>
        <Button variant='default' size='middle' disabled><MailIcon /> </Button>
        <Button variant='dashed' size='middle' disabled><MailIcon /> </Button>
        <Button variant='text' size='middle' disabled><MailIcon /> </Button>
        <Button variant='link' size='middle' disabled><MailIcon /> </Button>

        <Button variant='primary' size='small' ><MailIcon /> </Button>
        <Button variant='default' size='small' ><MailIcon /> </Button>
        <Button variant='dashed' size='small' ><MailIcon /> </Button>
        <Button variant='text' size='small' ><MailIcon /> </Button>
        <Button variant='link' size='small' ><MailIcon /> </Button>

        <Button variant='primary' size='small' disabled><MailIcon /> </Button>
        <Button variant='default' size='small' disabled><MailIcon /> </Button>
        <Button variant='dashed' size='small' disabled><MailIcon /> </Button>
        <Button variant='text' size='small' disabled><MailIcon /> </Button>
        <Button variant='link' size='small' disabled><MailIcon /> </Button>
      </ButtonsContainer>
    </>
  )
}

export default ButtonsPage;
