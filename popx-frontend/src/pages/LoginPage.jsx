import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full px-5 pt-8">
      <h1 className="text-[28px] font-bold text-[#1d2226] leading-tight">
        Signin to your
        <br />
        PopX account
      </h1>
      <p className="mt-2 text-[18px] text-[#74777b] leading-snug">
        Lorem ipsum dolor sit amet,
        <br />
        consectetur adipiscing elit,
      </p>

      <div className="mt-5 relative">
        <label className="absolute -top-2.5 left-3 bg-[#f7f8f9] pl-1 pr-4 text-[13px] text-[#702cff]">
          Email Address
        </label>
        <input
          type="email"
          placeholder="Enter email address"
          className="w-full px-3 py-3 border border-[#949494] rounded-md text-[14px] text-[#1d2226] placeholder-[#949494] outline-none bg-transparent"
        />
      </div>

      <div className="mt-5 relative">
        <label className="absolute -top-2.5 left-3 bg-[#f7f8f9] pl-1 pr-10 text-[13px] text-[#702cff]">
          Password
        </label>
        <input
          type="password"
          placeholder="Enter password"
          className="w-full px-3 py-3 border border-[#949494] rounded-md text-[14px] text-[#1d2226] placeholder-[#949494] outline-none bg-transparent"
        />
      </div>

      <button
        onClick={() => navigate('/account')}
        className="w-full mt-4 py-3 rounded-md bg-[#cbcbcb] text-white text-[15px] font-semibold cursor-pointer"
      >
        Login
      </button>
    </div>
  );
}

export default LoginPage;
