// components/Card.jsx
export default function Card({ title, content, link }) {
    return (
      <div className="card">
        <h3>{title}</h3>
        <p>{content}</p>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            Leer más
          </a>
        )}
      </div>
    )
  }
  