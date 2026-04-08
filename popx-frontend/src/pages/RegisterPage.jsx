import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function RegisterPage() {
  const navigate = useNavigate();
  const [agency, setAgency] = useState('yes');

  const fields = [
    { label: 'Full Name', required: true, pr: 'pr-7' },
    { label: 'Phone number', required: true, pr: 'pr-0' },
    { label: 'Email address', required: true, pr: 'pr-0' },
    { label: 'Password ', required: true, pr: 'pr-7' },
    { label: 'Company name', required: false, pr: 'pr-0' },
  ];

  return (
    <div className="flex flex-col h-full px-5 pt-8">
      <h1 className="text-[28px] font-bold text-[#1d2226] leading-tight">
        Create your
        <br />
        PopX account
      </h1>

      <div className="mt-5 flex flex-col gap-5">
        {fields.map((field) => (
          <div key={field.label} className="relative">
            <label className={`absolute -top-2.5 left-3 bg-[#f7f8f9] pl-1 ${field.pr} text-[13px] text-[#702cff]`}>
              {field.label}
              {field.required && <span className="text-red-500">*</span>}
            </label>
            <input
              type={field.label === 'Password' ? 'password' : 'text'}
              defaultValue="Marry Doe"
              className="w-full px-3 py-3 border border-[#949494] rounded-md text-[14px] text-[#1d2226] outline-none bg-transparent"
            />
          </div>
        ))}
      </div>

      <div className="mt-5">
        <p className="text-[14px] text-[#1d2226]">
          Are you an Agency?<span className="text-red-500">*</span>
        </p>
        <div className="flex items-center gap-6 mt-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="agency"
              value="yes"
              checked={agency === 'yes'}
              onChange={() => setAgency('yes')}
              className="w-4 h-4 accent-[#6c25ff]"
            />
            <span className="text-[14px] text-[#1d2226]">Yes</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="agency"
              value="no"
              checked={agency === 'no'}
              onChange={() => setAgency('no')}
              className="w-4 h-4 accent-[#6c25ff]"
            />
            <span className="text-[14px] text-[#1d2226]">No</span>
          </label>
        </div>
      </div>

      <div className="mt-auto pb-6">
        <button
          onClick={() => navigate('/account')}
          className="w-full py-3 rounded-md bg-[#6c25ff] text-white text-[15px] font-semibold cursor-pointer"
        >
          Create Account
        </button>
      </div>
    </div>
  );
}

export default RegisterPage;
