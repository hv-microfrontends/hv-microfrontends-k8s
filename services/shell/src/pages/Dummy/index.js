import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles";
import Dummy from "./Dummy";

export default withStyles(styles, { name: "Dummy", withTheme: true })(Dummy);
