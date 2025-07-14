import { Skeleton } from "@/components/ui/skeleton"

export default function ChatLoading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-gray-900 to-black text-white pt-16">
      <div className="flex flex-col flex-1 max-w-4xl mx-auto w-full my-4 bg-gray-800/90 backdrop-blur-lg border border-gray-700 shadow-2xl rounded-2xl overflow-hidden">
        <div className="p-6 pb-4 bg-gradient-to-r from-gray-900 to-gray-800">
          <Skeleton className="h-10 w-3/4 mx-auto mb-2" />
          <Skeleton className="h-5 w-1/2 mx-auto" />
          <div className="mt-6">
            <Skeleton className="h-12 w-full rounded-xl" />
          </div>
          <div className="mt-4">
            <Skeleton className="h-16 w-full rounded-xl" />
          </div>
        </div>
        <div className="flex-1 overflow-hidden p-6">
          <div className="space-y-4">
            <div className="flex items-start gap-3 justify-start">
              <Skeleton className="h-10 w-10 rounded-full flex-shrink-0" />
              <Skeleton className="h-20 w-2/3 rounded-xl" />
            </div>
            <div className="flex items-start gap-3 justify-end">
              <Skeleton className="h-20 w-2/3 rounded-xl" />
              <Skeleton className="h-10 w-10 rounded-full flex-shrink-0" />
            </div>
            <div className="flex items-start gap-3 justify-start">
              <Skeleton className="h-10 w-10 rounded-full flex-shrink-0" />
              <Skeleton className="h-20 w-2/3 rounded-xl" />
            </div>
          </div>
        </div>
        <div className="p-6 border-t border-gray-700 bg-gray-900/50">
          <Skeleton className="h-12 w-full rounded-full" />
          <div className="flex gap-2 mt-4 justify-center">
            <Skeleton className="h-10 w-32 rounded-full" />
            <Skeleton className="h-10 w-32 rounded-full" />
            <Skeleton className="h-10 w-32 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  )
}
