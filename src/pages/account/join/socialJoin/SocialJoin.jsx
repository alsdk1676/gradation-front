import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import S from './style';
import { useState } from 'react';
import JoinCompleteModal from '../joinModal/JoinCompleteModal';
import InfoAlert from '../../../display/alert/infoAlert/InfoAlert';
import CheckedButton from '../../../../components/button/CheckedButton';
import UncheckedButton from '../../../../components/button/UncheckedButton';


const SocialJoin = ({email, provider}) => {

  const { register, handleSubmit, formState: {isSubmitting, errors, isValid}} = useForm({mode:"onChange"});
  const navigate = useNavigate()
  const identificationRegex = /^(?=.*[a-z])(?=.*\d)[a-z\d]{6,20}$/;
  const[isModalOpen, setIsModalOpen] = useState(false)
  const [userIdentification, setUserIdentification] = useState("");
  const [idCheckMessage, setIdCheckMessage] = useState("") // 아이디 중복 체크 결과 
  const [isIdAvailable, setIsIdAvailable] = useState(null) // 아이디 사용 가능 여부
  const [showAlert, setShowAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState("")


  // 아이디 중복 체크
  const checkId = async () => {
    // console.log("userIdentification", userIdentification)
    
    if(!userIdentification) {
      // alert("아이디를 입력하세요.")
      setAlertMessage("아이디를 입력하세요.")
      setShowAlert(true)
      return;
    }
    
    await fetch(`http://localhost:10000/users/api/check-id/${userIdentification}`, {
      method : "GET"
    })
    .then((res) => {
      if(!res.ok) {
        return res.json().then((res) => {
          setIdCheckMessage(res.message)
          setIsIdAvailable(false)
        })
      }
      return res.json()
    })
    .then((res) => {
      // console.log(res)
      setIdCheckMessage(res.message)
      setIsIdAvailable(true)
    })
    .catch(console.error)
  }

  return (
    <div>
      <form autoComplete="off" onSubmit={handleSubmit(async (data) => {
        const {userName, userNickName, userIdentification} = data;
        const userVO = {
          userName : userName,
          userNickName : userNickName,
          userEmail : email,
          userProvider : provider,
          userIdentification : userIdentification
        }
        // console.log("userVO", userVO)
        await fetch("http://localhost:10000/users/api/join/social", {
          method : "POST",
          headers : {
            "Content-Type" : "application/json"
          },
          body : JSON.stringify(userVO)
        })
        .then((res) => {
          if(!res.ok) {
            return res.json().then((res) => {
              alert(`${res.message}${res.provider}`)
            })
          }
          return res.json()
        })
        .then((res) => {
          // console.log(res)
          // alert(res.message)
          setIsModalOpen(true)
          // navigate("/")
        })
        .catch(console.error)
      })}>
      <S.Container>
        <S.Wrapper>
          <S.H2>소셜 회원가입</S.H2>
            <S.InputContainer>
              <S.BorderWrapper>
                <S.Border>
                  <S.InputWrapper>
                    <S.Label>
                      <S.H7>아이디<span>*</span></S.H7>
                      <S.Input type='text' placeholder='6~20자 영문, 숫자 조합으로 입력하세요.'
                      {...register("userIdentification", {
                        required : true,
                        pattern : {
                          value : identificationRegex
                        },
                        onChange : (e) => {
                          setUserIdentification(e.target.value)
                          setIsIdAvailable(null);
                          setIdCheckMessage("")
                        }
                      })}
                    />
                    </S.Label>
                    <S.ButtonWrapper>
                      {isIdAvailable ? (
                        <CheckedButton type="button">중복 체크 완료</CheckedButton>
                      ) : (
                        <UncheckedButton type="button"
                        disabled={errors && errors?.userIdentification?.type === "pattern"}
                        onClick={checkId}
                        >중복 체크</UncheckedButton>
                      )}
                      </S.ButtonWrapper>
                  </S.InputWrapper>
                </S.Border>
                {errors && errors?.userIdentification?.type === "required" && (
                  <S.Warning>필수 항목입니다.</S.Warning>
                  )}
                {errors && errors?.userIdentification?.type === "pattern" && (
                  <S.Error>소문자, 특수문자를 각 하나 포함한 6~20자리여야 합니다.</S.Error>
                )}
                {idCheckMessage && (
                  <S.Error>{idCheckMessage}</S.Error>
                )}
              </S.BorderWrapper>
              <S.BorderWrapper>
                <S.Border>
                  <S.InputWrapper>
                    <S.Label>
                      <S.H7>이름<span>*</span></S.H7>
                      <S.Input type='text' placeholder='이름을 입력하세요.'
                      {...register("userName", {
                        required : true,
                      })}
                      />
                    </S.Label>
                    <S.ButtonWrapper>
                    </S.ButtonWrapper>
                  </S.InputWrapper>
                </S.Border>
                {errors && errors?.userName?.type === "required" && (
                  <S.Warning>필수 항목입니다.</S.Warning>
                )}
                </S.BorderWrapper>
                <S.BorderWrapper>
                <S.Border>
                  <S.InputWrapper>
                    <S.Label>
                      <S.H7>닉네임</S.H7>
                      <S.Input type='text' placeholder='닉네임을 입력하세요.'
                      {...register("userNickName")}
                      />
                    </S.Label>
                  </S.InputWrapper>
                </S.Border>
              </S.BorderWrapper>
            </S.InputContainer>
          <S.JoinButton $active={isValid}>
            <S.H4 disabled={isSubmitting}>회원가입</S.H4>
          </S.JoinButton>
        </S.Wrapper>
      </S.Container>
      </form>

    {showAlert && (
      <InfoAlert
        src="/assets/images/icon/check.png"
        message={alertMessage}
        handleOk={() => setShowAlert(false)}
      />
    )}

      {isModalOpen && <JoinCompleteModal onClose={() => {setIsModalOpen(false)}} />}
    </div>
  );
};

export default SocialJoin;