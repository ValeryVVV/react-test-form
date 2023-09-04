import React from "react";
import Burger from "./Burger/BurgerMenu";
import Menu from "./Menu/Menu";
import { Container } from "./HeaderStyled";
import logo from '../../images/icon.svg';
import image from '../../images/logo (7).svg';

const useOnClickOutside = (ref, handler) => {
    React.useEffect(() => {
      const listener = event => {
        if (!ref.current || ref.current.contains(event.target)) return;
        handler(event);
      };
      document.addEventListener("mousedown", listener);
  
      return () => {
        document.removeEventListener("mousedown", listener);
      };
    }, [ref, handler]);
  };

const Header = () => {
    const [open, setOpen] = React.useState(false);
    const node = React.useRef();
    useOnClickOutside(node, () => setOpen(false));
    return (
        <Container ref={node}>
            <img src={logo} alt="logo" width={24} height={24} />
            <img src={image} alt="logo" width='107px' height='35px' />

            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
        </Container>
    )
};

export default Header;
