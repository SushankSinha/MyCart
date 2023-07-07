import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer className="footer text-center">
      <hr />
      <div
        className="footer mx-2"
        style={{
          display: "inline-block",
          position: "sticky",
          bottom: "10px"
        }}
      >
        <FacebookIcon className="mx-2" />
        <InstagramIcon className="mx-2" />
        <TwitterIcon className="mx-2" />
        Copyright © {date}
      </div>
    </footer>
  );
}

export default Footer;
