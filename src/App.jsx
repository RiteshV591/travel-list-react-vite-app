import "./index.css";

import { Logo } from "./Logo.jsx";
import { Form } from "./Form.jsx";
import { PackingList } from "./PackingList.jsx";
import { Stats } from "./Stats.jsx";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

export const App = () => {
  return (
    <div>
      <Logo />
      <Form />
      <PackingList initialItems={initialItems} />
      <Stats />
    </div>
  );
};
