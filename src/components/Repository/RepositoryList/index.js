import { useEffect } from "react";
import { RepositoryItem } from "../RepositoryItem";
import "../styles.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  selectRepositories,
  asyncLoadRepositories,
  selectFilter,
} from "../../../store/Repository.store";

export function RepositoryList() {
  const repositories = useSelector(selectRepositories);
  const filterValue = useSelector(selectFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncLoadRepositories());
  }, []);

  const getRepositories = () => {
    if (filterValue) {
      return repositories
        .filter((repository) => repository.name.indexOf(filterValue) !== -1)
        .map((repository) => (
          <RepositoryItem key={repository.id} repository={repository} />
        ));
    }

    return repositories.map((repository) => (
      <RepositoryItem key={repository.id} repository={repository} />
    ));
  };

  return (
    <section className="repository-list">
      <ul>{getRepositories()}</ul>
      {!repositories.length && (
        <div className="msg-empty"> Nenhum repositório</div>
      )}
    </section>
  );
}
