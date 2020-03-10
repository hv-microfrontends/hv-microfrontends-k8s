/**
 * Copyright (c) 2019 Hitachi Vantara Corporation.
 *
 *  The copyright to the computer software herein is the property of
 *  Hitachi Vantara Corporation. The software may be used and/or copied only
 *  with the written permission of Hitachi Vantara Corporation or in accordance
 *  with the terms and conditions stipulated in the agreement/contract
 *  under which the software has been supplied.
 */

import React from "react";
import HvTypography from "@hv/uikit-react-core/dist/Typography";
import HvGrid from "@hv/uikit-react-core/dist/Grid";
import { AssetInventory } from "../../components/overview";
import withLayout from "../../lib/hocs/withLayout";

const Overview = ({ classes }) => {
  return (
    <HvGrid container>
      <HvGrid item xl={12}>
        <HvTypography variant="3xlTitle" className={classes.title}>
          Overview
        </HvTypography>
      </HvGrid>
      <HvGrid item xl={12}>
        <AssetInventory />
      </HvGrid>
    </HvGrid>
  );
};

export default withLayout(Overview);
