// // import React, { useState } from 'react';
// import { DatePickerInput } from "@mantine/dates";

// function Calendar() {
//   const [value, setValue] = Date;

//   return (
//     <DatePickerInput
//       value={value}
//       onChange={setValue}
//       getDayProps={() => {
//         return {
//           sx: (theme) => ({
//             backgroundColor: theme.colors.red[6],
//             color: theme.black,
//             ...theme.fn.hover({
//               backgroundColor: theme.colors.violet[7],
//               color: theme.white,
//             }),
//           }),
//         };
//       }}
//     />
//   );
// }

// export default Calendar;

import { useState } from 'react';
import { DatePicker } from '@mantine/dates';
import '@mantine/core/dist/index.css'; // Import Mantine's core styles
import '@mantine/dates/dist/index.css'; // Import Mantine's dates styles

function Calendar() {
  const [value, setValue] = useState<Date | null>(null);

  return (
    <DatePicker
      label="Pick a date"
      placeholder="Choose date"
      value={value}
      onChange={setValue}
      withSelect
    />
  );
}

export default Calendar;
