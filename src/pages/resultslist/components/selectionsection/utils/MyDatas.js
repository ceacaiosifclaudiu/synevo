import CartIcon from "../icons/CartIcon";
import FaqIcon from "../icons/FaqIcon";
import BellIcon from "../icons/BellIcon";
import ChatIcon from "../icons/ChatIcon";
import SettingsIcon from "../icons/SettingsIcon.png";

const Image = (
  <img src={SettingsIcon} alt="SettingsIcon" style={{ width: "58px" }} />
);

const MyData = [
  {
    id: 1,
    titleBold: "Find",
    icon: <CartIcon />,
    title: " a test on our shop",
    footerText: "Easy and safe.",
  },
  {
    id: 2,
    titleBold: "FAQ",
    icon: <FaqIcon />,
    title: " our help center",
    footerText: "You will be informed",
  },
  {
    id: 3,
    titleBold: "Active",
    icon: <BellIcon />,
    title: " notifications",
    footerText: "You will be informed",
  },
  {
    id: 4,
    titleBold: "Manage",
    icon: Image,
    title: " your doctor access",
    footerText: "Entire family in one app",
    commingSoon: true,
  },
  {
    id: 5,
    titleBold: "Chat",
    icon: <ChatIcon />,
    title: " with the lab",
    footerText: "het in touch with our lab",
    commingSoon: true,
  },
];

export default MyData;
