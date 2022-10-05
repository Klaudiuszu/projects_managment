import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { type } from "@testing-library/user-event/dist/type";
import "./Home.scss";

type HomeFormProps = {
  titleValue: any;
  priceValue: any;
  handleSubmit: any;
  handleTitleValue: any;
  handlePriceValue: any;
};

const HomeSearchForm: React.FunctionComponent<HomeFormProps> = (props) => (
  <div className="app__Home-textField">
    <TextField
        value={props.titleValue}
        id="title"
        label="title"
        variant="standard"
        onChange={props.handleTitleValue}
    />
    <TextField
        value={props.priceValue}
        id="title"
        label="title"
        variant="standard"
        onChange={props.handlePriceValue}
    />
    <Button
      variant="outlined"
      onClick={() => props.handleSubmit()}
      className="app__LoginForm-button"
    >
      search
    </Button>
  </div>
);

export default HomeSearchForm;
