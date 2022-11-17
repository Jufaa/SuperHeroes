import { useMemo } from "react";
import { getHeroeByPublisher } from "../helpers/getHeroByPublisher";
import { HeroCard } from "./HeroCard";

export const HeroList = ({ editorial }) => {
  const heroes = useMemo(() => getHeroeByPublisher(editorial), [editorial]);
  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {heroes.map((heroe) => (
        <li className="list-group-item" key={heroe.id}>
          <HeroCard key={heroe.id} {...heroe} />
        </li>
      ))}
    </div>
  );
};
