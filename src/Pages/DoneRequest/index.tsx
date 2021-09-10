import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { ContainerRequestItems, ButtonDelete } from "./style";

import Header from "../../Components/Header";
import bagIcon from "../../assets/shopping_bag_black_24dp.svg";

interface RequestItems {
  _id: string;
  email: string;
  items: [];
  data: string;
}

interface Email {
  email: string;
}
const DoneRequestItems: React.FC = () => {
  const [requestItems, setRequestItems] = useState<RequestItems[]>([]);
  const email = useParams<Email>();

  useEffect(() => {
    axios
      .get(`http://localhost:80/listarPedidos/${email.email}`)
      .then((res) => {
        setRequestItems(res.data);
      });
  }, [email]);

  const deleteRequest = (id:string) => {
      axios.delete(`http://localhost:80/deletarPedido/${id}`).then(res=>{
          if(res.status === 200){
            window.alert("Pedido excluído com Sucesso!")
            window.location.reload()
          }
      })
  };

  return (
    <div>
      <Header icon={bagIcon} titlePage="Pedidos Realizados" />
      {requestItems.map((requestElemet, index) => (
        <ContainerRequestItems key={index}>
          <p>
            <b>id:</b>
            {requestElemet._id}
          </p>
          <p>
            <b>Data:</b>
            {requestElemet.data}
          </p>
          <b>Items do Pedido:</b>
          <ul>
            {requestElemet.items.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
          <ButtonDelete onClick={() => deleteRequest(requestElemet._id)}>
            Excluir Pedido
          </ButtonDelete>
        </ContainerRequestItems>
      ))}
    </div>
  );
};

export default DoneRequestItems;
