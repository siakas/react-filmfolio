import { MainNavigationListItem } from "@/common/components/layout/header/MainNavigationListItem";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/common/components/ui/navigation-menu";
import { MAIN_NAVIGATION_ITEMS } from "@/common/consts/mainNavigationItems";

const menuListStyle =
  "grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]";

export const MainNavigation = () => {
  const menuItems = MAIN_NAVIGATION_ITEMS;

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {menuItems.map((item) => (
          <NavigationMenuItem key={item.id}>
            <NavigationMenuTrigger>{item.triggerLabel}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className={menuListStyle}>
                {item.items.map((subItem) => (
                  <MainNavigationListItem
                    key={subItem.id}
                    href={subItem.href}
                    title={subItem.title}
                  >
                    {subItem.description}
                  </MainNavigationListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
