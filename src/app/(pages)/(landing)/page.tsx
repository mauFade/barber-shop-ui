"use client";

import TitleWithSlogan from "@/components/landing/TitleWithSlogan";
import OurProfessionals from "@/components/professional/OurProfessionals";
import OurServices from "@/components/service/OurServices";
import ContainerWithBackground from "@/components/shared/ContainerWithBackground";
import React from "react";

const Landing = () => {
  return (
    <div>
      <TitleWithSlogan />
      <ContainerWithBackground img="/banners/servicos.webp">
        <OurServices />
      </ContainerWithBackground>

      <ContainerWithBackground img="/banners/profissionais.webp">
        <OurProfessionals />
      </ContainerWithBackground>

      {/* <ContainerWithBackground img="/banners/clientes.webp">
        <NossosClientes />
      </ContainerWithBackground> */}
    </div>
  );
};

export default Landing;
