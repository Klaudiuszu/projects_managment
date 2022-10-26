import React from "react";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";

import Pagination from "react-bootstrap/Pagination";

import "./HomeTest.scss";

function Home() {
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);
  const [productList, setProductLIst] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      let response: any;

      try {
        response = await axios.get(
          `https://api.escuelajs.co/api/v1/products?limit=${limit}&offset=${offset}`
        );

        setProductLIst(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProducts();
  }, [limit, offset]);

  //pagination start

  const rowCount = 100;

  const handlePrev = () => {
    if (offset === 0) return;
    setOffset(offset - limit);
  };

  const handleNext = () => {
    if (offset + limit > rowCount) return;
    setOffset(offset + limit);
  };

  //pagination end

  // add product start

    const [name, setName] = useState<any>("");
    const [description, setDescription] = useState<any>("");

    const formData = new FormData();
    formData.append("name", name);

    let result =  fetch("https://api.escuelajs.co/api/v1/products", {
      method: 'POST',
      body: formData
    });

    console.log(productList)
    
  // add product end

  return (
    <div className="app__Home">
      <div className="app__Home-panel"></div>
      <div className="app__Home-content">
        {productList.map((item) => (
          <div className="app__Home-card">
            <div className="app__Home-img">
              <img src={item.category.image} />
            </div>
            <div className="app__Home-info">
              <h1>{item.category.name}</h1>
              <p>{item.description}</p>
            </div>
            <button>Add</button>
          </div>
        ))}
      </div>
      <Pagination className="app-row">
        <Pagination.Prev onClick={handlePrev} />
        <Pagination.Item active>{Math.round(offset / 10 + 1)}</Pagination.Item>
        <Pagination.Next onClick={handleNext} />
      </Pagination>
      
      <div className="app__home-add_field">
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        ></input>
          <input
          type="text"
          placeholder="name"
        ></input>
        <button>Add product</button>
      </div>
    </div>
  );
}

export default Home;
