import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} p="10px">
      <Image src={logo} alt="" boxSize={"60px"}></Image>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
