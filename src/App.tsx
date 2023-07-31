import React from "react";
import { BrowserRouter as Router, Routes, Route, Link as RouterLink, LinkProps as RouterLinkProps} from "react-router-dom";
import "./styles.css";
import Home from "./Home";
import Species from "./Species";
import People from './People'
import {
    AppBar,
    Box,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemIcon, ListItemText,
    Toolbar,
    Typography
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import CategoryIcon from '@mui/icons-material/Category';
interface ListItemLinkProps {
    icon?: React.ReactElement;
    primary: string;
    to: string;
}
export default function App() {
    const [menuOpen, setMenuOpen] = React.useState(false);
    const Link = React.forwardRef<HTMLAnchorElement, RouterLinkProps>(function Link(
        itemProps,
        ref,
    ) {
        return <RouterLink ref={ref} {...itemProps} role={undefined} />;
    });
    
    function ListItemLink(props: ListItemLinkProps) {
        const { icon, primary, to } = props;
        
        return (
            <li>
                <ListItem component={Link} to={to}>
                    {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
                    <ListItemText primary={primary} />
                </ListItem>
            </li>
        );
    }
    return (
        <Router>
            <div className="App">
                <nav>
                    <Box sx={{ flexGrow: 1 }}>
                        <AppBar position="static">
                            <Toolbar>
                                <IconButton
                                    size="small"
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    sx={{ mr: 2 }}
                                    onClick={() => setMenuOpen(!menuOpen)}
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                    Star Wars Data Page
                                </Typography>
                                <Drawer
                                    anchor={"left"}
                                    open={menuOpen}
                                    onClose={() => setMenuOpen(!menuOpen)}
                                >
                                    <List>
                                        <ListItemLink to="/" primary="Home" icon={<HomeIcon />} />
                                        <ListItemLink to="/species" primary="Species" icon={<CategoryIcon />} />
                                        <ListItemLink to="/people" primary="People" icon={<PeopleIcon />} />
                                    </List>
                                </Drawer>
                            </Toolbar>
                        </AppBar>
                    </Box>
                </nav>
                
                {/* Use 'Routes' to wrap multiple 'Route' components */}
                <Routes>
                    <Route path="/species" element={<Species />} />
                    <Route path="/people" element={<People />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </Router>
    );
}
