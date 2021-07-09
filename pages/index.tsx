import { useEffect, useRef, useState } from "react"

export default function Home() {
  const [image, setImage] = useState<File>()
  const [preview, setPreview] = useState<string>()
  const fileInputRef = useRef<HTMLInputElement>()

  useEffect(() => {
    if (image) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(image)
    } else {
      setPreview(null)
    }
  }, [image])

  return (
    <div         
      style={{
        minHeight: "100vh",
        padding: "0 0.5rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form>
        {preview ? (
          <img 
            src={preview} 
            style={{ 
              objectFit: "cover",
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              cursor: "pointer", 
            }} 
          />
        ) : (
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
        )}  
        <input 
          style={{ 
            display: "none" 
          }}
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={(event) => {
            const file = event.target.files[0]

            if (file && file.type.substr(0, 5) === "image") {
              setImage(file)
            } else {
              setImage(null)
            }
          }} 
        />
      </form>
    </div>
  )
}
