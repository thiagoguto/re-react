import React from "react";
import { useQuery } from "@apollo/react-hooks";

import QUERY_HOME from "../GraphQL/queryHome";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Sobre from "../components/Sobre";
import Beneficios from "../components/Beneficios";
import Depoimentos from "../components/Depoimentos";
import Cartao from "../components/Cartao";
import Loading from "../components/Loading";

const Home = () => {
  const { loading, error, data } = useQuery(QUERY_HOME);
  if (loading) return <Loading />;
  if (error) return `<p>Erro: ${error.message}</p>`;
  if (data) {
    const { banner, sobre, beneficios, depoimentos } = data;
    return (
      <>
        <Header />
        <Banner data={banner} />
        <Sobre data={sobre} />
        <Beneficios data={beneficios} />
        <Depoimentos data={depoimentos} />
        <Cartao />
        <Footer />
      </>
    );
  }
};

export default Home;
