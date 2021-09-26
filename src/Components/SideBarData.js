import HomeIcon from "@mui/icons-material/Home";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ChatIcon from "@mui/icons-material/Chat";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import CryptoSherk from "./CryptoSherk";

export const SideBarData = [
  {
    title: "Crypto Sherk",
    icon:<CryptoSherk/>,
  },
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/",
  },
  {
    title: "About us",
    icon: <ContactPageIcon />,
    link: "/aboutus",
  },
  {
    title: "Crypto",
    icon: <MonetizationOnIcon />,
    link: "/crypto",
  },
  {
    title: "Forum",
    icon: <ChatIcon />,
    link: "/forum",
  },
];
