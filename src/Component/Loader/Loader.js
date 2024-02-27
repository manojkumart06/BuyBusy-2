
// importing spinner from library
import Spinner from 'react-spinner-material';

 
export default function Loader() {

  return (
    // styling the spinner
      <div style={{textAlign:"center",
                    display:"flex", 
                    justifyContent:"space-around",
                    flexDirection:"column",
                    alignItems:"center",
                    marginTop:"15%",
                    zIndex:"999"}}>
        <div>
          {/* show spinner */}
          <Spinner radius={50} color={"Blue"} stroke={4} visible={true} />
          {/* show message below the spinner */}
          <h4>Loading.....</h4>
        </div>
      </div>
    )
}