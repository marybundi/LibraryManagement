package com.example.librarymanagement.service;

import com.example.librarymanagement.model.Member;
import com.example.librarymanagement.repository.MemberRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MemberService {
    private final MemberRepository repo;
    public MemberService(MemberRepository repo) { this.repo = repo; }

    public List<Member> findAll() { return repo.findAll(); }
    public Member findById(Long id) { return repo.findById(id).orElse(null); }
    public Member save(Member m) { return repo.save(m); }
}
