export const navbars = [
  {
    path: "/",
    label: "home",
    children: [],
  },
  {
    path: "/news",
    label: "news",
    children: [],
  },
  {
    path: "/contact",
    label: "contact",
    children: [],
  },
  {
    path: "/solution",
    label: "solutions",
    children: [
			{
				path: "/connection",
				label: "connection",
			},
			{
				path: "/relation",
				label: "relation",
			}
		],
  },
  {
    path: "/service",
    label: "service",
    children: [
			{
				path: "/connection",
				label: "connection",
			},
			{
				path: "/relation",
				label: "relation",
			}
		],
  },
];
