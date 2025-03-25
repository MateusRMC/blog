import Link from "next/link";

export default function Actionbutton({destination, button}){
  return (
    <>
      <Link href={destination} className="ActionButton">{button}</Link>
    </>
  )
}