import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles";
import StarshipsDetails from "./StarshipsDetails";

export default withStyles(styles, {
  name: "StarshipsDetails",
  withTheme: true
})(StarshipsDetails);
