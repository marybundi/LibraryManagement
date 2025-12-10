package com.example.library.controller;

import com.example.library.model.Member;
import com.example.library.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/members") // Base URL for member-related endpoints
public class MemberController {

    @Autowired
    private MemberService memberService;

    // Get all members
    @GetMapping
    public List<Member> getAllMembers() {
        return memberService.getAllMembers();
    }

    // Get a single member by ID
    @GetMapping("/{id}")
    public ResponseEntity<Member> getMemberById(@PathVariable Long id) {
        Optional<Member> member = memberService.getMemberById(id);
        return member.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Add a new member
    @PostMapping
    public Member addMember(@RequestBody Member member) {
        return memberService.addMember(member);
    }

    // Update a member
    @PutMapping("/{id}")
    public ResponseEntity<Member> updateMember(@PathVariable Long id, @RequestBody Member updatedMember) {
        Optional<Member> existingMember = memberService.getMemberById(id);
        if (existingMember.isPresent()) {
            updatedMember.setId(id); // Ensure the ID matches the path variable
            Member member = memberService.updateMember(updatedMember);
            return ResponseEntity.ok(member);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Delete a member
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMember(@PathVariable Long id) {
        Optional<Member> existingMember = memberService.getMemberById(id);
        if (existingMember.isPresent()) {
            memberService.deleteMember(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Find member by email
    @GetMapping("/search")
    public ResponseEntity<Member> getMemberByEmail(@RequestParam String email) {
        Member member = memberService.getMemberByEmail(email);
        if (member != null) {
            return ResponseEntity.ok(member);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
