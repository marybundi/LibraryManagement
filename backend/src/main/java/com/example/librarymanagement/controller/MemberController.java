package com.example.librarymanagement.controller;

import com.example.librarymanagement.model.Member;
import com.example.librarymanagement.service.MemberService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/members")
public class MemberController {
    private final MemberService svc;
    public MemberController(MemberService svc){ this.svc = svc; }

    @GetMapping
    public List<Member> all() { return svc.findAll(); }

    @PostMapping
    public Member create(@RequestBody Member m) { return svc.save(m); }
}
