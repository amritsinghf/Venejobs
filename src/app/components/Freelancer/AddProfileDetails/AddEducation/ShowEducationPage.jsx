import React from "react";

const ShowEducationPage = ({ fields, onEdit, onDelete, onAddMore }) => {
  if (!fields || fields.length === 0) {
    return <p className="text-gray-500">No education added yet.</p>;
  }

  return (
    <div className="flex flex-col gap-4">
      {fields.map((item, index) => (
        <div
          key={index}
          className="border p-4 rounded-md flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
        >
          <div>
            <h2 className="font-bold text-lg">{item.institutionName}</h2>
            <p className="text-gray-600">{item.degree}</p>
            <p className="text-gray-500">{item.fieldOfStudy}</p>
          </div>

          <div className="flex gap-2 mt-2 md:mt-0">
            <button
              className="px-3 py-1 bg-blue-500 text-white rounded"
              onClick={() => onEdit(index)}
            >
              Edit
            </button>
            <button
              className="px-3 py-1 bg-red-500 text-white rounded"
              onClick={() => onDelete(index)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      {/* Add More button */}
      <button
        type="button"
        className="mt-4 px-4 py-2 bg-secondary text-white w-fit rounded"
        onClick={onAddMore}
      >
        + Add More Education
      </button>
    </div>
  );
};

export default ShowEducationPage;
