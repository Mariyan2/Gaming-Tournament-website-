import {useEffect,useState} from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { db, auth } from "../firebase"; 
import { getDocs, collection, addDoc } from "firebase/firestore";

const TournamentMap = ()=>{
const [tournaments, setTournaments] = useState([]);

    useEffect(()=>{
    const map = L.map("map").setView([52.318, -1.3612], 6); 
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        { attribution: "OpenStreetMap Contributors" }).addTo(map);


    const loadTournaments =async () => 
        { const snapshot = await getDocs(collection(db, "tournaments"));

          const data = snapshot.docs.map(doc => ({ 
            id: doc.id,

            ...doc.data() }));
      
            setTournaments(data);

      data.forEach(t => {
        if (!t.lat || !t.lng) return;
        const mapMarker = L.marker([t.lat, t.lng]).addTo(map);
        const popupDiv = L.DomUtil.create("div", "");

        const title = document.createElement("strong");
        title.innerText = t.title;
        popupDiv.appendChild(title);
        popupDiv.appendChild(document.createElement ("br"));
        popupDiv.append(t.location);
        popupDiv.appendChild(document.createElement("br") );
        popupDiv.append(new Date(t.date.seconds*1000).toLocaleString());
        popupDiv.appendChild(document.createElement("br"));
        popupDiv.append(`Spots: ${t.avalableSpots}/${t.maximumSpots}`);
        popupDiv.appendChild(document.createElement("br"));

        const btn = document.createElement("button");
        btn.textContent = "Register";

    if(btn){ btn.addEventListener("click",async() => {
    const user = auth.currentUser;
    if(!user){
        alert("user is not logged in!");
        return;
    }
             try {
                await addDoc(collection(db, "registrations"), {
                  userID: user.uid,
                  tournamentID: t.id,
                  timestamp: new Date()
                });
                btn.textContent = "✅"; 
                btn.disabled = true;  
                alert("You have been successfully registered!"); 
              } catch (error) {
                console.error("Registration failed:", error);
                alert("Registration failed."); 
            } 
          }); 
        } 
        popupDiv.appendChild(btn);
        mapMarker.bindPopup(popupDiv);
           });
    };
    loadTournaments();

    return () => map.remove();
  }, []);


  

return (
  <div
    id="map"
    style={{ height: "355px", width: "100%", position: "relative" }}

  ></div>
);
}

export default TournamentMap;
