import { Alert, Text } from "rizzui";

export function AlertError({
  isOpen,
  title,
  message,
}: {
  isOpen: boolean;
  title?: string | null;
  message?: string | null;
}) {
  return (
    <div className="w-1/4 absolute top-[10px] z-10">
      <Alert
        color="danger"
        variant="flat"
        className={`transition-opacity duration-2000 ${
          isOpen ? "opacity-100 " : "opacity-0 pointer-events-none"
        }`}
      >
        <Text className="font-bold">{title}</Text>
        {message && <Text>{message}</Text>}
      </Alert>
    </div>
  );
}

export function AlertSuccess({
  isSuccess,
  title,
  message,
}: {
  isSuccess: boolean;
  title?: string | null;
  message?: string | null;
}) {
  return (
    <div className="w-1/4 absolute top-[10px] z-20">
      <Alert
        color="success"
        variant="flat"
        className={`transition-opacity duration-2000 ${
          isSuccess ? "opacity-100 " : "opacity-0 pointer-events-none"
        }`}
      >
        <Text className="font-bold">{title}</Text>
        {message && <Text>{message}</Text>}
      </Alert>
    </div>
  );
}
