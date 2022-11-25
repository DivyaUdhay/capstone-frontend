import React, { useState, useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import catalog1 from "../images/catalog1.jpg";
import catalog2 from "../images/catalog2.jpg";
import catalog3 from "../images/catalog3.jpg";
import catalog4 from "../images/catalog4.jpg";
import catalog5 from "../images/catalog5.jpg";
import catalog6 from "../images/catalog6.jpg";
import catalog7 from "../images/catalog7.jpg";
import catalog8 from "../images/catalog8.jpg";
import catalog9 from "../images/catalog9.jpg";
import catalog10 from "../images/catalog10.jpg";
import { MyContext } from "../common";
import { useNavigate } from "react-router";
import all from "../images/allcatalog-catagories.jpg";
import men from "../images/mensclothing-catagories.jpg";
import women from "../images/womensclothing-catagories.jpg";
import kids from "../images/kidsclothing-catagories.jpg";
import mobiles from "../images/mobilecatalog-catagories.jpg";
import fresh from "../images/freshcatalog-catagories.jpg";
import home from "../images/homecatalog-catagories.jpg";
import beauty from "../images/beautycatalog-catagories.jpg";
import appliences from "../images/appliencescatalog-catagories.jpg";
import pharmacy from "../images/pharmacycatalog-catagories.jpg";
import toys from "../images/toyscatalog-catagories.jpg"

export let item = [
  {
    id: "1",
    img: catalog1,
    name: "Pearl Fashionable Top WOMENS",
    price: "50.38",
    description:
      "Pearl Fashionable,There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
  },
  {
    id: "2",
    img: catalog2,
    name: "OTUS Men's Slim Fit T-shirts...",
    price: "80.4",
    description:
      "OTUS Men's,There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
  },
  {
    id: "3",
    img: catalog3,
    name: "Wishing Rack Full Sleeve KIDS",
    price: "54.8",
    description:
      "Wishing Rack,There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or",
  },
  {
    id: "4",
    img: catalog4,
    name: "OnePlus Nord CE 2 Lite 5G MOBILES",
    price: "2899",
    description:
      "ONE PLUS,There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or",
  },
  {
    id: "5",
    img: catalog5,
    name: "Surf Excel Matic FRESH products",
    price: "10.5",
    description:
      "Surf Excel,There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or",
  },
  {
    id: "6",
    img: catalog6,
    name: "Adorable HOME decor products for people",
    price: "15.0",
    description:
      "Home decor,There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or",
  },
  {
    id: "7",
    img: catalog7,
    name: "LAKME COMBO Best BEAUTY products",
    price: "9.0",
    description:
      "Beauty,products,There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or",
  },
  {
    id: "8",
    img: catalog8,
    name: "IFB washing machine home APPLIENCES",
    price: "5000",
    description:
      "IFB wahing machine,There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
  },
  {
    id: "9",
    img: catalog9,
    name: "volini pain relief spary PHARMACY",
    price: "272",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or",
  },
  {
    id: "10",
    img: catalog10,
    name: "Colorful TOYS for both boys&girls",
    price: "252",
    description:
      "TOYS,There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or",
  },
];
export function Menu() {
  const [itearray, setitearr] = useState(item);
  const [sorted, setsorted] = useState(item);
  const { order, setorder } = useContext(MyContext);
  const navigate = useNavigate();
  const sorting = (Catagories) => {
    if (Catagories == "") {
      setsorted(item);
    } else {
      var items = item.filter((data) => data.name.includes(Catagories));
      setsorted(items);
    }
  };

  return (
    <>
      <div className="menu_nav">
        <nav className="uk-navbar-container" uk-navbar>
          <div class="uk-navbar-center">
            <ul class="uk-navbar-nav">
              <li class="uk-active" onClick={() => sorting("")}>
                <img className="sample" src={all} />
                <a>All</a>
              </li>
              <li class="uk-parent" onClick={() => sorting("Men's")}>
                <img className="sample" src={men} />
                <div>Mens</div>
              </li>
              <li class="uk-parent" onClick={() => sorting("WOMENS")}>
                <img className="sample" src={women} />
                <div>Womens</div>
              </li>
              <li class="uk-parent" onClick={() => sorting("KIDS")}>
                <img className="sample" src={kids} />
                <div>Kids</div>
              </li>
              <li class="uk-parent" onClick={() => sorting("MOBILES")}>
                <img className="sample" src={mobiles} />
                <div>Mobiles</div>
              </li>
              <li class="uk-parent" onClick={() => sorting("FRESH")}>
                <img className="sample" src={fresh} />
                <div>Fresh</div>
              </li>
              <li class="uk-parent" onClick={() => sorting("HOME")}>
                <img className="sample" src={home} />
                <div>Home</div>
              </li>
              <li class="uk-parent" onClick={() => sorting("BEAUTY")}>
                <img className="sample" src={beauty} />
                <div>Beauty</div>
              </li>
              <li class="uk-parent" onClick={() => sorting("APPLIENCES")}>
                <img className="sample" src={appliences} />
                <div>Appliences</div>
              </li>
              <li class="uk-parent" onClick={() => sorting("PHARMACY")}>
                <img className="sample" src={pharmacy} />
                <div>Pharmacy</div>
              </li>
              <li class="uk-parent" onClick={() => sorting("TOYS")}>
                <img className="sample" src={toys} />
                <div>Books,Toys</div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="item_list row">
        {sorted.map((data) => (
          <Card sx={{ maxWidth: 345 }} className="col-lg-4">
            <CardMedia
              margin-Top="10"
              component="img"
              height="100"
              object-fit="cover"
              image={data.img}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {data.name}
              </Typography>

              <Typography>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
              </Typography>

              <Typography gutterBottom variant="h4" component="div">
                ${data.price}
              </Typography>

              <Typography
                className="price"
                variant="body2"
                color="text.secondary"
              >
                {data.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                className="b"
                size="small"
                onClick={() => navigate("/OrderItem/" + data.id)}
              >
                View
              </Button>
              <Button size="small" onClick={() => setorder([...order, data])}>
                Add to card
              </Button>

              <Button size="small">Share</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </>
  );
}
