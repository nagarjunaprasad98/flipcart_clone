import React, { useState } from "react";
import "../DropDown/DropDown.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

export const DropDown = (props) => {
  const [isOpenSelect, setIsOpenSelect] = useState(false);
  const [selectValue, setSelectValue] = useState(props?.defaultValues);
  const [selectIndex, setSelectIndex] = useState("");
  const [listData] = useState(props?.list || []); // Keep original listData intact
  const [filteredList, setFilteredList] = useState(props?.list || []); // Separate state for filtered list

  const handleDD = () => {
    setIsOpenSelect(!isOpenSelect);
  };

  const handleList = (e) => {
    setSelectValue(e.target.innerText);
  };

  const handleLi = (index) => {
    setSelectIndex(index);
    setIsOpenSelect(false);
  };

  const filterlist = (ev) => {
    const value = ev.target.value.toLowerCase();

    // Filter the original list (listData)
    const filtered = listData.filter((item) =>
      item?.value?.toLowerCase().includes(value)
    );

    // Remove duplicates (optional step)
    const uniqueFiltered = filtered.filter(
      (item, index) => filtered.indexOf(item) === index
    );

    console.log("filtered", uniqueFiltered);
    setFilteredList(uniqueFiltered); // Update the filtered list state
  };
  return (
    <>
      <ClickAwayListener onClickAway={() => setIsOpenSelect(false)}>
        <div className="selectDrop cursor_pointer p-relative">
          {props?.iconFlag && (
            <LocationOnOutlinedIcon className="locationIcon" />
          )}
          <span className="openselect" onClick={handleDD}>
            <span className="">
              {" "}
              {selectValue.length > 15
                ? selectValue.substr(0, 15) + "..."
                : selectValue}
            </span>
            {isOpenSelect ? (
              <KeyboardArrowUpIcon className="arrow" />
            ) : (
              <KeyboardArrowDownIcon className="arrow" />
            )}
          </span>
          {isOpenSelect && (
            <div className="dropDown">
              <div className="searchField">
                <input type="text" onChange={(e) => filterlist(e)} />
              </div>
              <ul className="searchResult" onClick={handleList}>
                <li
                  key={0}
                  onClick={() => handleLi(0)}
                  className={`${selectIndex === 0 ? "active" : ""}`}
                >
                  {props.defaultValues}
                </li>
                {filteredList?.map((item, index) => {
                  return (
                    <li
                      key={index + 1}
                      onClick={() => handleLi(index + 1)}
                      className={`${selectIndex === index + 1 ? "active" : ""}`}
                    >
                      {item?.value}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </ClickAwayListener>
    </>
  );
};
