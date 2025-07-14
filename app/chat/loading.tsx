import { Skeleton } from "@/components/ui/skeleton"

export default function ChatLoading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-24 px-4 pb-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="w-full max-w-4xl mb-4 bg-gray-800/80 backdrop-blur-xl border border-gray-700 rounded-2xl p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Skeleton className="h-10 w-10 rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-6 w-48" />
            <Skeleton className="h-4 w-64" />
          </div>
        </div>
        <Skeleton className="h-8 w-24 rounded-full" />
      </div>

      <div className="flex flex-col w-full max-w-4xl flex-1 rounded-2xl overflow-hidden bg-gray-800/50 backdrop-blur-xl border border-gray-700 shadow-2xl">
        <div className="p-4 bg-gradient-to-r from-gray-800 to-gray-900 border-b border-gray-700">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <Skeleton className="h-6 w-40" />
            <div className="flex flex-wrap gap-2">
              <Skeleton className="h-10 w-32 rounded-xl" />
              <Skeleton className="h-10 w-32 rounded-xl" />
            </div>
          </div>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Skeleton className="h-24 rounded-xl" />
            <Skeleton className="h-24 rounded-xl" />
            <Skeleton className="h-24 rounded-xl" />
          </div>
        </div>

        <div className="flex-1 p-4 overflow-y-auto bg-gradient-to-b from-gray-900/30 to-gray-800/30">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex flex-col items-start">
              <Skeleton className="h-12 w-3/4 rounded-2xl rounded-br-none" />
              <Skeleton className="h-4 w-1/2 mt-2" />
            </div>
            <div className="flex flex-col items-end">
              <Skeleton className="h-12 w-2/3 rounded-2xl rounded-bl-none" />
            </div>
            <div className="flex flex-col items-start">
              <Skeleton className="h-12 w-full rounded-2xl rounded-br-none" />
              <Skeleton className="h-4 w-1/3 mt-2" />
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-gray-700 bg-gray-900/50 backdrop-blur-lg">
          <Skeleton className="h-24 w-full rounded-2xl" />
        </div>
      </div>
    </div>
  )
}
