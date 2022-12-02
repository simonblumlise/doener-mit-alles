export type Order = {
  paypalLink: string;
  owner: string;
  restaurantName: string;
  restaurantLink: string;
  orderTime: Date;
  isOpen: boolean;
  meals: Meal[];
};

export type Meal = {
  owner: string;
  mealName: string;
  price: string;
  isPaid: boolean;
  note?: string;
};
export type NewOrder = {
  paypalLink: string;
  owner: string;
  restaurantName: string;
  restaurantLink: string;
  orderTime: Date;
};

export const newDefaultOrder: NewOrder = {
  paypalLink: "",
  owner: "",
  restaurantName: "",
  restaurantLink: "",
  orderTime: new Date(Date.now()),
};
