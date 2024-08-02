export function ProfileInputs({ handleChange, email, firstName, lastName }) {
  return (
    <div className="flex flex-col gap-5 bg-background-mainBg text-slate-500 p-6 rounded-xl mb-9 w-full">
      <div className="flex flex-row justify-between">
        <label>First name*</label>
        <input
          type="text"
          name="firstName"
          className="border border-slate-300 rounded-md w-[30em] py-2 px-6"
          placeholder="e.g John"
          value={firstName}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-row justify-between">
        <label>Last name*</label>
        <input
          type="text"
          name="lastName"
          className="border border-slate-300 rounded-md w-[30em] py-2 px-6"
          placeholder="e.g Appleseed"
          value={lastName}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-row justify-between">
        <label>Email</label>
        <input
          type="text"
          name="email"
          className="border border-slate-300 rounded-md w-[30em] py-2 px-6"
          placeholder="e.g email@example.com"
          value={email}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}
