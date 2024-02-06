import { useSelector } from "react-redux";
import "./Recommendations.scss";
import { useEffect } from "react";
import SectionBuilder from "../../HomePage/SectionBuilder/SectionBuilder";
import { useParams } from "react-router-dom";

const Recommendations = () => {
  const { fetchedRecommendations } = useSelector(
    (state) => state.MoviePageReducer
  );
  const params = useParams();

  useEffect(() => {
    console.log(fetchedRecommendations);
    console.log(params.mediaType);
  }, [fetchedRecommendations]);

  return (
    <div className="recommendations_container">
      <SectionBuilder
        moviesArr={fetchedRecommendations}
        name={`${params.mediaType.toUpperCase()}  RECOMMENDATIONS`}
      />
    </div>
  );
};

export default Recommendations;
