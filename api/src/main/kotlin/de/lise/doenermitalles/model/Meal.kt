package de.lise.doenermitalles.model

data class Meal(
    val owner: String,
    val mealName: String,
    val price: Float,
    val isPaid: Boolean,
    val note: String,
) 
