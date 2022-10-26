import TextField from "@mui/material/TextField";
import {
  TextareaAutosize,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
} from "@mui/material";
import Button from "@mui/material/Button";

type PostContainer = {
  setTitle: any;
  setPrice: any;
  handleSubmit: any;
  setDescription: any;
  setCategoryId: any;
};

const PostContainer: React.FunctionComponent<PostContainer> = (props) => (
  <div className="app__postContainer">
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Title</InputLabel>
      <Select 
        labelId="demo-simple-select-label"  
        id="demo-simple-select">

            <MenuItem value="Shoes">Shoes</MenuItem>
            <MenuItem value="Electronics">Electronics</MenuItem>
            <MenuItem value="Furniture">Furniture</MenuItem>
            <MenuItem value="Others">Others</MenuItem>
      </Select>
      <TextField
        id="outlined-basic"
        label="title"
        variant="outlined"
        onChange={(e) => props.setTitle(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="price"
        variant="outlined"
        type="number"
        onChange={(e) => props.setPrice(e.target.value)}
      />
      <TextField
        id="standard-multiline-static"
        label="describle"
        multiline
        rows={4}
        onChange={(e) => props.setDescription(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="categoryId"
        variant="outlined"
        type="number"
        onChange={(e) => props.setCategoryId(e.target.value)}
      />
      <Button className="app__post-button" onClick={props.handleSubmit}>
        SEND
      </Button>
    </FormControl>
  </div>
);

export default PostContainer;
