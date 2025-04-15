import { Skeleton } from "@/components/ui/skeleton";

export default function ProductCardSkeleton() {
    return (
        <div className="flex flex-col bg-white shadow-md rounded-sm w-[150px] min-h-[200px] max-w-[400px] max-h-[450px]">
            <div className="relative w-full flex-[3] overflow-hidden rounded-sm">
                <Skeleton className="w-full h-[420px]" />
            </div>
            <div className="flex flex-col p-2 flex-[2]">
                <Skeleton className="h-[22px] w-3/4 mb-2" />
                <Skeleton className="h-[16px] w-1/4 mb-2" />
                <Skeleton className="h-[18px] w-1/2" />
            </div>
        </div>
    );
} 