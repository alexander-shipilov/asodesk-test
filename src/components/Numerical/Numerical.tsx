import cx from "classnames";
import React, { memo } from "react";
import { FormattedNumber } from "react-intl";
import { NumericalProps } from "./NumericalProps";

export const Numerical = memo(({ value, className }: NumericalProps) => (
  <span className={ cx("Numerical", className) }>
      <FormattedNumber value={ value } />
  </span>
));