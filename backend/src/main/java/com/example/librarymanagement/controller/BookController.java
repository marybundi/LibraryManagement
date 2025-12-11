package com.example.librarymanagement.controller;

import com.example.librarymanagement.model.Book;
import com.example.librarymanagement.service.BookService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/books")
public class BookController {
    private final BookService svc;
    public BookController(BookService svc){ this.svc = svc; }

    @GetMapping
    public List<Book> all() { return svc.findAll(); }

    @PostMapping
    public Book create(@RequestBody Book b) { return svc.save(b); }
}
