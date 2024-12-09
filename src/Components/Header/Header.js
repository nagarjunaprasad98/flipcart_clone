import React, { useEffect, useState } from "react";
import "../Header/Header.css";
import HeaderLogo from "./Images/HeaderLogo.svg";
import ManageSearchOutlinedIcon from "@mui/icons-material/ManageSearchOutlined";
import { DropDown } from "../DropDown/DropDown";
import { categories } from "../../JSON/HeaderJSON";
import { getAPI } from "../../FetchCalls/HeaderCall";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
import { Button } from "@mui/material";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import MyLocationOutlinedIcon from "@mui/icons-material/MyLocationOutlined";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import RedeemOutlinedIcon from "@mui/icons-material/RedeemOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import { sortAlphabetical } from "../../Utills/CommonUtils";
import NavBar from "../Nav/NavBar";

export const Header = () => {
  const [countriesList, setCountriesList] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  const getCountries = async () => {
    try {
      const response = await getAPI(
        "https://restcountries.com/v3.1/all",
        "GET",
        {}
      );
      if (response && response.data) {
        const transformedData = response.data.map((itm) => ({
          key: itm?.cca2,
          value: itm?.name?.common,
        }));
        console.log("API Data:", transformedData); // Log data to check
        setCountriesList(sortAlphabetical(transformedData));
      }
    } catch (error) {
      console.error("Error fetching countries:", error); // Error logging
    } finally {
      setLoading(false); // Set loading to false once the data is fetched
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="row">
            {/* logo */}
            <div className="col-sm-2">
              <img src={HeaderLogo} alt="Header Logo" />
            </div>

            {/* search bar */}
            <div className="col-sm-5">
              <div className="headerSearch d-flex align-items-center">
                {/* List Box */}
                <DropDown
                  iconFlag={false}
                  list={categories}
                  dropKey={"KEYVALUE"}
                  defaultValues={"All Categories"}
                />

                {/* input */}
                <div className="search">
                  <input type="text" placeholder="Search Items..." />
                  <ManageSearchOutlinedIcon className="searchIcon cursor_pointer" />
                </div>
              </div>
            </div>

            {/* location dropdown */}
            <div className="col-sm-2 d-flex align-items-center">
              <div className="CCList">
                {loading ? (
                  <p>Loading...</p> // Show loading text while fetching data
                ) : (
                  <DropDown
                    iconFlag={true}
                    list={countriesList}
                    dropKey={"COUNTRY"}
                    defaultValues={"Your Location"}
                  />
                )}
              </div>
            </div>

            {/* more and cart */}
            <div className="col-sm-2 d-flex align-items-center justify-content-around">
              <div className="list-inline-item p-relative moreParent">
                <ManageAccountsOutlinedIcon className="iconManageAcc" />
                <span className="more">More</span>
                <ul className="menu">
                  <li>
                    <Button>
                      <Person2OutlinedIcon className="icon" />
                      My Account
                    </Button>
                  </li>
                  <li>
                    <Button>
                      <MyLocationOutlinedIcon className="icon" />
                      Order Tracking
                    </Button>
                  </li>
                  <li>
                    <Button>
                      <CurrencyExchangeOutlinedIcon className="icon" />
                      Refer & Earn
                    </Button>
                  </li>
                  <li>
                    <Button>
                      <RedeemOutlinedIcon className="icon" />
                      Vouchers & cash back
                    </Button>
                  </li>
                  <li>
                    <Button>
                      <SettingsSuggestOutlinedIcon className="icon" />
                      Settings
                    </Button>
                  </li>
                  <li>
                    <Button>
                      <LogoutOutlinedIcon className="icon" />
                      Sign out
                    </Button>
                  </li>
                </ul>
              </div>
              <div className="list-inline-item">
                <Badge badgeContent={8767} color="primary">
                  <ShoppingCartOutlinedIcon className="iconStore" />
                </Badge>
                <span className="cart">Cart</span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <NavBar />
    </>
  );
};
