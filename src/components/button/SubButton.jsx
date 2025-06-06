import BasicButton from './BasicButton'; 

// 저장, 수정, 목록 버튼
const SubButton = (props) => {
  return (
    <BasicButton
      {...props}
      $variant="gray100"
      $color="primary"
      $fontSize="h5"
      $fontWeight="h5"
      $borderColor="primary"
      $size="large"
      $shape="large"
      >
      {props.children}
    </BasicButton>

  );
};

export default SubButton;
