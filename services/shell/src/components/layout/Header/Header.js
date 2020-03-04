import React from "react";
import { useHistory } from "react-router-dom";
import HvHeader, {
  HvHeaderBrand,
  HvHeaderActions,
  HvHeaderNavigation
} from "@hv/uikit-react-core/dist/NewHeader";
import { navigation } from "@hv/utils";
import HvButton from "@hv/uikit-react-core/dist/Button";
import User from "@hv/uikit-react-icons/dist/Generic/User";
import HitachiLogo from "../../../assets/hitachi-logo.svg";

const boxStyles = {
  width: 32,
  height: 32
};

const navigationData = [
  {
    id: "1",
    label: "People",
    path: "/people"
  },
  {
    id: "2",
    label: "Starships",
    path: "/starships"
  },
  {
    id: "3",
    label: "Dummy",
    path: "/dummy"
  }
];

const Header = ({ router }) => {
  const history = useHistory();
  const { pathname } = router.location;
  const selection = navigation.getSelected(navigationData, pathname);

  const handleChange = (evt, selectedItem) => {
    if (selectedItem.path) history.push(selectedItem.path);
  };

  return (
    <HvHeader position="relative">
      <HvHeaderBrand
        logo={<HitachiLogo width="70px" height="25px" />}
        name="Micro Frontends"
      />
      {
        <HvHeaderNavigation
          data={navigationData}
          selected={selection.id}
          onClick={handleChange}
        />
      }
      {
        <HvHeaderActions>
          <HvButton category="icon">
            <User boxStyles={boxStyles} />
          </HvButton>
        </HvHeaderActions>
      }
    </HvHeader>
  );
};

export default Header;
