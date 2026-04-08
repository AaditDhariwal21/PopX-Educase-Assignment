function AccountPage() {
  return (
    <div className="flex flex-col h-full">
      <div className="px-5 py-4 bg-[#ffffff]">
        <h1 className="text-[20px] font-medium text-[#1d2226]">
          Account Settings
        </h1>
      </div>

      <div className="px-5 pt-5">
        <div className="flex items-start gap-4">
          <div className="relative">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Marry Doe"
              className="w-21 h-21 rounded-full object-cover"
            />
            <div className="absolute bottom-0 right-0 w-6 h-6 bg-[#6c25ff] rounded-full flex items-center justify-center border-2 border-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="w-3 h-3"
              >
                <path d="M12 15.2a3.2 3.2 0 100-6.4 3.2 3.2 0 000 6.4z" />
                <path d="M9 2L7.17 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2h-3.17L15 2H9zm3 15a5 5 0 110-10 5 5 0 010 10z" />
              </svg>
            </div>
          </div>
          <div>
            <p className="text-[15px] font-semibold text-[#1d2226]">Marry Doe</p>
            <p className="text-[14px] text-[#1d2226]">Marry@Gmail.Com</p>
          </div>
        </div>

        <p className="mt-5 text-[14px] text-[#1d2226] leading-relaxed">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
          Erat, Sed Diam
        </p>
      </div>

      <div className="mt-2 h-px" style={{ backgroundImage: 'repeating-linear-gradient(to right, #cbcbcb 0, #cbcbcb 8px, transparent 8px, transparent 14px)' }} />

      <div className="flex-1" />

      <div className="h-px" style={{ backgroundImage: 'repeating-linear-gradient(to right, #cbcbcb 0, #cbcbcb 8px, transparent 8px, transparent 14px)' }} />
    </div>
  );
}

export default AccountPage;
