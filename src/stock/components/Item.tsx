import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import CardActionArea from "@mui/material/CardActionArea"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"

interface ItemProps {
  id: number,
  metadata: {
    image: string,
    props: string
  },
  onClick: () => void;
}

export const Item: React.FC<ItemProps> = ({ id, metadata, onClick }) => {
  return (<Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image="https://via.placeholder.com/150"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {id}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {metadata.props}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={onClick} size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </CardActionArea>
  </Card>)
}
