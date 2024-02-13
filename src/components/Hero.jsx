const Hero = ()=>{
    return <>
        <section className="w-full h-[900px] bg-center filter brightness-50 bg-cover bg-[url('https://img.freepik.com/premium-photo/amazing-delicious-cheese-burger_727939-299.jpg')]">
            <div className="hero-container h-full p-2 w-full max-w-[1200px] mx-auto">
                <div className="img-info h-full  text-white  ">
                    <h1 className=" mt-20 filter brightness-500 lg:text-7xl text-center xl:text-8xl  sm:mt-0 text-4xl sm:text-5xl md:text-6xl  font-bold">The <span className="text-orange-600">Best <br></br> Food</span> Delivered</h1>
                </div>
            </div>
        </section>
    </>
}

export default Hero;