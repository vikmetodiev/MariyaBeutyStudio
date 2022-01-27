import "./styles/styles.scss";
import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";

const Header = () => {
  let NavbarArray = ["За нас", "Услуги", "Галерия", "Контакти"];

  // <Link underline="hover" key="1" color="inherit" href="/">
  //   MUI
  // </Link>,
  // <Link
  //   underline="hover"
  //   key="2"
  //   color="inherit"
  //   href="/getting-started/installation/"

  // >
  //   Core
  // </Link>,

  const scrollIntoView = (refName) => {
    const element = document.getElementById(refName);
    setTimeout(() => {
      window.scrollTo({
        behavior: element ? "smooth" : "auto",
        top: element.offsetTop,
      });
    }, 100);
  };

  return (
    <Stack spacing={2} className="header">
      <Breadcrumbs separator="" aria-label="breadcrumb" className="epic-bg">
        <img
          src="logo.svg"
          className="logo"
          onClick={() => scrollIntoView("item")}
        />
        {NavbarArray.map((componentName, i) => {
          return (
            <Link key={i} onClick={() => scrollIntoView("item-" + i)}>
              {componentName}
            </Link>
          );
        })}
        {/* <Link>{"Език"}</Link> */}
      </Breadcrumbs>
    </Stack>
  );
};
export default Header;
