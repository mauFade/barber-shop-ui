"use client";
import { Service } from "@/data/contexts/useService";
import Image from "next/image";
import React from "react";

export interface ItemServiceProps {
  service: Service;
  onClick?: (service: Service) => void;
}

const ItemService = (props: ItemServiceProps) => {
  return (
    <div
      className={`
            flex rounded-xl overflow-hidden bg-zinc-800 
            ${props.onClick && "cursor-pointer"} select-none
        `}
      onClick={() => props.onClick?.(props.service)}
    >
      <Image
        src={props.service.imageURL}
        width={150}
        height={150}
        alt={props.service.name}
        className="object-cover"
      />
      <div className="flex flex-col p-5 gap-2">
        <span className="text-xl font-black">{props.service.name}</span>
        <span className="text-xs text-zinc-400 flex-1">
          {props.service.description}
        </span>
        <span className="text-lg font-bold">
          R$ {props.service.price.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default ItemService;
