import React from "react";
import HvTypography from "@hv/uikit-react-core/dist/Typography";

const NotFound = ({ classes }) => {
  return (
    <HvTypography variant="3xlTitle" className={classes.title}>
      Not found
    </HvTypography>
  );
};

export default NotFound;
