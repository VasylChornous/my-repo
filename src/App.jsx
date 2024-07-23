import { useEffect } from "react";
import "./App.scss";
import { fetchDataFromApi } from "./utils/api";
import { useDispatch, useSelector } from "react-redux";
import { getApiConfiguration } from "./store/homeSlice";

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);

  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting = () => {
    fetchDataFromApi("/movie/popular").then((res) => {
      console.log(res);
      dispatch(getApiConfiguration(res));
    });
  };
  return <>{url?.total_pages}</>;
}

export default App;
