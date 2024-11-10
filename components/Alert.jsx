// components/Alert.jsx
const Alert = ({ type, children }) => {
  const alertType = type === 'warning' ? 'alert-warning' : 'alert-info';
  return <div className={`alert ${alertType}`}>{children}</div>;
};

export default Alert;