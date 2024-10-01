import React from "react";
import { useDispatch } from "react-redux";
import { deleteGoal } from "../features/goals/goalSlice";

const GoalItem = ({ goal }) => {
  const dispatch = useDispatch();
  // console.log(goal);
  return (
    <div className="bg-[#f4f4f4] group relative overflow-hidden ">
      <div className="text-start px-2 pt-2 text-sm">
        {new Date(goal.createdAt).toLocaleString("en-IN", "weekday")}
      </div>
      <div className="goal">
        <h2>{goal.text}</h2>
      </div>
      <button
        onClick={() => dispatch(deleteGoal(goal._id))}
        className="absolute top-2 right-2 bg-black px-2 text-white transform -translate-y-10 group-hover:translate-y-0 duration-300 transition-all hover:bg-black/80"
      >
        X
      </button>
    </div>
  );
};

export default GoalItem;
