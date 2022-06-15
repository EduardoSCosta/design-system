import styled from 'styled-components';
import { Button } from '../components/Button';
import { Icon } from '../components/Icon';

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
        <Button variant='primary' size='large' icon='mail'> Button</Button>
        <Button variant='default' size='large' icon='mail'> Button</Button>
        <Button variant='dashed' size='large' icon='mail'> Button</Button>
        <Button variant='text' size='large' icon='mail'> Button</Button>
        <Button variant='link' size='large' icon='mail'> Button</Button>

        <Button variant='primary' size='large' icon='mail' disabled> Button</Button>
        <Button variant='default' size='large' icon='mail' disabled> Button</Button>
        <Button variant='dashed' size='large' icon='mail' disabled> Button</Button>
        <Button variant='text' size='large' icon='mail' disabled> Button</Button>
        <Button variant='link' size='large' icon='mail' disabled> Button</Button>

        <Button variant='primary' size='middle' icon='mail'> Button</Button>
        <Button variant='default' size='middle' icon='mail'> Button</Button>
        <Button variant='dashed' size='middle' icon='mail'> Button</Button>
        <Button variant='text' size='middle' icon='mail'> Button</Button>
        <Button variant='link' size='middle' icon='mail'> Button</Button>

        <Button variant='primary' size='middle' icon='mail' disabled> Button</Button>
        <Button variant='default' size='middle' icon='mail' disabled> Button</Button>
        <Button variant='dashed' size='middle' icon='mail' disabled> Button</Button>
        <Button variant='text' size='middle' icon='mail' disabled> Button</Button>
        <Button variant='link' size='middle' icon='mail' disabled> Button</Button>

        <Button variant='primary' size='small'  icon='mail'> Button</Button>
        <Button variant='default' size='small'  icon='mail'> Button</Button>
        <Button variant='dashed' size='small'  icon='mail'> Button</Button>
        <Button variant='text' size='small'  icon='mail'> Button</Button>
        <Button variant='link' size='small'  icon='mail'> Button</Button>

        <Button variant='primary' size='small' icon='mail' disabled> Button</Button>
        <Button variant='default' size='small' icon='mail' disabled> Button</Button>
        <Button variant='dashed' size='small' icon='mail' disabled> Button</Button>
        <Button variant='text' size='small' icon='mail' disabled> Button</Button>
        <Button variant='link' size='small' icon='mail' disabled> Button</Button>
      </ButtonsContainer>

      <ButtonsContainer>
        <Button variant='primary' size='large' icon='mail'> </Button>
        <Button variant='default' size='large' icon='mail'> </Button>
        <Button variant='dashed' size='large' icon='mail'> </Button>
        <Button variant='text' size='large' icon='mail'> </Button>
        <Button variant='link' size='large' icon='mail'> </Button>

        <Button variant='primary' size='large' icon='mail' disabled> </Button>
        <Button variant='default' size='large' icon='mail' disabled> </Button>
        <Button variant='dashed' size='large' icon='mail' disabled> </Button>
        <Button variant='text' size='large' icon='mail' disabled> </Button>
        <Button variant='link' size='large' icon='mail' disabled> </Button>

        <Button variant='primary' size='middle' icon='mail'> </Button>
        <Button variant='default' size='middle' icon='mail'> </Button>
        <Button variant='dashed' size='middle' icon='mail'> </Button>
        <Button variant='text' size='middle' icon='mail'> </Button>
        <Button variant='link' size='middle' icon='mail'> </Button>

        <Button variant='primary' size='middle' icon='mail' disabled> </Button>
        <Button variant='default' size='middle' icon='mail' disabled> </Button>
        <Button variant='dashed' size='middle' icon='mail' disabled> </Button>
        <Button variant='text' size='middle' icon='mail' disabled> </Button>
        <Button variant='link' size='middle' icon='mail' disabled> </Button>

        <Button variant='primary' size='small'  icon='mail'> </Button>
        <Button variant='default' size='small'  icon='mail'> </Button>
        <Button variant='dashed' size='small'  icon='mail'> </Button>
        <Button variant='text' size='small'  icon='mail'> </Button>
        <Button variant='link' size='small'  icon='mail'> </Button>

        <Button variant='primary' size='small' icon='mail' disabled> </Button>
        <Button variant='default' size='small' icon='mail' disabled> </Button>
        <Button variant='dashed' size='small' icon='mail' disabled> </Button>
        <Button variant='text' size='small' icon='mail' disabled> </Button>
        <Button variant='link' size='small' icon='mail' disabled> </Button>
      </ButtonsContainer>
    </>
  )
}

export default ButtonsPage;
