// import React from "react";
// import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles.jsx";

// const WithSpinner = (WrappedComponent) => {
//   const Spinner = ({ isLoading, ...otherProps }) => {
//     return isLoading ? (
//       <SpinnerOverlay>
//         <SpinnerContainer />
//       </SpinnerOverlay>
//     ) : (
//       <WrappedComponent {...otherProps} />
//     );
//   };
//   return Spinner;
// };

// export default WithSpinner;

import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles.jsx";

const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default WithSpinner;
