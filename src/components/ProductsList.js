import { ProductCard } from "./ProductCard";
import { Grid, Container } from '@mui/material';

export function ProductsList({ products }) {
    return (
        <Container maxWidth="xl" sx={{ marginY: '20px' }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {products.map(item => (
                <Grid item xs={4} sm={4} md={4} key={item.id} >
                    <ProductCard data={item} key={item.id}/>
                </Grid>
                ))}
            </Grid>
        </Container>
    );
}