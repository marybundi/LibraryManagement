package com.example.library.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Borrowing {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // A borrowing must belong to a member
    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;

    // A borrowing must reference a book
    @ManyToOne
    @JoinColumn(name = "book_id")
    private Book book;

    private LocalDate borrowDate;
    private LocalDate dueDate;

    // Marks if the book has been returned
    private boolean returned = false;
}
