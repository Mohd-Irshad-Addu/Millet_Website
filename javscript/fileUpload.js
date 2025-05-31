const fileInput = document.getElementById("fileUpload");
const fileDetail = document.getElementById("file-name");
const fileDetailWrapper = document.getElementById("details-wrapper");
const size = document.getElementById("size");

fileInput.addEventListener("change", () => {
    const files = fileInput.files;
    if (files.length > 0) {
        let details = '';
        let totalSize = 0;

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            details += `File ${i + 1}: ${file.name} - ${Math.floor(file.size / 1024)} kb\n`;
            totalSize += file.size;
        }

        fileDetail.textContent = details;
        fileDetailWrapper.style.backgroundColor = "#2BFF88";
        fileDetail.style.color = "black";
        size.textContent = `Total size: ${Math.floor(totalSize / 1024)} kb`;

        const uploadBtn = document.getElementById("uploadBtn");

uploadBtn.addEventListener("click", () => {
    const fileInput = document.getElementById("fileUpload");
    const files = fileInput.files;

    if (files.length === 0) {
        alert("Please select a file to upload.");
        return;
    }

    const formData = new FormData();
    // uploading all files
    for(let i=0; i<files.length; i++){
     
        formData.append("images", files[i]);
        
    }

    fetch("https://millet-backend-trail.onrender.com/api/files/upload", {
        method: "POST",
        body: formData,
    })
    .then(response => response.text())
    .then(data => {
        alert("✅ Success: " + data);
        console.log(data);
    })
    .catch(error => {
        alert("❌ Upload failed!");
        console.error("Error:", error);
    });
});

    }
});