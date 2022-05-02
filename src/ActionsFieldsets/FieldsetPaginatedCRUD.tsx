import { useAppDispatch, useAppSelector } from "../store";

import React from "react";
import { TouristCRUDAction } from "../actions";

const FieldsetPaginatedCRUD = ({
  setResponse,
}: {
  setResponse: React.Dispatch<React.SetStateAction<object>>;
}) => {
  const dispatch = useAppDispatch();
  const tourists = useAppSelector((state) => state.tourists.data);

  const buttonStyle = { padding: "10px 20px", margin: "5px" };

  const newTourist = {
    ...tourists[0],
    tourist_name: "New Tourist",
    tourist_email: "new_" + tourists[0]?.tourist_email,
  };

  delete newTourist.id;
  delete newTourist.createdat;

  const updateTourist = {
    ...tourists[0],
    tourist_name: "Updated Tourist",
  };

  const getFirstId = (array: any[]): number => {
    for (let i = 0; i < array.length; i++) {
      if (array[i].id) {
        return array[i].id;
      }
    }
    return 0;
  };

  return (
    <fieldset style={{ gridArea: "buttonsPaginated" }}>
      <legend>Complete Paginated CRUD</legend>
      <button
        style={buttonStyle}
        onClick={() => {
          dispatch(TouristCRUDAction.list()).then((res) => {
            setResponse(res);
          });
        }}
      >
        List Tourists
      </button>

      <button
        style={buttonStyle}
        onClick={() => {
          dispatch(TouristCRUDAction.create(newTourist)).then((res) => {
            setResponse(res);
          });
        }}
      >
        Create Tourist
      </button>
      <button
        style={buttonStyle}
        onClick={() => {
          dispatch(TouristCRUDAction.retrieve(getFirstId(tourists))).then(
            (res) => {
              setResponse(res);
            }
          );
        }}
      >
        Retrieve Tourist
      </button>
      <button
        style={buttonStyle}
        onClick={() => {
          dispatch(TouristCRUDAction.update(updateTourist)).then((res) => {
            setResponse(res);
          });
        }}
      >
        Update Tourist
      </button>

      <button
        style={buttonStyle}
        onClick={() => {
          dispatch(TouristCRUDAction.destroy(getFirstId(tourists))).then(
            (res) => {
              setResponse(res);
            }
          );
        }}
      >
        Destroy Tourist
      </button>
      <button
        style={buttonStyle}
        onClick={() => {
          dispatch(TouristCRUDAction.reset());
        }}
      >
        Reset Tourist state
      </button>
    </fieldset>
  );
};

export default FieldsetPaginatedCRUD;
