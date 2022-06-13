import styled, { css } from 'styled-components';
import { ReactComponent as Mail } from '../../assets/icons/mail.svg';
import { ReactComponent as Save } from '../../assets/icons/save.svg';
import { ReactComponent as Sync } from '../../assets/icons/sync.svg';
import { Colors } from '../../theme';

interface IconProps {
  fill?: Colors;
  height?: string;
  width?: string;
}

interface IconsMapType {
  [key: string]: React.FC<React.SVGProps<SVGSVGElement>>;
}

const iconsMap : IconsMapType = {
  mail: Mail
}


const iconStyles = css<IconProps>`
  width: ${props => props.width};
  height: ${props => props.height};
  fill: ${props => props.fill ? props.theme.colors[props.fill] : 'currentColor'};
  `

const getComponent = (iconName: string) : React.FC<React.SVGProps<SVGSVGElement>> => {
  if(!iconsMap[iconName]) return iconsMap.mail;

  return iconsMap[iconName]
}

export const Icon = ({iconName}: {iconName : string}) => styled(iconsMap[iconName])<IconProps>`
  ${iconStyles}
`;

export const MailIcon = styled(Mail)<IconProps>`
  ${iconStyles}
`;

export const SaveIcon = styled(Save)<IconProps>`
  ${iconStyles}
`;

export const SyncIcon = styled(Sync)<IconProps>`
  ${iconStyles}
`;
