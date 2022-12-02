package de.lise.doenermitalles.controller

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
    fun post(@RequestBody order: Order): ResponseEntity<Order> {
        this.order = order
        return ResponseEntity.ok(this.order)
    }

}