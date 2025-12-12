package com.example.librarymanagement.controller;

import com.example.librarymanagement.model.Borrowing;
import com.example.librarymanagement.service.BorrowingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class BorrowingController {
    private final BorrowingService svc;

    @Autowired
    public BorrowingController(BorrowingService svc){ this.svc = svc; }

    @PostMapping("/books/borrow")
    public ResponseEntity<?> borrow(@RequestBody Map<String, Object> body){
        try {
            Object bookIdObj = body.get("bookId");
            Object memberIdObj = body.get("memberId");

            Long bookId = bookIdObj instanceof Number ? ((Number) bookIdObj).longValue() : Long.parseLong(bookIdObj.toString());
            Long memberId = memberIdObj instanceof Number ? ((Number) memberIdObj).longValue() : Long.parseLong(memberIdObj.toString());

            Borrowing b = svc.borrow(bookId, memberId);
            return ResponseEntity.status(HttpStatus.CREATED).body(b);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Map.of("error", e.getMessage()));
        }
    }


    @PostMapping("/books/return")
    public ResponseEntity<Borrowing> returnBook(@RequestBody Map<String, Object> body){
        Long bookId = ((Number) body.get("bookId")).longValue();
        Long memberId = ((Number) body.get("memberId")).longValue();
        Borrowing b = svc.returnBook(bookId, memberId);
        return ResponseEntity.ok(b);
    }

    @GetMapping("/borrowings")
    public List<Borrowing> activeBorrowings() {
        return svc.activeBorrowings();
    }

    @GetMapping("/borrowings/all")
    public List<Borrowing> allBorrowings() {
        return svc.allBorrowings();
    }
}
