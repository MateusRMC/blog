import Actionbutton from "./actionbutton";

export default function Noposts(){
  return (
    <>
    <h1 className="no-posts">No posts to show :(</h1>
    <Actionbutton className="newFirstPost" destination="/write" button="Create a post" />
    </>
  )
}