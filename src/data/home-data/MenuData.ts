interface MenuItem {
    id: number;
    title: string;
    class_name?:string;
    link: string;
    has_dropdown: boolean;
    sub_menus?: {
        link: string;
        title: string;
    }[];
    menu_column?: {
        id: number;
        mega_title: string;
        mega_menus: {
            link: string;
            title: string;
        }[];
    }[]
}[];

const menu_data: MenuItem[] = [

    {
        id: 1,
        has_dropdown: false,
        title: "Home",
        link: "/",
    },
    {
        id: 2,
        has_dropdown: false,
        title: "Listing",
        class_name:"mega-dropdown-sm",
        link: "/listing",
    },
    {
        id: 3,
        has_dropdown: true,
        title: "Pages",
        class_name:"mega-dropdown-sm",
        link: "#",
        menu_column: [
            {
                id: 1,
                mega_title: "Essential",
                mega_menus: [
                    { link: "/about_us", title: "About us" },
                    { link: "/agency", title: "Agency" },
                    { link: "/agency_details", title: "Agency Details" },
                    { link: "/agent", title: "Agent" },
                    { link: "/agent_details", title: "Agent Details" },
                ]
            },
            {
                id: 2,
                mega_title: "Features",
                mega_menus: [
                    { link: "/project", title: "Project" },
                    { link: "/project_details", title: "Project Details" },
                    { link: "/service", title: "Service" },
                    { link: "/service_details", title: "Service Details" },
                ]
            },
            {
                id: 3,
                mega_title: "Others",
                mega_menus: [
                    { link: "/compare", title: "Property Compare" },
                    { link: "/pricing", title: "Pricing" },
                    { link: "/contact", title: "Contact Us" },
                    { link: "/faq", title: "FAQ's" }
                ]
            },
        ]
    },
    {
        id: 4,
        has_dropdown: false,
        title: "Blog",
        link: "/blog",
        sub_menus: [
           
        ],
    },
];
export default menu_data;
