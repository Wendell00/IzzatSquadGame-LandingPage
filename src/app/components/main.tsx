export default function Main() {
    return (
        <main className="w-screen h-screen flex main-2 fixed max-w-[1920px] max-h-[1080px] mx-auto my-0">
            <div className="w-[100%] h-100 flex relative z-30 main-2">
                <div className="img flex items-center justify-center w-[40%]">
                    <img src="./logo.png" className="h-[486px] w-auto logo" />
                </div>
                <div className="w-[50%] ml-[7%] h-100 flex justify-center items-center relative">
                    <div className="relative z-20 ">
                        <h2 className="font-['Red Hat Display'] text-[#242424] text-start italic text-[7rem] main-h2 ">TORNEIO</h2>
                        {/* <h2 className="font-['Red Hat Display'] text-[#242424] text-center italic main-h2 ">DE CS</h2> */}
                        <div className="w-100 flex items-end justify-center mt-4 relative">
                            <button className="game-button font-['Red Hat Display'] font-bold">Jogue Agora!</button>
                            <div className="arrow mt-10">
                                <img src="./arrow-down.png" alt="" className="arrow-down"/>
                            </div>
                        </div>
                    </div>
                    <img src="./soldier.png" className="opacity-10 absolute right-[-220px] z-10"/>
                </div>
            </div>
            <div className="main w-screen h-screen fixed z-20 opacity-[70%] flex">
            </div>
            <video id="video-background" loop muted autoPlay={true} className="w-[100%] h-auto fixed z-10 max-w-[1920px] max-h-[1080px]">
                <source src="./video-bg.mp4" type="video/webm"/>
            </video> 
        </main>
    )
  }
  