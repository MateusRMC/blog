import Link from "next/link";

export default function Actionbutton({destination, className, button}){
  return (
    <>
      <Link href={destination} className={className}>{button}</Link>
    </>
  )
}