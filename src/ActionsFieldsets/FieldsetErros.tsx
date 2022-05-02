import { ActivityCRUDAction } from "../actions";
import React from "react";
import { useAppDispatch } from "../store";

const FieldsetErros = ({
  setResponse,
}: {
  setResponse: React.Dispatch<React.SetStateAction<object>>;
}) => {
  const dispatch = useAppDispatch();

  const buttonStyle = { padding: "10px 20px", margin: "5px" };

  const updateActivity = {
    id: 1,
    title: "Updated Activity",
    dueDate: "2022-04-14T20:09:58.534Z",
    completed: true,
  };

  return (
    <fieldset style={{ gridArea: "buttonsErros" }}>
      <legend>Incorrect CRUD for Activities</legend>
      <button
        style={buttonStyle}
        onClick={() => {
          dispatch(ActivityCRUDAction.retrieve(99)).then((res) => {
            setResponse(res);
          });
        }}
      >
        Retrieve Activity with wrong id (404)
      </button>
      <button
        style={buttonStyle}
        onClick={() => {
          dispatch(ActivityCRUDAction.partialUpdate(updateActivity)).then(
            (res) => {
              setResponse(res);
            }
          );
        }}
      >
        Update Activity with patch (405)
      </button>
    </fieldset>
  );
};

export default FieldsetErros;
