import "./index.css";

import { useState } from "react";

import { Logo } from "./Logo.jsx";
import { Form } from "./Form.jsx";
import { PackingList } from "./PackingList.jsx";
import { Stats } from "./Stats.jsx";

export const App = () => {
  const [items, setItems] = useState([]);

  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} />
      <Stats />
    </div>
  );
};
