import { SVGProps } from "react";

const Building06Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 21h8M12 11v10M12 3v4M18 5h-2.286a2 2 0 0 0-1.789.879L12 9l-1.926-3.121A2 2 0 0 0 8.286 5H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"
    />
  </svg>
);

export default function LoginForm() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <div className="w-full max-w-md p-8 space-y-6 bg-[#212a3b] rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white">Let's get started</h1>
          <p className="text-white">Hire top talent faster with apna</p>
        </div>

        <form className="space-y-6">
          <div>
            <label htmlFor="mobile" className="block text-sm font-semibold text-white">
              Mobile number
            </label>
            <input
              type="tel"
              name="mobile"
              id="mobile"
              placeholder="Enter 10 digit mobile number"
              required
              className="w-full px-4 py-2 mt-2 text-gray-900 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              pattern="[0-9]{10}"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-semibold text-white bg-[#1f8268] rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Continue
            </button>
          </div>
        </form>

        <div className="flex items-center justify-center">
          <hr className="w-full border-gray-600" />
          <span className="px-2 text-xs text-gray-400">OR</span>
          <hr className="w-full border-gray-600" />
        </div>

        <div className="text-center">
          <a href="#" className="inline-flex items-center space-x-2 text-sm font-semibold text-white underline hover:text-gray-300">
            <Building06Icon className="w-5 h-5" />
            <span>Click here for Enterprise login</span>
          </a>
        </div>

        <div className="text-xs text-center text-gray-400">
          By clicking continue, you agree to the apna{' '}
          <a href="#" className="underline text-[#0074e8] hover:text-blue-400">
            Terms of service
          </a>{' '}
          &{' '}
          <a href="#" className="underline text-[#0074e8] hover:text-blue-400">
            Privacy policy
          </a>
        </div>
      </div>
    </div>
  );
}