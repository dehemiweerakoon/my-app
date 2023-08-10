import React, { useState,useEffect } from 'react'
import { useNavigate,Navigate } from 'react-router-dom'

const Cart = () => {

    const carts = JSON.parse(localStorage.getItem('cart')) || []
    const [total,setTotal]=useState(0) 
    useEffect(()=>{
        const total=carts.reduce((acc,item)=>{
            return acc+(item.price*item.quantity)
            
        },0 )
        setTotal(total);
    },[])
    if (carts.length == 0) return <div>no item added</div>
   
    let handleInc = (id) => {
        console.log("l");

        const updateCart = carts.map(item => {
            if (item.id == id) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            }
            return item
        })
        localStorage.setItem('cart', JSON.stringify(updateCart));

        alert("item added");

    }

    const handleRemove = (id) => {
        console.log("l");

    const update=carts.filter(item=>item.id!==id);
    localStorage.setItem('cart', JSON.stringify(update));
    window.location.reload();
 
    }
    return (

<section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <div className="mx-auto max-w-3xl">
      <header className="text-center">
        <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">Your Cart</h1>
      </header>

      <div className="mt-8">
       {
        carts?.map(cart => {
            return (
                <li className="flex items-center gap-4 text-xl shadow-xl p-3 bg-slate-200">
                    <img
                        src={cart?.thumbnail}
                        alt=""
                        className="h-16 w-16 rounded object-cover"
                    />

                    <div>
                        <h3 className=" text-gray-900 text-xlfont-bold">{cart?.title}</h3>
                      
                        <dl className="mt-0.5 space-y-px text-[15px] text-gray-600">
                            <div>
                                <dt className="inline text-l">Brand:</dt>
                                <dd className="inline text-l">{cart?.brand}</dd>
                            </div>

                            <div>
                                <dt className="inline  ">Type:</dt>
                                <dd className="inline text-l">{cart?.category}</dd>
                            </div>
                        </dl>
                    </div>

                    <div className="flex flex-1 items-center justify-end gap-2">
                    <h3 className="text-sm text-gray-900 font-bold">${cart?.price}</h3>
                        <form>
                            <label for="Line3Qty" className="sr-only">  </label>

                            <input
                                type="number"
                                min="1"
                                value={cart?.quantity}
                                id="Line3Qty"
                                className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                            />
                        </form>

                        <button className="text-gray-600 transition hover:text-red-600" onClick={()=>handleRemove(cart?.id)}>
                            <span className="sr-only">Remove item</span>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="h-4 w-4"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                            </svg>
                        </button>
                    </div>
                </li>
            )
        })

    }
        <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
          <div className="w-screen max-w-lg space-y-4">
            <dl className="space-y-0.5 text-sm text-gray-700">
              <div className="flex justify-between">
                <dt>Subtotal</dt>
                <dd>${total}</dd>
              </div>

              <div className="flex justify-between">
                <dt>VAT</dt>
                <dd>$25</dd>
              </div>

              <div className="flex justify-between">
                <dt>Discount</dt>
                <dd>-$20</dd>
              </div>

              <div className="flex justify-between !text-base font-medium">
                <dt>Total</dt>
                <dd>${total-20}</dd>
              </div>
            </dl>

            <div className="flex justify-end">
              <span
                className="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="-ms-1 me-1.5 h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                  />
                </svg>

                <p className="whitespace-nowrap text-xs">2 Discounts Applied</p>
              </span>
            </div>

            <div className="flex justify-end">
              <a
                href="#"
                className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
              >
                Checkout
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}

export default Cart