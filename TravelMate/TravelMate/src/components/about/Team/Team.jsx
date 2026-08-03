import "./Team.css";
import TeamData from "./TeamData";
import TeamCard from "./TeamCard";

const Team = () => {
  return (
    <section className="team">
      <div className="team-container">

        <div className="team-heading">
          <span>Our Team</span>

          <h2>Meet the People Behind TravelMate</h2>

          <p>
            Our experienced team is passionate about helping travelers
            explore the world with confidence.
          </p>
        </div>

        <div className="team-grid">
          {TeamData.map((member) => (
            <TeamCard
              key={member.id}
              member={member}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Team;