import cx from "classnames";
import React, { FunctionComponent, memo } from "react";
import { Numerical } from "../../../components/Numerical";
import "./StatsPosition.css";
import { StatsPositionProps } from "./StatsPositionProps";

const { abs } = Math;

export const StatsPosition: FunctionComponent<StatsPositionProps> = memo(({ value, ...rest }: StatsPositionProps) => {
  const { position, change } = value;

  const className = cx(rest.className, "StatsPosition", {
    "StatsPosition_zero": change === 0,
    "StatsPosition_positive": change > 0,
    "StatsPosition_negative": change < 0
  });

  return (
    <span className={ className }>
      <Numerical value={ position } className='StatsPosition__value' />
      <span className='StatsPosition__delta'>
        <Numerical value={ abs(change) } className='StatsPosition__delta-value' />
      </span>
    </span>
  );
});


