export default function MemberCard({ member }) {
  return (
    <tr>
      <td>{member.id}</td>
      <td>{member.name}</td>
      <td>{member.email}</td>
    </tr>
  );
}
