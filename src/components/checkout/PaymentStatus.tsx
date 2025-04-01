interface PaymentStatusProps {
  title: string
  message: string
  icon: React.ReactNode
  buttonText?: string
  buttonAction?: () => void
}

export default function PaymentStatus({
  title,
  message,
  icon,
  buttonText,
  buttonAction,
}: PaymentStatusProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <div className="mb-6 flex justify-center">
          {icon}
        </div>
        <h1 className="text-2xl font-bold mb-4">{title}</h1>
        <p className="text-gray-600 mb-6">{message}</p>
        {buttonText && buttonAction && (
          <button
            onClick={buttonAction}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            {buttonText}
          </button>
        )}
      </div>
    </div>
  )
} 