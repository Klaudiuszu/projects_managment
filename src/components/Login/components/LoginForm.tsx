import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { type } from "@testing-library/user-event/dist/type";
import "./LoginForm.scss";

type LoginFormProps = {
    nameValue: string;
    passValue: string;
    id?: string;
    label?: string;
    variant?: "standard";
    handleNameValue: any;
    handlePassValue: any;
    isValid: any;
    handleSubmit: any;
};

const LoginForm: React.FunctionComponent<LoginFormProps> = (props) => (
  <div className="app__Login">
    <div className="app__LoginForm">
      <TextField
        value={props.nameValue}
        id="name"
        label="name"
        variant="standard"
        onChange={props.handleNameValue}
        error={!props.isValid.name}
      />
      <br/>
      <br/>
      <br/>
      <br/>
      <TextField 
        value={props.passValue}
        id="password"
        label="password"
        variant="standard"
        onChange={props.handlePassValue}
        error={!props.isValid.password}
      />
      { !props.isValid.name && <div className="app__LoginForm-error-name">
        only latin letters!
      </div>}
      { !props.isValid.password && 
      <div className="app__LoginForm-error-password">
        "need valid A-Z and minimun one of 0-9 letter"
      </div> }
      <Button 
        variant="outlined" 
        onClick={() => props.handleSubmit()}
        className="app__LoginForm-button"
        >
        Login
        </Button>
    </div>
  </div>
);

export default LoginForm;
