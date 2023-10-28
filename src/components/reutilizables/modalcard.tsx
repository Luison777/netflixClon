import Icon from "../reutilizables/icon";
interface ModalCardProps{
    seeMoreSeries?: boolean;
}
export default function ModalCard(props:ModalCardProps){
    
    return(
        <div id="modalCardContainer" className={` flex flex-wrap w-full justify-center gap-4 mt-4 ${props.seeMoreSeries? 'visible':'hidden'} `}>
            <div id="tarjetaModal1" className="mt-2 md:w-1/3 h-72 bg-neutral-800 rounded overflow-hidden max-w-[250px] min-w-[200px]">
                <img src="/header/tanjiro.png" alt="tanjiro" className="rounded h-28 w-full" />
                 <div className="flex relative p-3">
                    <p className="text-sm text-green-500">95% para ti <br />
                        <span className=' text-neutral-500 mr-2 border-2 rounded px-1 text-white'>TV-14</span>
                        <span className="text-white">2019</span>
                    </p>
                    <Icon id="plusModalCard" src="../logo/plus.svg" iconHeight="h-6" style="absolute right-2 border-2 h-8 w-8 hover:border-white border-neutral-400 bg-neutral-600/50"></Icon>
                </div>
                <div className="text-xs p-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
                    Sed euismod, ipsum a vestibulum facilisis, dolor quam auctor dolor, nec volutpat purus eros ut nisl.<br/>
                </div>
            </div>
            <div id="tarjetaModal2" className=" mt-2 md:w-1/3 h-72 bg-neutral-800 rounded overflow-hidden max-w-[250px] min-w-[200px]">
                <img src="/series/theWalkingDead.jpg" alt="tanjiro" className="rounded h-28 w-full" />
                <div className="flex relative p-3">
                    <p className="text-sm text-green-500">95% para ti <br />
                        <span className=' text-neutral-500 mr-2 border-2 rounded px-1 text-white'>TV-14</span>
                        <span className="text-white">2019</span>
                    </p>
                    <Icon id="plusModalCard" src="../logo/plus.svg" iconHeight="h-6" style="absolute right-2 border-2 h-8 w-8 hover:border-white border-neutral-400 bg-neutral-600/50"></Icon>
                </div>
                <div className="text-xs p-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
                    Sed euismod, ipsum a vestibulum facilisis, dolor quam auctor dolor, nec volutpat purus eros ut nisl.<br/>
                </div>
            </div>
            <div id="tarjetaModal3" className="mt-2 md:w-1/3 h-72 bg-neutral-800 rounded overflow-hidden max-w-[250px] min-w-[200px]">
                <img src="/series/avatar.jpg" alt="tanjiro" className="rounded h-28 w-full" />
                <div className="flex relative p-3">
                    <p className="text-sm text-green-500">95% para ti <br />
                        <span className=' text-neutral-500 mr-2 border-2 rounded px-1 text-white'>TV-14</span>
                        <span className="text-white">2019</span>
                    </p>
                    <Icon id="plusModalCard" src="../logo/plus.svg" iconHeight="h-6" style="absolute right-2 border-2 h-8 w-8 hover:border-white border-neutral-400 bg-neutral-600/50"></Icon>
                </div>
                    <div className="text-xs p-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
                        Sed euismod, ipsum a vestibulum facilisis, dolor quam auctor dolor, nec volutpat purus eros ut nisl.<br/>
                    </div>
                </div>
        </div>
    )
}