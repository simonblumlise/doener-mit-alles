package de.lise.doenermitalles.controller

import de.lise.doenermitalles.model.Meal
import de.lise.doenermitalles.model.MealRequestBody
import de.lise.doenermitalles.model.Order
import org.springframework.http.MediaType
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/order")
@CrossOrigin(origins = ["http://localhost:5173"])
class OrderController {

    private var idCounter: Int = 0;
    private var order: Order? = null

    @GetMapping
    fun get(): ResponseEntity<Order> =
        if (order == null) ResponseEntity.notFound().build()
        else ResponseEntity.ok(order)

    @PostMapping
    fun post(@RequestBody order: Order): ResponseEntity<Void> {
        this.order = order
        return ResponseEntity.ok().build()
    }

    @PostMapping("/meal")
    fun post(@RequestBody request: MealRequestBody): ResponseEntity<Void> {
        val meal = Meal(
            id = idCounter++,
            owner = request.owner,
            mealName = request.mealName,
            price = request.price,
            isPaid = request.isPaid,
            note = request.note
        )
        return this.order?.meals?.add(meal)?.let { ResponseEntity.ok().build() }
            ?: ResponseEntity.notFound().build()
    }

    @DeleteMapping("/meal/{id}")
    fun delete(@PathVariable id: Int): ResponseEntity<Void> =
        if (this.order?.meals?.removeIf { it.id == id } == true) ResponseEntity.ok().build()
        else ResponseEntity.notFound().build()

    @PutMapping("/meal/{id}/isPaid", consumes = [MediaType.APPLICATION_FORM_URLENCODED_VALUE])
    fun updateIsPaid(@PathVariable id: Int, @RequestParam isPaid: Boolean): ResponseEntity<Void> {
        order?.meals?.find { it.id == id }?.let { it.isPaid = isPaid }
            ?: return ResponseEntity.notFound().build()
        return ResponseEntity.ok().build()
    }
}