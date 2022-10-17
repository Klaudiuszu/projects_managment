import { type } from "os";
import "./Home.scss";
//import Pagination from "react-bootstrap/Pagination";
import  Pagination  from '../Pagination/Pagination';
import Stack from '@mui/material/Stack';

type HomeProps = {
  filteredData: any;
  offset: number,
  searchObject: any,
};

const Home: React.FunctionComponent<HomeProps> = (props) => (
  <div className="app__Home">
    <div className="app__Home-wrapper">
      {props.filteredData.map((item: any) => (
        <div className="app__Home-card" key={`item-card-${item.id}`}>
          <div className="app__Home-content">
            <div className="app__Home-image">
                <img src={item.category.image} alt="image" />
            </div>
            <div className="app__Home-info">
                <h1>{item.category.name}</h1>
                <h2>price: {item.price}</h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Home;
