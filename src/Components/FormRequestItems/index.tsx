import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  Container,
  InputEmail,
  ContentElementForm,
  Select,
  Button,
} from "./style";

import { date } from "../../scripts/date";

interface Items {
  items: string[];
}

const FormRequestItems: React.FC<Items> = (props) => {
  const [email, setEmail] = useState<string>();
  const [items, setItems] = useState<string[]>([]);
  const [data, setData] = useState<string>();

  useEffect(() => {
    setItems(props.items);
  }, [props.items]);

  useEffect(() => {
    setData(date());
  }, []);

  const sendRequestItems = () => {
    axios.post("http://localhost:80/novoPedido", { email, items, data }).then(res=>{
      if(res.status === 200){
        window.alert("Pedido Enviado com Sucesso!")
        window.location.reload()
      }
    })
  };

  return (
    <Container>
      <ContentElementForm>
        <p>Email</p>
        <InputEmail
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </ContentElementForm>

      <ContentElementForm>
        <p>Items</p>
        <Select>
          {items.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </Select>
      </ContentElementForm>

      <Button onClick={()=>sendRequestItems()}>Realizar Pedido</Button>
    </Container>
  );
};

export default FormRequestItems;
