// components/CustomFooter.jsx
import { useConfig } from 'nextra-theme-docs'

const CustomFooter = () => {
  const config = useConfig()

  return (
    <footer>
      {config.footer?.text && <p>{config.footer.text}</p>}
      {config.project?.link && <a href={config.project.link}>Proyecto en GitHub</a>}
    </footer>
  )
}

export default CustomFooter