import { connect } from "react-redux";
import { getServices } from "../../../store/services/thunks";
import ServicesRoutes from "./ServicesRoutes";

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

export default connect(mapStateToProps, mapDispatchToProps)(ServicesRoutes);
