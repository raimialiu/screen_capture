
    const camera = document.getElementById("capture")
    //console.log(camera)

    console.log(camera)
    camera.addEventListener("click", function(){
        
        capture()
    })
    
    
    const capture = async () => {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        const video = document.createElement("video");
      
        try {
          const captureStream = await navigator.mediaDevices.getDisplayMedia();
          video.srcObject = captureStream;
          context.drawImage(video, 0, 0, window.width, window.height);
          const frame = canvas.toDataURL("image/png");
          captureStream.getTracks().forEach(track => track.stop());
          window.location.href = frame;
        } catch (err) {
          console.error("Error: " + err);
        }
      };

