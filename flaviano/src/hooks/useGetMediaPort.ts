import react from 'react';
import { MediaPort, ScreenSize } from '../../types';

const useGetMediaPort = (size: ScreenSize): MediaPort | undefined => {
  if (size.height > 860 && size.width > 850) return MediaPort.xtremeDesktop;
  if (size.height <= 860 && size.width > 850) return MediaPort.desktop;
  if (size.height > 680 && size.width <= 850) return MediaPort.mobile;
  if (size.height <= 680 && size.height > 400 && size.width <= 850) return MediaPort.mobileSmallHeight;
  if (size.height <= 400) return MediaPort.mobileHorizontal;
  return undefined;

}
export default useGetMediaPort;