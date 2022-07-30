import Grid from "@mui/material/Grid";
import { NftMeta } from "../pages/Stock";
import { Item } from "./Item";

interface ItemsProps {
  items: NftMeta[]
}

const Items: React.FC<ItemsProps> = ({ items }) => {
  return (<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
    {Array.from(Array(6)).map((_, index) => (
      <Grid item xs={2} sm={4} md={4} key={index}>
        <Item id={1} metadata={{ image: "titi", props: "some prop" }} onClick={() => console.log("Click")} />
      </Grid>
    ))}
  </Grid>)
}

export default Items;
