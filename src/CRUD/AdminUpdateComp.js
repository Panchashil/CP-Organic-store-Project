import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const AdminUpdateComp = ({selectedIndex}) => {
  const { id } = useParams();
  const nav = useNavigate();
  const [itemData, setItemData] = useState({
    foodName: "",
    foodItems: [],
  });

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    const [key, index, field] = name.split(".");
    if (key === "foodItems") {
      setItemData((prevState) => ({
        ...prevState,
        foodItems: prevState.foodItems.map((item, i) =>
          i === Number(index) ? { ...item, [field]: value } : item
        ),
      }));
    } else {
      setItemData({
        ...itemData,
        [name]: value,
      });
    }
  };
  
  const addRecord = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:8888/foodMenu/${itemData[selectedIndex].id}`, {
        ...itemData,
        foodItems: itemData.foodItems.map((item) => ({
          ...item,
          id: String(item.id), // Ensure id is always a string
        })),
      })
      .then((res) => {
        window.alert("Record Updated Successfully");
        nav("/MenuContainer");
      })
      .catch((error) => {
        console.error("Error updating record:", error);
      });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8888/foodMenu/1`)
      .then((res) => {
        setItemData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  if (!itemData.foodItems.length) {
    return <div>Loading...</div>;
  }

  const foodItem = itemData.foodItems.find((item) => item.id === id);

  if (!foodItem) {
    return <div>Item not found</div>;
  }

  return (
    <div>
      <Link to="/Maindashboard/ProductDashboard"  className='btn btn-primary' style={{float:"right"}}>&nbsp;Back</Link><br />
      <form onSubmit={addRecord}>
        <label className="form-label">Enter Food Id:</label>
        <input
          type="text"
          name={`foodItems.${itemData.foodItems.indexOf(foodItem)}.id`}
          onChange={inputChangeHandler}
          value={foodItem.id}
          className="form-control"
        />

        <label className="form-label">Enter Food Name:</label>
        <input
          type="text"
          name={`foodItems.${itemData.foodItems.indexOf(foodItem)}.fname`}
          onChange={inputChangeHandler}
          value={foodItem.fname}
          className="form-control"
        />

        <label className="form-label">Enter Food Description:</label>
        <input
          type="text"
          name={`foodItems.${itemData.foodItems.indexOf(foodItem)}.fdesc`}
          onChange={inputChangeHandler}
          value={foodItem.fdesc}
          className="form-control"
        />
        {itemData.id}
        <label className="form-label">Enter Food Price:</label>
        <input
          type="text"
          name={`foodItems.${itemData.foodItems.indexOf(foodItem)}.price`}
          onChange={inputChangeHandler}
          value={foodItem.price}
          className="form-control"
        />

        <Button variant="outlined" className="btn btn-sm" type="submit">
          Update Data   
        </Button>
      </form>
    </div>
  );
};

export default AdminUpdateComp;
