import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles";
import Starships from "./Starships";

export default withStyles(styles, { name: "Starships", withTheme: true })(Starships);
