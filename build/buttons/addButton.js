import React from 'react';

var AddButton = function AddButton(_ref) {
  var text = _ref.text;

  return React.createElement(
    'button',
    { onClick: function onClick() {
        return console.log('working');
      } },
    text
  );
};

export default AddButton;