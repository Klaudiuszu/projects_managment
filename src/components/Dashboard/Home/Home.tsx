import { type } from "os";
import "./Home.scss";
import Pagination from "react-bootstrap/Pagination";

type HomeProps = {
  data: any;
  handlePrev: any,
  offset: number,
  handleNext: any,
  searchObject: any,
};


const Home: React.FunctionComponent<HomeProps> = (props) => (
  <div className="app__Home">
    <div className="app__Home-wrapper">
      {props.data.filter((val: any) => {
        if(props.searchObject.title == "") {
          
          return val
        } else if(val.category.name.toLowerCase().includes(props.searchObject.title.toLowerCase())) {
          return val.title
        }
      })
      .map((item: any) => (
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
    <Pagination className="app-row">
        <Pagination.Prev onClick={props.handlePrev} />
        <Pagination.Item active>{Math.round(props.offset / 10 + 1)}</Pagination.Item>
        <Pagination.Next onClick={props.handleNext} />
      </Pagination>
  </div>
);

export default Home;
