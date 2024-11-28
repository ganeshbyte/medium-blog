import { Quote } from "../components/Quote.component";

export const Signup = () => {
  return (
    <div>
      <div className="flex items-center gap-10 h-screen">
        <div className="ring-1 ring-blue-300 w-1/2">signup</div>
        <div className="w-1/2 ring-1 ring-blue-300 max-w-1/2 invisible lg:visible">
          <Quote></Quote>
        </div>
      </div>
    </div>
  );
};
