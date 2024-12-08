//useSession es un Hook de react, la manera para comprobar si el usuario está autenticado o no
//useSession devuelve un objeto con dos propiedades: data y status
//data puede tener tres valores: null, undefined o un objeto con la información del usuario (Session)
//status es un enum con tres posibles session states: loading, ready y unauthenticated

//Usando el client side sigin() asegura que el usuario acaben de vuelta en la página que estaban antes de iniciar sesión
//Además, manejará el token CSRF automáticamente cuando se inicie con mail.
import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session, status: status } = useSession()
  if (status === "loading") {
    return <p>Loading...</p>
  }
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}
