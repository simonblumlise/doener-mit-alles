import dayjs, { Dayjs } from "dayjs";

export type Order = {
    id: string;
    paypalLink: string;
    owner: string;
    restaurantName: string;
    restaurantLink: string;
    orderTime: Dayjs;
    isOpen: boolean;
    meals: Meal[];
};

export type Meal = {
    id: string;
    owner: string;
    mealName: string;
    price: string;
    isPaid: boolean;
    note?: string;
};

export type NewMeal = {
    owner: string;
    mealName: string;
    price: string;
    isPaid: boolean;
    note?: string;
};

export const DefaultMeal: NewMeal = {
    owner: '',
    mealName: '',
    price: '',
    isPaid: false,
    note: '',
};
export type NewOrder = {
    paypalLink: string;
    owner: string;
    restaurantName: string;
    restaurantLink: string;
    orderTime: Dayjs;
}

export const NewDefaultOrder: NewOrder = {
    paypalLink: '',
    owner: '',
    restaurantName: '',
    restaurantLink: '',
    orderTime: dayjs().hour(11).minute(0),
}
