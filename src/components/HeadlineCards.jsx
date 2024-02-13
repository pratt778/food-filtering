import { CardHead } from "../data/data";

const HeadCard = () => {
    return <>
        <section className="w-full">
            <div className="headline-container w-full max-w-[1200px] mx-auto px-2 py-2 ">
            
                <div className="cards flex flex-wrap gap-7 mt-5 justify-center">
                    {CardHead.map((item) => {
                        return<div className="card relative text-white rounded-xl w-[320px]">
                            <div className="info bg-black/50 w-full rounded-xl h-full absolute py-2 px-2">
                                <h1 className="font-bold text-xl">{item.title}</h1>
                                <p className="font-bold text-md">{item.para}</p>
                            </div>
                            <button className="absolute bg-white font-bold bottom-7 ml-2 border-white rounded-3xl text-black border-2">Order Now</button>
                            <div className="imgages">
                                <img src={item.img} alt="" className="object-cover rounded-xl" />
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </section>
    </>
}

export default HeadCard;