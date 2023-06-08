document.addEventListener("DOMContentLoaded", function() {
    var createButton = document.getElementById("createButton");
    var projectNameInput = document.getElementById("projectName");
    var teamMembersInput = document.getElementById("teamMembers");
    var descriptionInput = document.getElementById("description");

    projectNameInput.addEventListener("input", checkFormValidity);
    teamMembersInput.addEventListener("input", checkFormValidity);
    descriptionInput.addEventListener("input", checkFormValidity);

    function checkFormValidity() {
        var projectName = projectNameInput.value.trim();
        var teamMembers = teamMembersInput.value.trim();
        var description = descriptionInput.value.trim();

        createButton.disabled = !(projectName && teamMembers && description);
    }

    document.getElementById("createButton").addEventListener("click", function() {
        var projectName = projectNameInput.value.trim();
        var teamMembers = teamMembersInput.value.trim();
        var description = descriptionInput.value.trim();

        var content = "<h2>" + projectName + "</h2>" +
                      "<p><strong>팀원:</strong> " + teamMembers + "</p>" +
                      "<p><strong>설명:</strong> " + description + "</p>";

        var mainContent = window.opener.document.getElementById("mainContent");
        mainContent.innerHTML += content;

        window.close();
    });
});



const openPopup = () => {
    const popupContainer = document.getElementById("popup-container");
    const popup = popupContainer.querySelector(".popup");

    popupContainer.style.display = "block";
    popup.classList.add("fade-in");
    setTimeout(() => {
        popup.classList.remove("fade-in");
    }, 300);

    document.body.style.overflow = "hidden";
};

const saveData = () => {
    const projectName = document.getElementById("project-name");
    const teamMembers = document.getElementById("team-members");
    const description = document.getElementById("description");

    // 필드 초기화
    projectName.classList.remove("error");
    teamMembers.classList.remove("error");
    description.classList.remove("error");

    let isError = false;

    if (projectName.value === "") {
        projectName.classList.add("error");
        isError = true;
    }
    if (teamMembers.value === "") {
        teamMembers.classList.add("error");
        isError = true;
    }
    if (description.value === "") {
        description.classList.add("error");
        isError = true;
    }

    if (!isError) {
        // 이곳에서 데이터 저장 또는 처리 로직을 추가할 수 있습니다.

        const resultBox = document.getElementById("result-box");
        resultBox.innerText = `프로젝트명: ${projectName.value}\n팀원: ${teamMembers.value}\n설명: ${description.value}`;
        resultBox.style.display = "block";

        const popupContainer = document.getElementById("popup-container");
        const popup = popupContainer.querySelector(".popup");

        popup.classList.add("fade-out");
        setTimeout(() => {
            popupContainer.style.display = "none";
            popup.classList.remove("fade-out");
        }, 300);

        document.body.style.overflow = "auto";
    } else {
        // 필드가 비어있을 경우 흔들리는 애니메이션 추가
        if (projectName.value === "") {
            projectName.classList.add("error");
            projectName.addEventListener("animationend", () => {
                projectName.classList.remove("error");
            });
        }
        if (teamMembers.value === "") {
            teamMembers.classList.add("error");
            teamMembers.addEventListener("animationend", () => {
                teamMembers.classList.remove("error");
            });
        }
        if (description.value === "") {
            description.classList.add("error");
            description.addEventListener("animationend", () => {
                description.classList.remove("error");
            });
        }
    }
};

const closeButton = document.getElementById("close-button");
closeButton.addEventListener("click", () => {
    const popupContainer = document.getElementById("popup-container");
    const popup = popupContainer.querySelector(".popup");

    popup.classList.add("close-animation");
    setTimeout(() => {
        popupContainer.style.display = "none";
        popup.classList.remove("close-animation");
    }, 300);

    document.body.style.overflow = "auto";
});

const adjustTextAreaHeight = (textArea) => {
    textArea.style.height = "auto";
    textArea.style.height = textArea.scrollHeight + "px";
};