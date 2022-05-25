import styled, { css } from 'styled-components';
import { ReactComponent as Mail } from '../../assets/icons/mail.svg';
import { ReactComponent as Save } from '../../assets/icons/save.svg';
import { ReactComponent as Sync } from '../../assets/icons/sync.svg';

interface IconProps {
  fill?: string;
  height?: string | number;
  width?: string | number;
}

const iconStyles = css<IconProps>`
  width: ${props => props.width};
  height: ${props => props.height};
  fill: ${props => props.fill};
`

export const MailIcon = styled(Mail)<IconProps>`
  ${iconStyles}
`;

export const SaveIcon = styled(Save)<IconProps>`
  ${iconStyles}
`;

export const SyncIcon = styled(Sync)<IconProps>`
  ${iconStyles}
`;
