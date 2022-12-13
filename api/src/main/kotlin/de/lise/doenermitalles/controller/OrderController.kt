package de.lise.doenermitalles.controller

import de.lise.doenermitalles.documents.OrderDocument
import de.lise.doenermitalles.model.MealRequestBody
import de.lise.doenermitalles.model.OrderRequestBody
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.mongodb.core.MongoTemplate
import org.springframework.http.MediaType
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/order")
@CrossOrigin(origins = ["http://localhost:5173"])
class OrderController {

    @Autowired
    private lateinit var mongoTemplate: MongoTemplate

    @GetMapping("/{orderId}")
    fun get(@PathVariable orderId: String): ResponseEntity<OrderDocument> =
        mongoTemplate.findById(orderId, OrderDocument::class.java)?.let { ResponseEntity.ok(it) }
            ?: ResponseEntity.notFound().build()

    @PostMapping
    fun post(@RequestBody order: OrderRequestBody): ResponseEntity<String> =
        order.mapToDocument()
            .let { mongoTemplate.save(it) }
            .let { ResponseEntity.ok(it.id) }

    @PostMapping("/{orderId}/meal")
    fun post(@PathVariable orderId: String, @RequestBody request: MealRequestBody): ResponseEntity<Void> =
        mongoTemplate.findById(orderId, OrderDocument::class.java)
            ?.apply { meals.add(request.mapToDocument()) }
            ?.also { mongoTemplate.save(it) }
            ?.let { ResponseEntity.ok().build() }
            ?: ResponseEntity.notFound().build()

    @DeleteMapping("{orderId}/meal/{mealId}")
    fun delete(@PathVariable orderId: String, @PathVariable mealId: String): ResponseEntity<Void> =
        mongoTemplate.findById(orderId, OrderDocument::class.java)
            ?.apply { this.meals.removeIf { it.id == mealId } }
            ?.also { mongoTemplate.save(it) }
            ?.let { ResponseEntity.ok().build() }
            ?: ResponseEntity.notFound().build()

    @PutMapping("{orderId}/meal/{mealId}/isPaid", consumes = [MediaType.APPLICATION_FORM_URLENCODED_VALUE])
    fun updateIsPaid(
        @PathVariable orderId: String,
        @PathVariable mealId: String,
        @RequestParam isPaid: Boolean
    ): ResponseEntity<Void> {
        val orderDocument = mongoTemplate.findById(orderId, OrderDocument::class.java)
        return orderDocument?.meals
            ?.find { it.id == mealId }
            ?.apply { this.isPaid = isPaid }
            ?.also { mongoTemplate.save(orderDocument) }
            ?.let { ResponseEntity.ok().build() }
            ?: ResponseEntity.notFound().build()
    }
}