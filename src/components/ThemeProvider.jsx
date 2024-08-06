import { useSelector } from "react-redux";



const ThemeProvider = ({ children }) => {

    const { theme } = useSelector((state) => state.themeToggle)


    return (
        <>
            <div className={`transition-all duration-1000 ${theme === 'light' ? 'bg-blue-50 text-gray-800' : 'bg-zinc-800 text-gray-200'}`}>
                {children}
            </div>
        </>
    )
}

export default ThemeProvider