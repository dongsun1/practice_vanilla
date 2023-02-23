import { button, input, select } from "./Form.js";

class SignupView {
  constructor($main) {
    this.$main = $main
  }

  render() {
    const containerDiv = document.createElement("div");
    containerDiv.setAttribute("id", "form_container");
    this.$main.appendChild(containerDiv);

    const form = document.createElement('form')
    form.setAttribute('id', 'grepp_form')
    containerDiv.appendChild(form)

    input("text", "name", "이름", true);
    input("email", "email", "이메일", true);
    input("text", "nickname", "닉네임", true);

    const roleValList = ['', 'frontend', 'backend', 'fullstack'];
    const roleTxtList = ['직군을 선택해주세요', '프론트엔드', '백엔드', '풀스택'];
    const mbtiValList = ['', 'ENFJ', 'ENTJ', 'ENFP', 'ENTP', 'ESFJ', 'ESTJ', 'ESFP', 'ESTP', 'INFJ', 'INTJ', 'INFP', 'INTP', 'ISFJ', 'ISTJ', 'ISFP', 'ISTP']
    const mbtiTxtList = ['MBTI를 선택해주세요', 'ENFJ', 'ENTJ', 'ENFP', 'ENTP', 'ESFJ', 'ESTJ', 'ESFP', 'ESTP', 'INFJ', 'INTJ', 'INFP', 'INTP', 'ISFJ', 'ISTJ', 'ISFP', 'ISTP']
    select("role", roleValList, roleTxtList, '직군', true);
    select("mbti", mbtiValList, mbtiTxtList, 'MBTI', false);

    button("submit", "등록");

    form.addEventListener('submit', (e) => {
      e.preventDefault()

      const name = e.target.name.value
      const email = e.target.email.value
      const nickname = e.target.nickname.value
      const role = e.target.role.value
      const mbti = e.target.mbti.value

      const submitInfo = { name, email, nickname, role, mbti }

      const personalInfo = JSON.parse(localStorage.getItem("personalInfo"));

      const check = personalInfo.find(({ email: _email, nickname: _nickname }) => _email === email || _nickname === nickname)

      if (!check) {
        personalInfo.push(submitInfo)
        localStorage.setItem('personalInfo', JSON.stringify(personalInfo))

        alert('성공적으로 등록되었습니다.')

        e.target.name.value = ''
        e.target.email.value = ''
        e.target.nickname.value = ''
        e.target.role.value = ''
        e.target.mbti.value = ''
      } else {
        alert('이메일 혹은 닉네임이 이미 등록되어 있습니다.')
      }
    })
  }
}

export default SignupView;