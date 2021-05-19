import { Typography } from "@material-ui/core";
import React from "react";

function Balance() {
  return (
    <div>
      <Typography>Current Balance is 0</Typography>
      <div>
        <Typography>Income: 0</Typography>
        <Typography>Expense: 0</Typography>
      </div>
    </div>
  );
}

export default Balance;
