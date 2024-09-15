import React, { ReactNode } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Link } from "@mui/material";
import GitHub from "../../assets/images/github.jpg"

interface ProjectCardProps {
    children: ReactNode;
    img: string;
    alt: string;
    title: string;
    href: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ children, img, alt, title, href }) => {
    return (
        <Link href={href} underline="none" sx={{
            width: {
                xs: "100%",  // 100% width on extra small screens
                sm: "48%",   // 48% width on small screens
                md: "32%"    // 32% width on medium and up
            },
        }}>
            <Card
                sx={{
                    marginBottom: "10px",
                    backgroundColor: "#6f467d"
                }}
            >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={img !== "" ? img : GitHub}
                        alt={alt}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" color="white">
                            {title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'white' }}>
                            {children}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    );
};
