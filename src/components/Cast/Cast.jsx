const { useParams } = require('react-router-dom');

export const Cast = () => {
  const { movieId } = useParams();

  // useEffect(() => {
  // HTTP запрос, если нужно
  // }, [])

  return <div>Cast: {movieId}</div>;
};