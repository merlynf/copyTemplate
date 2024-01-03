import axios from "axios";

export default axios.create({
  baseURL: `https://localapi-unitycrm.reservation-system.net/api/`,
  //   baseURL: `http://localhost:2000/api/`,
  headers: {
    Authorization:
      "Bearer " +
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJlbXBsb3llZV9pZCI6ImYwYjA4MDVkLTQxZWQtNDExZi05MzUyLWMxZDk1Zjc2MjE2MiIsImhvdGVsX2dyb3VwX2lkIjoiIiwiaG90ZWxfaWQiOiJkZjk2MzFiMC0wMjBkLTRkNjYtYjVjNi0zODZiYzNjMzg4NjAiLCJqdGkiOiJhMzU1NWNiZS1lOGZlLTQ4MGMtOTJiMy0zY2M5NDQwNjViOGEiLCJzeXN0ZW1faWQiOiJjOWJjOWZiOS1kMTNmLTQyZTktOWI3My02NmZmZDU0MTgzYmEiLCJ1c2VyX2FjY291bnRfaWQiOiI2NTkxMTU4My1kMzY2LTRjNjMtODRkOS0yODIxZjU3Njk1MTEifQ.3mIwfe98o6oP6b3DvT2eP_0TUmFsTK1i9l02k5tE10o",
  },
});
