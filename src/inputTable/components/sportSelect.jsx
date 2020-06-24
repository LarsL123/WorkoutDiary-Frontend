import React from "react";

const SportSelect = ({ column }) => {
  console.log(column);

  return (
    <select class="custom-select" id="inputGroupSelect01">
      {
      //!column.sport && <option selected value="">Select sport</option>
      }

      <option value="1">Løping</option>
      <option value="2">Jogging</option>
      <option value="3">Henge i et tre</option>
    </select>
  );
};

export default SportSelect;
