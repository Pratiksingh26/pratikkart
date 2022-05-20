import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../../Redux/Products/action";
import MediaCard from "../Card/Card";
import { Link } from "react-router-dom";

export const Home = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((store) => store.data);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  return (
    <>
      <h1>PratikKart</h1>
      <div className="container">
        {data.map((e, index) => (
          <Link to={`/product/${e.id}`}>
            <MediaCard key={index.toString()} props={e} />
          </Link>
        ))}
      </div>
    </>
  );
};
