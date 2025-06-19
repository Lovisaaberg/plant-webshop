import { useEffect, useState } from "react"
import { supabase } from "../supabase"

export const ImageGrid = () => {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const filenames = [
      "1.jpg",
      "2.jpg",
      "3.jpg",
      "4.jpg",
      "5.jpg",
      "6.jpg",
      "7.jpg",
      "8.jpg",
      "9.jpg",
      "10.jpg",
      "11.jpg",
      "12.jpg",
      "13.jpg",
      "14.jpg",
    ]

    const urls = filenames.map((name) => {
      const { data } = supabase.storage.from("images-grid").getPublicUrl(name)
      return {
        name,
        url: data?.publicUrl || "",
      }
    })

    setImages(urls)
    setLoading(false)
  }, [])

  if (loading) return <p>Loading images...</p>

  return (
    <section
      className="p-6 mt-[120px] 
    md:px-[20px]"
    >
      <h2
        className="
      text-[28px] 
      md:text-[40px] 
      font-semibold 
      mb-[60px]"
      >
        Inspiration
      </h2>
      <div
        className="
      columns-2 
      md:columns-3 
      lg:columns-4 
      gap-4 
      space-y-4"
      >
        {images.map((img) => (
          <img
            key={img.name}
            src={img.url}
            alt={`Inspiration picture of plant number ${img.name.replace(
              ".jpg",
              ""
            )}`}
            className="
            mb-4 
            object-cover 
            rounded-lg 
            hover:scale-103 
            transition-transform 
            duration-150"
          />
        ))}
      </div>
    </section>
  )
}
