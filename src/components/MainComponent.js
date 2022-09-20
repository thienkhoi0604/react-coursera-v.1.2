// import logo from "./logo.svg";
import { Routes, Route, Navigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
  fetchDishes,
  fetchComments,
  fetchPromos,
  fetchLeaders,
} from "../redux/ActionCreators";
import Menu from "./MenuComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import Dishdetail from "./DishdetailComponent";
import About from "./AboutComponent";

const Main = () => {
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
    dispatch(fetchComments());
    dispatch(fetchPromos());
    dispatch(fetchLeaders());
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
        isLoading={obj.dishes.isLoading}
        errMess={obj.dishes.errMess}
        comments={obj.comments.comments.filter(
          (comment) => comment.dishId === parseInt(params.dishId, 10)
        )}
        commentsErrMess={obj.comments.errMess}
      />
    );
  };

  return (
    <div>
      <Header />
      <TransitionGroup>
        <CSSTransition classNames="page" timeout={300}>
          <Routes>
            <Route
              path="/home"
              element={
                <Home
                  dish={obj.dishes.dishes.filter((dish) => dish.featured)[0]}
                  dishesLoading={obj.dishes.isLoading}
                  dishesErrMess={obj.dishes.errMess}
                  promotion={
                    obj.promotions.promotions.filter(
                      (promo) => promo.featured
                    )[0]
                  }
                  promoLoading={obj.promotions.isLoading}
                  promoErrMess={obj.promotions.errMess}
                  leader={
                    obj.leaders.leaders.filter((leader) => leader.featured)[0]
                  }
                  leaderLoading={obj.leaders.isLoading}
                  leaderErrMess={obj.leaders.errMess}
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
              element={<About leaders={obj.leaders.leaders} />}
            />
            <Route path="*" element={<Navigate to="/home" replace />} />
            {/* <Route path='*' element={<NotFound />} /> */}
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </div>
  );
};

export default Main;
