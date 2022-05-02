import { ActivityCRUDAction } from "../actions";
import React from "react";
import { useAppDispatch } from "../store";

const FieldsetSimpleCRUD = ({
  setResponse,
}: {
  setResponse: React.Dispatch<React.SetStateAction<object>>;
}) => {
  const dispatch = useAppDispatch();

  const buttonStyle = { padding: "10px 20px", margin: "5px" };

  const retrieveActivityId = 1;
  const newActivity = {
    id: 30,
    title: "New Activity",
    dueDate: "2022-04-14T20:06:53.699Z",
    completed: true,
  };
  const updateActivity = {
    id: 1,
    title: "Updated Activity",
    dueDate: "2022-04-14T20:09:58.534Z",
    completed: true,
  };

  return (
    <fieldset style={{ gridArea: "buttonsCRUD" }}>
      <legend>Complete CRUD</legend>
      <button
        style={buttonStyle}
        onClick={() => {
          dispatch(ActivityCRUDAction.list()).then((res) => {
            setResponse(res);
          });
        }}
      >
        List Activity
      </button>
      <button
        style={buttonStyle}
        onClick={() => {
          dispatch(ActivityCRUDAction.create(newActivity)).then((res) => {
            setResponse(res);
          });
        }}
      >
        Create Activity
      </button>
      <button
        style={buttonStyle}
        onClick={() => {
          dispatch(ActivityCRUDAction.retrieve(retrieveActivityId)).then(
            (res) => {
              setResponse(res);
            }
          );
        }}
      >
        Retrieve Activity
      </button>
      <button
        style={buttonStyle}
        onClick={() => {
          dispatch(ActivityCRUDAction.update(updateActivity)).then((res) => {
            setResponse(res);
          });
        }}
      >
        Update Activity
      </button>
      <button
        style={buttonStyle}
        onClick={() => {
          dispatch(ActivityCRUDAction.destroy(retrieveActivityId)).then(
            (res) => {
              setResponse(res);
            }
          );
        }}
      >
        Destroy Activity
      </button>
      <button
        style={buttonStyle}
        onClick={() => {
          dispatch(ActivityCRUDAction.reset());
        }}
      >
        Reset Activity state
      </button>
    </fieldset>
  );
};

export default FieldsetSimpleCRUD;
