export default function Tab({item}) {
    return (
        <div className={`text-xs py-2 px-3 rounded font-semibold ${item.active ? "text-blue-800 bg-blue-300/10 scale-105 border shadow-lg" : "hover:text-blue-800 hover:bg-blue-300/10 opacity-40 hover:opacity-100"} cursor-pointer active:scale-90 select-none`}>{item.name}</div>
    )
}