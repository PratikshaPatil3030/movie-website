import Link from "next/link";

export default function error(){
    return(
       <div>
        <br/><br/><br/> <br/><br/><br/> 
         <div className="container shadow p-3 mb-5 rounded">
            <h1>Page Not Found</h1>
            <Link href={'/'}><button className="btn btn-secondary">Go Back To Home</button></Link>
        </div>
       </div>
    )
}