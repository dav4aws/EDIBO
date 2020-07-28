package com.example.restservice;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class HelloController {

	@RequestMapping("/")
	public String index() {
        return "<a href='/greeting'>Greetings</a><br><a href='/hello'>Hello</a><br> BUFF";
	}

}