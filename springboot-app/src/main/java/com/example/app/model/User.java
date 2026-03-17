package com.example.app.model;

import jakarta.persistence.*;

@Entity
@Table(name = "users")   // 👈 IMPORTANT (avoid reserved word issue)
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
}
