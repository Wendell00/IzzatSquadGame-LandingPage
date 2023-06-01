export default function Main() {
    return (
        <main className="w-screen h-screen flex main-2 fixed max-w-[1920px] max-h-[1080px] mx-auto my-0">
            <div className="w-[100%] h-100 flex relative z-30 main-2">
                <div className="img flex items-center justify-center w-[40%]">
                    <img src="./logo.png" className="h-[486px] w-auto logo" />
                </div>
                <div className="w-[50%] ml-[10%] h-100 flex justify-center items-center">

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
  