import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { CartContext } from "./CartContext";
import { CartItem } from "./CartItem";
import Box from "@mui/material/Box";

export function CartPage() {
    const { cart } = useContext(CartContext);
    const navigate = useNavigate();
    const computeTotalAmount = () => {
        return cart.reduce((total, item) => total + (item.quantity * item.price), 0);
    };

    if (cart.length === 0) {
        return (
            <Box maxWidth="xl" sx={{ marginY: '20px', textAlign: 'center' }}>
                <Typography variant="h2" gutterBottom>
                    No items in cart
                </Typography>
                <Grid container justifyContent="center">
                    <Grid item>
                        <Button
                            color="primary"
                            variant="contained"
                            size="large"
                            onClick={() => navigate('/')}
                        >
                            Continue Shopping
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        );
    }

    return (
        <Container maxWidth="xl" sx={{ marginY: '20px' }}>
            <Grid container spacing={2}>
                {cart.map(item => (
                    <Grid item xs={12} key={item.id}>
                        <CartItem item={item} />
                    </Grid>
                ))}
            </Grid>
            <Container sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', marginRight: '1rem' }}>
                    Total: ${computeTotalAmount().toFixed(2)}
                </Typography>
                {/* Checkout button */}
                <Button variant="contained" color="primary">
                    Proceed to Checkout
                </Button>
            </Container>
        </Container>
    );
}
