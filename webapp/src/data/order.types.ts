export type Order = {
    id: string;
    paypalLink: string;
    owner: string;
    restaurantName: string;
    restaurantLink: string;
    orderTime: Date;
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
    orderTime: string;
}

export const NewDefaultOrder: NewOrder = {
    paypalLink: '',
    owner: '',
    restaurantName: '',
    restaurantLink: '',
    orderTime: '',
}
