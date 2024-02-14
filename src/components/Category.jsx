import { categories } from "../data/data";
const Categorys= ()=>{
    return <>
    <section className="w-full max-w-[1200px] mx-auto mt-10">
        <div className="category-container w-full p-3">
            <div className="title">
                <h1 className="text-center text-black text-2xl font-bold sm:text-4xl">Top  <span className="text-orange-600">Rated </span>Menu <span className="text-orange-600">Items</span>  </h1>
            </div>
            <div className="category mt-8 flex flex-wrap justify-center  gap-4">
            {categories.map((foodlist)=>{
                return <div className="card flex items-center rounded-2xl bg-white  justify-around shadow-2xl lg:w-[350px] min-w-[250px] w-full max-w-[320px] p-2 cursor-pointer">
                    <h3 className="font-bold text-red-400 lg:text-2xl">{foodlist.name}</h3>
                    <img src={foodlist.image} alt="" className="w-[50%]"/>
                </div>
            }
            )}
            </div>
        </div>
    </section>
    
    
    </>
}

export default Categorys;