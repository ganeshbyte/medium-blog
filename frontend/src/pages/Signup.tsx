import { Auth } from "../components/Auth.component";
import { Quote } from "../components/Quote.component";

export const Signup = () => {
  return (
    <div>
      <div className="flex items-center h-screen w-full">
        <Auth type="signup"></Auth>
        <Quote></Quote>
      </div>
    </div>
  );
};
