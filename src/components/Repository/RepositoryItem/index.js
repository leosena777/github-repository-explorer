import { useState } from "react";

export function RepositoryItem({ repository }) {
  const [active, setActive] = useState("");

  return (
    <li
      onMouseEnter={() => setActive("active")}
      onMouseLeave={() => setActive("")}
      className={active}
    >
      <strong>{repository.name}</strong>
      <p>{repository.description}</p>
      <a href={repository.html_url} target="_blank" rel="noreferrer">
        Acessar repositório
      </a>
    </li>
  );
}
