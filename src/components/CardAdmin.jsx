import { Link } from "react-router-dom"

function CardAdmin({title, icon, icon_bg, link, action}) {
  return (
    <>
        <Link to={`/${link}`}>
            <div className="w-[330px] h-[100px] rounded-lg p-4 bg-white shadow-lg cursor-pointer hover:scale-105">
                <div className="flex items-center gap-4 pb-2.5">
                    <span className={`block rounded-full w-[60px] h-[60px] text-2xl p-[18px] text-white ${icon_bg}`}>{icon}</span>
                    <div>
                        <h4 className="text-lg text-title-color font-bold">{title}</h4>
                        <span className="text-sm text-text-color font-light">{action}</span>
                    </div>
                </div>
            </div>
        </Link>
    </>
  )
}

export default CardAdmin