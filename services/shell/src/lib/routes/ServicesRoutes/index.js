import { connect } from "react-redux";
import { getServices } from "../../../store/services/thunks";
import ServiceRoutes from "./ServiceRoutes";

const mapStateToProps = ({ services }) => {
  return {
    services
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getServices: () => {
      dispatch(getServices());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ServiceRoutes);
