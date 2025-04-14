import { Drink } from '../types';

type DrinkCardProps = {
  drink: Drink;
};

const DrinkCard = ({ drink }: DrinkCardProps) => {
  return <h2>{drink.strDrink}</h2>;
};

export default DrinkCard;
