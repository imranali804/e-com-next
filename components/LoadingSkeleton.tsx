// components/LoadingSkeleton.tsx
export default function LoadingSkeleton() {
    return (
      <div className="border p-4 rounded-lg shadow-md">
        <div className="animate-pulse">
          <div className="bg-gray-200 h-48 w-full rounded-lg mb-4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          </div>
        </div>
      </div>
    );
  }