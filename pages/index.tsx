import { useRef } from "react"

export default function Home() {
  const fileInputRef = useRef<HTMLInputElement>()

  return (
    <div>
      <form 
        style={{ 
          display: "flex",
          justifyContent: "center",
        }}>
        <button 
          style={{ 
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            cursor: "pointer",
          }}
          onClick={(event) => {
            event.preventDefault()
            fileInputRef.current.click()
          }}
        >
            Adicionar Imagem
          </button>
        <input type="file" style={{ display: "none" }} ref={fileInputRef} />
      </form>
    </div>
  )
}
