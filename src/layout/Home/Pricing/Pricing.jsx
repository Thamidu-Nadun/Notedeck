export default function Pricing () {
  return (
    <div className="py-20 max-w-5xl mx-auto px-4 h-screen">
      <h1 className="text-center text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
        Pricing
      </h1>
      <p className="text-center text-gray-400 md:text-lg mt-2">
        Use it for free for yourself, upgrade when your team needs
        advanced control.
      </p>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 mt-10">
        {/* Card 1 */}
        <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 p-6">
          <div className="flex flex-col items-center border-b border-gray-300 pb-6">
            <span className="mb-6 text-gray-800">Free</span>
            <span className="mb-3 text-4xl font-medium">$0/mo</span>
            <span className="text-gray-500">Best for 1-5 users</span>
          </div>
          <div className="space-y-4 py-9">
            <div className="flex items-center gap-3">
              <span className="grid size-5 place-content-center rounded-full bg-indigo-500 text-sm text-white">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span className="text-sm text-gray-400">One workspace</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="grid size-5 place-content-center rounded-full bg-indigo-500 text-sm text-white">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span className="text-sm text-gray-400">Email support</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="grid size-5 place-content-center rounded-full bg-gray-200 text-sm text-gray-600">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </span>
              <span className="text-sm text-gray-400">Basic analytics</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="grid size-5 place-content-center rounded-full bg-gray-200 text-sm text-gray-600">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </span>
              <span className="text-sm text-gray-400">Team collaboration</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="grid size-5 place-content-center rounded-full bg-gray-200 text-sm text-gray-600">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </span>
              <span className="text-sm text-gray-400">Priority support</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="grid size-5 place-content-center rounded-full bg-gray-200 text-sm text-gray-600">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </span>
              <span className="text-sm text-gray-400">
                Unlimited file storage{' '}
              </span>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 p-6">
          <div className="flex flex-col items-center border-b border-gray-300 pb-6">
            <span className="mb-6 text-gray-800">Pro</span>
            <span className="mb-3 text-4xl font-medium">$79/mo</span>
            <span className="text-gray-500">Best for 5-50 users</span>
          </div>
          <div className="space-y-4 py-9">
            <div className="flex items-center gap-3">
              <span className="grid size-5 place-content-center rounded-full bg-indigo-500 text-sm text-white">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span className="text-sm text-gray-400">One workspace</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="grid size-5 place-content-center rounded-full bg-indigo-500 text-sm text-white">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span className="text-sm text-gray-400">Email support</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="grid size-5 place-content-center rounded-full bg-indigo-500 text-sm text-white">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span className="text-sm text-gray-400">Basic analytics</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="grid size-5 place-content-center rounded-full bg-indigo-500 text-sm text-white">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span className="text-sm text-gray-400">Team collaboration</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="grid size-5 place-content-center rounded-full bg-gray-200 text-sm text-gray-600">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </span>
              <span className="text-sm text-gray-400">Priority support</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="grid size-5 place-content-center rounded-full bg-gray-200 text-sm text-gray-600">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </span>
              <span className="text-sm text-gray-400">
                Unlimited file storage{' '}
              </span>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 p-6">
          <div className="flex flex-col items-center border-b border-gray-300 pb-6">
            <span className="mb-6 text-gray-800">Enterprise</span>
            <span className="mb-3 text-4xl font-medium">Contact us</span>
            <span className="text-gray-500">Best for 50+ users</span>
          </div>
          <div className="space-y-4 py-9">
            <div className="flex items-center gap-3">
              <span className="grid size-5 place-content-center rounded-full bg-indigo-500 text-sm text-white">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span className="text-sm text-gray-400">One workspace</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="grid size-5 place-content-center rounded-full bg-indigo-500 text-sm text-white">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span className="text-sm text-gray-400">Email support</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="grid size-5 place-content-center rounded-full bg-indigo-500 text-sm text-white">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span className="text-sm text-gray-400">Basic analytics</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="grid size-5 place-content-center rounded-full bg-indigo-500 text-sm text-white">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span className="text-sm text-gray-400">Team collaboration</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="grid size-5 place-content-center rounded-full bg-indigo-500 text-sm text-white">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span className="text-sm text-gray-400">Priority support</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="grid size-5 place-content-center rounded-full bg-indigo-500 text-sm text-white">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span className="text-sm text-gray-400">
                Unlimited file storage{' '}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
