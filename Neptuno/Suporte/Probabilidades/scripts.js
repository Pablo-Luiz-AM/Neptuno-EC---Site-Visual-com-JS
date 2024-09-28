document.addEventListener("DOMContentLoaded", function () {
    // Inicializa a exibição do primeiro vídeo ao carregar a página
    toggleVideo('VIDEO_ID_1');
});

function toggleVideo(videoId) {
    // Obtém o número do vídeo a partir do ID
    const videoNumber = parseInt(videoId.split('_')[1]);

    // Atualiza o título do vídeo
    document.getElementById("video-titles").innerText = "Título do Vídeo " + videoNumber;

    const videoPlayer = document.getElementById("video-player_" + videoNumber);
    const iframe = createYouTubeIframe(videoId);

    videoPlayer.innerHTML = "";
    videoPlayer.appendChild(iframe);

    // Atualiza a descrição do vídeo
    const videoDescription = document.querySelector(".video-description");
    videoDescription.innerText = "Descrição do Vídeo " + videoNumber + ".";
}

function createYouTubeIframe(videoId) {
    const iframe = document.createElement("iframe");
    iframe.setAttribute("src", `https://www.youtube.com/embed/${videoId}`);
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allowfullscreen", "true");
    iframe.setAttribute("width", "560");
    iframe.setAttribute("height", "315");
    return iframe;
}

function searchVideos() {
    const searchTerm = document.getElementById("search-bar").value.toLowerCase();
    const videos = document.querySelectorAll('.video');

    videos.forEach(video => {
        const title = video.dataset.title.toLowerCase();
        if (title.includes(searchTerm)) {
            video.style.display = "";
        } else {
            video.style.display = "none";
        }
    });
}