import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationIcon from "@mui/icons-material/Notifications";
import ProfileIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Mail";

export const AppBarComponent = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar sx={{ boxShadow: 5, bgcolor: "black" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography sx={{ fontSize: 15, flexGrow: 1 }} letterSpacing={1}>
            Asset Management
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap={4}
          >
            <Badge sx={{ cursor: "pointer" }} badgeContent={12} color="error">
              <NotificationIcon />
            </Badge>
            <Badge sx={{ cursor: "pointer" }} badgeContent={2} color="error">
              <EmailIcon />
            </Badge>
            <Badge sx={{ cursor: "pointer" }} badgeContent={17} color="error">
              <ProfileIcon />
            </Badge>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
