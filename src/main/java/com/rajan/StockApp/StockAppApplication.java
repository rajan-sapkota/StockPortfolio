package com.rajan.StockApp;

import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Objects;

@SpringBootApplication
public class StockAppApplication {

	public static void main(String[] args) {

		Dotenv dotenv = Dotenv.load();

		// ✅ Set the value so Spring can use it
		System.setProperty("MONGO_URI", Objects.requireNonNull(dotenv.get("MONGO_URI")));

		SpringApplication.run(StockAppApplication.class, args);
	}

}
