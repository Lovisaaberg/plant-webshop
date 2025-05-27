import { useParams } from "react-router-dom"
import { products } from "../productData"
import { appContentStore } from "../stores/appContentStore"
import { Button } from "../components/Button"
import Heart from "/icons/heart-mobile-menu.png"
import Light from "/icons/light-icon.png"
import Water from "/icons/water-icon.png"

export const ProductInfo = () => {
  const { id } = useParams()
  const product = products.find((product) => product.id === Number(id))

  const { addToCart } = appContentStore()
  // const { removeFromCart } = appContentStore()

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <div className="flex flex-col gap-4 p-4 text-left">
      <div className="flex flex-col lg:grid grid-cols-2 grid-rows-1 gap-4 items-center justify-center">
        <div className="col-start-2 w-3xs">
          <h2 className="text-[28px] lg:text-4xl font-semibold flex justify-between">
            {product.name}
            <img src={Heart} alt="Add to favorites" className="h-[40px]" />
          </h2>
          <p className="font-roboto font-light italic text-xl">
            {product.latin_name}
          </p>
        </div>
        <img
          src={product.image}
          alt={product.name}
          className="w-3xs h-[350px] object-cover lg:w-md lg:h-[500px] col-start-1 row-start-1 row-span-2"
        />
        <div className="flex col-start-2 w-3xs">
          <img
            src={Light}
            alt="Icon for light preference"
            className="h-[40px]"
          />
          <p>Light: <br/> {product.light}</p>
        </div>
        <div className="flex col-start-2 w-3xs">
          <img src={Water} alt="Icon for water needs" className="h-[40px]" />
        </div>
        <div className="col-start-2 w-3xs order-1 lg:order-0">
          <p>{product.price}</p>
          <Button
            text="Add to Cart"
            func={() => addToCart(product)}
            className="
            w-[180px] 
            h-[40px] 
            bg-[#D79E00] 
            text-white 
            rounded-[10px] 
            shadow-md 
            mt-[24px]"
          />
        </div>
        <p className="w-3xs">{product.description}</p>
      </div>
    </div>
  )
}
