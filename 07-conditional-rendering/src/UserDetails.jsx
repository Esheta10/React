export const UserDetails = ({name, isOnline}) => {
   if(isOnline){
        return(
            <div>
                <h3>{name}</h3>
                <span>Online</span>
                <p>Available for chat</p>
                <button>Send message</button>
            </div>
        );
   }
   return(
        <div>
            <h3>{name}</h3>
            <span>Offline</span>
            <p>Not available</p>
            <small>Check back later</small>
        </div>
   );
}