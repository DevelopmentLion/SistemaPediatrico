package com.sistemap pediatricobackend.controller

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/welcome")
class WelcomeController {

    @GetMapping
    Map<String, String> welcome() {
        return [
            message: "Bienvenido al Sistema Pediátrico",
            status: "API funcionando correctamente",
            version: "1.0.0"
        ]
    }
}
