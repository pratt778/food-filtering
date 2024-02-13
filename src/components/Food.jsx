import { useState } from "react";
import { data } from "../data/data";
const Food = ()=>{
    const [meal, setMeal]= useState(data);

    const filterBy=(category)=>{
        setMeal(data.filter((prod)=>prod.category==category))
    }
    const filterPrice=(price)=>{
        setMeal(data.filter((item)=>item.price==price))
    }
    return <>
    <section className="w-full max-w-[1200px] mx-auto mt-10">
        <div className="foodcat-container px-5 flex flex-col gap-5 ">
            <div className="title">
                <h1 className="text-4xl font-bold text-center">Menu <span className="text-orange-600">Items</span> </h1>
            </div>
            <div className="filter flex flex-wrap gap-3 justify-between">

            <div className="filter-type">
                <h1 className="text-2xl font-bold"> Filter <span className="text-red-600">types</span></h1>
                <div className="flex flex-wrap gap-2 mt-2">

                <button className="bg-white text-orange-600 border-1 border-orange-600 hover:bg-orange-600 hover:text-white" onClick={()=>setMeal(data)}>All</button>
                <button className="bg-white text-orange-600 border-1 border-orange-600 hover:bg-orange-600 hover:text-white" onClick={()=>filterBy("burger")}>Burger</button>
                <button className="bg-white text-orange-600 border-1 border-orange-600 hover:bg-orange-600 hover:text-white" onClick={()=>filterBy("pizza")}>Pizza</button>
                <button className="bg-white text-orange-600 border-1 border-orange-600 hover:bg-orange-600 hover:text-white" onClick={()=>filterBy("salad")}>Salads</button>
                <button className="bg-white text-orange-600 border-1 border-orange-600 hover:bg-orange-600 hover:text-white" onClick={()=>filterBy("chicken")}>Chicken</button>
                </div>
            </div>
            <div className="filter-price">
                <h1 className="text-2xl font-bold">Filter <span className="text-red-600">Price</span> </h1>
                <div className="flex flex-wrap gap-2 mt-2">
                <button className="bg-white text-orange-600 border-1 border-orange-600 hover:bg-orange-600 hover:text-white" onClick={()=>filterPrice('$')}>$</button>
                <button className="bg-white text-orange-600 border-1 border-orange-600 hover:bg-orange-600 hover:text-white" onClick={()=>filterPrice('$$')}>$$</button>
                <button className="bg-white text-orange-600 border-1 border-orange-600 hover:bg-orange-600 hover:text-white" onClick={()=>filterPrice('$$$')}>$$$</button>
                <button className="bg-white text-orange-600 border-1 border-orange-600 hover:bg-orange-600 hover:text-white" onClick={()=>filterPrice('$$$$')}>$$$$</button>
                </div>
            </div>
            </div>
            <div className="foods grid sm:grid-cols-2 gap-2 justify-center md:grid-cols-3 lg:grid-cols-4 ">
                {meal.map((product,index)=>(
                    <div key={index} className="bg-white cursor-pointer w-full max-w-[400px] mt-2 shadow-2xl rounded-xl flex flex-col gap-2 p-2">

                        <img src={product.image} alt="product image" className=" w-full h-[250px] rounded-xl" />
                        <div>
                            <p className="text-lg font-bold">{product.name}</p>
                            <p className="text-lg font-bold">{product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
    </>
}

export default Food;