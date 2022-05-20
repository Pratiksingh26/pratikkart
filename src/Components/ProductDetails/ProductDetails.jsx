import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { getData } from "../../Redux/Products/action";
import MediaCard from "../Card/Card";
import axios from "axios";

export const ProductDetails = () => {
  let { id } = useParams();
  id = +id;
  const dispatch = useDispatch();
  const [qty, setQty] = useState({ qty: 1 });
//   const [obj, setObj] = useState({});
  const { data } = useSelector((store) => store.data);
//   useEffect(()=>{
//       setObj(data[id-1])
//   },[])
//   console.log(obj)
  function addData(obj) {
    axios
      .post("http://localhost:8080/cart", {...obj, ...qty })
      .then(() => {
        console.log("Data has been added");
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  function myFunction (){
    alert("product added to your cart")
  }
  return (
    <>
      <h1>Product Details Page</h1>
      <div className="container">
        {data.map((e, index) =>
          e.id === id ? (
            <MediaCard key={index.toString()} addData={addData} props={e} />
          ) : (
            <></>
          )
        )}
      </div>
    </>
  );
};
