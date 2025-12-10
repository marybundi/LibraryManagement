package com.example.library.controller;

import com.example.library.model.Borrowing;
import com.example.library.service.BorrowingService;
import com.example.library.service.BookService;
import com.example.library.service.MemberService;
import com.example.library.model.Book;
import com.example.library.model.Member;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/borrowings")
public class BorrowingController {

    @Autowired
    private BorrowingService borrowingService;

    @Autowired
    private BookService bookService;

    @Autowired
    private MemberService memberService;

    // Get all borrowings
    @GetMapping
    public List<Borrowing> getAllBorrowings() {
        return borrowingService.getAllBorrowings();
    }

    // Borrow a book
    @PostMapping("/borrow")
    public ResponseEntity<String> borrowBook(@RequestParam Long memberId, @RequestParam Long bookId) {
        Optional<Member> memberOpt = memberService.getMemberById(memberId);
        Optional<Book> bookOpt = bookService.getBookById(bookId);

        if (memberOpt.isEmpty() || bookOpt.isEmpty()) {
            return ResponseEntity.badRequest().body("Invalid member or book ID.");
        }

        Book book = bookOpt.get();
        if (!book.isAvailable()) { // Assuming Book has an 'available' field
            return ResponseEntity.badRequest().body("Book is not available.");
        }

        Borrowing borrowing = new Borrowing();
        borrowing.setBook(book);
        borrowing.setMember(memberOpt.get());
        borrowing.setBorrowDate(LocalDate.now());
        borrowingService.addBorrowing(borrowing);

        book.setAvailable(false); // Mark the book as borrowed
        bookService.updateBook(book);

        return ResponseEntity.ok("Book borrowed successfully.");
    }

    // Return a book
    @PostMapping("/return")
    public ResponseEntity<String> returnBook(@RequestParam Long borrowingId) {
        Optional<Borrowing> borrowingOpt = borrowingService.getBorrowingById(borrowingId);

        if (borrowingOpt.isEmpty()) {
            return ResponseEntity.badRequest().body("Invalid borrowing ID.");
        }

        Borrowing borrowing = borrowingOpt.get();
        Book book = borrowing.getBook();
        book.setAvailable(true); // Mark book as available
        bookService.updateBook(book);

        borrowingService.deleteBorrowing(borrowingId);

        return ResponseEntity.ok("Book returned successfully.");
    }

    // Get all borrowings by member
    @GetMapping("/member/{memberId}")
    public List<Borrowing> getBorrowingsByMember(@PathVariable Long memberId) {
        return borrowingService.getBorrowingsByMemberId(memberId);
    }

    // Get all borrowings by book
    @GetMapping("/book/{bookId}")
    public List<Borrowing> getBorrowingsByBook(@PathVariable Long bookId) {
        return borrowingService.getBorrowingsByBookId(bookId);
    }
}
