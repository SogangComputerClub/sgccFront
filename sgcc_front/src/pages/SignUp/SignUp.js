import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

function SignUp() {

    const [step, setStep] = useState(1);
    const [data, setData] = useState({
        name: '',
        studentId: '',
        email: '',
        phone: '',
        id: '',
        password: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {//e:이벤트 헨들러로 변화하는 값을 담는 역할할
        const { name, value } = e.target; //e.target.name과 e.target.value를 개별 변수로 쉽게 가져오게 하려는 코드
        setData({
            ...data,//기존의 data를 모두 복사하는 문법-변경되는 특정 값을 업데이트할 수 있음 shallow copy는 아니다
            [name]: value,//name속성에 해당하는 값을 value로 변경
        });
        //step1에서 체크박스에 표시하면 terms랑 privacy속성이 추가된다 - e.target덕분에 동적으로 추가할 수 있다
        //이후 validateStep함수에서 !data.terms를 조사할 시 체크박스 안눌렀으면 terms가 undefined되기에 오류 메세지를 출력할 수 있게 하는거거
    }

    const validateStep = () => {
        const newErrors = {}; //useState에서는 직접 Errors를 수정할 수 없기에 newErrors를 통해 Error가 있는지를 받는다
        //newErrors는 입력값이 올바른지 체크하는 임시 객체인 것
        if (step === 1) {
            if (!data.terms) newErrors.terms = "서비스 약관에 동의해야 합니다.";
            if (!data.privacy) newErrors.privacy = "개인 정보 수집 및 이용에 동의해야 합니다.";
        }
    }
    //     return(

    // );
};
export default SignUp;
