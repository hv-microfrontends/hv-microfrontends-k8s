import React from "react";
import HvTypography from "@hv/uikit-react-core/dist/Typography";
import withLayout from "../../lib/hocs/withLayout";

const Dummy = ({ classes }) => {
  return (
    <HvTypography variant="3xlTitle" className={classes.title}>
      Dummy
    </HvTypography>
  );
};

export default withLayout(Dummy);
