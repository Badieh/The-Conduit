export default function AuthErrors({ errors }: { errors: string[] }) {
  return (
    <ul className="error-messages">
      {errors.map((error: string) => (
        <li key={error}> {error}</li>
      ))}
    </ul>
  );
}
