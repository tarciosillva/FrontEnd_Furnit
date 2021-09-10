import React, { useState } from "react";

import Header from "../../Components/Header";
import FormRequestItems from "../../Components/FormRequestItems";

import {
  Container,
  InputAddContainer,
  InputAddItem,
  ButtonAddItem,
} from "./style";

import listIcon from "../../assets/view_headline_black_24dp.svg";

const Items: React.FC = () => {
  const [items, setItems] = useState<string[]>([]);
  const [item, setItem] = useState<string>("");

  const setItemRequest = () => {
    var itemRequest = items;
    itemRequest.push(item);
    setItems(itemRequest);
  };

  return (
    <div>
      <Header titlePage="Realizar pedidos" icon={listIcon} />
      <Container>
        <InputAddContainer>
          <InputAddItem
            className="inputItem"
            type="text"
            required
            placeholder="Digite o nome do item"
            onChange={(e) => setItem(e.target.value)}
          />
          <ButtonAddItem href="#" onClick={() => setItemRequest()}>
            Adicionar
          </ButtonAddItem>
        </InputAddContainer>

        <FormRequestItems items={items} />
      </Container>
    </div>
  );
};

export default Items;
