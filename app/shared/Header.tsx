import { cssClass } from "../css-classes";

export default function Header() {
    return (
        <header className="glass-effect fixed top-6 left-1/2 -translate-x-1/2 
                   w-[90%] max-w-6xl 
                   backdrop-blur-sm
                   bg-white/10 pl-6 pr-2 rounded-full 
                   flex justify-between items-center py-2 z-50">
            <h1 className="font-bold text-[18px]">Website</h1>

            <nav>
                <ul className="flex gap-10">
                    <li>About</li>
                    <li>Blogs</li>
                    <li>Contact</li>
                    <li>Portfolio</li>
                    <li>Services</li>
                </ul>
            </nav>

            <button type="button" className={cssClass.primaryButton + " py-2!"}>Contact</button>
        </header>
    );
}