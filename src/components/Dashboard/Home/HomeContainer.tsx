import Home from "./Home";
import axios from "axios";
import { useEffect, useState } from "react";
import { off } from "process";
import HomeSearchForm from "./HomeSearchForm";

const HomeContainer = () => {
  const [data, setData] = useState<any>([]);
  const [filterData, setFilterData] = useState<any>([]);
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  
  const [searchObject, setSearchObject] = useState<any>({
    title: "",
    price: "",
  });




  const handleTitleValue = (e:any) => {
    const newValue = e.target.value;
    
    setSearchObject({...searchObject, title: newValue});

    setTitle(newValue);
}

const handlePriceValue = (e:any) => {
  const newValue = e.target.value;
  
  setSearchObject({...searchObject, price: newValue});

  setPrice(newValue);
}

const handleSubmit = () => {
  console.log(searchObject)  
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

  return (
    <>
      <Home 
        data={data}
        handlePrev={handlePrev}
        handleNext={handleNext}
        offset={offset}
        searchObject={searchObject}
        />
      <HomeSearchForm 
        titleValue={title}
        priceValue={price}
        handleSubmit={handleSubmit}
        handleTitleValue={handleTitleValue}
        handlePriceValue={handlePriceValue}
      />
    </>
  );
};

export default HomeContainer;
