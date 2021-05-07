import { useSelector, useDispatch } from "react-redux";
import { selectFilter, filter } from "../../store/Repository.store";

import "./style.scss";

export default function Filter() {
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <>
      <form className="form-container">
        <input
          onChange={(event) => dispatch(filter(event.target.value))}
          type="text"
          value={filterValue}
          placeholder="Filtrar..."
        />
      </form>
    </>
  );
}
