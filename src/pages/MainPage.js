import { Error } from "../components/Error";
import { Success } from "../components/Success";

export function MainPage() {
  const age = 19;
  if (age > 17 && age < 50) {
    return <Success />;
  } else if (age > 50 || age < 18) {
    return <Error />;
  }
}
