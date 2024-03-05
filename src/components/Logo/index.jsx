import {Image, View} from 'react-native';
import {ContainerStyles, LogoStyles} from './styles';

export default function Logo({
  logo_width,
  logo_height,
  logo_color,
  container_flex,
  container_width,
  container_height,
}) {
  return (
    <View
      style={
        ContainerStyles(container_flex, container_width, container_height)
          .container
      }>
      <Image
        source={require('../../assets/FIPESearch_logo_white_transparent.png')}
        resizeMode="contain"
        style={LogoStyles(logo_width, logo_height, logo_color).logo}
      />
    </View>
  );
}
