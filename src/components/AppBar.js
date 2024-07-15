import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext';

export function ButtonAppBar() {
    const { cart } = useContext(CartContext);
    const navigate = useNavigate();
    // compute cart quantity
    const cartQty = cart.reduce((total, item) => total + item.quantity, 0)
    // console.log(cartQty)
    return (
        <Box sx={{ flexGrow: 1, marginBottom: { xs: 2, sm: 4, md: 6, xl: 8 } }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="home"
                        sx={{ mr: 2 }}
                        onClick={() => navigate("/")}
                    >
                        <HomeIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Style in Shop
                    </Typography>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="cart"
                        sx={{ mr: 2 }}
                        onClick={() => navigate("/cart")}
                    >
                        <Badge badgeContent={cartQty} color="secondary">
                            <ShoppingCartIcon />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
