import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { type } from "@testing-library/user-event/dist/type";
import "./Home.scss";

type HomeFormProps = {
  title: any;
  handleSubmit: any;
  handleValue: any;
};

const HomePostForm: React.FunctionComponent<HomeFormProps> = (props) => (
  <div className="app__Home-textField">
    <TextField
        value={props.title}
        id="title"
        label="title"
        variant="standard"
        onChange={props.handleValue}
    />
    <Button
      variant="outlined"
      onClick={() => props.handleSubmit()}
      className="app__LoginForm-button"
    >
      send
    </Button>
  </div>
);

export default HomePostForm;
