package com.rajan.StockApp.repository;

import com.rajan.StockApp.model.Portfolio;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PortfolioRepository extends MongoRepository<Portfolio, String> {
    Optional<Portfolio> findByUserId(String userId);
}