import React from 'react';

const ContactItem = (props) => {
  const { contact, onContactChanged, onEvent2 } = props;

  let toggleIconClasses = ['task-action', 'bi', 'me-1'];

  if (contact.isOnline) {
    toggleIconClasses.push('bi-toggle-on');
  } else {
    toggleIconClasses.push('bi-toggle-off');
  }

  const onChangeState = () => {
    onContactChanged(contact);
  };

  const onEvent1 = () => {
    onEvent2(contact);
  };

  const isOnline = {
    fontWeight: 'bold',
    color: 'tomato',
  };
  const isOffline = {
    color: 'gray',
    textDecoration: 'line-through',
  };

  return (
    <li className="list-group-item d-flex w-100 justify-content-between">
      <p className="w-75" style={contact.isOnline ? isOnline : isOffline}>
        {contact.name}
      </p>
      <div className="w-25">
        <i
          onClick={onChangeState}
          className={toggleIconClasses.join(' ')}
          style={{
            color: contact.isOnline ? 'green' : 'grey',
          }}
        ></i>
        <button className="btn btn-outline-danger" onClick={onEvent1}>
          <i
            className="bi bi-trash task-action"
            style={{ color: 'tomato' }}
          ></i>
        </button>
      </div>
    </li>
  );
};

export default ContactItem;
