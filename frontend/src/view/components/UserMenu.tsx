export function UserMenu( {onSignout}: any){
    return (
        <div
        className="bg-teal-100 rounded-full w-12 h-12 flex items-center justify-center"
        onClick={onSignout}
        >
            <span className="text-sm tracking-[-0.5px] text-teal-600 font-medium">
               MA
            </span>
        </div>
    )
}
