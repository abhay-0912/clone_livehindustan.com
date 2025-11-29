interface NoDataMessageProps {
  message?: string;
}

export default function NoDataMessage({ 
  message = 'कोई समाचार उपलब्ध नहीं है।' 
}: NoDataMessageProps) {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="text-center max-w-md mx-auto p-8">
        <div className="text-6xl mb-4">📰</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">कोई समाचार नहीं</h2>
        <p className="text-gray-600">{message}</p>
      </div>
    </div>
  );
}
