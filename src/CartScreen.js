import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { RemovFromCart } from "./actions";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, IconButton, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const CartScreen = () => {
  const login = useSelector((state) => state.userSignin);
  const { userInfo } = login;
  const { cartItems } = useSelector((state) => state.cart);

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(RemovFromCart());
    let items = 0;
    let price = 0;
    cartItems.forEach((item) => {
      items += item.count;
      price += item.count * item.price;
    });
    setTotalItems(items);
    setTotalPrice(price);
  }, [
    totalItems,
    totalPrice,
    setTotalItems,
    setTotalPrice,
    cartItems,
    RemovFromCart
  ]);

  // ui
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14
    }
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0
    }
  }));

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9)
  ];

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>name</StyledTableCell>
              <StyledTableCell align="right">brand</StyledTableCell>
              <StyledTableCell align="right">namber</StyledTableCell>
              <StyledTableCell align="right">price</StyledTableCell>
              <StyledTableCell align="right">totol</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartItems.map((item, index) => (
              <StyledTableRow key={item.name}>
                <StyledTableCell component="th" scope="row">
                  {item.name}
                </StyledTableCell>
                <StyledTableCell align="right">{item.brand}</StyledTableCell>
                <StyledTableCell align="right">{item.count}</StyledTableCell>
                <StyledTableCell align="right">{item.price}</StyledTableCell>
                <StyledTableCell align="right">
                  {" "}
                  <IconButton
                    onClick={() => dispatch(RemovFromCart(cartItems))}
                    aria-label="delete"
                  >
                    <DeleteIcon />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
            <p>${totalPrice}</p>
            <Stack direction="row" spacing={2}>
              <Link to={"/shopadders"}>
                <Button variant="contained" color="success">
                  Success
                </Button>
              </Link>
            </Stack>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default CartScreen;
