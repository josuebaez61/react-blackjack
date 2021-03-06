import 'bootstrap';
import React from "react";
import $ from 'jquery';

const Rules = () => {
  return (
    <>
      <button
        type="button"
        className="btn btn-link"
        data-target="#rulesModal"
        data-toggle="modal"
      >
        Reglas
      </button>

      <div
        className="modal fade"
        id="rulesModal"
        tabIndex="-1"
        aria-labelledby="rulesModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="rulesModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rules;