import { Box, Button, Card, CardContent, CardMedia, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import { useContext, useState } from 'react';
import { CartContext } from './CartContext';

export function CartItem({ item }) {
    const { removeFromCart, updateItemQuantity } = useContext(CartContext);
    const [quantity, setQuantity] = useState(item.quantity);

    const handleQuantityChange = (e) => {
        const newQuantity = parseInt(e.target.value);
        updateItemQuantity(item.id, newQuantity);
        setQuantity(newQuantity);
    };

    const handleRemove = () => {
        removeFromCart(item.id);
    };

    const subTotal = item.price * quantity;

    return (
        <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: '#f9f9f9' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', flexGrow: 1 }}>
                <CardMedia
                    component="img"
                    image={item.image}
                    alt={item.title}
                    style={{ width: 150, height: 150, objectFit: 'contain' }}
                />
                <CardContent sx={{ flex: '1 0 auto', minWidth: 0 }}>
                    <Typography gutterBottom variant="h5" component="div">
                        {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" fontSize={'1.1rem'}>
                        Price: ${item.price.toFixed(2)}
                    </Typography>
                    <FormControl fullWidth sx={{ marginTop: '1rem' }}>
                        <InputLabel id={`quantity-label-${item.id}`}>Quantity</InputLabel>
                        <Select
                            labelId={`quantity-label-${item.id}`}
                            id={`quantity-label-select-${item.id}`}
                            value={quantity}
                            label="Quantity"
                            onChange={handleQuantityChange}
                        >
                            {[1, 2, 3, 4, 5].map((value) => (
                                <MenuItem key={value} value={value}>
                                    {value}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '1rem' }}>
                        Sub-total: ${subTotal.toFixed(2)}
                    </Typography>
                </CardContent>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', padding: '16px' }}>
                <Button onClick={handleRemove} variant="outlined" color="error">
                    Remove
                </Button>
            </Box>
        </Card>
    );
}
