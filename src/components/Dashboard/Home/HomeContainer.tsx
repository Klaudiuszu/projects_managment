import Home from "./Home";
import axios from "axios";
import { useEffect, useState } from "react";
import { off } from "process";
import HomePostForm from "./HomePostForm";

const HomeContainer = () => {
  const [data, setData] = useState<any>([]);
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);

  const [title, setTitle] = useState("");

  const handleValue = (e:any) => {
    const newValue = e.target.value;
    console.log("new value:" +  newValue)
    setTitle(newValue);
}
const handleSubmit = () => {

  axios.post('https://api.escuelajs.co/api/v1/products', {
        "title": "string",
        "price": 100,
        "description": "string",
        "categoryId": 1,
        "images": [
          "string"
        ]
      })
      .then(function (response) {
        console.log(response);
      })
}


    //pagination start

    const rowCount = 10;

    const handlePrev = () => {
      if (offset === 0) return;
      setOffset(offset - limit);
    };
  
    const handleNext = () => {
      if (offset + limit > rowCount) return;
      setOffset(offset + limit);
    };
    //pagination end

  useEffect(() => {
    axios
      .get(
        `https://api.escuelajs.co/api/v1/products?limit=${limit}&offset=${offset}`
      )
      .then((response) => {
        const dataApi = response.data
        setData([...data, ...dataApi]);
      })
      .catch((error) => {
        console.log("error", error);
      });
  },[limit, offset]);

  console.log(data)

  return (
    <>
      <Home 
        data={data}
        handlePrev={handlePrev}
        handleNext={handleNext}
        offset={offset}
        />
      <HomePostForm 
        title={handleValue}
        handleSubmit={handleSubmit}
        handleValue={handleValue}
      />
    </>
  );
};

export default HomeContainer;
