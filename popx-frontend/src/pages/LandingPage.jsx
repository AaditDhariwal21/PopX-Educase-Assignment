import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1" />
      <div className="px-5 pb-8">
        <h1 className="text-[26px] font-bold text-[#212427] leading-tight">
          Welcome to PopX
        </h1>
        <p className="mt-2 text-[19px] text-[#8a8a8a] leading-snug">
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit,
        </p>
        <button
          onClick={() => navigate('/register')}
          className="w-full mt-6 py-3 rounded-lg bg-[#6c25ff] text-white text-[17px] font-semibold cursor-pointer"
        >
          Create Account
        </button>
        <button
          onClick={() => navigate('/login')}
          className="w-full mt-2 py-3 rounded-lg bg-[#cebafb] text-[#24282f] text-[17px] font-bold cursor-pointer"
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
