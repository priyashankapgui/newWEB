import * as React from 'react';
import './productCards.css';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

export default function ProductCard() {
  return (
    <Card className="card">
      <CardOverflow>
        <AspectRatio className="aspect-ratio">
          <img
            src="https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286"
            srcSet="https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent className='ProductCardCardContent'>
        <Typography className='typographyName' level="body-xs">Bluetooth Headset</Typography>
        <Link
          href="#product-card"
          fontWeight="md"
          color="neutral"
          textColor="text.primary"
          overlay
          endDecorator={<ArrowOutwardIcon />}
        >
          Super Rockez A400
        </Link>

        <Typography
          level="title-lg"
          className="typographyPrice"
          endDecorator={
            <Chip component="span" size="sm" variant="soft" color="success">
              Lowest price
            </Chip>
          }
        >
          2,900 LKR
        </Typography>
      </CardContent>
      <CardOverflow>
      <Button className="custom-button" size="lg">
          Add to cart
        </Button>
      </CardOverflow>
    </Card>
  );
}
