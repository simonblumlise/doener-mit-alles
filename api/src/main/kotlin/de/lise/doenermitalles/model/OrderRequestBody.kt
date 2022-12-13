package de.lise.doenermitalles.model

import de.lise.doenermitalles.documents.OrderDocument
import java.time.LocalDateTime

data class OrderRequestBody(
    val paypalLink: String,
    val owner: String,
    val restaurantName: String,
    val restaurantLink: String,
    val orderTime: LocalDateTime,
) {
    fun mapToDocument() = OrderDocument(
        paypalLink = this.paypalLink,
        owner = this.owner,
        restaurantLink = this.restaurantLink,
        orderTime = this.orderTime,
        restaurantName = this.restaurantName
    )
}