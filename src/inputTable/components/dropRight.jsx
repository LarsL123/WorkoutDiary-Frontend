import React, { useContext } from "react";
import ButtonDropdown, {
  DropdownDivider,
  DropdownItem,
} from "../../common/components/buttonDropdown";
import { WorkoutDataContext } from "../../common/react/workoutDataContext";

const DropRight = ({ column }) => {
  const { createWorkout, deleteWorkout } = useContext(WorkoutDataContext);

  const onNew = () => {
    createWorkout(new Date(column.date).toISOString());
  };

  const onDelete = () => {
    deleteWorkout(column._id);
  };

  return (
    <ButtonDropdown direction="dropright">
      <DropdownItem onClick={onNew}>Insert New</DropdownItem>

      <DropdownDivider />

      <DropdownItem onClick={onDelete}>
        Delete <i className="far fa-trash-alt"></i>
      </DropdownItem>
    </ButtonDropdown>
  );
};

export default DropRight;
