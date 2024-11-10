// components/Callout.js
export default function Callout({ children, type = 'info' }) {
    return (
      <div className={`callout ${type}`}>
        {children}
      </div>
    )
  }
  