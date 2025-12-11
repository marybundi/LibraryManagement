package com.example.librarymanagement.service;

import com.example.librarymanagement.model.Book;
import com.example.librarymanagement.model.Borrowing;
import com.example.librarymanagement.model.Member;
import com.example.librarymanagement.repository.BookRepository;
import com.example.librarymanagement.repository.BorrowingRepository;
import com.example.librarymanagement.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.util.List;

@Service
public class BorrowingService {
    private final BorrowingRepository borrowingRepo;
    private final BookRepository bookRepo;
    private final MemberRepository memberRepo;

    private final int LOAN_DAYS = 14;

    @Autowired
    public BorrowingService(BorrowingRepository borrowingRepo, BookRepository bookRepo, MemberRepository memberRepo){
        this.borrowingRepo = borrowingRepo;
        this.bookRepo = bookRepo;
        this.memberRepo = memberRepo;
    }

    public Borrowing borrow(Long bookId, Long memberId){
        Book book = bookRepo.findById(bookId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Book not found"));
        Member member = memberRepo.findById(memberId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Member not found"));

        // check active borrowing for the book
        if (borrowingRepo.findByBookIdAndReturnedDateIsNull(bookId).isPresent()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Book already borrowed");
        }

        Borrowing b = new Borrowing();
        b.setBook(book);
        b.setMember(member);
        b.setBorrowDate(LocalDate.now());
        b.setDueDate(LocalDate.now().plusDays(LOAN_DAYS));
        return borrowingRepo.save(b);
    }

    public Borrowing returnBook(Long bookId, Long memberId){
        Borrowing active = borrowingRepo.findByBookIdAndReturnedDateIsNull(bookId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Active borrowing not found for this book"));

        if (!active.getMember().getId().equals(memberId)) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "This book was not borrowed by this member");
        }

        active.setReturnedDate(LocalDate.now());
        return borrowingRepo.save(active);
    }

    public List<Borrowing> activeBorrowings(){
        return borrowingRepo.findByReturnedDateIsNull();
    }

    public List<Borrowing> allBorrowings(){
        return borrowingRepo.findAll();
    }
}
