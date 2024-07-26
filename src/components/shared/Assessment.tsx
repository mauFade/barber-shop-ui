"use client";

import {
  IconStar,
  IconStarFilled,
  IconStarHalfFilled,
} from "@tabler/icons-react";
import React from "react";

export interface AssessmentProps {
  qtd: number;
  assessValue: number;
}

const Assessment = (props: AssessmentProps) => {
  const { qtd, assessValue } = props;

  const stars = Array.from({ length: 5 }, (_, index) => {
    const value = index + 1;

    if (assessValue >= value) {
      return <IconStarFilled key={index} size={18} />;
    }

    if (assessValue + 1 > value) {
      return <IconStarHalfFilled key={index} size={18} />;
    }

    return <IconStar key={index} size={18} />;
  });

  return (
    <div className="flex items-end gap-2">
      <div className="flex items-center gap-1 text-yellow-400">{stars}</div>
      <div className="flex text-xs text-zinc-300">({qtd})</div>
    </div>
  );
};

export default Assessment;
