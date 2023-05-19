import React, { useEffect, useState } from "react";
import Category from "../Category/Category";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const Categories = () => {
  const [alltoys, setAlltoys] = useState([]);
  const [active, setActive] = useState("scrabble");

  useEffect(() => {
    fetch(`http://localhost:5000/alltoys/${active}`)
      .then((res) => res.json())
      .then((data) => {
        setAlltoys(data.slice(0, 2));
        console.log(data.slice(0,2))
      });
  }, [active]);

  const handleActive = (subcategory) => {
    setActive(subcategory);
  };

  return (
    <div className="my-16">
      <div className="text-center text-3xl my-6 font-bold text-yellow-950">
        Shop By Categories
      </div>
   
     <TabList className="text-center text-amber-50 text-xl bg-yellow-900 rounded-md pb-2">
        <Tab onClick={() => handleActive("scrabble")}>Scrabbles</Tab>
        <Tab onClick={() => handleActive("puzzles")}>Puzzle</Tab>
        <Tab onClick={() => handleActive("carcassonne")}>Carcassonne</Tab>
      </TabList>
      <Tabs className="mx-auto container">
      
        <TabPanel>
        <div className="flex flex-col md:flex-row  justify-center gap-4">
        {alltoys.map(alltoy => (
            <Category key={alltoy._id}
            alltoy={alltoy}
            ></Category>
          ))}
        </div>
         </TabPanel>
         
      </Tabs>
     
    </div>
  );
};

export default Categories;
