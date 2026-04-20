import { useEffect, useState } from "react"
import { signInWithGoogle } from "../lib/auth"

export default function Login() {
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get("error")) {
      setError(params.get("error_description")?.replace(/\+/g, " ") ?? "Unknown error")
    }
  }, [])

  return (
    <div>
      <h1>Login</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={signInWithGoogle} className="px-4 py-2 m-2 bg-blue-500 text-white rounded">
        Login with Google
      </button>
    </div>
  )
}