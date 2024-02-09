import { CardHead } from "../data/data";

const HeadCard = () => {
    return <>
        <section className="w-full">
            <div className="headline-container w-full max-w-[1200px] mx-auto">
            
                <div className="cards">
                    {CardHead.map((item) => {
                        return <div className="card">
                            <div className="info">
                                <h1>{item.title}</h1>
                                <p>{item.para}</p>
                            </div>
                            <button>Order Now</button>
                            <div className="imgages">
                                <img src={item.img} alt="" />
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </section>
    </>
}

export default HeadCard;