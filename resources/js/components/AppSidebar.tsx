import { NavFooter } from '@/components/NavFooter';
import { NavMain } from '@/components/NavMain';
import { NavUser } from '@/components/NavUser';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/Sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { ClipboardList, Dices, Gamepad, LayoutGrid, SquareUser, Swords, Tv, Users } from 'lucide-react';
import AppLogo from './AppLogo';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
        icon: LayoutGrid,
    },
    {
        title: 'Players',
        href: '/players',
        icon: Users,
    },
    {
        title: 'Avatars',
        href: '/avatars',
        icon: SquareUser,
    },
    {
        title: 'Categories',
        href: '/categories',
        icon: Swords,
    },
    {
        title: 'Questions',
        href: '/questions',
        icon: ClipboardList,
    },
    {
        title: 'Rooms',
        href: '/rooms',
        icon: Tv,
    },
    {
        title: 'Games',
        href: '/games',
        icon: Gamepad,
    },
];

const footerNavItems: NavItem[] = [
    {
        title: 'Web',
        href: 'https://github.com/laravel/react-starter-kit',
        icon: Dices,
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
