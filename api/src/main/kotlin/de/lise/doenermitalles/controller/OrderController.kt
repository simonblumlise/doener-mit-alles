package de.lise.doenermitalles.controller

import de.lise.doenermitalles.model.Meal
import de.lise.doenermitalles.model.Order
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/order")
@CrossOrigin(origins = ["http://localhost:5173"])
class OrderController {

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
    fun post(@RequestBody meal: Meal): ResponseEntity<Void> =
        this.order?.meals?.add(meal)?.let { ResponseEntity.ok().build() } ?: ResponseEntity.notFound().build()
}