import React from 'react';

interface deleteFormProps {
  deleteType: string;
}

const DeleteForm = ({ deleteType }: deleteFormProps) => {
  return (
    <div>
      <button>delete this {deleteType}</button>
      <button>Cancel</button>
    </div>
  );
};

export default DeleteForm;
