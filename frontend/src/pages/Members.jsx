import { useEffect, useState } from "react";
import { getMembers } from "../services/memberService";
import MemberCard from "../components/MemberCard";
import Navbar from "../components/Navbar";

export default function Members() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    getMembers().then(setMembers);
  }, []);

  return (
    <div>
      <Navbar />
      <h2>Members</h2>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {members.map(member => (
            <MemberCard key={member.id} member={member} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
