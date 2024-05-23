import { Platform } from "../hooks/useGames";
import { Icon, HStack } from "@chakra-ui/react";
import {
  FaApple,
  FaAndroid,
  FaPlaystation,
  FaXbox,
  FaLinux,
  FaWindows,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendoswitch } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";


interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    mac: FaApple,
    linux: FaLinux,
    playstation: FaPlaystation,
    xbox: FaXbox,
    android: FaAndroid,
    nintendo: SiNintendoswitch,
    iphone: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <>
      <HStack spacing={1} marginTop={2}>
        {platforms.map((platform) => (
          <Icon as={iconMap[platform.slug]} key={platform.id} color='gray.400' />
        ))}
      </HStack>
    </>
  );
};

export default PlatformIconList;
