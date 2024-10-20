import React from 'react';

const socialLoginOptions = [
  { name: 'Google', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/abea158cf61d7046076564dded31d0d17eca17b64f51143101e4f3aa827b05d8?placeholderIfAbsent=true&apiKey=7133676902a24cbaafc589aa3495e7b1' },
  { name: 'Apple', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/16577fef12ee0425ce49491e92c333d4e6075c585f11b307585d1387339f493d?placeholderIfAbsent=true&apiKey=7133676902a24cbaafc589aa3495e7b1' },
  { name: 'Facebook', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/77dbbc32ab2c91a3e0820622e234a6b046968ca4eced3a849716035e8e9b51be?placeholderIfAbsent=true&apiKey=7133676902a24cbaafc589aa3495e7b1' }
];

function SocialLoginButtons() {
  return (
    <div className="flex flex-col mt-3 w-3/4">
      <div className="flex flex-col">
        <div className="flex items-start px-16 w-full text-sm font-medium whitespace-nowrap text-slate-600 max-md:px-5">
          <div className="flex-auto my-auto mr-0 h-px border border-solid bg-slate-600 border-slate-600" />
          <div className="flex-1 shrink gap-2 self-start p-2 bg-white text-ellipsis">
            or sign up with
          </div>
          <div className="flex-auto my-auto mr-0 h-px border border-solid bg-slate-600 border-slate-600"></div>
        </div>
        <div className="flex gap-1 items-end mt-2 w-full">
          {socialLoginOptions.map((option) => (
            <button
              key={option.name}
              className="flex flex-1 shrink gap-1.5 justify-center items-center p-2 rounded border border-gray-300 border-solid opacity-80 basis-0"
            >
              <div className="flex gap-2 items-start self-stretch my-auto w-4">
                <img loading="lazy" src={option.icon} alt={`${option.name} icon`} className="object-contain w-4 aspect-square" />
              </div>
              <div className="self-stretch my-auto text-xs text-zinc-900">{option.name}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SocialLoginButtons;