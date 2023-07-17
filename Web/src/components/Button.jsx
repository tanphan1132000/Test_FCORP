
const Button = ({ func, children }) => {
    return (
        <>
            <button className="w-fit mt-2 border-2 border-sky-500 rounded-full px-2" onClick={() => func()}>
                {children}
            </button>
        </>
    )
}

export default Button;