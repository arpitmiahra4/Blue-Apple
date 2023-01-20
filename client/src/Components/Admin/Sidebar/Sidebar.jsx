import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import InventoryIcon from "@mui/icons-material/Inventory";
import GroupIcon from "@mui/icons-material/Group";
import ReviewsIcon from "@mui/icons-material/Reviews";
import AddBoxIcon from "@mui/icons-material/AddBox";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { Link } from "react-router-dom";
import styles from "../../../Styles/Admin.module.css";
const navMenu = [
  {
    icon: <EqualizerIcon />,
    label: "Dashboard",
    ref: "/admin",
  },
  {
    icon: <ShoppingBagIcon />,
    label: "Orders",
    ref: "/ordertable",
  },
  {
    icon: <InventoryIcon />,
    label: "Products",
    ref: "/productTable",
  },
  {
    icon: <AddBoxIcon />,
    label: "Add Product",
    ref: "/newProduct",
  },
  {
    icon: <GroupIcon />,
    label: "Users",
    ref: "/usertable",
  },
  {
    icon: <ReviewsIcon />,
    label: "Reviews",
    ref: "/reviewsTable",
  },
  {
    icon: <AccountBoxIcon />,
    label: "My Profile",
    ref: "/myProfile",
  },
  {
    icon: <LogoutIcon />,
    label: "Logout",
  },
];

const Sidebar = () => {
  return (
    <>
      <Box borderRadius={10}>
        <Image
          src="https://cloudfront-us-east-2.images.arcpublishing.com/reuters/O6SXYTO4WFPLJPIHA4VD4ABLAU.jpg"
          borderRadius={10}
        />
        <Box mt={"5%"}>
          {navMenu &&
            navMenu.map((el, i) => (
              <Box
                key={i}
                mt="4%"
                w={"90%"}
                ml={"5%"}
                mr={"5%"}
                className={styles.admin_bar}
              >
                <Link to={el.ref}>
                  <Flex gap={10} pl={"10%"}>
                    <Box color={"#a08615"}>{el.icon}</Box>
                    <Text fontSize={20} color="#f8e68a" fontWeight={"bold"}>
                      {el.label}
                    </Text>
                  </Flex>
                </Link>
              </Box>
            ))}
        </Box>
      </Box>
    </>
  );
};

export default Sidebar;
