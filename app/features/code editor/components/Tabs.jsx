import Tab from "../elements/Tab";

const navItems = [
    {name: 'Me', active: false}, 
    {name: 'Joshua', active: true}, 
    {name: 'Queen', active: false}, 
    {name: 'Zeus', active: false}, 
    {name: 'Frosh', active: false}, 
    {name: 'Loco', active: false}
  ];

export default function Tabs() {
    
    return (
        <nav className="flex flex-nowrap gap-5 truncate py-3 px-5 border-b">
            {navItems.map((navitem)=>(
                <Tab item={navitem} />
            ))}
        </nav>
    )
}