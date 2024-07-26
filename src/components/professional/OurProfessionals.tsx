"use client";

import useProfessionals from "@/data/contexts/useProfessionals";
import React from "react";
import Title from "../shared/Title";
import ProfessionalItem from "./ProfessionalItem";

const OurProfessionals = () => {
  const { profissionals } = useProfessionals();

  return (
    <div className="container flex flex-col items-center gap-y-16">
      <Title
        tag="Time"
        main="Nossos Brutos"
        secondary="Só os mais brabos estão aqui! Temos o orgulho de ter o time mais qualificado do Brasil!"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 ">
        {profissionals.map((professional) => (
          <ProfessionalItem key={professional.id} professional={professional} />
        ))}
      </div>
    </div>
  );
};

export default OurProfessionals;
