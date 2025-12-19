import Image from "next/image";
import styles from "./MovieCard.module.css";
import Link from "next/link";

interface MovieCardProps{
  posterPath: string;
  backPosterPath: string;
  title: string;
  originalTitle: string;
  description: string;
  id: number;
  rating: string;
  releaseDate: string;
}
const API_KEY = process.env.API_KEY;

const MovieCard = ({
  posterPath,
  backPosterPath,
  title,
  originalTitle,
  description,
  id,
  rating,
  releaseDate
}:MovieCardProps) => {
  return (
    <Link href={`/movie/${id}`}>
    <div className={styles.card}>
      <Image className={styles.image}
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        alt={title} width={250} height={350} />
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.desc}>{description.substring(0, 110)}...</p>
      </div>
    </div>
        </Link>
  )
}

export default MovieCard;
