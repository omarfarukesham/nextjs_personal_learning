import { redirect } from "next/navigation";


const User = () => {
    redirect('/about')
  return (
    <div>User page is redirect from the new dashboard...</div>
  )
}

export default User