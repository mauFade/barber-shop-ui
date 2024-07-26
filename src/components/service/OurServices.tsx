"use client";

import useService from "@/data/contexts/useService";
import { useRouter } from "next/navigation";
import React from "react";
import Title from "../shared/Title";
import ItemService from "./ItemService";

const OurServices = () => {
  const router = useRouter();
  const { services } = useService();

  function initAppointment() {
    router.push("/agendamento");
  }

  return (
    <div className="flex flex-col gap-16">
      <Title
        tag="Serviços"
        main="Do Classico ao Rock"
        secondary="Cabelo afiado, barba de lenhador e mãos de motoqueiro, tudo ao som de rock pesado!"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        {services.map((service) => (
          <ItemService
            key={service.id}
            service={service}
            onClick={initAppointment}
          />
        ))}
      </div>
    </div>
  );
};

export default OurServices;
