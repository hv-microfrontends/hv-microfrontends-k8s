import withStyles from "@material-ui/core/styles/withStyles";
import { connect } from "react-redux";
import styles from "./styles";
import Header from "./Header";

const mapStateToProps = ({ router }) => ({
  router
});

export default withStyles(styles, { name: "Header", withTheme: true })(
  connect(mapStateToProps)(Header)
);
