package de.lise.doenermitalles.model

import de.lise.doenermitalles.documents.MealDocument

data class MealRequestBody(
    val owner: String,
    val mealName: String,
    val price: Float,
    var isPaid: Boolean = false,
    val note: String? = null,
) {
    fun mapToDocument() = MealDocument(
        owner = this.owner,
        mealName = this.mealName,
        price = this.price,
        isPaid = this.isPaid,
        note = this.note
    )
}