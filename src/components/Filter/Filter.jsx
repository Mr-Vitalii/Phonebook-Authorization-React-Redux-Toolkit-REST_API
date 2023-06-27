import { useSelector, useDispatch } from "react-redux";
import { selectStatusFilter } from "redux/selectors";
import { setStatusFilter } from "redux/filterSlice";

import { Container, Input } from "./Filter.styled";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilter);

  const handleFilterChange = (e) => {
    dispatch(setStatusFilter(e.currentTarget.value));
  };


  return (
    <Container>
      <label>
        Fined contacts by name
        <br />
        <Input type="text" value={filter} onChange={handleFilterChange} />
      </label>
    </Container>
  );
};


export { Filter };
