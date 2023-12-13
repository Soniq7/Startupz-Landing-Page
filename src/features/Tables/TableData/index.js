
const TableData = ({ type }) => {
  if (type === "one") {
    return {
      headers: ["01", "02", "03"],
      rows: [
        [
          "We develop innovative products, systems and services",
          "Next we build teams to scale them into companies",
          "Each startup solving one problem at a time",
        ],
      ],
    };
  } else if (type === "two") {
    return {
      headers: ["01. Innovation", "02. People"],
      rows: [
        [
          `Startupz operates where entrepreneurship and technology
            intersect. We design solutions and turn them into business
            models.`,

          `Talent is what enables us to create great companies.`,
        ],
      ],
    };
  }
};

export default TableData;