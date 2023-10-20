import HomeIcon from '@mui/icons-material/Home';
import CalculateIcon from '@mui/icons-material/Calculate';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import BarChartIcon from '@mui/icons-material/BarChart';
import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';
import AddTaskIcon from '@mui/icons-material/AddTask';


export const sidebarNavItems = [
    {
        title: "Home",
        icon: <HomeIcon />,
        link: "/",
        section: "home"
    },
    {
        title: "Estimator",
        icon: <CalculateIcon />,
        link: "/estimator",
        section: "estimator"
    },
    {
        title: "Subtasks",
        icon: <AddTaskIcon />,
        link: "/subtasks",
        section: "subtasks"
    },
    {
        title: "Work Hours",
        icon: <NetworkCheckIcon />,
        link: "/workhours",
        section: "workhours"
    },
    {
        title: "Statistics",
        icon: <BarChartIcon />,
        link: "/statistics",
        section: "statistics"
    }
]
