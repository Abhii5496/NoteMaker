import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import GoalForm from "../components/GoalForm";
import { getGoals, reset } from "../features/goals/goalSlice";
import GoalItem from "../components/GoalItem";
import Spinner from "../components/Spinner";
import { toast } from "react-toastify";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const {
    goal: { isLoading, isError, isSuccess, message, goals },
  } = useSelector((state) => state);

  // console.log(isLoading, isError, isSuccess, message, goals);

  useEffect(() => {
    if (!user) {
      navigate("/register");
    }
    if (user) {
      dispatch(getGoals());
    }
    return () => {};
  }, [user]);

  if (isLoading) {
    <Spinner></Spinner>;
  }

  return (
    <>
      <section className="heading">
        <h1> Welcome {user && user.name}</h1>
        <p>Notes Dhashbord</p>
      </section>
      <GoalForm />
      <section className="content">
        {isLoading && <Spinner />}
        {!isLoading && goals && goals.length > 0 ? (
          <div className="goals">
            {goals.map((goal) => (
              <GoalItem key={goal._id} goal={goal} />
            ))}
          </div>
        ) : (
          <h3>You do not any Notes </h3>
        )}
      </section>
    </>
  );
}

export default Dashboard;
