import LoginForm from "./login-form";

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center h-dvh">
      <div className="flex flex-col items-center space-y-8">
        <div className="text-2xl">Welcome to Payroll Management!</div>
        <div className="w-64">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
