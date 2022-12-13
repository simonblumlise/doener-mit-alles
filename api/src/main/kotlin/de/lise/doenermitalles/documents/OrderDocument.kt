package de.lise.doenermitalles.documents

import org.bson.types.ObjectId
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document
import java.time.LocalTime

@Document
data class OrderDocument(
    @Id
    val id: String = ObjectId.get().toHexString(),
    val paypalLink: String,
    val owner: String,
    val restaurantName: String,
    val restaurantLink: String,
    val orderTime: LocalTime,
    val isOpen: Boolean = true,
    val meals: MutableList<MealDocument> = mutableListOf(),
)

@Document
data class MealDocument(
    @Id
    val id: String = ObjectId.get().toHexString(),
    val owner: String,
    val mealName: String,
    val price: Float,
    var isPaid: Boolean = false,
    val note: String? = null,
) 
