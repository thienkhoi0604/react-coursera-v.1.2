// import logo from "./logo.svg";
import { Routes, Route, Navigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchDishes } from "../redux/ActionCreators";
import Menu from "./MenuComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import Dishdetail from "./DishdetailComponent";
import About from "./AboutComponent";

// const mapStateToProps = (state) => {
//   return {
//     dishes: state.dishes,
//     comments: state.comments,
//     promotions: state.promotions,
//     leaders: state.leaders,
//   };
// };

const Main = () => {
  // const [dishes, setDishes] = useState(DISHES);
  // const [promotions, setPromotions] = useState(PROMOTIONS);
  // const [comments, setComments] = useState(COMMENTS);
  // const [leaders, setLeaders] = useState(LEADERS);

  const obj = useSelector((state) => {
    return {
      dishes: state.dishes,
      comments: state.comments,
      promotions: state.promotions,
      leaders: state.leaders,
    };
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDishes());
  }, [dispatch]);

  const DishWithId = () => {
    const params = useParams();
    return (
      <Dishdetail
        dish={
          obj.dishes.dishes.filter(
            (dish) => dish.id === parseInt(params.dishId, 10)
          )[0]
        }
        comments={obj.comments.filter(
          (comment) => comment.dishId === parseInt(params.dishId, 10)
        )}
      />
    );
  };

  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/home"
          element={
            <Home
              dish={obj.dishes.dishes.filter((dish) => dish.featured)[0]}
              promotion={
                obj.promotions.filter((promotion) => promotion.featured)[0]
              }
              leader={obj.leaders.filter((leader) => leader.featured)[0]}
              dishesLoading={obj.dishes.isLoading}
              dishesErrMess={obj.dishes.errMess}
            />
          }
        />
        <Route
          exact
          path="/menu"
          element={
            <Menu
              dishes={obj.dishes.dishes}
              dishesLoading={obj.dishes.isLoading}
              dishesErrMess={obj.dishes.errMess}
            />
          }
        />
        <Route path="/menu/:dishId" element={<DishWithId />} />
        <Route exact path="/contactus" element={<Contact />} />
        <Route
          exact
          path="/aboutus"
          element={<About leaders={obj.leaders} />}
        />
        <Route path="*" element={<Navigate to="/home" replace />} />
        {/* <Route path='*' element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </div>
  );
};

export default Main;
