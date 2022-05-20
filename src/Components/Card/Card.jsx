import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./Card.css"

export default function MediaCard({props, addData}) {
  function myFunction (){
    alert("product added to your cart")
  }
  return (
    <div>
        <Card sx={{ maxWidth: 350 }}>
        <CardMedia
          component="img"
          height="150"
          image={props.image}
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" height={"71px"} margin={"5px"} overflow={'hidden'} component="div">
            {props.title}
          </Typography>
          <Typography gutterBottom variant="h6" color="text.primary" component="div">
            {props.category}
          </Typography>
          <Typography variant="body1" height={"100px"} overflow={'hidden'} color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={()=> addData(props)} onClickCapture={()=>myFunction()}>Add To Cart</Button>
          <Button size="small">Add To Wishlist</Button>
        </CardActions>
      </Card>
        </div>
  );
}