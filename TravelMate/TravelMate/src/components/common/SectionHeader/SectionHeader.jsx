import "./SectionHeader.css";

const SectionHeader = ({ tag, title, subtitle }) => {
  return (
    <div className="section-header">
      {tag && <p className="section-tag">{tag}</p>}

      <h2 className="section-title">{title}</h2>

      {subtitle && (
        <p className="section-subtitle">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;