export type Order = {
    paypalLink: string;
    owner: string;
    restaurantName: string;
    restaurantLink: string;
    orderTime: Date;
    isOpen: boolean;
    meals: Meal[];
}

export type Meal = {
    owner: string;
    mealName: string;
    price: string;
    isPaid: boolean;
    note: string;
}