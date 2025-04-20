package com.rajan.StockApp.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Document(collection = "portfolio")
public class Portfolio {
    @Id
    private String id;
    private String userId;
    private List<Holding> holdings = new ArrayList<>();

    // getters and setters
}