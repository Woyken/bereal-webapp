import AppBar from "@suid/material/AppBar";
import Toolbar from "@suid/material/Toolbar";
import Typography from "@suid/material/Typography";
import { PropsWithClass } from "../utils/propsWithClass";

const Header = (props: PropsWithClass) => {
  return (
    <AppBar class={props.class} position="static">
      <Toolbar>
        <Typography
          variant="h5"
          component="div"
          flexGrow={1}
          textAlign="center"
        >
          BeReal - Web
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
