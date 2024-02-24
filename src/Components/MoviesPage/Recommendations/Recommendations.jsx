import { useSelector } from "react-redux";
import "./Recommendations.scss";
import SectionBuilder from "../../HomePage/SectionBuilder/SectionBuilder";
import { useParams } from "react-router-dom";
import SectionName from "../../HomePage/SectionBuilder/SectionName/SectionName";

const Recommendations = () => {
  const { fetchedRecommendations } = useSelector(
    (state) => state.MoviePageReducer
  );
  const params = useParams();

  return (
    <div className="recommendations_container">
      <SectionName
        name={`${params.mediaType.toUpperCase()}  RECOMMENDATIONS`}
      />
      <SectionBuilder moviesArr={fetchedRecommendations} />
    </div>
  );
};

export default Recommendations;
