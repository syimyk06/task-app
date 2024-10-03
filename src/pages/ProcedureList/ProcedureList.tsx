import { type FC } from "react";
import style from "./ProcedureList.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import ProcedureItem from "@/components/ProcedureItem/ProcedureItem";

export interface ProcedureListProps {}

const ProcedureList: FC<ProcedureListProps> = () => {
  const { procedures } = useSelector((state: RootState) => state.procedures);

  return (
    <div className="container">
      <div className={style.procedures}>
        <h2>Компьютерная томография</h2>

        <p className={style.procedure_desc}>
          *Выберите необходимую процедуру, нажав на галочку
        </p>
        <div className={style.procedures_container}>
          <div className={style.procedures_col}>
            {procedures.map((procedure) => (
              <ProcedureItem key={procedure.id} procedure={procedure} />
            ))}
            {procedures.length == 0 ? <>Empty task list</> : <></>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcedureList;