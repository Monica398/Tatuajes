export function NavBar(){
    return(
        <header className="border-b bg-white">
            <nav className="mx-auto flex max-w-6x1 items-center
            justify-between px-4 py-4
            ">
                <h1 className="text-xl fond-bold">
                    Sistema de Eventos
                </h1>
                    <div className="flex gap-4">
                        <a href="#" className="text-gray-300 hover:text-blue-600 transition-colors">Inicios</a>
                        <a href="#" className="text-gray-300 hover:text-blue-600 transition-colors">Eventos</a>
                        <a href="#" className="text-gray-300 hover:text-blue-600 transition-colors">Crear evento</a>
                    </div>
            </nav>
        </header>
    )
}