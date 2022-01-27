import "./styles/styles.scss";

import * as React from "react";
import Card from "@mui/material/Card";
import PhoneIcon from "@mui/icons-material/Phone";
import Grid from "@mui/material/Grid";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  return (
    <div>
      {" "}
      <div id="wave"></div>
      <div className="footer">
        <h2 className="mt-4 footer-title">Още начини на свързване</h2>
        <Grid container className="m-0">
          <Grid
            item
            xs={12}
            md={12}
            lg={12}
            className="text-center footer-content"
          >
            <div className="m-4">
              <a
                href={`tel:0893023456`}
                className="d-flex align-items-center justify-content-center"
                style={{ color: "azure" }}
              >
                <PhoneIcon />
                <div className="mx-2">0893023456</div>
              </a>
            </div>
            <div className="m-4">
              <a
                style={{ color: "azure" }}
                href={`mailto:vik.mtdiev@gmail.com`}
                className="d-flex align-items-center justify-content-center"
              >
                <MailOutlineIcon />
                <div className="mx-2">mariyabeautyline@gmail.com</div>
              </a>
            </div>
            <div className="m-4">
              <div
                style={{ color: "azure" }}
                className="d-flex align-items-center justify-content-center"
              >
                <a
                  href="https://www.facebook.com/studiomaria.bg"
                  target="_blank"
                  style={{ color: "azure" }}
                  className="d-flex align-items-center justify-content-center"
                >
                  <FacebookIcon />
                  <div className="mx-2">Facebook Page</div>
                </a>
              </div>
            </div>
          </Grid>
          <Grid item xs={6} md={6} lg={6}></Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
