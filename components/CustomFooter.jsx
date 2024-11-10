// components/CustomFooter.jsx
import { useConfig } from 'nextra-theme-docs'

const CustomFooter = () => {
  const config = useConfig()

  return (
    <footer>
      <p>{config.footer.text}</p>
      <a href={config.project.link}>Proyecto en GitHub</a>
    </footer>
  )
}

export default CustomFooter