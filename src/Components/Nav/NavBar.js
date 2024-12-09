import React, { useState } from "react";
import { Button } from "@mui/material";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import "../Nav/NavBar.css";

const NavList = [
  {
    key: "electronics",
    value: "Electronics",
    subCategories: [
      {
        key: "mobiles",
        value: "Mobiles",
        brands: ["Apple", "Samsung", "OnePlus", "Xiaomi", "Nokia"],
      },
      {
        key: "watches",
        value: "Watches",
        brands: ["Rolex", "Casio", "Fossil", "Apple Watch", "Fitbit"],
      },
      {
        key: "computers",
        value: "Computers",
        types: ["Laptops", "Desktops", "Tablets"],
      },
      {
        key: "gadgets",
        value: "Gadgets",
        items: ["iPod", "Smart Speakers", "Headphones"],
      },
    ],
  },
  {
    key: "TVAPPL",
    value: "TVs & Appliances",
    subCategories: [
      { key: "tvs", value: "Televisions", brands: ["LG", "Sony", "Samsung"] },
      {
        key: "refrigerators",
        value: "Refrigerators",
        brands: ["Whirlpool", "Samsung", "LG"],
      },
      {
        key: "washing-machines",
        value: "Washing Machines",
        brands: ["Bosch", "IFB", "LG"],
      },
    ],
  },
  {
    key: "men",
    value: "Men",
    subCategories: [
      {
        key: "clothing",
        value: "Clothing",
        types: ["Shirts", "T-Shirts", "Pants", "Jackets"],
      },
      {
        key: "footwear",
        value: "Footwear",
        types: ["Casual Shoes", "Formal Shoes", "Sports Shoes"],
      },
      {
        key: "accessories",
        value: "Accessories",
        types: ["Watches", "Belts", "Bags"],
      },
    ],
  },
  {
    key: "women",
    value: "Women",
    subCategories: [
      {
        key: "clothing",
        value: "Clothing",
        types: ["Dresses", "Tops", "Skirts", "Jeans"],
      },
      {
        key: "footwear",
        value: "Footwear",
        types: ["Flats", "Heels", "Sandals"],
      },
      {
        key: "accessories",
        value: "Accessories",
        types: ["Bags", "Jewelry", "Scarves"],
      },
    ],
  },
  {
    key: "babykids",
    value: "Baby & Kids",
    subCategories: [
      {
        key: "clothing",
        value: "Clothing",
        types: ["Boys", "Girls", "Unisex"],
      },
      {
        key: "toys",
        value: "Toys",
        types: ["Educational", "Outdoor", "Indoor"],
      },
      {
        key: "baby-care",
        value: "Baby Care",
        items: ["Diapers", "Wipes", "Lotions"],
      },
    ],
  },
  {
    key: "HOMEFURNIT",
    value: "Home & Furniture",
    subCategories: [
      {
        key: "furniture",
        value: "Furniture",
        types: ["Sofas", "Beds", "Tables"],
      },
      {
        key: "decor",
        value: "Home Decor",
        items: ["Wall Art", "Curtains", "Bedding"],
      },
      {
        key: "kitchen",
        value: "Kitchenware",
        items: ["Cookware", "Tableware", "Storage"],
      },
    ],
  },
  {
    key: "sports-books-more",
    value: "Sports, Books & More",
    subCategories: [
      {
        key: "sports",
        value: "Sports",
        items: ["Cricket", "Football", "Badminton"],
      },
      {
        key: "books",
        value: "Books",
        types: ["Fiction", "Non-Fiction", "Educational"],
      },
      {
        key: "fitness",
        value: "Fitness",
        items: ["Gym Equipment", "Yoga Mats", "Wearables"],
      },
    ],
  },
  {
    key: "automotive",
    value: "Automotive",
    subCategories: [
      {
        key: "accessories",
        value: "Accessories",
        items: ["Car Covers", "Floor Mats", "Seat Covers"],
      },
      {
        key: "spare-parts",
        value: "Spare Parts",
        types: ["Batteries", "Lights", "Brakes"],
      },
      {
        key: "tools",
        value: "Tools",
        items: ["Wrenches", "Jack Stands", "Diagnostic Tools"],
      },
    ],
  },
];

export default function NavBar() {
  const [listIndex, setListIndex] = useState(null);
  const [isOpenSelect, setIsOpenSelect] = useState(false);

  const handleDD = () => {
    setIsOpenSelect(!isOpenSelect);
  };

  return (
    <>
      <div className="nav d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-2">
              <Button>Browse All Categories</Button>
            </div>
            <div className="col-sm-10 navItems">
              {NavList &&
                NavList.map((item, index) => {
                  return (
                    <span
                      className="navItem"
                      onClick={handleDD}
                      onMouseEnter={() => {
                        setListIndex(index);
                      }}
                      onMouseLeave={() => {
                        setListIndex(index);
                      }}
                      key={index}
                    >
                      {item.value}
                      <span
                        className={`arrow ${
                          listIndex === index ? "up" : "down"
                        }`}
                      ></span>
                    </span>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      <ClickAwayListener
        onClickAway={() => {
          setIsOpenSelect(false);
          setListIndex(null);
        }}
      >
        <div className={listIndex !== null ? "listData" : ""}>
          {listIndex !== null &&
            NavList[listIndex]?.subCategories.map((subItem, subIndex) => {
              return (
                <div className="col-sm-2 listDataItem" key={subIndex}>
                  <div className="catgerory">{subItem.value}</div>
                  <ul>
                    {subItem.brands?.map((brand, brandIndex) => (
                      <li
                        key={brandIndex}
                        onClick={(e) => {
                          e.stopPropagation(); // Prevents ClickAwayListener from being triggered
                          setIsOpenSelect(false);
                        }}
                      >
                        {brand}
                      </li>
                    ))}
                    {subItem.types?.map((type, typeIndex) => (
                      <li
                        key={typeIndex}
                        onClick={(e) => {
                          e.stopPropagation(); // Prevents ClickAwayListener from being triggered
                          setIsOpenSelect(false);
                        }}
                      >
                        {type}
                      </li>
                    ))}
                    {subItem.items?.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        onClick={(e) => {
                          e.stopPropagation(); // Prevents ClickAwayListener from being triggered
                          setIsOpenSelect(false);
                        }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
        </div>
      </ClickAwayListener>
    </>
  );
}
