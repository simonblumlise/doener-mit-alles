package de.lise.doenermitalles.controller

import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/order")
@CrossOrigin(origins = ["http://localhost:5173"])
class OrderController {
    
    @GetMapping
    fun get(): String {
        return "Hello World"
    }
}