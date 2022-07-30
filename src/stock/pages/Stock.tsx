import Box from "@mui/material/Box";
import { useState } from "react";
import Items from "../components/Items";

interface StockProps {
  title: string
}

export interface NftMeta {
  id: number,
  image: string
}

const Stock: React.FC<StockProps> = ({ title }) => {

  const [items, setItems] = useState<NftMeta[]>([]);

  return (
    <Box
      sx={{
        padding: [0, 3, 3, 0],
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <h1>{title}</h1>
      <Items items={items} />
    </Box>
  );
}

export default Stock;
