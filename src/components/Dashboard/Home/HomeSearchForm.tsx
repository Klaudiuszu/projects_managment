import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { type } from "@testing-library/user-event/dist/type";
import { BsXLg } from "react-icons/bs";
import "./Home.scss";
import PostPrducts from "../PostProduct/PostProduct";

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
    <div className={props.toggle ? "app__field" : "app__search-visibility"}>
      <TextField
        value={props.titleValue}
        id="title"
        label="search by name"
        variant="outlined"
        onChange={props.handleTitleValue}
      />
      <TextField
        value={props.priceValue}
        id="title"
        label="search by price"
        variant="outlined"
        onChange={props.handlePriceValue}
      />
      <br></br>
      <br></br>
      <br></br>
      <Button
        variant="outlined"
        onClick={() => props.handleSubmit()}
        className="modal-button"
      >
        search
      </Button>
    </div>
    <div className="app__close-bg">
      <BsXLg onClick={props.visibility} className="app__close-button" />
    </div>
    <div className={props.toggle ? "" : "app__search-visibility"}>
    <PostPrducts />
    </div>
  </div>
);

export default HomeSearchForm;
