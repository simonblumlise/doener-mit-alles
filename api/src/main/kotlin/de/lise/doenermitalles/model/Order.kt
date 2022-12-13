package de.lise.doenermitalles.model

import java.time.LocalDateTime

data class Order(
    val paypalLink: String,
    val owner: String,
    val restaurantName: String,
    val restaurantLink: String,
    val orderTime: LocalDateTime,
    val isOpen: Boolean = true,
    val meals: MutableList<Meal> = mutableListOf(),
)