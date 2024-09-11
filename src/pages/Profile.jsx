import { getUserProfile, updateProfile } from "../api/auth"; // 프로필 관련 API 함수들
import { useMutation, useQuery } from "@tanstack/react-query";

const Profile = () => {
  const {
    data: userProfile,
    isLoading,
    error,
  } = useQuery("userProfile", getUserProfile);

  const updateMutation = useMutation((formData) => updateProfile(formData), {
    onSuccess: () => {
      alert("프로필이 업데이트되었습니다.");
    },
    onError: (error) => {
      alert(`업데이트 실패: ${error.message}`);
    },
  });

  const handleUpdateProfile = (formData) => {
    updateMutation.mutate(formData);
  };

  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>에러 발생: {error.message}</div>;

  return (
    <div>
      <h2>프로필</h2>
      <p>아이디: {userProfile.id}</p>
      <p>닉네임: {userProfile.nickname}</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleUpdateProfile({ nickname: e.target.nickname.value });
        }}
      >
        <input
          type="text"
          name="nickname"
          defaultValue={userProfile.nickname}
        />
        <button type="submit">업데이트</button>
      </form>
    </div>
  );
};

export default Profile;
