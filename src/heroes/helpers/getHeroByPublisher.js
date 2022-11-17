import { heroes } from "../data/heroes";

export const getHeroeByPublisher = (editorial) => {
  const editorialesValidas = ["DC Comics", "Marvel Comics"];
  if (!editorialesValidas.includes(editorial)) {
    throw new Error(`${editorial} is not a valid publisher`);
  }
  return heroes.filter((heroe) => heroe.publisher === editorial);
};
