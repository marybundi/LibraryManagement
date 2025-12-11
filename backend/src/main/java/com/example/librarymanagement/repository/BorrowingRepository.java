package com.example.librarymanagement.repository;

import com.example.librarymanagement.model.Borrowing;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface BorrowingRepository extends JpaRepository<Borrowing, Long> {
    Optional<Borrowing> findByBookIdAndReturnedDateIsNull(Long bookId);
    List<Borrowing> findByMemberId(Long memberId);
    List<Borrowing> findByReturnedDateIsNull();
}
