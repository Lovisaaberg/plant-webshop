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

  const cart = appContentStore((state) => state.cart)
  const quantity = cart.find((item) => item.id === product.id)?.quantity || 0
  const { addToCart } = appContentStore()
  const { changeQuantityInCart } = appContentStore()
  const { removeFromCart } = appContentStore()

  const changeQuantity = (event) => {
    event.preventDefault()
    const newQuantity = Number(event.target.value)
    if (newQuantity >= 0 && newQuantity <= 100) {
      if (newQuantity === 0) {
        removeFromCart(product.id)
      } else {
        changeQuantityInCart(product, newQuantity)
      }
    }
  }

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <div className="flex flex-col gap-4 p-4 text-left">
      <div className="flex flex-col lg:grid grid-cols-2 grid-rows-1 gap-4 items-center justify-center">
        <div className="col-start-2 w-3xs">
          <h2 className="text-[28px] lg:text-4xl font-semibold flex justify-between">
            {product.name}
            <img src={Heart} alt="Add to favorites" className="h-[40px] mt-1" />
          </h2>
          <p className="font-roboto font-light italic text-xl -mt-1">
            {product.latin_name}
          </p>
        </div>
        <img
          src={product.image}
          alt={product.name}
          className="w-3xs h-[350px] object-cover lg:w-md lg:h-[500px] col-start-1 row-start-1 row-span-2"
        />
        <div className="flex col-start-2 w-3xs items-center gap-2">
          <img
            src={Light}
            alt="Icon for light preference"
            className="h-[40px]"
          />
          <p className="text-base">
            Light: <br /> {product.light}
          </p>
        </div>
        <div className="flex col-start-2 w-3xs items-center gap-2">
          <img src={Water} alt="Icon for water needs" className="h-[40px]" />
          <p className="text-base">
            Water: <br /> {product.water}
          </p>
        </div>
        <div className="w-3xs col-start-2 order-1 lg:order-0">
          <div className="flex justify-between gap-2">
            <p className="text-2xl font-semibold">{product.price} kr</p>
            <label className="flex items-center gap-2">
              <p className="text-lg">Quantity:</p>
              <input
                type="number"
                name="quantity"
                min="0"
                max="100"
                value={quantity}
                onChange={(event) => changeQuantity(event)}
                className="w-[80px] h-[40px] border border-gray-300 text-center"
              ></input>
            </label>
          </div>
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
        <div className="w-3xs flex flex-col gap-1 mt-1">
          <h3 className="text-2xl font-bold">Plant description</h3>
          <p className="text-lg font-light">{product.description}</p>
        </div>
      </div>
    </div>
  )
}
