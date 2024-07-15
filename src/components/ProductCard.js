import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Rating from '@mui/material/Rating';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useContext, useState } from 'react';
import { CartContext } from './CartContext';

export function ProductCard({ data }) {
    const { cart, addToCart } = useContext(CartContext);
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (e) => {
        setQuantity(parseInt(e.target.value));
    };

    const handleAddToCart = () => {
        addToCart({ ...data, quantity });
    };

    const isInCart = () => {
        return cart.some(item => item.id === data.id);
    };

    return (
        <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: '#f9f9f9' }}>
            <div style={{ position: 'relative', paddingBottom: '56.25%' }}>
                <CardMedia
                    component="img"
                    image={data.image}
                    alt={data.title}
                    style={{ 
                        position: 'absolute', 
                        top: 0, 
                        left: 0, 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'contain',
                        backgroundColor: '#ffff'
                    }}
                />
            </div>
            <CardContent sx={{ flexGrow: 1, textAlign: 'left', fontSize: '1.2rem' }}>
                <Typography gutterBottom variant="h5" component="div">
                    {data.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '1.2rem' }}>
                    {data.description}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '1.2rem' }}>
                    {data.price}
                </Typography>
                <div style={{ display: 'flex', fontSize: '1rem' }}>
                    <Stack spacing={1}>
                        <Rating
                            name="half-rating-read"
                            value={data.rating.rate}
                            defaultValue={0}
                            precision={0.5}
                            readOnly
                        />
                    </Stack>
                    <Typography variant="body2" color="text.secondary" sx={{ marginLeft: 1 }}>
                        ({data.rating.count} ratings)
                    </Typography>
                </div>

            
            </CardContent>
            {!isInCart(data.id) && (
                    <FormControl sx={{ marginY: '2.0rem', paddingX: '1.5rem'}}>
                        <InputLabel id="quantity-label">Quantity</InputLabel>
                        <Select
                            labelId="quantity-label"
                            id="quantity-label-select"
                            value={quantity}
                            label="Quantity"
                            onChange={handleQuantityChange}
                        >
                            {[1, 2, 3, 4, 5].map((value) => (
                                <MenuItem key={value} value={value}>{value}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                )}
            <Button
                    color="primary"
                    aria-label={isInCart(data.id) ? "Item already in cart" : "add to shopping cart"}
                    size="medium"
                    sx={{ fontSize: 'large', marginTop: 'auto' }}
                    disabled={isInCart(data.id)}
                    onClick={handleAddToCart}
                >
                    {isInCart(data.id) ? 'In Cart' : 'Add To Cart'}
                    <AddShoppingCartIcon sx={{ marginLeft: 2 }} />
                </Button>
        </Card>
    );
}
