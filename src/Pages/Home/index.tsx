import React, { useState } from "react";
import { Link } from "react-router-dom";

import Header from "../../Components/Header";

import {
  ContainerPage,
  ContentNewRequestItem,
  ContainerIputEmail,
  ContentInputSearchRequestItem,
} from "./style";

import iconHome from "../../assets/home_black_24dp.svg";
import searchIcon from "../../assets/search_black_24dp.svg";

const Home: React.FC = () => {
  const [email, setEmail] = useState<string>();
  return (
    <div>
      <Header titlePage="Home" icon={iconHome} />

      <ContainerPage>
        <ContentNewRequestItem>
          <Link className="buttonNewRequestItem" to="/fazerPedido">
            Fazer Pedido
          </Link>
        </ContentNewRequestItem>

        <ContentInputSearchRequestItem>
          <b>Consultar Pedido</b>
          <ContainerIputEmail>
            <input
              type="email"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Link to={`/pedido/${email}`} className="ButtonSearch">
              <img src={searchIcon} alt="Icone de lupa" />
            </Link>
          </ContainerIputEmail>
        </ContentInputSearchRequestItem>
      </ContainerPage>
    </div>
  );
};

export default Home;
