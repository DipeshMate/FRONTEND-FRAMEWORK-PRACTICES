import Image from "next/image";
import styles from "./MovieDetails.module.css";
interface MovieDetailsProps {
  posterPath: string;
  backPosterPath: string;
  title: string;
  originalTitle: string;
  description: string;
  id: number;
  rating: string;
  releaseDate: string;
  genres: [
    id: number,
    name: string,
  ];
  languages: string[];
}



const MovieDetails = ({
  posterPath,
  backPosterPath,
  title,
  originalTitle,
  description,
  rating,
  releaseDate,
  genres,
  languages,
}: MovieDetailsProps) => {
  return (
    <div className={styles.detailsContainer}>
      <div className={styles.image}>
        <Image
          src={`https://image.tmdb.org/t/p/w500${posterPath}`}
          alt={title}
          width={300}
          height={420}
        />
        <Image
          src={`https://image.tmdb.org/t/p/w500${backPosterPath}`}
          alt={title}
          width={300}
          height={420}
        />
      </div>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
      <div className={styles.info}>
        <p className={styles.infoItem}>
          <strong>Title:</strong> {originalTitle}
        </p>
        <p className={styles.infoItem}>
          <strong>Release Date:</strong> {releaseDate}
        </p>
        <p className={styles.infoItem}>
          <strong>Rating:</strong> {rating}
              </p>
              <p><strong>Genres: </strong>{genres.join(', ')}</p>
              <p><strong>Languages: </strong>{languages.join(', ')}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
