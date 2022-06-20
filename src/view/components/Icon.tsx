import styled, { css } from 'styled-components';
import { ReactComponent as Mail } from '../../assets/icons/mail.svg';
import { ReactComponent as Save } from '../../assets/icons/save.svg';
import { ReactComponent as Sync } from '../../assets/icons/sync.svg';
import { Colors } from '../../theme';

const iconsMap = {
  mail: Mail,
  save: Save,
  sync: Sync
}

export type Icons = keyof typeof iconsMap;

interface IconProps {
  fill?: Colors;
  height?: string;
  width?: string;
  name: Icons;
}

const iconStyles = css<IconProps>`
  width: ${props => props.width};
  height: ${props => props.height};
  fill: ${props => props.fill ? props.theme.colors[props.fill] : 'currentColor'};
  `



const getStyledIcon = (iconName: Icons) => styled(iconsMap[iconName])<IconProps>`
      ${iconStyles}
    `;

export const Icon = ({ name, fill, height, width }: IconProps) => {
  const StyledIcon = getStyledIcon(name);

  return <StyledIcon name={name} fill={fill} height={height} width={width}></StyledIcon>
};
