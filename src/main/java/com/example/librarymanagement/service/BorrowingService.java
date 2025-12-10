package com.example.library.service;

import com.example.library.model.Borrowing;
import com.example.library.repository.BorrowingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BorrowingService {

    @Autowired
    private BorrowingRepository borrowingRepository;

    public List<Borrowing> getAllBorrowings() {
        return borrowingRepository.findAll();
    }

    public Optional<Borrowing> getBorrowingById(Long id) {
        return borrowingRepository.findById(id);
    }

    public Borrowing addBorrowing(Borrowing borrowing) {
        return borrowingRepository.save(borrowing);
    }

    public void deleteBorrowing(Long id) {
        borrowingRepository.deleteById(id);
    }

    public List<Borrowing> getBorrowingsByMemberId(Long memberId) {
        return borrowingRepository.findByMemberId(memberId);
    }

    public List<Borrowing> getBorrowingsByBookId(Long bookId) {
        return borrowingRepository.findByBookId(bookId);
    }
}
