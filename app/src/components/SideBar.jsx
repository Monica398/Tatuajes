import {
    Home,
    Brush,
    Plus,
    Users,
    CalendarDays,
    Clock,
    Ban,
    ClipboardList,
    User,
    LogOut,
    LogIn,
    UserPlus,
} from "lucide-react";

import {
    Link,
    useLocation,
    useNavigate,
} from "react-router-dom";

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
} from "@/components/ui/sidebar";

const menuOptions = [
    {
        label: "Inicio",
        path: "/",
        icon: Home,
        roles: ["Administrador", "Empleado", "Cliente"],
    },
    {
        label: "Servicios",
        path: "/tattoos",
        icon: Brush,
        roles: ["Administrador", "Empleado", "Cliente"],
    },
    {
        label: "Adicionales",
        path: "/adicionales",
        icon: Plus,
        roles: ["Administrador", "Empleado", "Cliente"],
    },
    {
        label: "Empleados",
        path: "/empleados",
        icon: Users,
        roles: ["Administrador"],
    },
    {
        label: "Citas",
        path: "/citas",
        icon: CalendarDays,
        roles: ["Administrador", "Empleado", "Cliente"],
    },
    {
        label: "Horarios",
        path: "/horarios",
        icon: Clock,
        roles: ["Administrador", "Empleado", "Cliente"],
    },
    {
        label: "Restricciones",
        path: "/restricciones",
        icon: Ban,
        roles: ["Administrador", "Empleado"],
    },
    {
        label: "Agenda diaria",
        path: "/agenda",
        icon: ClipboardList,
        roles: ["Administrador"],
    },
    {
        label: "Perfil",
        path: "/perfil",
        icon: User,
        roles: ["Administrador", "Empleado", "Cliente"],
    },
];

export function SideBar() {
    const location = useLocation();
    const navigate = useNavigate();

    const storedUser = localStorage.getItem("usuario");

    const user = storedUser
        ? JSON.parse(storedUser)
        : null;

    const role = user?.rol?.nombre || user?.rol;

    const visibleOptions = user
        ? menuOptions.filter((option) =>
            option.roles.includes(role)
        )
        : menuOptions.filter((option) =>
            ["Inicio", "Servicios","Adicionales"].includes(option.label)
        );

    function logout() {
        localStorage.removeItem("usuario");
        navigate("/login");
    }

    return (
        <Sidebar
            collapsible="icon"
            className="border-r border-[#d8d1c7]"
        >
            <SidebarHeader className="border-b border-[#d8d1c7] bg-[#f4efe7] p-4">
                <div className="flex items-center gap-3">
                    <span className="text-3xl text-[#c8655b]">
                        ✦
                    </span>

                    <div>
                        <h1 className="font-serif text-2xl font-bold tracking-wide text-[#171717]">
                            OKINAWA
                        </h1>

                        <p className="text-[9px] font-semibold tracking-[0.35em] text-[#4b4b4b]">
                            TATTOO STUDIO
                        </p>
                    </div>
                </div>
            </SidebarHeader>

            <SidebarContent className="bg-[#f4efe7]">
                <SidebarGroup>
                    <SidebarGroupLabel className="tracking-[0.2em] text-[#8b8176]">
                        {role || "Visitante"}
                    </SidebarGroupLabel>

                    <SidebarGroupContent>
                        <SidebarMenu>
                            {visibleOptions.map((option) => {
                                const Icon = option.icon;

                                const isActive =
                                    location.pathname === option.path;

                                return (
                                    <SidebarMenuItem key={option.path}>
                                        <Link
                                            to={option.path}
                                            className="block"
                                        >
                                            <SidebarMenuButton
                                                isActive={isActive}
                                                tooltip={option.label}
                                                className="text-[#222222] hover:bg-[#eadfd4] hover:text-[#c8655b] data-[active=true]:bg-[#eadfd4] data-[active=true]:text-[#c8655b]"
                                            >
                                                <Icon />
                                                <span>{option.label}</span>
                                            </SidebarMenuButton>
                                        </Link>
                                    </SidebarMenuItem>
                                );
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter className="border-t border-[#d8d1c7] bg-[#f4efe7] p-3">
                {user ? (
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton
                                onClick={logout}
                                tooltip="Cerrar sesión"
                                className="text-[#222222] hover:bg-[#eadfd4] hover:text-[#c8655b]"
                            >
                                <LogOut />
                                <span>Cerrar sesión</span>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                ) : (
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <Link
                                to="/login"
                                className="block"
                            >
                                <SidebarMenuButton
                                    tooltip="Iniciar sesión"
                                    className="text-[#222222] hover:bg-[#eadfd4] hover:text-[#c8655b]"
                                >
                                    <LogIn />
                                    <span>Iniciar sesión</span>
                                </SidebarMenuButton>
                            </Link>
                        </SidebarMenuItem>

                        <SidebarMenuItem>
                            <Link
                                to="/registro"
                                className="block"
                            >
                                <SidebarMenuButton
                                    tooltip="Registrarse"
                                    className="text-[#222222] hover:bg-[#eadfd4] hover:text-[#c8655b]"
                                >
                                    <UserPlus />
                                    <span>Registrarse</span>
                                </SidebarMenuButton>
                            </Link>
                        </SidebarMenuItem>
                    </SidebarMenu>
                )}
            </SidebarFooter>

            <SidebarRail />
        </Sidebar>
    );
}