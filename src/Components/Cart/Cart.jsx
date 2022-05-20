import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
export function Cart() {
  const [arr, setArr] = useState([]);

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
  function handleCount(id, val) {
    let obj = arr[id];
    let qty = obj.qty;
    if (val === -1 && qty === 1) return;
    if (qty > 0) {
      arr.splice(id, 1);
      axios
        .patch(`http://localhost:8080/cart/${obj.id}`, { qty: qty + val })
        .then(({ data }) => {
          arr.splice(id, 0, data);
          setArr([...arr]);
        });
    }
  }

  function handleDelete(id) {
    let obj = arr[id];
    arr.splice(id, 1);
    axios
      .delete(`http://localhost:8080/cart/${obj.id}`)
      .then(({ data }) => setArr([...arr]));
  }
  return (
    <>
      <h1>Cart</h1>
      
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
              <TableCell
                style={{ fontWeight: "bold", color: "rgb(237,230,219)" }}
                align="right"
              >
                delete{" "}
              </TableCell>
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
                <TableCell align="right">
                  <strong>{e.title}</strong>
                </TableCell>
                <TableCell align="right">
                  <strong>{e.price}</strong>
                </TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => handleCount(index, 1)}>
                      <AddShoppingCartIcon/>
                  </IconButton>
                  <span>
                    &nbsp;<strong>{e.qty}</strong>&nbsp;&nbsp;
                  </span>
                  <IconButton onClick={() => handleCount(index, -1)}>
                      <RemoveShoppingCartIcon/>
                  </IconButton>
                  
                </TableCell>
                <TableCell align="right">
                  <IconButton
                    align="right"
                    aria-label="delete"
                    onClick={() => handleDelete(index)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>

                <TableCell align="right">
                  <strong>{e.price * e.qty}</strong>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <h3>
          Total: ₹{arr.reduce((total, item) => total + item.price * item.qty, 0)}
        </h3>
      </TableContainer>
      <Link to={"/checkout"}>
        <Button variant="contained" color="primary">
          CHECKOUT
        </Button>
      </Link>
    </>
  );
}