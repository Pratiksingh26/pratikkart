import React from 'react'
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import "./Checkout.css"

export const Checkout=()=> {
    const [arr, setArr] = useState([]);

    const { id } = useParams();
    const dispatch = useDispatch();
    const [total, setTotal] = useState([])
  
    useEffect(() => {
      getData();
    }, []);
  
   
    
    function getData() {
      axios
        .get("http://localhost:8080/cart")
        .then(({ data }) => {
          setArr(data);
        })
        .catch((err) => console.log(err));
    }
  return <>
    <h1>Checkout Page</h1>
    <TableContainer
        component={Paper}
        style={{ width: "95%", margin: "auto", marginTop: "50px" }}
      >
        <Table
          style={{ cursor: "pointer" }}
          sx={{ minWidth: 650 }}
          aria-label="caption table"
        >
          <TableHead
            style={{
              background: "black",
              color: "white",
              fontWeight: "bold",
            }}
          >
            <TableRow>
              <TableCell
                style={{ fontWeight: "bold", color: "rgb(237,230,219)" }}
              >
                Image
              </TableCell>
              <TableCell
                style={{ fontWeight: "bold", color: "rgb(237,230,219)" }}
                align="right"
              >
                Title
              </TableCell>
              <TableCell
                style={{ fontWeight: "bold", color: "rgb(237,230,219)" }}
                align="right"
              >
                Price
              </TableCell>
              <TableCell
                style={{ fontWeight: "bold", color: "rgb(237,230,219)" }}
                align="right"
              >
                quantity
              </TableCell>
              {/* <TableCell
                style={{ fontWeight: "bold", color: "rgb(237,230,219)" }}
                align="right"
              >
                delete{" "}
              </TableCell> */}
              <TableCell
                style={{ fontWeight: "bold", color: "rgb(237,230,219)" }}
                align="right"
              >
                TOTAL
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {arr.map((e, index) => (
              <TableRow key={e.id}>
                <TableCell component="th" scope="row">
                  {/* {singleData.image} */}
                  <img
                    className="image"
                    src={e.image}
                    alt="#"
                    height={"150px"}
                    width={"200px"}
                  />
                  
                </TableCell>
                <TableCell align="right"><strong>{e.title}</strong></TableCell>
                <TableCell align="right"><strong>{Math.floor(e.price)}</strong></TableCell>
                <TableCell align="right">
                  <strong>{e.qty}</strong>
                </TableCell>
                <TableCell align="right">
                  <strong>{Math.floor(e.price * e.qty)}</strong>
                </TableCell>
              </TableRow>
            ))}
            <h2>
          Total: ₹{arr.reduce((total, item) => total + item.price * item.qty, 0)}
        </h2>
          </TableBody>
        </Table><br />
        <Link to={"/address"}><Button variant="contained" color="primary">PROCEED AHEAD</Button></Link>
        <Link to={"/cart"}>&nbsp;&nbsp;
    <Button variant="contained" color="primary">EDIT TO YOUR CART</Button></Link><br/>
      </TableContainer><br /><br />
  </>
}

// export default Checkout