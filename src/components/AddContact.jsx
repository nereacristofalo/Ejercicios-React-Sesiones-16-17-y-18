import React from 'react';

const AddContact = (props) => {
  const { onContactAdded } = props;

  let name = '';

  const onAdd = () => {
    if (!name) return;
    onContactAdded(name);
  };

  const inputChange = (event) => {
    name = event.target.value;
  };

  return (
    <div className="mb-3 d-flex w-100 justify-content-between">
      <div className="w-75">
        <label className="me-1">
          <h4> Name:</h4>
        </label>
        <input onChange={inputChange} />
      </div>
      <button className="btn btn-outline-primary w-25" onClick={onAdd}>
        <i class="bi bi-person-plus" style={{ color: 'primary' }}></i>
      </button>
    </div>
  );
};

export default AddContact;
