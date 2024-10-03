import { type FC } from "react";
import style from "./ProcedureItem.module.scss";
import { useDispatch } from "react-redux";
import { IProcedure, checkProcedure } from "@/api/procedure/procedureSlice";

export interface ProcedureItemProps {
  procedure: IProcedure;
}

const ProcedureItemProps: FC<ProcedureItemProps> = ({ procedure }) => {
  const dispatch = useDispatch();

  const makeProcedureAsToggled = () => {
    dispatch(checkProcedure(procedure.id));
  };

  return (
    <div className={style.procedure}>
      <div className={style.procedure_info}>{procedure.name}</div>
      <div className={style.procedure_info}>{procedure.duration_value}</div>
      <div className={style.procedure_info}>{procedure.price}</div>

      <div className={style.checkboxContainer}>
        <input
          type="checkbox"
          id={`checkbox-${procedure.id}`} // Unique ID for the checkbox
          checked={procedure.checked}
          onChange={makeProcedureAsToggled}
          className={style.customCheckbox}
        />
        <label
          htmlFor={`checkbox-${procedure.id}`}
          className={style.customLabel}
        ></label>
      </div>
    </div>
  );
};

export default ProcedureItemProps;
