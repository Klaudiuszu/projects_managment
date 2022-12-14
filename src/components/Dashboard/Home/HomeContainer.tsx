import Home from "./Home";
import axios from "axios";
import { useEffect, useState } from "react";
import { off } from "process";
import HomeSearchForm from "./HomeSearchForm";
import Pagination from "../Pagination/Pagination";
import Stack from "@mui/material/Stack";
import { Next } from "react-bootstrap/esm/PageItem";
import PostPrducts from "../PostProduct/PostProduct";

const HomeContainer = () => {
  const [data, setData] = useState<any>([]);
  const [filteredData, setFilteredData] = useState<any>([]);
  const [limit, setLimit] = useState(9);
  const [offset, setOffset] = useState(0);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [searchObject, setSearchObject] = useState<any>({
    title: "",
    price: "",
  });

  const handleTitleValue = (e: any) => {
    const newValue = e.target.value;

    setSearchObject({ ...searchObject, title: newValue });

    setTitle(newValue);
  };

  const handlePriceValue = (e: any) => {
    const newValue = e.target.value;

    setSearchObject({ ...searchObject, price: newValue });

    setPrice(newValue);
  };

  const handleSubmit = async (e: any) => {
    const filteredAfterPrice = searchObject.price
      ? data.filter((item: any) => item.price === +searchObject.price)
      : data;

    const filteredAfterCategory = searchObject.title
      ? filteredAfterPrice.filter((item: any) =>
          item.category.name
            .toLowerCase()
            .includes(searchObject.title.toLowerCase())
        )
      : filteredAfterPrice;

    setFilteredData(filteredAfterCategory);
  };

  //pagination start

  const rowCount = 50;

  const handleNext = () => {
    if (offset + limit > rowCount) return;
    setOffset(offset + limit);
  };

  const handlePrev = () => {
    if (offset === 0) return;
    setOffset(offset - limit);
  };

  //pagination end

  //show and hide element

  const [toggle, setToggle] = useState(false);

  const visibilityElement = () => {
    setToggle(!toggle);
  };

  console.log(data);

  useEffect(() => {
    axios
      .get(
        `https://api.escuelajs.co/api/v1/products?limit=${limit}&offset=${offset}`
      )
      .then((response) => {
        const dataApi = response.data;
        setData(dataApi);
        setFilteredData(dataApi);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, [offset]);

  return (
    <div className="container">
      <HomeSearchForm
        titleValue={title}
        priceValue={price}
        handleSubmit={handleSubmit}
        handleTitleValue={handleTitleValue}
        handlePriceValue={handlePriceValue}
        visibility={visibilityElement}
        toggle={toggle}
      />

      <Home
        filteredData={filteredData}
        offset={offset}
        searchObject={searchObject}
      />
      <Pagination
        handleNext={handleNext}
        handlePrev={handlePrev}
        offset={offset}
        rowCount={rowCount}
      />
    </div>
  );
};

export default HomeContainer;
