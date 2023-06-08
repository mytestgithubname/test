const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const form = document.getElementById('signup-form');



// 비밀번호 재입력 체크
form.addEventListener('submit', function (event) {
    event.preventDefault();

    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (password !== confirmPassword) {
        confirmPasswordInput.classList.add('shake-animation');
        confirmPasswordInput.addEventListener('animationend', removeShakeAnimation);
    } else {
        // 비밀번호 일치 시 가입 처리
        console.log('가입 완료!');

        // 추가 로직 수행
        // 여기에 필요한 코드를 작성하세요.
    }
});

// 흔들림 애니메이션 제거
function removeShakeAnimation() {
    confirmPasswordInput.classList.remove('shake-animation');
    confirmPasswordInput.removeEventListener('animationend', removeShakeAnimation);
}