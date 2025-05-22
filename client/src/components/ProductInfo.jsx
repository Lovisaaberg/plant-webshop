import { useParams } from "react-router-dom"
import { products } from "../productData"
import { appContentStore } from "../stores/appContentStore"
import { Button } from "../components/Button"

export const ProductInfo = () => {
  const { id } = useParams()
  const product = products.find((product) => product.id === Number(id))

  const { addToCart } = appContentStore()
  const { removeFromCart } = appContentStore()

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <div className="flex flex-col gap-4 p-4 text-left">
      <div className="flex flex-col lg:grid grid-cols-2 grid-rows-1 gap-4 items-center justify-center">
        <div className="col-start-2">
          <h2 className="text-2xl lg:text-4xl">{product.name}</h2>
          <p>{product.latin_name}</p>
        </div>
        <img
          src={product.image}
          alt={product.name}
          className="w-3xs h-[350px] object-cover lg:w-md lg:h-[500px] col-start-1 row-start-1 row-span-2"
        />
        <div className="col-start-2">
          <p>{product.price}</p>
          <Button text="Add to Cart" func={() => addToCart(product)} />
          <Button
            text="Remove from Cart"
            func={() => removeFromCart(product.id)}
          />
        </div>
      </div>

      <p>{product.description}</p>
    </div>
  )
}
