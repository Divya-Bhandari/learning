const TeamCard = ({ member }) => {
  return (
    <div className="team-card">
      <img
        src={member.image}
        alt={member.name}
      />

      <h3>{member.name}</h3>

      <p>{member.role}</p>
    </div>
  );
};

export default TeamCard;