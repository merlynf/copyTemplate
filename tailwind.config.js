/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // ...
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require("tailwind-typewriter")({
      wordsets: {
        test: {
          words: [" We Provide Brilliant Ideas Adding Success To Your Business Motion."],
          repeat: 0,
          eraseSpeed: 0,
          writeSpeed: 0.01
        },
      },
    }),
  ],
};

// theme: {
//   extend: {
//       animation: {
//         typewriter: 'typewriter 2s steps(11) forwards',
//         caret: 'typewriter 2s steps(11) forwards, blink 1s steps(11) infinite 2s',
//       },
//       keyframes: {
//         typewriter: {
//           from: {
//             left: '0%',
//           },
//           to: {
//             left: '50%',
//           },
//         },
//         blink: {
//           '0%': {
//             opacity: '0',
//           },
//           '0.1%': {
//             opacity: '1',
//           },
//           '50%': {
//             opacity: '1',
//           },
//           '50.1%': {
//             opacity: '0',
//           },
//           '100%': {
//             opacity: '0',
//           },
//         },
//       },
//     },
//   },
