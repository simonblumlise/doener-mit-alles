package de.lise.doenermitalles.model

data class Meal(
    val owner: String,
    val mealName: String,
    val price: Float,
    var isPaid: Boolean = false,
    val note: String? = null,
) 
