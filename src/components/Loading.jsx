import loading from "../assets/loading.svg"

function Loading() {
  return (
    <div className="w-full h-[500px] py-[180px]">
        <img className="w-[60px] mx-auto bg-transparent" src={loading} alt="loading" />
    </div>
  )
}

export default Loading