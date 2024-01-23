import Heading from "@/components/Heading";
import { getFeaturedReviews } from "@/lib/reviews";
import Link from "next/link"
const review = await getFeaturedReviews();
export default function HomePage(){
    return(
        <>
        <Heading>Indie Gamer</Heading>
        <p className="mb-3">
            Only the best Indie Game, reviewed for you.
        </p>
        <div className="bg-white border rounded shadow w-80 hover:shadow-xl sm:w-full">
            <Link href={`/reviews/${review.slug}`} className="flex flex-col sm:flex-row ">
            <img src={`/images/${review.title}.jpg`} alt=""
             width="320" height="180" className="rounded-t sm:rounded-r-none sm:rounded-l"
            />
            <h2 className="py-1 text-center font-semibold font-orbitron sm:mx-2">
            {review.title}
            </h2>
            </Link>
            </div>
        </>
    )
}