import React, { useEffect, useRef } from "react"; // Import useEffect and useRef
import { useParams } from "react-router-dom";
import { appId, serversecret,} from "../helper";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

function Room() {
  const { roomid } = useParams();
  const myMeeting = useRef(null); // Use useRef to get a reference to the div element

  useEffect(() => {
    const appID = appId;
    const serverSecret = serversecret; // Fix the typo in the variable name

    // Generate the kit token and create instance object when the component mounts
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomid,
      Date.now().toString(),
      "sharjeel shah"
    );
    
    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container: myMeeting.current, // Use the ref's current value here
      sharedLinks: [
        {
          name: "Copy Link",
          URL: `http://localhost:3000/room/${roomid}` // Fix the typo in the URL
        }
      ],
      scenario: {
        mod: ZegoUIKitPrebuilt.OneONoneCall
      },
      showScreenSharingButton: false
    });

    // Clean up when the component unmounts
    return () => {
      zp.destroy(); // Destroy the Zego instance
    };
  }, [roomid]);

  return (
    <div>
      <div ref={myMeeting} />
      {/* Room: {roomid} */}
    </div>
  );
}

export default Room;
