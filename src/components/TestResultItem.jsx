import React from "react";
import {
  deleteTestResult,
  updateTestResultVisibility,
} from "../api/testResults";

const mbtiDescriptions = {
  ISTJ: "책임감 있고 신뢰할 수 있으며, 전통적이고 실용적인 사고방식을 가지고 있습니다.",
  ISFJ: "헌신적이고 따뜻하며, 사람들의 필요를 잘 이해하고 도와줍니다.",
  INFJ: "이상적이며 통찰력이 뛰어나고, 사람들과의 깊은 관계를 중요시합니다.",
  INTJ: "독립적이고 전략적이며, 높은 목표를 설정하고 달성하는 데 집중합니다.",
  ISTP: "문제 해결 능력이 뛰어나고, 상황에 맞게 유연하게 대처합니다.",
  ISFP: "예술적 감각이 뛰어나며, 감정 표현을 중요시합니다.",
  INFP: "이상적이고 창의적이며, 내면의 가치를 중요시합니다.",
  INTP: "논리적이고 분석적이며, 지적 호기심이 강합니다.",
  ESTP: "활동적이고 실용적이며, 순간의 기회를 포착하는 능력이 뛰어납니다.",
  ESFP: "사교적이고 쾌활하며, 현재의 순간을 즐깁니다.",
  ENFP: "열정적이고 창의적이며, 새로운 가능성을 탐구합니다.",
  ENTP: "논쟁을 즐기며, 창의적인 문제 해결 능력을 가지고 있습니다.",
  ESTJ: "체계적이고 효율적이며, 목표 달성에 집중합니다.",
  ESFJ: "사교적이고 따뜻하며, 다른 사람들의 감정을 잘 이해합니다.",
  ENFJ: "카리스마 있고 공감 능력이 뛰어나며, 사람들을 이끄는 데 탁월합니다.",
  ENTJ: "결단력 있고 목표 지향적이며, 리더십을 발휘합니다.",
};

const TestResultItem = ({ result, user, onUpdate, onDelete }) => {
  const isOwner = result.userId === user.id;

  const formattedDate = new Date(result.date).toLocaleString();
  const description =
    mbtiDescriptions[result.result] || "MBTI 유형 설명을 찾을 수 없습니다.";

  const handleToggleVisibility = async () => {
    try {
      const newVisibility = !result.visibility;
      await updateTestResultVisibility(result.id, newVisibility);
      onUpdate(); 
    } catch (error) {
      console.error("Visibility toggle failed:", error);
      alert("Visibility toggle failed. Please try again.");
    }
  };

  const handleDelete = async () => {
    try {
      await deleteTestResult(result.id);
      onDelete(); 

      alert("삭제되었습니다!");
    } catch (error) {
      console.error("Delete failed:", error);
      alert("Delete failed. Please try again.");
    }
  };

  return (
    <div>
      <div >
        <h4 >{result.nickname}</h4>
        <p >{formattedDate}</p>
      </div>
      <p >{result.result}</p>
      <p >{description}</p>
      {isOwner && (
        <div >
          <button
            onClick={handleToggleVisibility}
            
          >
            {result.visibility ? "비공개로 전환" : "공개로 전환"}
          </button>
          <button
            onClick={handleDelete}
            
          >
            삭제
          </button>
        </div>
      )}
    </div>
  );
};

export default TestResultItem;
