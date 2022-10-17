import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { type } from "@testing-library/user-event/dist/type";
import { BsXLg } from "react-icons/bs";
import "./Home.scss";

type HomeFormProps = {
  titleValue: any;
  priceValue: any;
  handleSubmit: any;
  handleTitleValue: any;
  handlePriceValue: any;
  toggle: any;
  visibility: any;
};

const HomeSearchForm: React.FunctionComponent<HomeFormProps> = (props) => (
  <div
    className={
      props.toggle ? "app__Home-textField" : "app__Home-textField-toggle"
    }
  >
    <div className={props.toggle ? "" : "app__search-visibility"}>
      <TextField
        className="app__search-value"
        value={props.titleValue}
        id="title"
        label="title"
        variant="standard"
        onChange={props.handleTitleValue}
      />
      <TextField
        className="app__search-value"
        value={props.priceValue}
        id="title"
        label="title"
        variant="standard"
        onChange={props.handlePriceValue}
      />
      <Button
        variant="outlined"
        onClick={() => props.handleSubmit()}
        className="app__search-button"
      >
        search
      </Button>
    </div>
    <div className="app__close-bg">
      <BsXLg 
        onClick={props.visibility} className="app__close-button" 
      />
    </div>
  </div>
);

export default HomeSearchForm;
