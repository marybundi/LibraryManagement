package com.example.librarymanagement.model;

import jakarta.persistence.*;

@Entity
@Table(name = "members")
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String membershipId;
    private String email; // new email field

    public Member() {}

    public Member(String name, String membershipId, String email) {
        this.name = name;
        this.membershipId = membershipId;
        this.email = email;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getMembershipId() { return membershipId; }
    public void setMembershipId(String membershipId) { this.membershipId = membershipId; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
}
