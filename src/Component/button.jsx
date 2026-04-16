import './button.css'

const MyButton = () => {

    const Buttonstyle = 'bg-gray-300 rounded-2xl cursor-pointer select-none active:translate-y-1 active:shadow-none active:bg-gray-400 text-blue-950 text-[50px] shadow-[0_8px_0_0_#bdc3c7]';
    
    const movement = (command) => console.log(command);
    return(
        <>
        <div className='flex items-center justify-center h-screen bg-blue-900'>
            <div className='grid grid-cols-[120px_120px_120px] grid-rows-[120px_120px_120px] gap-4'>
                <div />
                <button className={Buttonstyle} onClick={() => movement("forward")}>W</button>
                <div />
                <button className={Buttonstyle} onClick={() => movement("left")}>A</button>
                <div className='bg-blue-800 m-3 rounded-full shadow-blue-800 '/>
                <button className={Buttonstyle} onClick={() => movement("right")}>D</button>
                <div />
                <button className={Buttonstyle} onClick={() => movement("back")}>S</button>
                <div />
            </div>
        </div>
        </>
    )
}

export default MyButton