// components/IconButton.jsx
import { MailIcon } from '@heroicons/react/outline'

const IconButton = ({ label, href }) => {
  return (
    <a href={href} className="flex items-center space-x-2 p-2 border rounded">
      <MailIcon className="h-5 w-5 text-gray-500" />
      <span>{label}</span>
    </a>
  )
}

export default IconButton